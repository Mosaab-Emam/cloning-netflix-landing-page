window.onload=function(){document.getElementById("loading-left").style.width="0",document.getElementById("loading-right").style.width="0",document.getElementById("loading-spinner").style.opacity="0"},document.querySelectorAll(".accordion-btn").forEach(function(t){t.addEventListener("click",function(){t.classList.toggle("active"),t.nextElementSibling.classList.toggle("active")})});