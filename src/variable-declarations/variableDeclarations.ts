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

    // Main function modules:
    variableCapturingQuirks();
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
                if (i == 9)
                    displayCopyright();
            }, 100 * i);
        })(i);
    }
}

export function displayCopyright(): void {
    console.log('\n-----------------------------------------')
    console.log('Copyright 2019 Vladimir Pavlov. All Rights Reserved');
    console.log('-----------------------------------------');
}