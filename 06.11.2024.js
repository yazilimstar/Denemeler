// var obj = new Object() ;
// var obj2 = {} ;
// var firm = {
//     Name : "Star Inc" ,
//     Address: "Biryer Caddesi 5" ,
//     Tel : 950214524
// } ;
// alert(firm.Name) ;
// alert(firm.Address) ;
// alert(firm.tel) ;

// var cat = {
//     Name: "Muhsin" ,
//     Age : 7
// } ;
// alert(cat.Name) ;
// alert(cat.Age) ;
// delete cat.Name ;
// delete cat.Age ;
// alert(cat.Name) ;
// alert(cat.Age) ;

// var obj = {
//     Name : "Alperoviç"
// } ;
// if ("Age" in obj) {
//     alert("Mevcut") ;

// }
// else {
//     alert ("Mevcut değil") ;
// }


// var rect = {
//     x : 20 ,
//     y : 36 ,
//     endX: 10 ,
//     endY: 80 
// } ;
// for ( var tempProperty in rect) {
//     alert(tempProperty) ; // x , y , endX , endY
//     alert(rect[tempProperty]) ; // 0 , 0 , 10 , 10
// }


// var arrayName = new Array() ;
// var arrayName2 = new Array(10) ;
// var arrayName3 = new Array(1, 2 , 3) ;
// arrayName[0] = 10 ;
// arrayName[1] = 20 ;
// alert(arrayName) ;
// alert(arrayName2) ;
// alert(arrayName3) ;



// var arr = new Array(1 , 2 , 3) ;
// alert(arr.length) ;
// arr.push(4) ;
// alert(arr) ;
// arr.pop() ;
// alert(arr) ; 

var firm = {
    Name: "Star Inc",
    Address: "Biryer caddesi 5"
};
var employees = ["Alice", "Bob", "Charlie"];
var output = document.getElementById("output");
output.innerHtml += "<h2> Firma Bilgileri</h2>";
output.innerHtml += "<p> Firma Adı : " + firm.Name + "</p>";
output.innerHtml += "<p> Firma Adresi: " + firm.Address + "</p>";
output.innerHtml += "<h2> Çalışanlar</h2> ";
output.innerHtml += "<ul>";
for (var i = 0; i < employees.length; i++) {
    output.innerHTML += "<li>" + employees[i] + "<li>";
}
    output.innerHTML += "</ul>";
    employees.push("David");
    output.innerHTML +=
        "<p> Yeni Çalışan : " + employees[employees.length - 1] + "</p>";
    employees.sort();
    output.innerHTML += "<h2>Sıralanmış Çalışanlar</h2>";
    output.innerHTML += "<ul>";
    for (var i = 0; i < employees.length; i++) {
        output.innerHTML += "<li>" + employees[i] + "</li>"
            ;
    }

output.innerHTML += "</ul>";
