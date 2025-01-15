// function logArguments() {
//     for (let i = 0; i < arguments.length; i++) {
//         console.log(`Argument ${i + 1 } : ${arguments[i]}`);

//     }
// }
// logArguments(1, "test ", true);


// const user = {
//     name : "Ahmet", 
//     age : 28 ,
//     Dıgumyeri : "Muş",
//     Meslek : "Yazılım" ,
//     sayHello : function() {
//         return `Merhaba adım: ${this.name}  yaşım: ${this.age}` ;

//     }
//     furkanyildiz:function() {
//         return `Merhaba /n Doğum Yerim: ${this.dogumyeri} Mesleğim: ${this.meslegim}`
//     }
// } ;
// document.getElementById("user-info").innerText = user.sayHello() ;
// document.getElementById("user-info").innerText = user.furkanyildiz


// var globalVar = "Global Variable" ;
// function showVariable() {
//     let localVar = "Local Variable" ;
//     document.getElementById("result").innerText = globalVar;
//     document.getElementById("result2").innerText = localVar ; 
// }
// showVariable() ;
// console.log(localVar) ; // Error: localVar is not defined 


// var globalVar = "T.C KİMLİK NO : 4338738496" ; 
// function showVariable() {
//     let localVar = "SERİ NO: A1234599" ;
//     document.getElementById("TC.KİMLİK.NO").innerText = globalVar ; 
//     document.getElementById("SERİ.NO").innerText = localVar ; 
// }
// showVariable() ;


// function factorial (n) {
//     if (n == 1 ) return 1 ; 
//     return n * factorial(n - 1) ; 

// }
// console.log(factorial(5)) ; //120


// function stringFrom(...args) {
//     return args.join(" ");
// }
// function showString() {
//     document.getElementById("result1").innerText = stringFrom("Bu", "Bir", "Örnek", "Cümledir");
// }

// function findMin(...args) {
//     return Math.min(...args) ;

// }
// function showMin() {
//     document.getElementById("result2").innerText = findMin(10 , 5 , 8 , 3 , 15) ;
// }
// function countNumericArgs(...args) {
//     return args.filter(arg => typeof arg === "number").length;
// }

// function countNumbers() {
//     document.getElementById("result3").innerText = countNumericArgs(
//         10,
//         "abc",
//         7,
//         true,
//         5
//     );
// }


function mean(...args) {
    const numbers = args.filter(arg => typeof arg === "number") ;
    const sum = numbers.reduce((acc , num) => acc + num , 0) ; 
    return numbers.length ? sum / numbers.length : 0 ;
}
function showMean() {
    document.getElementById("result4").innerText = mean(10 , "abc" , 7 , 3) ; 
}



