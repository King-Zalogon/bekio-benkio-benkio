

// for ( let i = 1; i <= 5; i ++) { 
//     console.log ( i + ' ' + (i*2) + ' ' + i*3 + ' ' + i*4 +' ' + i*5 )
// }


for ( let i = 1; i <= 5; i++) { 

    let renglon = '';
    
    for (let j = 1; j <= 5; j++) {

        renglon += `${ j * i }   `;
    }

    console.log ( renglon )



}
