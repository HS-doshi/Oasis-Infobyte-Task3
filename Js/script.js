console.log('Welcome to 🌡️ Temperature Converter - OIBSIP Task');

const tempLoad = () => {
    let fa = document.getElementById('fa');
    fa.innerHTML = "&#xf2cb";
    fa.style.color = "#ffa41b";

    setTimeout(() => {
        fa.innerHTML = "&#xf2ca;";
        fa.style.color = "#ffa41b";
    }, 1000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c9;";
    }, 2000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c8;";
    }, 3000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c7;";
        fa.style.color = "#ff5151";
    }, 4000)
}

setInterval(() => {
    fa.style.color = "#ffa41b";
    tempLoad();
}, 5000);


tempLoad();

const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    // console.log(numberTemp);

    const tempSelected = document.querySelector('#temp_diff');
    const valeTemp = temp_diff.options[tempSelected.selectedIndex].value;
    // console.log(valeTemp);


    // Convert temperature from Celcius to Fahrenheit
    const celTOfah = (cel) => {
        let fahrenheit = (cel * (9 / 5) + 32);
        return fahrenheit;
    }

    // Convert temperature from Fahrenheit to Celsius
    const fahTOcel = (fehr) => {
        let celsius = ((fehr - 32) * 5 / 9);
        return celsius;
    }

    const kelTocel = (kel) => {
        let kelvin = ((kel - 273.15));
        return kelvin;
    }
    let result;

    if (valeTemp == "cel") {
        result = celTOfah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Fahrenheit`;
    } else if (valeTemp == "kel") {
        result = kelTocel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Celsius`;
    }
    else {
        result = fahTOcel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Celsius`;
    }

    // if (valeTemp == "cel") {
    //     result = celTOfah(numberTemp);
    //     document.getElementById('resultContainer').innerHTML = `= ${result}°Fahrenheit`;
    // } else if (valeTemp == "fehr") {
    //     result = fahTOcel(numberTemp); // Corrected function name
    //     document.getElementById('resultContainer').innerHTML = `= ${result}°Celsius`;
    // } else {
    //     result = kelTocel(numberTemp);
    //     document.getElementById('resultContainer').innerHTML = `= ${result}°Celsius`;
    // }


    setTimeout(() => {
        window.location.reload();
    }, 3500);
}

