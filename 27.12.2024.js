// $(document).ready(function() {
//     $(".btn").click(function() {
//         $("#content").toggle() ;
//     }) ;
// }) ;




// $(document).ready(function() {
//     $("#description").click(function(){
//         $(this).text("jQuery kullanarak metni değiştirdiniz !") ;
//     }) ;
// }) ;



// $(document).ready(function() {
//     console.log("jQuery Versiyonu:" + $.fn.jquery) ;
// }) ;


// $(document).ready(function() {
//     $("#change").click(function() {
//         $(".content").text("Paragraflar değiştirildi !") ;
//     }) ;
// }) ;


// $(document).ready(function() {
//     $("#highlight").click(function() {
//         $("li:odd").css("color", "red") ;
//         $("li:even").css("color" , "blue") ;
//     }) ;
// }) ;


// $(document).ready(function() {
//     $("#style").click(function() {
//         $("#main").css("background-color" , "yellow") ;
//         $(".info").css("font-weight", "bold") ;
//         $(`[data-name="example"]`).css("border" , "1px solid black") ;
//     }) ;
// }) ;


// $(document).ready(function(){
//     $("#show-hidden").click(function(){ $(".info:hidden").fadeIn() ;

//     }) 
       
    
// })



// $(document).ready(function() {
//     $("#agreement").change(function() {
//         if ($(this).is(":checked")) {
//             $("#submit").prop("disabled", false) ;
//         } else {
//             $("#submit").prop("disabled", true)
//         } ;
//     }) ; 
// }) ;


// $(document).ready(function() {
//     $("#change-style").click(function() {
//         $("li").css("color", "blue").eq(1).css("font-weight" , "bold") ;
//     }) ; 
// }) ;




// $(document).ready(function() {
//     $("#apply-style").click(function(){
//         $("#text").css({
//             color:"green" ,
//             backgroundColor:"lightgray" ,
//             padding: "10px" ,
//             border: "2px solid black"
//         }) ; 
//     }) ;
// }) ;

// $(document).ready(function() {
//     $(".btn").click(function() {
//         $(this).parent().css("border" , "2px solid red") ;
//     }) ;
// }) ;

$(document).ready(function() {
    $("#click-me").click(function() {
        $("#message").fadeIn() ;
    }) ; 
}) ;