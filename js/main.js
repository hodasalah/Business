/* === Initialize Swiper === */

let swiper = new Swiper(".swiper-container", {
    direction: "vertical",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
/* ===  Loader   === */
function myFunction() {
    setTimeout(showPage, 5000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
}

/** === side nav === */
let dismiss = document.getElementById("dismiss");

let sidebar = document.getElementById("sidebar");
let collapse = document.getElementById("sidebarCollapse");

collapse.addEventListener("click", () => {
    sidebar.classList.add("active");
});

dismiss.addEventListener("click", () => {
    sidebar.classList.remove("active");
});
/** scroll to top */

let btn = document.getElementById("button_scroll");
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
