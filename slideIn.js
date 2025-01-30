document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card-2");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Optionally unobserve to trigger only once
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    cards.forEach((card) => observer.observe(card));
  });


  // Select necessary elements
  const carousel = document.querySelector('.carausel-10-columns');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  // Amount to scroll per click
  const scrollAmount = 220; // Adjust based on card width + gap

  // Event listeners for arrows
  nextButton.addEventListener('click', () => {
      carousel.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
      });
  });

  prevButton.addEventListener('click', () => {
      carousel.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth',
      });
  });