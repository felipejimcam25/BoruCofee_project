const openNav = document.getElementById('open-nav-toggle');
const closeNav = document.getElementById('close-nav-toggle');
const nav = document.querySelector('.navigation');
const navLink = document.querySelectorAll('.nav-link-local');
const sections = document.querySelectorAll('header[id], section[id]');

//THIS EVENT IS EXECUTE WHEN A USER CLICK ON THE BARS ICON TO OPEN THE NAV MOBILE
openNav.addEventListener('click', () => {
    displayNav();
})

//THIS EVENT IS EXECUTE WHEN A USER CLICK ON THE X ICON IN THE NAV LIST TO CLOSE THE NAV MOBILE
closeNav.addEventListener('click', () => {
    hideNav();
})

//THIS EVENT IS EXECUTED WHEN THE USER CLICK ON NAVLINK AND CLOSE THE NAV MOBILE
navLink.forEach(link => {
    link.addEventListener('click', (e) => {
        activeOption(e)
        if(window.innerWidth < 1280) {
            hideNav();
        }
    });
})
//THIS EVENT IS TO CONTROL THE CALL THE FUNCTION THAT MOVE THE NAV-ACTIVE ACCORDING TO THE SCROLL
window.addEventListener('scroll', updateActiveLink);

//FUNCTION TO DISPLAY THE NAV MOBILE
function displayNav() {
    nav.classList.add('nav-visible');
    openNav.classList.add('display-none');
}

//FUNCTION TO HIDE NAV MOBILE 
function hideNav (){
    nav.classList.remove('nav-visible');
    openNav.classList.remove('display-none');
}

//THIS FUNCTION IS FOR IF THE USER MAKE CLICK ON A NAV OPTION, THIS NAV OPTION PAS TO BE THE ACTIVE
function activeOption (e) {
    let clicked = e.target;
    navLink.forEach(link => {
        link.classList.remove('active-link');
    })
    clicked.classList.add('active-link')
}

//THIS FUNCTION CHAGE THE STATE OF ACTIVE ACCORDING TO SECTION THAT THE USERS IS SCROLLING AT THE MOMENT
function updateActiveLink(){
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    })

    navLink.forEach(link => {
        link.classList.remove('active-link');
        if(link.getAttribute('href') === `#${current}`){
            link.classList.add('active-link');
        }
    });
}
//UPDATE THE ACTIVE LINK
updateActiveLink();