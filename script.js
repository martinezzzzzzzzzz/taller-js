let edad = prompt("Ingrese su edad: "); 
if (edad >=18) {
    console.log ("Esres mayor de edad ")

}

else {
    console.log ("Eres menor de edad ")
}

let numeroUsuario = prompt ("Ingrese su número: ")
if (numeroUsuario >=0) {
    console.log("El número es positivo ")
}
else { 
    console.log ("El número es negativo ")
}

let numeroUsuarioParUimpar = prompt ("Ingese el número: ")
if (numeroUsuarioParUimpar % 2 == 0 ) {
    console.log ("El número es par ")
}
else { 
    console.log ("El número es impar ")

}

let totalCompra = prompt ("Ingrese el tottl de su compra: ")
if (totalCompra > 100) {
    let descuento = totalCompra * 0.1 
    totalCompra = totalCompra - descuento
    console.log ("TIenes un descuento del 10% y su total es: " + totalCompra)
}

else{ 
    console.log ("No tines descuento ")
}

let numero1 = prompt ("Ingrese el primer número: ")
let numero2 = prompt ("Ingrese el segundo número: ")
if (numero1 < numero2) { 
    console.log ("El primer número es mayor que el segundo ")

}
else if (numero1 < numero2) { 
    console.log ("El segundo número es mayor que el segundo ")

}

let ClasifiacionDeEdad = prompt ("Ingrese su edad: ")
if (ClasifiacionDeEdad >= 0 && ClasifiacionDeEdad <= 12) {
    console.log ("Eres un niño ")
}
else if (ClasifiacionDeEdad > 12 && ClasifiacionDeEdad < 17) {
    console.log ("Eres un adolescente")
}
else if (ClasifiacionDeEdad > 18 && ClasifiacionDeEdad < 64){
    console.log ("Eres un adulto ")

}
else if (ClasifiacionDeEdad >= 64) {
    console.log ("Eres un adulto mayor ")
}
let nota = prompt("Ingrese una nota entre 0 y 100: ")
if (nota >= 90 && nota <= 100) {
    console.log ("!EXECELENTE¡")
}

else if (nota >= 70 && nota <= 89){
    console.log ("Aprobado ")
}
else if (nota >= 50 && nota <= 69){
    console.log ("Regular ")
}
else if (nota >= 0 && nota <= 49){
    console.log ("Regular ")
}

let OpcioMenu = prompt ("Elija una opción de menú: 1- Pizza 2- Hamburguesa 3- Tacos");

switch (OpcioMenu) { 
    case 1: 
    console.log ("Has elegido pizza ")
    break; 
    case 2: 
    console.log ("Has elegido hamburguesa ")
    break; 
    case 3: 
    console.log ("Has elegido tacos ")
    
    default: 
    console.log ("Opcón no valida. ")
}

let LadoTriangulo = ("Ingrese el primer lado del triangulo: ")
let LadoTriangulo2 = ("Ingrese el segundo lado del triangulo: ")
let LadoTriangulo3 = ("Ingrese el tercer lado del triangulo: ")
if(LadoTriangulo == LadoTriangulo2 == LadoTriangulo3){
    console.log("El triángulo es equilátero ")

}
else if (LadoTriangulo === LadoTriangulo2 || LadoTriangulo2 === LadoTriangulo3 || LadoTriangulo3 === LadoTriangulo){
    console.log("El triángulo es isósceles ")
}

else{
    console.log("El triángulo es escaleno ")
}

let adivinaNumero = prompt("Adivina un número entre 1 y 10: ")
let numeroAleatorio = Math.floor(Math.random() * 10) +1 
if (adivinaNumero == numeroAleatorio) {
    console.log("Has ganado!")
}

else {
    console.log("Has perdido! El número era " + numeroAleatorio)
}

let PrecioBase = prompt ("Ingrese el precio base del producto: ")
if (PrecioBase > 500) {
    let descuento = PrecioBase * 0.15
    console.log ("El precio del producto con descuento es: " + (PrecioBase - descuento))
}
if(PrecioBase >= 300 && PrecioBase < 500){
    let descuento = PrecioBase * 0.10
    console.log ("El precio del producto con descuento es: " + (PrecioBase - descuento))
}
else {
    let descuento = PrecioBase *0.5 
    console.log ("El precio del producto con descuento es: " + (PrecioBase - descuento))
}