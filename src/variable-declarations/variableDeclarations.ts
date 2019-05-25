// All interfaces for modules:
interface LabeledValue {
    label: string;
}

interface SquareConfig {
    color?: string;
    width?: number;
}

interface Point {
    readonly x: number;
    readonly y: number;
}

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
    // Main function modules:
    variableCapturingQuirks();
    //type C = { a: string, b?: number }
    //funcDeclaration({ a: 'string for a!', b: 450 });
    timeFrame += 2200;
    setTimeout(() => {
        funcDeclarationDefault({ a: 'a_string_1' });
        funcDeclarationDefault();
        spreadFeatureTesting();
    }, timeFrame);
    // For testing interfaces initialization:
    timeFrame += 3000
    setTimeout(() => {
        console.log('\n5. Using interfaces for initialization:');
        let myObj: any = { size: 10, label: 'Size 10 Object' };
        console.log('5.1 Testing assigning data to the object without interface:');
        objectAssigning(myObj);
        console.log('5.2 Testing assigning data to the object with interface:');
        objectAssigningInterface(myObj);
        console.log('5.3 Testing assigning optional properties to the object with interface:');
        let mySquare: any = createSquare({color: 'black'});
        console.log(`First square with color: ${mySquare.color} and area: ${mySquare.area}`);
        mySquare = createSquare({width: 34});
        console.log(`Second square with color: ${mySquare.color} and area: ${mySquare.area}`);
        mySquare = createSquare({ width: 57.56, color: 'hsl(339, 75%, 52%)' });
        console.log(`Third square with color: ${mySquare.color} and area: ${mySquare.area}`);
        console.log('5.4 Testing assigning readonly data to the object with interface:');
        let p1: Point = { x: 10, y: 20 };
        console.log(`Point 1 coordinates x: ${p1.x} and y: ${p1.y}`);
        //p1.x = 23;
        let a: number[] = [3.45, 6.545, 2.34, 1.33];
        console.log('Array a[] default data:');
        console.log(a);
        let ro: ReadonlyArray<number> = a;
        a = null;
        a = ro as number[];
    }, timeFrame)
    timeFrame += 2000;
    setTimeout(() => {
        displayCopyright();
    }, timeFrame)
    //funcDeclarationDefault({});
}

export function objectAssigning(labeledObj: { label: string }): void {
    console.log(labeledObj.label);
}

export function objectAssigningInterface(labeledObj: LabeledValue): void {
    console.log(labeledObj.label);
}

export function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare: any = {color: 'white', area: 100};
    newSquare.color = (config.color) ? config.color : 'white';
    newSquare.area = (config.width) ? config.width * config.width : 100;
    return newSquare;
}

export function variableCapturingQuirks(): void {
    console.log('1. Variable capturing quirk:\n');
    setTimeout(function() { IIFE(); }, 1100);
    for (var i = 0; i < 10; i++) {
        setTimeout(function() {
            console.log(`${i}. time: ${100*i}[ms]`);
        }, 100 * i);
    }
}

export function IIFE(): void {
    console.log('\n2. Using IIFE for solving the problem with iteration variable:\n');
    for (var i = 0; i < 10; i++) {
        (function(i) {
            setTimeout(function() {
                console.log(`${i}. time: ${100*i}[ms]`);
            }, 100 * i);
        })(i);
    }
}

/*
export function funcDeclaration({ a, b }: C): void {
    setTimeout(() => {
        console.log('\n3. Using function declaration for testing default assignment of data:');
        console.log(`a = ${a}`);
        (b !== undefined) ? console.log(`b = ${b}`) : console.log('No data!');
    }, 1100);
}
*/

export function funcDeclarationDefault({ a, b = 0 } = { a: "" }): void {
    console.log('\n3. Using function declaration with default data for testing assignment data:');
    console.log('\n3. Using function declaration with default data for testing assignment data:');
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
}

class C {
    a = 100;
    b = 200;
    c = 300;
    m1(): void {
        console.log('This is a method m1');
    };
    m2(): void {
        console.log('This is a method m2');
    };
}

export function spreadFeatureTesting(): void {
    console.log('\n4. Using spreading element on the array:');
    let first: number[] = [45, 67, 90];
    let second: number[] = [93, 95, 98];
    let third: number[] = [132, 163, 195];
    let all: number[] = [0, 45, ...first, ...second, 105, 109, ...third, 500];
    console.log('4.1 Spreading arrays:');
    console.log(all);
    console.log('4.2 Spreading objects:');
    let defaults: {} = { food: 'spicy', price: '$$', ambiance: 'noisy' };
    let search: {} = { food: 'rich', ...defaults };
    console.log(search);
    let c = new C();
    let clone = { ...c };
    console.log('4.3 Complicated destructuring objects:');
    console.log(`clone.a = ${clone.a}`);
    console.log(`clone.b = ${clone.c}`);
    //clone.m2();
}

export function displayCopyright(): void {
    console.log('\n-----------------------------------------')
    console.log('Copyright 2019 Vladimir Pavlov. All Rights Reserved');
    console.log('-----------------------------------------');
}