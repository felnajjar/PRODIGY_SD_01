const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
var value, unit;
readline.question(`Input temperature value? `, ans => {
    value = parseInt(ans);

    readline.question(`Input temperature unit (C,K,F)? `, ans => {
        unit = ans.toLowerCase();
        var celsius;
        switch (unit) {
            case 'c':
                celsius = value;
                break;
            case 'k':
                celsius = value - 273.15;
                break;
            case 'f':
                celsius = (value - 32) * 5 / 9;
                break;
            default:
                console.log("Invalid input");
                break;
        }

        console.log(`Temperature in celsius: `,celsius);
        console.log(`Temperature in fahrenheit: `,(celsius * 9/5)+32);
        console.log(`Temperature in Kelvin: `,celsius +273.15);

        

        readline.close();
    });
});



