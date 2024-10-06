let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

function toggleElement() {
    var element = document.getElementById("myElement");
    var button = document.getElementById("toggleButton");

    // Agar element ko'rinmayotgan bo'lsa, uni ko'rsatamiz va tugma yozuvini "Hide element" ga o'zgartiramiz
    if (element.style.display === "none") {
      element.style.display = "inline";
      button.innerHTML = "Yashirish";
    } 
    // Aks holda, elementni yana yashiramiz va tugma yozuvini "Show element" ga qaytaramiz
    else {
      element.style.display = "none";
      button.innerHTML = "Ko'proq Ma'lumot";
    }
  }

  function Element() {
    var element = document.getElementById("Element");
    var button = document.getElementById("Button");

    // Agar element ko'rinmayotgan bo'lsa, uni ko'rsatamiz va tugma yozuvini "Hide element" ga o'zgartiramiz
    if (element.style.display === "none") {
      element.style.display = "inline";
      button.innerHTML = "Yashirish";
    } 
    // Aks holda, elementni yana yashiramiz va tugma yozuvini "Show element" ga qaytaramiz
    else {
      element.style.display = "none";
      button.innerHTML = "Ko'proq Ma'lumot";
    }
  }