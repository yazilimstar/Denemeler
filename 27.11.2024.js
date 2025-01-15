// const form = document.getElementById("userform");
// form.addEventListener("submit", event => {
//     event.preventDefault();
//     const formData = new FormData(form);
//     console.log("Form Verileri : ");
//     for (let [key, value] of formData.entries()) {
//         console.log(`${key} : ${value}`);

//     } alert("Form başarıyla gönderildi ! ");
// }



// const form = document.getElementById("registerForm") ;
// const responseDiv = document.getElementById("response") ;
// form.addEventListener("submit" , async e => {
//     e.preventDefault() ;
//     const name = document.getElementById("name").value ; 
//     const email = document.getElementById("email").value ;
//     const requestData = {
//         name : name ,
//         email : email 
//     } ;
//     try { 
//         responseDiv.className = "response" ; 
//         responseDiv.textContent = "sunucuya bağlanılıyor..." ;
//         const response = await fakeServer(requestData) ;
//         responseDiv.textContent = response.message ; 
//         responseDiv.classList.add(response.success ? "success" : "error") ;
        
//     }
//     catch (error) {
//         responseDiv.textContent = "Bir hata oluştu ! "
//         responseDiv.classList.add("error") ; 
//     }
// }) ; 

// function fakeServer(data) {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {if (data.name && data.email) { resolve ({ success: true , message : `Kullanıcı ${data.name} başarıyla kaydedildi. `}) ; } 
//         else {
//             reject ({
//                 success : false , 
//                 message : "Eksik bilgi , Kayıt başarısız"
//             }) ;
//         } 
//     } ,  2000 ); 
//     });
// } 






// function showValue() {
//     const name = document.getElementById("name").value ;
//     document.getElementById("output").textContent = "Girdiğiniz ad : " + name ;
// }



// function addField() {
//     const form = document.getElementById("dynamicForm") ;
//     const input = document.createElement("input") ;
//     input.type = "text" ;
//     input.placeholder = "Yeni Alan" ;
//     form.appendChild(input) ;

// }




const form = document.getElementById("homeworkForm") ;
form.addEventListener("submit" , event => { event.proventDefault() ; 
    const formData = new FormData(form) ;
    console.log("Form Verileri ; ") ;
    for (let [key , value ] of formData.entries()) {
        console.log(`${key} : ${value}`) ;
    }
    alert("Form başarıyla gönderildi!") ;
})

















