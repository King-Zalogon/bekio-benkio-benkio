

function sumar ( a, b) {
    return a + b;

}

let total = sumar ( 10, 20)

console.log ( 'Total: ' + total );

// Funciones

function imprimitTabla (base, limite) {

    for ( let i = 1; i <= limite; i++) {
    
            let restulado = base * i;
    
    console.log ( base + ' x ' + i + ' = ' + restulado);
    
    }



} // Fin

imprimitTabla (10, 5);
imprimitTabla (3, 7);


// Funciones

function calcularNota (nota) {

    if (nota >=90){ notaLetra = 'A'; 
    } else if (nota >= 80) { notaLetra = 'B'; 
    } else if (nota >= 70) { notaLetra = 'C';
    } else if (nota >= 60) { notaLetra = 'D';
    } else { notaLetra = 'F';
    } console.log (nota + ' es igual a ' + notaLetra);

} // Fin

calcularNota (100);
calcularNota (80);
calcularNota (59); 