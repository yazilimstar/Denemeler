// let i = 1;
// let output = "";
// while (i <= 5) {
//     output += "Sayı : " + i + " <br>";
//     i++;
// }
// document.getElementById('output').innerHTML = output;


// let i = 1 ;
// let output = "";
// do {
//     output += "Sayı : " + i + "<br>" ;
//     i++;
// }
// while (i <= 5 ) ;
// document.getElementById("output").innerHTML = output ;


// let output = "" ;
// for (let i = 1 ; i <= 5 ; i ++) {
//     output += "Sayı : " + i + "<br>" ; }
// document.getElementById("output").innerHTML = output ;


//  let obj = { ad: "Alper " , yas: 17 , meslek: "Software Cracker"} ;
//  let obj2 = { ad: "Furkan " , yas: 15 , meslek: "Observer"} ;
//  let obj3 = { ad: "Alper" , yas: 18 , meslek: "Vasıflı İşçi"} ;
//  let output = "" ; 
//  for ( let keyf in obj) {
//     output += key + ":" + obj[key] + "<br>" ;
//  }
//  document.getElementById("output").innerHTML = output ;


// let arr = [ 1, 2, 3 , 4 , 51] ;
// let output = "" ;
// for ( let value of arr) { 

//         output += "Değer" + value + "<br>" ;

// }
// document.getElementById('output').innerHTML = output ;


// let output = "";
// for (let i = 1; i <= 10; i++) { if (i === 6) break; output += "Sayı:" + i + "<br>"; }
// document.getElementById("output").innerHTML = output;


// let output = " " ;
// for ( let i = 1 ; i <= 10 ; i++) {
//     if ( i == 6) continue ; 
//     output += "Sayı : " + i + "<br>" ;
// }
// document.getElementById('output').innerHTML = output ;



function EvenNumbers() {
    let n =prompt ("Bir sayı giriniz :") ;
    for ( let i = 0; i <=(n % 2 == 0 ? n : n - 1 ); i += 2) { 
        console.log(i) ;
    }
}





























































































































