// LOADER
setTimeout(() => {
    const loader = document.getElementById("loader");
    loader.style.transition = "0.9s ease-in-out";
    
    loader.className = "hide";
  
    document.body.style.overflow = "hidden";
    
   }, 2500);
//   LOADER
document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 600) {
            navbar.classList.add("navfixed");
            navbar.className="navfixed"
        } else {
            navbar.className="navfixed1"

            navbar.classList.remove("navfixed");
        }
    });
});
