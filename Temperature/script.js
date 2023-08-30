document.getElementById('convertButton').addEventListener('click', convertTemperature);

function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    const unitSelect = document.getElementById('unitSelect').value;
    let convertedTemperature = '';

    if (isNaN(temperatureInput)) {
        document.getElementById('resultArea').textContent = 'Please enter a valid temperature.';
        return;
    }

    if (unitSelect === 'celsius') {
        convertedTemperature = temperatureInput * 9/5 + 32;
    } else if (unitSelect === 'fahrenheit') {
        convertedTemperature = (temperatureInput - 32) * 5/9;
    } else if (unitSelect === 'kelvin') {
        convertedTemperature = temperatureInput + 273.15;
    }

    document.getElementById('resultArea').textContent = `Converted temperature: ${convertedTemperature.toFixed(2)} ${unitSelect}`;
}
