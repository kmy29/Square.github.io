document.addEventListener("DOMContentLoaded", function() {
  var accordionHeaders = document.querySelectorAll(".accordion-header2");

  accordionHeaders.forEach(function(header) {
    header.addEventListener("click", function() {
      this.classList.toggle("active");
      var accordionContent = this.nextElementSibling;
      if (accordionContent.style.display === "block") {
        accordionContent.style.display = "none";
      } else {
        accordionContent.style.display = "block";
      }
    });
  });
});
