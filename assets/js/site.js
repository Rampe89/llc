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