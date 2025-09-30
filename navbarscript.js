
let lastScrollTop = 0;
const navbar = document.getElementById('fixed');
const menu = document.getElementById("popupMenu")

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.position = 'static';  // Navbar becomes static

        menu.classList.add('hidden');
    } else {
        // Scrolling up
        navbar.style.position = 'sticky';  // Navbar becomes sticky
        navbar.style.top = '0';            // Sticks to the top

    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative scroll values
});