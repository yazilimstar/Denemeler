// let newWindow;
// function openWindow() { newWindow= window.open( "https://www.onlinezaman.com", "newWindow" , "width-400,height=400,resizable-yes");}
// function resizeWindow() { if (newWindow) newWindow.resizeTo(800,600);}
// function moveWindow() { if (newWindow) newWindow.moveTo(100 , 100 );}
// function closeWindow() { if (newWindow) newWindow.close() ; }


// const infolist = document.getElementById("info") ;
// const info = [ `Tarayıcı: ${navigator.appnName}` ,
//     `Tarayıcı Versiyonu: ${navigator.appVersion}` ,
//     `Dil: ${navigatör.language}` ,
//     `Çerezler Etkin Mi: ${navigator.cookieEnabled}` ,
//     `Çevrimiçi mi : ${navigator.online}` 
// ] ;
// info.forEach (item =>  { 
//     const li = document.createElement("li") ;
//     li.textContent = item ;
//     infoList.appendChild(li)  ; })

//     function chechOS(n) {
//         if(n.userAgentData) { const hints = [ "architecture" , "model" , "platform"]}
//         n.userAgentData.getHighEntropyValues(hints).then(ua => {console.log(ua) ;    
//          })} ;
//          else { console.log(n.userAgent) ;
//             return "navigator.userAgentData is not supported" } 
//          checkOS(navigator) ; 
// !!ARIZALI

// document.getElementById("width").textContent = screen.width ;
// document.getElementById("height").textContent = screen.height ;
// document.getElementById("colorDepth").textContent = screen.colorDepth ; 
// console.log(screen.availHeight) ;
// console.log(screen.availWidth) ;


// function goBack() {
//     history.back() ;
// }
// function goForward() {
//     history.forward() ;
// }
// function reloadPage() {
//     location.reload
// }


// function loadPage(url) {
//     document.getElementById("frame").src = url ; 
// }


// const languages = navigator.languages ; 
// const preferredLanguage = navigator.language ; 
// const listElement = document.getElementById("languages") ;
// languages.forEach(lang => { const li = document.createElement("li") ; 
//     li.textContent = lang ; 
//     if (lang === preferredLanguage) {
//         li.classList.add("preferred") ;
//     }
//     listElement.appendChild(li) ;
// }) ;



// function showHistoryLength() {
//     const length = history.length ; 
//     document.getElementById("output").textContent = `Tarayıcı geçmişinde ${length} kayıt bulunuyor.` ;
// }


function goBack(frameName) {
    const frame = window.frames[frameName] ;
    if (frame) {
        frame.history.back() ;
    }
}
function goForward(frameName) {
    const frame = window.frames[frameName] ;
    if (frame) {
        frame.history.forward() ;
    }
}