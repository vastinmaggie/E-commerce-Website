document.addEventListener("DOMContentLoaded", function () {
    const flashList = document.getElementById("news-flash-list");
    const items = flashList.querySelectorAll("li");
    const itemHeight = 14; // Height of each <li>
    let totalItems = items.length;
    let currentIndex = 0;

    // Clone the list to create the continuous loop
    let clone = flashList.cloneNode(true);
    flashList.appendChild(clone);

    // Smooth scroll function
    function scrollNews() {
        // Start scrolling the list
        currentIndex++;

        if (currentIndex >= totalItems) {
            // We need to transition smoothly back to the first item
            currentIndex = 0;

            // Disable the transition temporarily
            flashList.style.transition = 'none'; 

            // Reset the position to the top immediately
            flashList.style.transform = `translateY(0)`; 

            // Allow some time for the reset to take effect before re-enabling the smooth transition
            setTimeout(function () {
                flashList.style.transition = 'transform 1s ease-in-out'; // Re-enable smooth scroll
                flashList.style.transform = `translateY(-${currentIndex * itemHeight}px)`; // Smooth scroll down
            }, 50); // Short delay
        } else {
            // Normal smooth scrolling to the next item
            flashList.style.transform = `translateY(-${currentIndex * itemHeight}px)`; 
        }
    }

    // Scroll every 3 seconds and pause at each item
    setInterval(scrollNews, 3000); // Adjust the timing for the pause
});



