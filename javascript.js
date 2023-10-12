// Membuat scroll halus dengan JavaScript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      document.getElementById("back-to-top").style.display = "block";
      document.querySelector(".navbar-right.navbar-r").style.marginTop = "14px";
      document.querySelector(".navbar-brand img").style.width = "195px";
    } else {
      document.getElementById("back-to-top").style.display = "none";
      document.querySelector(".navbar-right.navbar-r").style.marginTop = "17px";
      document.querySelector(".navbar-brand img").style.width = "230px";
    }
  });

  // Scroll ke atas saat tombol diklik
  document.getElementById("back-to-top").addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  // Menampilkan tooltip pada tombol
  document.getElementById("back-to-top").setAttribute("title", "Back to Top");
});
