document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("nav-toggle");
    const sidebar = document.getElementById("sidebar");
    const closeSidebar = document.getElementById("closeSidebar");
    const navHeadings = document.querySelectorAll(".navbar a");
  
    navToggle.addEventListener("click", function () {
      sidebar.classList.toggle("active");
  
      navHeadings.forEach((heading) => {
        heading.classList.toggle("show");
      });
    });
  
    closeSidebar.addEventListener("click", function () {
      sidebar.classList.remove("active");
  
      navHeadings.forEach((heading) => {
        heading.classList.remove("show");
      });
    });
  
    const sidebarLinks = document.querySelectorAll(".sidebar a");
    sidebarLinks.forEach((link) => {
      link.addEventListener("click", function () {
        sidebar.classList.remove("active");
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  
    // form submission
    const form = document.forms["submit-to-google-sheet"];
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbyDs4w1buQSMYIFhV7GO06LECBesRkoMlrVXZ8W-SHDrxJUhTpblOk6S9C_k6jI9mxIkw/exec";
      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => console.log("Success!", response))
        .catch((error) => console.error("Error!", error.message));
    });
  });
  