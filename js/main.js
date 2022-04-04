const dropdownButton = document.querySelector('[data-dropdown-button]');
const dropDown = document.querySelector('[data-dropdown]');
const dropDownMenu = document.querySelector('[data-dropdown-menu]');
const hamburgerButton = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector('.main-nav_hamburger');
const polygraphyButtonHamburger = document.querySelector('[data-polygraphy-button-hamburger]')
const dropDownMenuHamburger = document.querySelector('[data-dropdown-menu-hamburger]');

dropdownButton.addEventListener('click', e => {
    console.log(e.target)
    dropDown.classList.toggle('active');
})

document.addEventListener('click', e => {
    console.log(" number 1 is running")
    if(e.target.matches('[data-dropdown-button]')) return;
   // if(e.target.matches('[data-dropdown-hamburger-button]')) return;
    if (!e.target.matches('[data-dropdown-button]')) {
        if(dropDown.getAttribute('class') === "nav-dropdown active") {
            dropDown.classList.remove('active')
        }
    }
})

hamburgerButton.addEventListener('click', ()=> {
    console.log(" number 2 is running")
    hamburgerButton.classList.toggle('active');
    hamburgerMenu.classList.toggle('open');
    if(dropDownMenuHamburger.getAttribute('class') === "nav-dropdown_menu_hamburger hamburger-dropdown-open") {
        dropDownMenuHamburger.classList.remove('hamburger-dropdown-open');
    }
});

hamburgerMenu.addEventListener('click', (e)=>{
    if(!e.target.matches('[data-polygraphy-button-hamburger]')) {
            hamburgerButton.classList.toggle('active');
            hamburgerMenu.classList.toggle('open'); 
            if(dropDownMenuHamburger.getAttribute('class') === "nav-dropdown_menu_hamburger hamburger-dropdown-open") {
                dropDownMenuHamburger.classList.remove('hamburger-dropdown-open');
            }
    }
   
});
polygraphyButtonHamburger.addEventListener('click', (e)=> {
   dropDownMenuHamburger.classList.toggle('hamburger-dropdown-open')
});
dropDownMenuHamburger.addEventListener('click', e=> {
    dropDownMenuHamburger.classList.remove('hamburger-dropdown-open')
})