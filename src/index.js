import './main.scss';

/*** Scroll Parallax effect initialization ***/
class Parallax {
  constructor(element) {
    this.elParallax = document.querySelectorAll(element);
    this.handleScroll = this.handleScroll.bind(this);
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }
  /* Scroll effect initialization  */
  handleScroll() {
    let scroll = window.scrollY;
    this.elParallax.forEach(el => {
      const elSpeed = el.dataset.speed;
      el.style.transform = `translateY(${scroll * elSpeed}px)`;
    });
  }
}

/* Element declaration */
document.addEventListener('DOMContentLoaded', () => {
  const para1 = new Parallax('.parallax');
})
/***  ***/

/*** Mobile menu CTA ***/
class MenuToggler {
  constructor(button, parent) {
    this.button = document.querySelector(button);
    this.parent = document.querySelector(parent);
    this.handleClick();
  }

  handleClick() {
    this.button.addEventListener('click', () => {
      this.toggleClass();
    })
  }

  toggleClass() {
    this.button.classList.toggle('active');
    this.parentState();
  }

  parentState() {
    if (this.button.classList.contains('active')) {
      this.parent.classList.remove('inactive');
      this.parent.classList.add('active');
    } else {
      this.parent.classList.remove('active');
      this.parent.classList.add('inactive');
    }
  }
}

const mobileMenu = new MenuToggler('.mobile__menu-btn', '.mobile__menu');
/*** ***/
