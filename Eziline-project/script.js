document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        const scrollY = window.scrollY || document.documentElement.scrollTop;

        const scrollButton = document.querySelector(".scroll-top i");
        if (scrollY > 500) {
            scrollButton.classList.add("show");
        } else {
            scrollButton.classList.remove("show");
        }
    });

    const scrollButton = document.querySelector(".scroll-top i");
    scrollButton.addEventListener("click", function () {
        document.documentElement.style.scrollBehavior = "auto";
        scrollToTop();
    });

    function scrollToTop() {
        const scrollDuration = 500;
        const scrollStep = -window.scrollY / (scrollDuration / 15);

        const scrollInterval = setInterval(function () {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
                document.documentElement.style.scrollBehavior = "smooth";
            }
        }, 15);
    }
});
const toggleButton = document.querySelector(".menu-btn");
const toggleButtonIcon = document.querySelector(".menu-btn i");
const dropDownMenu = document.querySelector(".drop-down-menu");

toggleButton.onclick = function () {
    dropDownMenu.classList.toggle("open");
    toggleButtonIcon.style.transform = "rotate(360deg)";
    const isOpen = dropDownMenu.classList.contains("open");
    toggleButtonIcon.classList = isOpen
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars";
};
