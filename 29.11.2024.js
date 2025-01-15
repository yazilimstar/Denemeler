// function changeTitle() {
//     document.getElementById("title").innerText = "Dom başlığı değişti"
// }
// function openWindow() {
//     window.open("https://www.edgeoyun.com") , ("_blank") ;
// }


// var parentNode = document.getElementById("parent") ;
// var childNode = document.getElementById("child"); 
// console.log(parentNode.childNodes) ; 
// console.log(childNode.parentNode) ;


// var container = document.getElementById("container") ;
// var paragraph = document.getElementById("paragraph") ;
// var newElement = document.createElement("h1") ;
// newElement.innerText = "Alem buysa Kral Cimbom" ;
// container.appendChild(newElement) ;
// container.removeChild(paragraph) ;



// var button = document.getElementById("clickButton") ;
// button.addEventListener("click" , function() {
//     alert("Butona Tıklandı ! ") ;
// })

// Öğe eklemek için ilk fonksiyon
// function addItem() {
//     var list = document.getElementById("list"); 
//     var newItem = document.createElement("li"); 
//     newItem.innerText = "Yeni Öğe"; 
//     list.appendChild(newItem);
// }

// Öğe eklemek için ikinci fonksiyon
// function addItem2() {
//     var list = document.getElementById("list"); 
//     var newItem = document.createElement("li"); 
//     newItem.innerText = "Yeni Öğe 2"; 
//     list.appendChild(newItem);
// }



    // var links = document.links;
    // for (var i = 0 ; i < links.length ; i++) {
    //     console.log(links.[i].href) ;
    //     links[i].href="wwww.fatihsahinbas.com.tr" ;
    // }


        // var text = document.getElementById("text") ;
        // var range = document.createRange() ; 
        // var selection = window.getSelection() ;
        // range.selectNodeContents(text) ;
        // selection.removeAllRanges(range) ;
        // console.log(selection.toString()) ;
        


        const draggables = document.querySelectorAll(".draggable") ;
        const dropzone = document.getElementById("dropzone") ;
        draggables.forEach(draggable => {
            draggable.addEventListener("dragstart", () => {
                draggable.classList.add("dragging") ;

            }) ;
            draggable.addEventListener("dragend" , () => {
                draggable.classList.remove("dragging") ;
            }) ;
        }) ;
        dropzone.addEventListener("dragover" , e => {
            e.preventDefault() ;
            dropzone.classList.add("dragover") ;
        }) ;
        dropzone.addEventListener("dragleave" , () => {
            dropzone.classList.remove("dragover") ;
        }) ;

        dropzone.addEventListener("drop" ,  e =>  { 
            e.preventDefault() ;
            const draggable = document.querySelector("dragging") ;
            dropzone.appendChild(draggable) ;
            dropzone.classList.remove("dragover") ;

        }) ;