document.querySelectorAll(".accordion-btn").forEach(function(button) {
  button.addEventListener("click", function() {
    button.classList.toggle("active");
    button.nextElementSibling.classList.toggle("active");
  });
});
