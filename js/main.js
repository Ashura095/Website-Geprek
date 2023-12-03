/*=============== Tampilkan Menu ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU Tampil =====*/
/* Validasi jika constanta ada */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== sembunyikan menu =====*/
/* Validasi jika contanta ada */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== Hapus Menu mobile ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // saat di klik pada setiap nav__link , kita menghapus kelas show-menu
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== Ganti latar belakang header ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // Ketika scroll lebih besar dari 50 viewport height, tambahkan kelas scroll-header ke tag header
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== Tampilkan scroll ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // Ketika scroll lebih tinggi dari 350 viewport height, tambahkan kelas show-scroll ke tag a dengan kelas scrollup
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== Tema gelap terang ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

//  Topik sebelumnya yang dipilih (jika pengguna memilih)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Kami dapatkan tema saat ini yang dimiliki antarmuka dengan memvalidasi kelas dark-theme
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// validasi jika pengguna sebelumnya memilih topik
if (selectedTheme) {
  // Jika validasi terpenuhi, tanyakan apa masalahnya untuk mengetahui apakah kita mengaktifkan atau menonaktifkan mode gelap
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Aktifkan / nonaktifkan tema secara manual dengan tombol
themeButton.addEventListener("click", () => {
  //Tambahkan atau hapus tema gelap / ikon
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // simpan tema dan ikon saat ini yang dipilih oleh pengguna
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== Animasi SCROLL REVEAL  ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(
  `.home__img, .newsletter__container, .footer__logo, .footer__description, .footer__content, footer__info`
);
sr.reveal(`.home__data`, { origin: "bottom" });
sr.reveal(`.about__data, recently__data`, { origin: "left" });
sr.reveal(`.about__img, recently__img`, { origin: "right" });
sr.reveal(`.popular__card`, { interval: 115 });

// pesan saya :)
function tampilAlert() {
  alert("Fitur ini Masih belum tersedia 😱");
}