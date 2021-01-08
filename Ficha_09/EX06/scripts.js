function CelsiusToFahrenheit(){
    let celsto = prompt("Temperatura em Celsius:")
    let fahrento = celsto*9/5+32
    console.log(celsto+"°C is "+fahrento+"°F")
}
function FarhrenheitToCelsius(){
    let fahrento = prompt("Temperatura em Celsius:")
    let celsto = (fahrento-32)*5/9
    console.log(fahrento+"°F is "+celsto+"°C")
}

CelsiusToFahrenheit()
FarhrenheitToCelsius()