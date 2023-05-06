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
  }, { threshold: 0.2 });
  
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

////////////////////scroll and clicks fade in/fade out////////////////////////////////////
