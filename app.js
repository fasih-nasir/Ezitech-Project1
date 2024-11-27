// LOADER
setTimeout(() => {
    const loader = document.getElementById("loader");
    loader.style.transition = "0.9s ease-in-out";
    
    loader.className = "hide animate__animated animate__fadeOut";
  
    setTimeout(() => {
    loader.className = "hide animate__animated animate__fadeOut";
        
    }, 1000);

    
   }, 3500);
//   LOADER
document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 600) {
            navbar.classList.add("navfixed");
            navbar.className="navfixed animate__animated animate__fadeInDown"
        } else {
            navbar.className="navfixed1 "

            navbar.classList.remove("navfixed");
        }
    });
});


// CYLCE 

var arr = ["desiging", "definig", "planning", "building", "maintenance", "testing", "deployment"];
var arrtext=document.getElementById("arr")

var num=0;
setInterval(() => {
    // arrtext.className="text-uppercase animate__animated animate__fadeInLeft text-white fw-bolder display-1 px-5"
    arrtext.innerHTML=arr[num]
    num++
    console.log(num);
    if(num >= arr.length){
        num=0;
    }
    setTimeout(() => {
        arrtext.classList.remove("animate__animated animate__fadeInDown"); // Remove the fade-in class
        arrtext.classList.add("animate__animated animate__fadeOutUp"); // Add fade-out to top class
    }, 2500);
  }, 3500);


//   
var swiper = new Swiper('.mySwiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    autoplay: {
      delay: 1000, /* Delay between slides in milliseconds (3 seconds) */
      disableOnInteraction: false, /* Keep autoplay running even after interaction */
    },
  });