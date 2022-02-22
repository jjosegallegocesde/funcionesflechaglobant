//FUNCION TRADICIONAL
/*
function calcularDistancia(x1,x2,y1,y2){
    return (Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2)))
}*/

//FUNCION DE FLECHA

let calcularDistancia=(x1,x2,y1,y2)=>(Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2)))

   

let distancia1=calcularDistancia(0,20,0,-50)
console.log(`La distancia calculada es de ${distancia1.toFixed(2)} UA`)

