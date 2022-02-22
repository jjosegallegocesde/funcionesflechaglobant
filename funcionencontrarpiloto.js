/*function encontrarPiloto(codigo){

    return (codigo.split(":"))

}*/
let encontrarPiloto=codigo=>codigo.split(":")


let piloto=encontrarPiloto("ABC1234:Jomar")
console.log("el piloto es: "+piloto[1])

