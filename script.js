// =========================================
// 1. CONTACT BUTTON ALERT (From your old code)
// =========================================
const contactButton = document.getElementById("contact-btn");

// Check if the button exists on the page before adding the click event
if (contactButton) {
    contactButton.addEventListener("click", function() {
        alert("Contact Divin ISHIMWE:\n\n📞 Phone: 0783370320\n📧 Email: divish250@gmail.com");
    });
}

// =========================================
// 2. DARK / LIGHT THEME TOGGLE
// =========================================
function toggleTheme() {
    // Toggle the 'light-mode' class on the body
    document.body.classList.toggle('light-mode');
    
    // Find the icon inside the theme button
    const icon = document.querySelector('#theme-toggle i');
    
    // Change the icon based on the current mode
    if (document.body.classList.contains('light-mode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

// =========================================
// 3. LANGUAGE DROPDOWN MENU
// =========================================
function toggleDropdown() {
    // Toggle the 'show' class on the dropdown content
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks anywhere outside of it
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
}
