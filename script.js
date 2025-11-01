document.addEventListener('DOMContentLoaded', () => {
});
let count = 0;
let loadingText = document.getElementById("loading-percentage");
let preload = document.getElementById("preload");
let content = document.querySelector(".main-content");

let interval = setInterval(() => {
    count ++;
    loadingText.innerText = count + "";

    if (count == 100) {
        clearInterval(interval);
        preload.style.display = "none";
        content.style.display = "block";
    }
},29);

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn = document.getElementById('menu-close');

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }

  if (closeBtn && mobileMenu) {
    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {

  const reveal = document.querySelector('.reveal-words');
  function checkReveal() {
    const rect = reveal.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      reveal.classList.add('visible');
      window.removeEventListener('scroll', checkReveal);
    }
  }
  window.addEventListener('scroll', checkReveal);
  checkReveal();
});

document.addEventListener("DOMContentLoaded", function () {

  // Reveal words on scroll
  const reveal = document.querySelector('.reveal-words');
  function checkReveal() {
    const rect = reveal.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      reveal.classList.add('visible');
      // Skincare animation
      const skincare = document.querySelector('.reveal-skincare');
      if (skincare) skincare.classList.add('visible');
      window.removeEventListener('scroll', checkReveal);
    }
  }
  window.addEventListener('scroll', checkReveal);
  checkReveal();
});

window.addEventListener('scroll', function() {
    const img = document.querySelector('.oval-image img');
    if (img) {
        const offset = window.scrollY * 0.3;
        img.style.transform = `scale(1.3) rotate(-45deg) translateY(${-offset}px)`;
    }

    const page3img = document.querySelector('.page3-img-frame img');
    if (page3img) {
        const offset2 = window.scrollY * 0.2;
        page3img.style.transform = `translateY(${-offset2}px)`;
    }
    
    // Page5 image scroll animation - DESKTOP ONLY
    const page5img = document.querySelector('.page5-image img');
    if (page5img && window.innerWidth > 600) {
        const page5Offset = window.scrollY * 0.3;
        page5img.style.transform = `translateY(${page5Offset}px)`;
    }
    
    // Page5 image - MOBILE FIXED
    if (page5img && window.innerWidth <= 600) {
        page5img.style.transform = `translateY(0px)`;
    }
    
    // Page5 text animation
    const page5Section = document.querySelector('.page5');
    if (page5Section) {
        const rect = page5Section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight * 0.8) {
            const h2 = page5Section.querySelector('h2');
            const h5 = page5Section.querySelector('h5');
            const h1 = page5Section.querySelector('h1');
            const h3 = page5Section.querySelector('h3');
            const h4 = page5Section.querySelector('h4');
            
            if (h2) h2.classList.add('visible');
            if (h5) h5.classList.add('visible');
            if (h1) h1.classList.add('visible');
            if (h3) h3.classList.add('visible');
            if (h4) h4.classList.add('visible');
        }
    }
});

// Drag to scroll for pure-brilliance-products
const slider = document.querySelector('.pure-brilliance-products');
let isDown = false;
let startX;
let scrollLeft;

if (slider) {
  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
  });
}


  const page5img = document.querySelector('.page5-image img');
  if (page5img) {
      const page5Offset = window.scrollY * 0.3;
      page5img.style.transform = `translateY(${page5Offset}px)`;
  }

  // Parallax scroll for page8 submain images
  window.addEventListener('scroll', function() {
    const leftImg = document.querySelector('.page8 .submain-left-image img');
    const rightImg = document.querySelector('.page8 .submain-right-image img');
    const scrollY = window.scrollY;

    if (leftImg) {
      leftImg.style.transform = `translateY(${scrollY * 0.2}px)`;
    }
    if (rightImg) {
      rightImg.style.transform = `translateY(${scrollY * 0.2}px)`;
    }
  });