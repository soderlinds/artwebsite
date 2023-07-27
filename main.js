const page0 = document.getElementById('page0');
const menu1 = document.getElementById('menu1');
const menu2 = document.getElementById('menu2');
const menu3 = document.getElementById('menu3');
const menu4 = document.getElementById('menu4');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page4 = document.getElementById('page4');

const headerButton = document.getElementById('headerButton');
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");



page1.hidden = true;
page2.hidden = true;
page3.hidden = true;
page4.hidden = true;

var slideIndex = 1;
    showSlides(slideIndex);
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
   
   
    
    function toggleMenu() {
      if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
      } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
      }
    }
    
    hamburger.addEventListener("click", toggleMenu);

    
    menuItems.forEach( 
        function(menuItem) { 
          menuItem.addEventListener("click", toggleMenu);
        }
      )
      
   
   
    function showPage0() {
        page0.hidden = false;
        page1.hidden = true;
        page2.hidden = true;
        page3.hidden = true;
        page4.hidden = true;
        }; 
function showPage1() {
    page0.hidden = true;
    page1.hidden = false;
    page2.hidden = true;
    page3.hidden = true;
    page4.hidden = true;
    nav.hidden = true;
    
    }; 

  function showPage2() {
    page0.hidden = true;
    page2.hidden = false;
    page1.hidden = true;
    page3.hidden = true;
    page4.hidden = true;
   

}; 

    function showPage3() {
        page0.hidden = true;
        page2.hidden = true;
        page1.hidden = true;
        page3.hidden = false;
        page4.hidden = true;
        
        }; 

    function showPage4() {
      page0.hidden = true;
      page2.hidden = true;
      page1.hidden = true;
      page3.hidden = true;
      page4.hidden = false;
            
            }; 

    
    headerButton.addEventListener('click', showPage0);
    menu1.addEventListener('click', showPage1);
    menu2.addEventListener('click', showPage2);
    menu3.addEventListener('click', showPage3);
    menu4.addEventListener('click', showPage4);
    