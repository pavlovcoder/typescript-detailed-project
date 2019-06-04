// All interfaces for modules:
interface SquareConfig {
    color?: string;
    width?: number;
}

interface ClockContructor {
    new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
    tick(): void;
}

interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

export function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function() { };
    return counter;
}

export function createClock(ctor: ClockContructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {  }
    tick() {
        console.log('beep beep');
    }
}

class AnalogClock implements ClockInterface {
    constructor(h: number, minute: number) {  }
    tick() {
        console.log('tick tock');
    }
}

/*
class Clock implements ClockContructor {
    public currentTime: Date;
    constructor(h: number, m: number);
}
*/

export function run(): void {
    // Header section:
    console.log('-----------------------------------------');
    console.log('TypeScript CLI Application || Documentation - [Part-2] - Variable Declarations');
    console.log('-----------------------------------------\n');
    console.log('Task:');
    console.log('-----------------------------------------');
    console.log('Write a TypeScript CLI Appication for testing all available code syntaxes, situations and examples of variable declarations.\n');
    console.log('Solution:');
    console.log('-----------------------------------------');

    // Time parameter for time execution of all modules:
    let timeFrame: number = 0;
    setTimeout(() => {
        let date: Date = new Date();
        let digital: ClockInterface = createClock(DigitalClock, date.getHours(), date.getMinutes());
        let analog: ClockInterface = createClock(DigitalClock, date.getHours(), date.getMinutes());
        const Clock: ClockContructor = class Clock implements ClockInterface {
            constructor(h: number, m: number) {}
            tick() {
                console.log('beep beep');
            }
        }
        console.log('Clock declaration using class expression:');
        console.log(Clock);
        let square: Square = <Square>{};
        square.color = 'blue';
        square.sideLength = 10;
        square.penWidth = 5.0;
        console.log('Square:');
        console.log(square);
        let c: Counter = getCounter();
        c(10);
        c.reset();
        c.interval = 5.0;
        console.log('Counter data:');
        console.log(c);
    }, timeFrame);
    timeFrame += 2000;
    setTimeout(() => {
        displayCopyright();
    }, timeFrame);
}

export function displayCopyright(): void {
    console.log('\n-----------------------------------------')
    console.log('Copyright 2019 Vladimir Pavlov. All Rights Reserved');
    console.log('-----------------------------------------');
}