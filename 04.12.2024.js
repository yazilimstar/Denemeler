// function validateForm() {
//     var username = document.getElementById("username").value ; 
//     var email = document.getElementById("email").value ;
//     if (username == "" || email == "")
//  {
//     alert("Tüm alanları doldurun !") ;
//     return false ;
//  }
// if (!validateEmail(email)) {
//     alert("Geçerli bir e-post girin ! ") ;
//     return false ;
// }
// return true ; 
// }

// function validateEmail(email) {
//     var re = /\S+@\S+\.\S+/ ; 
//     return re.test(email) ;
// }

// function validateForm(){
//     var username = document.getElementById("username").value ; 
//     var email = document.getElementById("email").value ;
//     var errorMessages = document.getElementsByClassName("error") ;
//     while (errorMessages.length > 0 ) {
//         errorMessages[0].parentNode.removeChild(errorMessages[0]) ;
//     }

//     if (username == "" || email == "") {
//         var error = document.createElement("div") ;
//         error.classnName = "error" ;
//         error.textContent = "Lütfen bütün alanları doldurunuz ." ; 
//         document.getElementById("myForm").appendChild(error) ;
//         return false ;

//     }

//     var emailRegex = /^\S+@\S+\.S+$/ ; 
//     if (!emailRegex.test(email)) {
//         var error = document.createElement("div");
//         error.className ="error" ;
//         error.textContent = "Please enter a valid email adress " ;
//         document.getElementsById("myForm").appendChild(error) ;
//         return false ;
//     }
//     return true ; 
// }


// function validateCode() {
//     const code = document.getElementById("codeInput").value ;
//     const patterns = [
//         {desc: "Exsactly 4 digits" , regex : /^\d{4}$/} ,
//         {desc: "4 to 6 digits", regex:/^\d{4,6}$/}, 
//         {desc: "4-6 alphanumeric (lowercase)", regex: /^[a-z\d]{4,6}$/},
//         {desc: "7 hexadecimal digits", regex : /^[a-fA-F\d]{7}$/} ,
//         {desc: "Any alphanumeric sequence" , regex: /^[a-zA-Z\d]+$/}
//     ] ;
//     let resultHtml = "<h3>Validation Results</h3>" ;
//     patterns.forEach(pattern => {
//         const isValid = patterns.regex.test(code) ;
//         resultHtml += `<p>${patterns.desc}: <b>${isValid ? "Valid " : "Invalid"}</b></p>` ;
//     }) ;
//     document.getElementById("result").innerHTML=resultHtml ;
// }




function displatData() {
    const cookies = document.cookie.split(";").reduce((acc,cookie) => {
        const [name,value] = cookie.split("=").map(c => c.trim()) ;
        acc[name] = value ;
        return acc ;

    }, {}) ;
    const output = document.getElementById("output") ;
    output.innerHTML = "<h3>Stored Data : </h3>" ; 
    output.innerHTML += cookies.username
    ? `<p> Username : ${cookies.username}</p>`
    : "<p> No username founf.</p>" ;
    output.innerHTML += cookies.email
    ? `<p>Email: ${cookies.email}</p>`
    : "<p> No Email found.</p>" ;

}

window.onload = displayData; 
