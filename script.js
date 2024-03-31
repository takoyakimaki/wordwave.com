
/*responsible for having green line when you click something in the navbar, 
and responsible for going into that certain part of the page when clickng something*/

document.addEventListener('DOMContentLoaded', function () {
    const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            // Remove 'active' class from all links
            navbarLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });

            // Add 'active' class to the clicked link
            this.classList.add('active');

            // Get the target section ID from the link's href attribute
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Scroll to the target section smoothly
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Prevent the default behavior of the link (e.g., page jump)
            event.preventDefault();
        });
    });
});

/*buttom bar hiding*/
var lastScrollTop = 0;

window.addEventListener('scroll', function() {
    var footer = document.querySelector('.bottom-bar');
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Function to check if user is scrolling down
    function isScrollingDown() {
        var scrollingDown = currentScroll > lastScrollTop;
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        return scrollingDown;
    }

    // Adjust the threshold as needed
    var navbarThreshold = 50; // Threshold for hiding the navbar
    var topThreshold = 50; // Threshold for showing the navbar

    // Show or hide the navbar based on scroll direction and position

    // Show or hide the bottom bar when reaching the bottom of the page
    var windowHeight = window.innerHeight;
    var documentHeight = document.body.scrollHeight;
    var bottomOffset = 100; // Adjust this value as needed
    if (windowHeight + currentScroll >= documentHeight - bottomOffset) {
        footer.style.transform = 'translateY(0)';
    } else {
        footer.style.transform = 'translateY(100%)';
    }
});

        var navlinks = document.getElementById("navlinks");
        var closeIcon = document.querySelector(".fa-xmark");
        var barsIcon = document.querySelector(".fa-bars");

        function hideMenu() {
            navlinks.style.right = "-200px";
            closeIcon.style.display = "none";
            barsIcon.style.display = "block";
        }

        function showMenu() {
            navlinks.style.right = "0";
            closeIcon.style.display = "block";
            barsIcon.style.display = "none";
        }

        document.addEventListener('DOMContentLoaded', function () {
            // Get the "About Us" link
            const aboutUsLink = document.querySelector('.about-us-link');
  
            // Get the services section
            const servicesSection = document.getElementById('services-section');
  
            // Add click event listener to the "About Us" link
            aboutUsLink.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default link behavior
                servicesSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the services section smoothly
            });
        });

        document.addEventListener('DOMContentLoaded', function () {
            // Get the "courses" link
            const coursesLink = document.querySelector('.courses-link');
  
            // Get the courses
            const courses = document.getElementById('courses');
  
            // Add click event listener to the "About Us" link
            coursesLink.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default link behavior
                courses.scrollIntoView({ behavior: 'smooth' }); // Scroll to the services section smoothly
            });
        });
//faqs js
        document.addEventListener('DOMContentLoaded', function () {
            const faqsLink = document.querySelector('.question-link');
        
            // Get the teachers section
            const faqs = document.getElementById('question');
        
            // Add click event listener to the "Teachers" link
            faqsLink.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default link behavior
                faqs.scrollIntoView({ behavior: 'smooth' }); // Scroll to the teachers section smoothly
            });
        });


       // FAQ arrow down //
        const faqTogglers = document.querySelectorAll(".faq-toggler");

        // Hide all FAQ item bodies by default
    const faqItemBodies = document.querySelectorAll(".faq-item-body");
    faqItemBodies.forEach(body => {
        body.classList.add("hidden");
    });

    // Add click event listener to each FAQ toggler
    faqTogglers.forEach((toggler) => {
        toggler.addEventListener("click", (e) => {
            const faqBody = toggler.parentNode.nextElementSibling;
            faqBody.classList.toggle("hidden"); // Toggle the 'hidden' class to show/hide the FAQ body
        });
    });



        //contact js
        document.addEventListener('DOMContentLoaded', function () {
            const contactLink = document.querySelector('.contact-link');

    // Get the teachers section
            const contact = document.getElementById('contact');

    // Add click event listener to the "Teachers" link
            contactLink.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            contact.scrollIntoView({ behavior: 'smooth' }); // Scroll to the teachers section smoothly
    });
});

            
//button for scroll up
document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.querySelector('.back-to-top');

    // Function to check scroll position and toggle visibility of back-to-top button
    function toggleBackToTopButton() {
        if (window.scrollY > 300) {
            backToTopButton.classList.remove('hidden');
        } else {
            backToTopButton.classList.add('hidden');
        }
    }

    // Add scroll event listener to toggle visibility of back-to-top button
    window.addEventListener('scroll', toggleBackToTopButton);

    // Add click event listener to scroll back to top when button is clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Initially check scroll position to set initial state of back-to-top button
    toggleBackToTopButton();
});


