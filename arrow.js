//scrollup arrow
// Get the scroll-up button
const scrollUpButton = document.getElementById("scrollUp");

// Show the button when the user scrolls down
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollUpButton.style.display = "block"; // Show the button
    } else {
        scrollUpButton.style.display = "none"; // Hide the button when at the top
    }
};

// When the user clicks the scroll-up button, scroll to the top
scrollUpButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling to the top
    });
});
