
class Carro {

    constructor (marca1, tipoA, puertas) {

        this.marca = marca1;
        this.tipo = tipoA;
        this.puertas = puertas;
        this.creadoEn = 'Hoy';
        this.encendido = false;
        this.gasolina = 100;

    }

    encenderCarro () {
       if ( this.encendido ) { 
           console.error ( ' BOOM! ');
       } else {
        this.encendido = true;

        console.log ('Carro encendido');
    }

        return this;
    }

    realizarViaje (consumo) {
        if (!this.encendido) return console.log ('Carro apagado');

        if (consumo > this.gasolina) return console.log ('Gasolina insuficiente: ' + this.gasolina);
        
        this.gasolina = this.gasolina - consumo;
        return 'Le queda ' + this.gasolina;
        
    }

}

let carro = new Carro ( 'Mazda', 'Sedan', 2);

console.log (carro);

let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
let mayor = -999 ;

for (let i=0; i <= numeros.length; i++) {
    if (numeros [i] >= mayor ) {
        mayor = numeros [i];
    }
}

console.log ( 'El número mayor es:  ' + mayor)


for ( let i = 1; i <= 5; i++) { 

    let renglon = '';
    
    for (let j = 1; j <= 5; j++) {

        renglon += `${ j * i }   `;
    }

    console.log ( renglon )



}

function max (a, b, c) {
    let mayor;

    if ( a < b ) {
        if ( b < c) { 
            mayor = c; 
        } 
        else { 
            mayor = b
        }
    }   else if (a > c) { 
            mayor = a; 
        }
        else { 
            mayor = c; 
        }
    return mayor;
}

let mayor = max ( 1, 3, 2);

console.log(mayor);

