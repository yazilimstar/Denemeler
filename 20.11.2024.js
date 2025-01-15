// document.getElementById("myButton").onclick = function() {alert("Butona Tıklandı !") ; } ;

// document.getElementById(`clickableDiv`).onclick = function() { alert (`Div Tıklandı`) ; } ;

// document.getElementById("myDiv").onclick = function(e) { document.getElementById("output").innerText = "Tıklanan öğe : " + e.target.id} ;

// document.body.onclick = function(e) { document.getElementById("myDiv").style.left = e.pageX + "px" ; document.getElementById("myDiv").style.top = e.pageY + "px" ; } ;

// document.getElementById("myDiv").onmouseover = function() { this.style.background.color ="green" ; }
// document.getElementById("myDiv").onmouseout = function() {this.style.background.color ="blue" ; }

document.addEventListener("DOMContentLoaded" , function()  {alert("Dom Yüklendi") ; }) ;
window.onload = function() {alert("Tüm kaynaklar yüklendi");
}
window.onbeforeunload = function(){
    return "Sayfadan ayrılıyorsunuz. Değişiklikleriniz kaydedilsin mi ? " ;
} ; 
window.onunload = function() { alert("Sayfa kapatılıyor")} ;