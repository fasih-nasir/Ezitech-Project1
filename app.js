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
