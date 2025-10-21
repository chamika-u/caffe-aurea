const menuOpenButton = document.getElementById('menu-open-button');
const menuCloseButton = document.getElementById('menu-close-button');

menuOpenButton.addEventListener('click', () => {
    
// Toggle mobile menu visibility 
    document.body.classList.toggle("show-mobile-menu");
});

// close menu when the close button clicked
menuCloseButton.addEventListener('click', () => menuOpenButton.click
());