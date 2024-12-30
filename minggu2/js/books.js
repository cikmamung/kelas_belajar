document.addEventListener('DOMContentLoaded', function() {
    // Get the button
    var backToTopButton = document.getElementById("backToTopBtn");

    // Show the button when the user scrolls down 100px from the top of the document
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    // When the user clicks the button, scroll to the top of the document
    backToTopButton.onclick = function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
});
