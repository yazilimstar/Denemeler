// const person = {
//     firstname: "EMRE" ,
//     lastName : "Başgan" ,
//     age : 17 ,
//     isStudent: true 
// } ;
// document.getElementById("json-container").textContent = JSON.stringify(person , null , 2 ) ;



// function convertToJSON() {
//     const name = document.getElementById("name").value ;
//     const age = document.getElementById("age").value ;
//     const city = document.getElementById("city").value ;
//     const user = {
//         name ,
//         age: Number(age) ,
//         city 
//     } ;
//     document.getElementById("result").textContent=JSON.stringify(user , null , 4) ;
// }



// const jsonData = `{"name": "Fatih" , "age":42 , "isDeveloper": true , "city": "Artvin"}` ;
// const jsObject = JSON.parse(jsonData) ;
// document.getElementById("output").textContent= `Ad: ${jsObject.name} ,
// Yaş : ${jsObject.age}, Geliştirici: ${jsObject.isDeveloper},
// Şehir: ${jsObject.city}` ;







// const person = {
//     firstName: "Furkan" ,
//     lastName: "Yıldız" ,
// age:28 ,
// toJson() {
//     return `${this.firstName} ${this.lastName} , Yaş: ${this.age}` ;
// }
// } ;
// const jsonString = JSON.stringify(person) ;
// document.getElementById("result").textContent = jsonString ;



// const xhr = new XMLHttpRequest() ;
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true) ;
// xhr.onload = function() {
//     if (xhr.status === 200) {
//         const data = JSON.parse(xhr.responseText) ;
//         document.getElementById("output").textContent = `Başlık : ${data.title}` ;

//     }
// } ;
// xhr.onerror =  function() {
//     document.getElementById("output").textContent = "Bir hata oluştu ! " ;

// } ;
// xhr.send()



// const xhr = new XMLHttpRequest() ;
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/2" , true ) ;
// xhr.onload = function() {
//     if(xhr.status === 200 ) {
//         const data = JSON.parse(xhr.responseText) ;
//         document.getElementById("output").textContent = `Başlık: ${data.title}` ;
//     }
// } ;
// xhr.onerror = function() {
//     document.getElementById("output").textContent = "İstek başarısız oldu . " ;
// } ;
// xhr.onloadend = function(){
//     console.log("İstek tamamlandı . ") ;

// } ;
// xhr.send() ;


// const apiKey = "7378326e9b85d24f1844b2ef00477471";
// const city = "Bursa";
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         document.getElementById("weather").textContent = `Şehir: ${data.name} , Sıcaklık: ${Math.round(data.main.temp - 273.15)} C`;
//     })
//     .catch(error => {
//         document.getElementById("weather").textContent = "Hata : Veri alınamadı . ";
//     });


function submitForm() {
    const name = document.getElementById("name").value ;
    const email = document.getElementById("email").value ;
    fetch("https://jsonplaceholder.typicode.com/posts" , { 
        method:"POST" , 
        headers: {
            "Content-Type": "application/json" 
        },
        body:JSON.stringify({name,email})
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").textContent = `Başarıyla gönderildi: ${JSON.stringify(data)}` ;
    })
    .catch(error => {
        document.getElementById("result").textContent = "Hata oluştu ! " ;
    }) ;
}