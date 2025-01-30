document.addEventListener('DOMContentLoaded', function () {
    console.log("Script loaded and running");

    function initializeDropdowns() {
        const dropdowns = document.querySelectorAll('.search-location, .search-style-2');
        
        dropdowns.forEach(dropdown => {
            const selectContainer = dropdown.querySelector('.select-container');
            const dropdownWrapper = dropdown.querySelector('.dropdown-wrapper');
            const dropdownSearchInput = dropdown.querySelector('.dropdown-search input');
            const selectText = dropdown.querySelector('.select-text');
            const options = dropdown.querySelectorAll('.option');
            const noOptionsMessage = dropdown.querySelector('.no-options');

            // Verify elements exist
            if (!selectContainer || !dropdownWrapper || !dropdownSearchInput || !selectText || options.length === 0) {
                console.warn("Essential element missing for dropdown, skipping");
                return;
            }

            selectContainer.addEventListener('click', function () {
                dropdownWrapper.classList.toggle('show');
                dropdownSearchInput.value = '';
                filterOptions('');
            });

            dropdownSearchInput.addEventListener('input', function () {
                const searchValue = dropdownSearchInput.value.toLowerCase();
                filterOptions(searchValue);
            });

            function filterOptions(searchValue) {
                let hasVisibleOptions = false;
                let firstMatch = null;
                options.forEach(option => {
                    const optionText = option.textContent.toLowerCase();
                    if (optionText.includes(searchValue)) {
                        option.style.display = 'block';
                        if (!firstMatch) firstMatch = option;
                        hasVisibleOptions = true;
                    } else {
                        option.style.display = 'none';
                    }
                });

                noOptionsMessage.style.display = hasVisibleOptions ? 'none' : 'block';

                options.forEach(option => option.classList.remove('highlighted'));
                if (firstMatch) {
                    firstMatch.classList.add('highlighted');
                }
            }

            options.forEach(option => {
                option.addEventListener('click', function () {
                    selectText.textContent = option.getAttribute('data-value');
                    dropdownWrapper.classList.remove('show');
                });
            });

            document.addEventListener('click', function (event) {
                if (!dropdown.contains(event.target)) {
                    dropdownWrapper.classList.remove('show');
                }
            });
        });
    }

    initializeDropdowns();
    observeDropdowns();


    // const CategoriesButtonActive = document.querySelector(".categories-button-active");
    // const categoriesDropdownActive = document.querySelector(".categories-dropdown-active-large");
    // const More =document.querySelector(".more_slide_open");
    // const Icon =document.querySelector(".icon");

    // CategoriesButtonActive.addEventListener('click',function(){
    //     categoriesDropdownActive.classList.add('open');
    // });


});

$(document).ready(function() {
    // Toggle 'open' class on both .categories-button-active and .categories-dropdown-active-large when clicked
    $('.categories-button-active').click(function(event) {
        event.preventDefault();  // Prevent default anchor behavior
        $(this).toggleClass('open'); // Toggle 'open' class on the .categories-button-active
        $('.categories-dropdown-active-large').toggleClass('open'); // Toggle 'open' class on the dropdown
    });
});

$(document).ready(function() {
    // Toggle 'show' class on .icon and .more_slide_open when the icon is clicked
    $('.icon').click(function(event) {
        event.preventDefault();  // Prevent default action (if any)

        // Toggle the 'show' class on .icon
        $(this).toggleClass('show');

        // Toggle the 'show' class on .more_slide_open to display or hide it
        $(this).closest('.categories-dropdown-wrap').find('.more_slide_open').toggleClass('show');
    });
});









// $(document).ready(function() {
//     // Add 'show' class when the icon in .more_categories is clicked
//     $('.more_categories .icon').click(function() {
//         $(this).toggleClass('show'); // Toggle 'show' class on the icon
//     });

//     // Add 'open' class when the <i> in .categories-button-active is clicked
//     $('.categories-button-active i').click(function() {
//         $(this).toggleClass('open'); // Toggle 'open' class on the <i> element
//     });
// });
