// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
// Mobile friendly menu
document.getElementById('hamburger').addEventListener('click', function () {
  document.getElementById('nav-menu').classList.toggle('show');
});
