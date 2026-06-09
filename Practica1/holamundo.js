// js del lado del servidor 

console.log ("Hola Mundo JS con Node")

//calculo
let edad1= 12
let edad2= 34

console.log("Edad promedio")
console.log((edad1 + edad2)/2)

//medir el tiempo de proceso 
console.time("miProceso")

for(let i =0; i < 1000000; i++){}

console.timeEnd("miProceso")


//Objetos tippo tabla 
let usuarios=[
    {nombre:"Daniela", edad: 21},
    {nombre:"Lisset", edad: 21},
];

console.table(usuarios)