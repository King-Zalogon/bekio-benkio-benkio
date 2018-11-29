//  1L 0.453592kg - 1k 2.20462

let libras = 160;
let kg = libras * 0.453592 // ????;

kg *= 100; // es lo mismo que escribir kg = kg * 100;
kg = Math.round (kg); // Para redondear
kg /= 100;

console.log (kg);

//  1 km = 0.62 mi

let km = 20;
let mi = km * 0.62;

console.log (mi);


let base = 10;
let altura = 5;

let area= (base * altura) / 2;

console.log (area);

let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
let mayor = -999 ;

for (let i=0; i <= numeros.length; i++) {
    if (numeros [i] >= mayor ) {
        mayor = numeros [i];
    }
}

console.log ( 'El número mayor es:  ' + mayor)


let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5, 0, 'a' ];



for (let i=0; i < numeros.length; i++) {
    let numero = numeros [i];
    if (numero % 2 === 0) {
        console.log (numero + ' es un número par')
    
    } else if (numero % 2 === 1) {
        console.log (numero + ' es un número impar')
    } else { 
            console.log ('No es un número par o impar')
    }

}
