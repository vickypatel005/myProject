

const menu = document.getElementById('menuIcon');
const mobile_nav = document.getElementById('mobileTabs')
if (menu) {
    menu.addEventListener('click', (e) => {
        mobile_nav.classList.toggle('show')
        if (mobile_nav.classList.contains('show')) {
            document.body.classList.add('scroll_off')
        }
        else {
            document.body.classList.remove('scroll_off')
        }
    })
}

$(document).ready(function () {
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        smartSpeed: 550,
        navText: ['<div class="btn_left1"><i class="far fa-arrow-left"></i></div>',
            '<div class="btn_left1 btn_right1"><i class="far fa-arrow-right"></i></div>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    });
});




const head = document.getElementById('header_scrolled');
window.addEventListener('scroll', (e) => {
    if (window.scrollY > 50) {
        head.classList.add('scrolled');
    } else {
        head.classList.remove('scrolled');
    }
})


const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const sidebar = document.getElementById('sidebar');

// Open sidebar when menu button is clicked
menuBtn.addEventListener('click', () => {
    sidebar.classList.add('open');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
});

// Close sidebar when close button is clicked
closeBtn.addEventListener('click', closeSidebar);


// Close sidebar when Escape key is pressed
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeSidebar();
    }
});

function closeSidebar() {
    sidebar.classList.remove('open');
    document.body.style.overflow = 'auto'; // Allow scrolling again
}
