// Sarah 
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


// Lillian 
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 3000); // skift billede hvert 3 sek
}

//Lisbet//

function myFunction() {
  var txt;
  if (confirm("Vil du tilmeldes nyhedsbrev?")) {
    txt = "Du er nu tilmeldt nyhedsbrev!";
  } else {
    txt = "Du er ikke tilmeldt nyhedsbrev";
  }
  document.getElementById("demo").innerHTML = txt;
}
// Michelle

const buttons = document.querySelectorAll("button.button");
const modals = document.querySelectorAll("dialog.modal");
const closes = document.querySelectorAll(".modal__close");

function closeModal(modal) {
  modal.setAttribute("aria-state", "closed");
  setTimeout(function () {
    modal.close();
  }, 300);
}

function openModal(modal) {
  modal.showModal();

  setTimeout(function () {
    modal.setAttribute("aria-state", "open");
  }, 300);
}

buttons.forEach((button, index) => {
  button.addEventListener("click", function (e) {
    openModal(modals[index]);
  });
});

closes.forEach((close, index) => {
  close.addEventListener("click", function (e) {
    closeModal(modals[index]);
  });
});

modals.forEach((modal) => {
  modal.addEventListener("click", function (e) {
    if (e.target.tagName === "DIALOG") {
      const index = modals.indexOf(modal);
      closeModal(modals[index]);
    }
  });
});

//Lisbet
