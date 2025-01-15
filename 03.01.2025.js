// $(document).ready(function () {
//   $(".accordion-header").click(function () {
//     $(this)
//       .next(".accordion-content")
//       .slideToggle()
//       .siblings(".accordion-content.active")
//       .slideUp();
//     $(this).next(".accordion-content").toggleClass("active");
//   });
// });



// $(document).ready(function(){
//     $("#contactForm").validate({
//         rules: {
//             name:"required" ,
//             email: {
//                 required: true ,
//                 email: true
//             } ,
//             message:"required" 
//         } ,
//         messages: {
//             name:"Lütfen adınız giriniz." ,
//             email: {
//                 required:"Lütfen e-posta adresinizi giriniz." ,
//                 email:"Lütfen geçerli bir e-posta adresi giriniz." 
//             },
//             message:"Lütfen mesajınızı giriniz."
//         } ,
//         submitHandler: function(form) {
//             alert("Form başarıyla gönderildi.") ;
//             form.submit() ;
//         }
//     }) ;
// }) ;



// $(document).ready(function() {
//     $("#mobile-menu").click(function() {
//         $(".nav-links").toggleClass("active") ;
//     }) ;
// }) ;

$(document).ready(function() {
    $(window).scroll(function() {
        let scrollPosition = $(this).scrollTop() ;
        $(".parallax-section").css (
            "background-position-y", 
            -scrollPosition * 0.5 + "px"
        ); 
    }); 
});