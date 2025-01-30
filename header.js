window.addEventListener("load", () => {
    const header = document.querySelector(".header-bottom");
    const headerHeight = header.offsetHeight; // Get the header height
    let hasScrolledPast = false; // Track if the user has scrolled past the header

    function handleScroll() {
        const currentScrollTop = window.scrollY; // Get current scroll position

        // Check if we've scrolled past the header's position
        if (currentScrollTop > headerHeight) {
            if (!hasScrolledPast) {
                // If we haven't scrolled past yet, mark it as true
                hasScrolledPast = true; // Mark that we have scrolled past
                header.classList.remove("hidden"); // Make sure the header is visible
                header.classList.add("fixed"); // Add fixed class
            }
        } else {
            // If we're above the header, ensure it's visible
            hasScrolledPast = false; // Reset the scrolled past state
            header.classList.remove("hidden");
            header.classList.remove("fixed");
        }
    }

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);
});


