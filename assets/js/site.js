const galleryLinks = document.querySelectorAll("[data-lightbox]");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox img");
const closeBtn = document.querySelector(".lightbox button");

galleryLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    lightboxImg.src = link.href;
    lightbox.classList.add("open");
  });
});

closeBtn?.addEventListener("click", () => {
  lightbox.classList.remove("open");
  lightboxImg.src = "";
});

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.classList.remove("open");
    lightboxImg.src = "";
  }
});

const reveals = document.querySelectorAll("section .wrap, .format-card, .quote-card, .badge-card, .archive-card, .faq-item");
reveals.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

reveals.forEach((el) => observer.observe(el));