let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

document.querySelectorAll('.image-slider img').forEach(images =>{
    images.onclick = () =>{
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
})

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerview: 0
        },
        768: {
            slidesPerview: 2,
        },
    },
    loop: true,
    grabCursor: true,
  });




























//window.onscroll = () =>{
   // menu.classList.remove('fa-times');
    //menu.classList.remove('active');
//};

//document.querySelectorAll('.main-home-image').forEach(images => (){
    //images.onclick = () =>{
       // var src = images.getAttribute('src');
       // document.querySelector('.main-home-image').src = src;
    //};
//});
//var swiper = new swiper(".review-slider", {
    //spaceBetween: 20
    //pagination:{
        //el:".swiper-pagination",
        //clickable: true,
    //},
    //autoplay:{
        //delay:7500,
        //disableOnInteraction: falce,
    //},
    //breakpoints: {
       // 0: {
            //slidesPerview: 0,
        //},
        //768: {
           // slidesPerview: 2,
        //},
    //},
    //loop : true,
    //grabCursor: true,
//});



//   var swiper = new Swiper(".mySwiper", {pagination: {el: ".swiper-pagination",},});