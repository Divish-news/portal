// ==========================================
// PORTFOLIO JAVASCRIPT
// ==========================================

// Initialize AOS (Animate on Scroll) Library
document.addEventListener("DOMContentLoaded", function() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    }

    // Find the button with the id "contact-btn"
    const contactButton = document.getElementById("contact-btn");

    // Tell the button to do something when clicked
    if (contactButton) {
        contactButton.addEventListener("click", function() {
            alert("Contact Divin ISHIMWE:\n\n📞 Phone: 0783370320\n📧 Email: divish250@gmail.com");
        });
    }
});

// Toggle Dark/Light Mode Theme
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const icon = document.querySelector('#theme-toggle i');
    if (icon) {
        if (document.body.classList.contains('light-mode')) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }
}

// Toggle Language Dropdown Menu visibility
function toggleDropdown() {
    const dropdown = document.getElementById("myDropdown");
    if (dropdown) {
        dropdown.classList.toggle("show");
    }
}

// Select a Language from the Dropdown and update top button
function selectLanguage(flag, code, name) {
    const flagElem = document.getElementById("selected-flag");
    const codeElem = document.getElementById("selected-lang-code");
    
    if (flagElem) flagElem.innerText = flag;
    if (codeElem) codeElem.innerText = code;
    
    // Highlight the active language in the dropdown list
    const links = document.querySelectorAll('.dropdown-content a');
    links.forEach(link => {
        link.classList.remove('active');
        if (link.innerText.includes(name)) {
            link.classList.add('active');
        }
    });
    
    // Close dropdown after selection
    const dropdown = document.getElementById("myDropdown");
    if (dropdown) {
        dropdown.classList.remove('show');
    }
}

// Close language dropdown if user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.lang-btn') && !event.target.matches('.lang-btn *')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
            
