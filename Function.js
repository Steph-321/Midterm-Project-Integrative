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

function LongerWord(button){
    let n = parseInt(prompt("Enter how many words you want to input: "));
    let a = [n];
    let current = ""
    for(let j=0;j<n;j++){
        a[j] = prompt("Enter Word " + (j+1) + ": ").trim();
    }
    for(let i=0;i<n;i++){
        if(a[i].length>current.length){
            current = a[i];
        }
    }
    alert("The longer word is: " + current);
}

function Birthstone(button){
    let birthmonth = prompt("Enter your birthmonth: ").trim().toLowerCase();
    if(!isNaN(birthmonth)){
        alert("Invalid Input!")
    }else{
        switch(birthmonth){
            case "january":
                alert("Your birthstone is Garnet!");
                break;
            case "february":
                alert("Your birthstone is Amethyst!");
                break;
            case "march":
                alert("Your birthstone is Aquamarine!");
                break;
            case "april":
                alert("Your birthstone is Diamond!");
                break;
            case "may":
                alert("Your birthstone is Emerald!");
                break;
            case "june":
                alert("Your birthstone is Alexandrite & Pearl!");
                break;
            case "july":
                alert("Your birthstone is Ruby!");
                break;
            case "august":
                alert("Your birthstone is Peridot!");
                break;
            case "september":
                alert("Your birthstone is Sapphire!");
                break;
            case "october":
                alert("Your birthstone is Opal & Tourmaline!");
                break;
            case "november":
                alert("Your birthstone is Citrine & Topaz!");
                break;
            case "december":
                alert("Your birthstone is Blue Zircon, Turquoise, & Tanzanite!");
                break;
            
        }
    }
}

function MathOperations(button){
    let num1 = parseInt(prompt("Enter number (1): "));
    let num2 = parseInt(prompt("Enter number (2): "));
    let operator = prompt("Enter Math Operator/Operation: ").trim().toUpperCase();
    switch(operator){
        case "+":
        case "ADDITION":
            alert("Sum: " + (num1+num2));
            break;
        case "-":
        case "SUBTRACTION":
            alert("Sum: " + (num1-num2));
            break;
        case "*":
        case "MULTIPLICATION":
            alert("Sum: " + (num1*num2));
            break;
        case "/":
        case "DIVISION":
            alert("Sum: " + (num1/num2));
            break;
        
    }
}