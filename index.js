function convert(form) {
    var value = parseInt(form.temperature.value);
    var unit = form.unit.value;
    var celsius;
    switch (unit) {
        case 'Celsius':
            celsius = value;
            break;
        case 'Kelvin':
            celsius = value - 273.15;
            break;
        case 'Fahrenheit':
            celsius = (value - 32) * 5 / 9;
            break;
        default:
            document.getElementById('result').innerHTML = "Invalid unit";
            break;
    }
    document.getElementById('result').innerHTML = "Temperature in Celsius: " + celsius 
                                                + "<br>Temperature in Fahrenheit: " + (celsius * 9 / 5) + 32 
                                                + "<br>Temperature in Kelvin: " + (celsius + 273.15);
}