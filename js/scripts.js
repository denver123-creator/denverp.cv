/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 
(function(){
  'use strict';
  window.addEventListener('DOMContentLoaded', event => {
      // Activate Bootstrap scrollspy on the main nav element
      const sideNav = document.body.querySelector('#sideNav');
      if (sideNav) {
          new bootstrap.ScrollSpy(document.body, {
              target: '#sideNav',
              rootMargin: '0px 0px -40%',
          });
      };
      // Collapse responsive navbar when toggler is visible
      const navbarToggler = document.body.querySelector('.navbar-toggler');
      const responsiveNavItems = [].slice.call(
          document.querySelectorAll('#navbarResponsive .nav-link')
      );
      responsiveNavItems.map(function (responsiveNavItem) {
          responsiveNavItem.addEventListener('click', () => {
              if (window.getComputedStyle(navbarToggler).display !== 'none') {
                  navbarToggler.click();
              }
          });
      }); 
  });
}());
////////////////////////////ease effects when hover//////////////////////////////
(function() {

  'use strict';

  const toEase = document.getElementById('toEase');
  const toSwap = document.getElementById('toSwap');
  const navBars = document.querySelectorAll('.nav-item');
  const socialIcons = document.querySelectorAll('.social-icon');
  const listSkillItems = document.querySelectorAll('.list-inline-item');

  function emphasizeIm(target, scale) {
    target.style.transform = `scale(${scale})`;
    target.style.transition = 'transform .2s ease';
  }
  function swapImage() {
    toEase.style.transform = 'rotateY(180deg)';
    toEase.style.transition = 'transform .4s ease';
    setTimeout(() => {
      toEase.src = 'assets/img/denver.png';
      toEase.style.transform = 'rotateY(360deg)';
    }, 100);
  }
  function swapImageBack() {
    toEase.style.transform = 'rotateY(180deg)';
    toEase.style.transition = 'transform .4s ease';
    setTimeout(() => {
      toEase.src = "assets/img/profile2.png";
      toEase.style.transform = 'rotateY(360deg)';
    }, 100);
  }
      toSwap.addEventListener('mouseover',swapImage);
      toSwap.addEventListener('mouseout',swapImageBack);     
      toEase.addEventListener('mouseover', () => emphasizeIm(toEase, 1.1));
      toEase.addEventListener('mouseout', () => emphasizeIm(toEase, 1));
  socialIcons.forEach((icon) => {
    icon.addEventListener('mouseover', (event) => emphasizeIm(event.target, 1.1));
    icon.addEventListener('mouseout', (event) => emphasizeIm(event.target, 1));
  });
  listSkillItems.forEach((listSkillItem) => {
    listSkillItem.addEventListener('mouseover', (event) => emphasizeIm(event.target, 1.1));
    listSkillItem.addEventListener('mouseout', (event) => emphasizeIm(event.target, 1));
  });
  navBars.forEach((navBar) => {
    navBar.addEventListener('mouseover', (event) => emphasizeIm(event.target, 1.1));
    navBar.addEventListener('mouseout', (event) => emphasizeIm(event.target, 1));
  });
})();
////////////////////scroll and clicks fade in/fade out////////////////////////////////////
(function(){

  'use strict';

  const sections = ['#experience', '#education', '#about', '#skills', '#interests', '#awards'];

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle('fade-in', entry.isIntersecting);
      entry.target.classList.toggle('fade-out', !entry.isIntersecting);
    });
  }, { threshold: 0.3 });
  sections.forEach(section => {
    observer.observe(document.querySelector(section));
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetSection = document.querySelector(link.getAttribute('href'));
      targetSection.classList.add('fade-in'); //to fade in the section when the link is clicked.
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    });
  });
  const fadeInOnScroll = () => {
    document.querySelectorAll('.fade-in').forEach(section => {
      section.classList.toggle('visible', section.getBoundingClientRect().top <= Math.max(document.documentElement.clientHeight, window.innerHeight) * 0.75);
    });
  }; 
  window.addEventListener('scroll', fadeInOnScroll);
  window.addEventListener('load', fadeInOnScroll);
}());

////////////////////modal events////////////////////////////////////
(function(){
  
  'use strict';
  
  const toP = document.querySelector('.navbar-brand');
  const checkButton = document.querySelector('#check-button');
  let attemptsLeft = 3;
  checkButton.addEventListener('click', checkCode);
  
  toP.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  function checkCode() {
    let input = document.getElementById("code").value;
    let input1 = document.getElementById("code");
    let button = document.querySelector("#modalBox .modal-footer button");
    let errorMessage = document.getElementById("error-message");
    let errorMessages = ["Enter a valid code","Incorrect code"];
    let lockedOutMessage = "You are locked out for";
    let countDown = 120;
    let timerId = dotTimer();

    function ttT(){
      let timerId;
      let timerStarted = "";
      
      timerId = setInterval(() => {
        let minutes = Math.floor(countDown / 60);
        let seconds = countDown % 60;
        errorMessage.textContent = lockedOutMessage + " " + `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        countDown--;
        if (countDown < 0) {
          clearInterval(timerId);
          input1.disabled = false;
          button.disabled = false;
          input1.style.backgroundColor = "";
          attemptsLeft = 3;
          errorMessage.textContent = "";
        }
      }, 800);
      timerStarted = "02:00";
      return timerStarted;
    }
    
    function dotTimer() {
      let dots = "";
      let intervalId = setInterval(() => {
        dots += ".";
        errorMessage.textContent = "Verifying the code" + dots;
      }, 1000);
      return intervalId;
    }
    
    if (attemptsLeft === 0) {
      errorMessage.textContent = lockedOutMessage + " " + ttT();
      } else if (input == "abbylat" || input == "abby") {
        input1.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
        input1.disabled = true;
        button.disabled = true;
      // Delay for 5 seconds before displaying success message
        setTimeout(() => {
        clearInterval(timerId); // Stop adding dots
        const modal = document.getElementById('modalBox');
        modal.classList.add('closing');
        // Wait for the animation to finish before hiding the modal
        setTimeout(() => {
          modal.style.display = 'none';
          }, 800); // 300ms = duration of the transition
          }, 5000);
        } else {
        attemptsLeft--;
        input1.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
        input1.disabled = true;
        button.disabled = true;
        setTimeout(() => {
          clearInterval(timerId); // Stop adding dots

          if (attemptsLeft === 0) {
              errorMessage.textContent = lockedOutMessage + " " +  ttT();
          } else {
            errorMessage.textContent = errorMessages[Math.floor(Math.random() * errorMessages.length)] + " " + attemptsLeft + " remaining attempts";
            input1.style.backgroundColor = "";
            input1.disabled = false;
            input1.value = "";
            button.classList.remove("btn-danger");
            button.disabled = false;
          }
        }, 5000);
      }
    }
}());
////////////////////disabling background clicks & scroll////////////////////////////////////

(function(){

  'use strict';

  // Create a MutationObserver to watch for changes to modalB's style attribute
  const pagTT = document.getElementById("page-top");
  const modalB = document.getElementById('modalBox');
  
  const observer = new MutationObserver(mutationsList => {
    for (const mutation of mutationsList) {
      if (mutation.attributeName === 'style') {
        if (modalB.style.display === 'block') {
          pagTT.style.pointerEvents = 'none';
          pagTT.style.overflow = 'hidden';
        } else {
          pagTT.style.pointerEvents = 'auto';
          pagTT.style.overflow = 'auto';
        }
      }
    }
  });
  
  // Start observing changes to modalB's style attribute
  observer.observe(modalB, { attributes: true });

}());


