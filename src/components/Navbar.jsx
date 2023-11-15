import React from 'react'
import gsap from 'gsap';
import { useEffect } from 'react';
import logo from '../assets/kbfc/logo.png'
function Navbar() {
  
  useEffect(() => {
    const navbarItems = document.querySelector('.navbar-items');
    const hamburger = document.querySelector('.hamburger');
    const mediaQuery = window.matchMedia('(max-width: 500px)');
let t1;

const initTimelineAnimation = () => {
  t1 = gsap.timeline({ paused: true });
  t1.fromTo(".navbar-items", { top: "-1000%" }, { top: "0", duration: 1, ease: "expo.out", borderBottomRightRadius: "0", borderBottomLeftRadius: "0" });
  t1.fromTo(".navbar-link", { y: "50%", opacity: 0 }, { y: "0", opacity: 1, duration: 0.3, stagger: 0.2, ease: "Expo.easeInOut" });
  t1.fromTo(".navbar-link-credit", { y: "50%" }, { y: "0", opacity: 1, duration: 0.3, stagger: 0.2, ease: "Expo.easeInOut" });
};

const handleNavbarLink = () => {
  if (mediaQuery.matches) {
    gsap.set(".navbar-link", { y: "50%", opacity: 0 });
    gsap.set(".navbar-link-credit", { y: "50%", opacity: 0 });
  } else {
    gsap.set(".navbar-link", { y: "0", opacity: 1 });
    gsap.set(".navbar-link-credit", { y: "0", opacity: 1 });
  }
};
var i=1;
const handleMenuAnimation = () => {
i++;
if(i%2)
{navbarItems.classList.remove('active');
t1.timeScale(2);
    t1.reverse();
}
else
{navbarItems.classList.add('active');
  
t1.play().timeScale(1);
}
  
};

initTimelineAnimation();

handleNavbarLink();


window.addEventListener('resize', () => {
  if (!navbarItems.classList.contains('active')) {
    initTimelineAnimation();
    handleNavbarLink();
  }
});
hamburger.addEventListener('change', handleMenuAnimation);
},[]);

  return (

      <nav id="nav" className='bg-[#1E6DEB] !relative'>
        <div class="navbar">
          <a href="/" class="nav-logo"><img className='md:w-[60%] w-[40%]' src={logo} alt="" /></a>
  
          <div class="navbar-btn-wrapper">
  
            <button id="navbarToggler" class="navbar-toggler" type="button">
              <label class="hamburger">
                <input type="checkbox" />
                <svg viewBox="0 0 34 32">
                  <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                  <path class="line" d="M7 16 27 16"></path>
                </svg>
              </label>
            </button>
          </div>
          
          <div className="navbar-items">
          

            <a href="/" class="navbar-link line-hover"><span class="navbar-link-number"></span> HOME</a>
            <a href="/club" class="navbar-link line-hover"><span class="navbar-link-number"></span> CLUB </a>
            <a href="/team" class="navbar-link line-hover"><span class="navbar-link-number"></span> TEAM </a>
          </div>
        </div>
      </nav>
  )
}

export default Navbar
