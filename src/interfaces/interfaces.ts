// All interfaces for modules:
interface SquareConfig {
    color?: string;
    width?: number;
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
    setTimeout(() => {
        console.log('\n1. Interface initialization bug:')
        let mySquare: any = createSquare({ color: "red", width: 100 });
    }, timeFrame);
    timeFrame += 2000;
    setTimeout(() => {
        displayCopyright();
    }, timeFrame);
}

export function createSquare(config: SquareConfig): { color: string, area: number } {
    console.log(`You created a square with the color: ${color} and area: ${area}`);
}

export function displayCopyright(): void {
    console.log('\n-----------------------------------------')
    console.log('Copyright 2019 Vladimir Pavlov. All Rights Reserved');
    console.log('-----------------------------------------');
}