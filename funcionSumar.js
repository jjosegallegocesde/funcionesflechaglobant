//funcion que sume 2 numeros
//funcion con 2 parametros(numero1 y numero2)
/*function sumar(numero1,numero2){

    let suma=numero1+numero2;
    return(`${numero1}+${numero2}=${suma}`)

}*/

//Para utilizar una funcion
//la debemos invocar o llamar
/*let resultado=sumar(5,5)
console.log(resultado)*/

//FUNCION DE FLECHA
let sumar=(numero1,numero2)=>`${numero1}+${numero2}=${numero1+numero2}`
let resultado=sumar(5,5)
console.log(resultado)