let scrollContainer = document.querySelector(".galleri");
let backBtn = document.getElementById("backBtn");
let nexBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
}); 

nextBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth"; 
    scrollContainer.scrollLeft += 900;
}); 
backBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth"; 
    scrollContainer.scrollLeft -= 900;
}); 