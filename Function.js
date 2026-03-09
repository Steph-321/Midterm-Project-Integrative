function Acceleration(button){
    let initialVelocity = parseFloat(prompt("Enter Initial Velocity: "));
    let finalVelocity = parseFloat(prompt("Enter Final Velocity: "));
    let time = parseFloat(prompt("Enter time: "));
    if(isNaN(initialVelocity)){
        alert("Invalid Input!");
        return
    }else if(isNaN(finalVelocity)){
        alert("Invalid Input!");
        return
    }else if(isNaN(time)){
        alert("Invalid Input!");
        return
    }else{
        alert("Acceleration is " + ((finalVelocity-initialVelocity)/time).toFixed(2));
    }
}

function TempConverter(button){
    let celsius = parseFloat(prompt("Enter Celsius Reading: "));
    alert("The temperature in Fahrenheit is: "+ ((celsius * 1.8)+32).toFixed(2) + "°F");
}