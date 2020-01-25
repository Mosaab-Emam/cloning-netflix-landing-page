var triggers = {
  tv: countTrigger("#features .container:first-of-type"),
  mobile: countTrigger("#features .container:nth-of-type(2)"),
  devices: countTrigger("#features .container:last-of-type"),
  faq: countTrigger("#faq"),
  footer: countTrigger("footer")
};

function countTrigger(selector) {
  var el = document.querySelector(selector);
  return el.offsetTop - el.clientHeight / 2;
}

function animateHeader() {
  gsap.from("header nav .logo", { duration: 0.5, delay: 1.5, scale: 0 });
  gsap.from("header nav button", { duration: 0.5, delay: 1.5, scale: 0 });
  gsap.from("header .hero .fadeInUp", {
    duration: 1,
    delay: 1,
    stagger: 0.25,
    y: "4rem",
    opacity: 0
  });
  gsap.from("header .hero form", { duration: 0.5, delay: 1.5, scale: 0 });
}

function toggleAccordion(index) {
  var accordionTextSelector =
      "#faq .accordion:nth-of-type(" + (index + 1) + ") .accordion-text",
    accordionIconSelector =
      "#faq .accordion:nth-of-type(" + (index + 1) + ") .accordion-btn i";
  el = document.querySelector(accordionTextSelector);

  if (el.clientHeight > 0) {
    gsap.to(accordionTextSelector, {
      duration: 0.5,
      maxHeight: 0
    });
    gsap.to(accordionIconSelector, { duration: 0.5, rotate: 0 });
  } else {
    gsap.to(accordionTextSelector, {
      duration: 0.5,
      maxHeight: el.scrollHeight
    });
    gsap.to(accordionIconSelector, { duration: 0.5, rotate: 135 });
  }
}

// Header animations
window.onload = function() {
  // Make page scrollable
  document.querySelector("body").style.overflow = "unset";

  gsap.to("#loading-spinner", { duration: 0.5, opacity: 0 });
  gsap.to("#loading-left", { duration: 0.5, delay: 0.5, width: 0 });
  gsap.to("#loading-right", {
    duration: 0.5,
    delay: 0.5,
    width: 0,
    onComplete: animateHeader()
  });
};

// Scroll animations
window.onscroll = function() {
  // Tv
  if (window.scrollY > triggers.tv) {
    gsap.to("#features .container:first-of-type .feature .info .fadeInUp", {
      duration: 1,
      stagger: 0.25,
      y: "0",
      opacity: 1
    });
    gsap.to(".feature #tv", { duration: 1, scale: 1 });
  }

  // Mobile
  if (window.scrollY > triggers.mobile) {
    gsap.to("#features .container:nth-of-type(2) .feature .info .fadeInUp", {
      duration: 1,
      stagger: 0.25,
      y: "0",
      opacity: 1
    });
    gsap.to(".feature #mobile", { duration: 1, scale: 1 });
  }

  // Devices
  if (window.scrollY > triggers.devices) {
    gsap.to("#features .container:last-of-type .feature .info .fadeInUp", {
      duration: 1,
      stagger: 0.25,
      y: "0",
      opacity: 1
    });
    gsap.to(".feature #devices", { duration: 1, scale: 1 });
  }

  if (window.scrollY > triggers.faq) {
    var tl = gsap.timeline();
    gsap.to("#faq h2", { duration: 1, opacity: 1, y: 0 });
    tl.to("#faq .accordion", {
      duration: 0.5,
      delay: 0.5,
      stagger: 0.25,
      opacity: 1,
      y: 0
    });
    tl.to("#faq button.tryBtn", { duration: 1, opacity: 1, y: 0 });
  }

  if (window.scrollY > triggers.footer) {
    gsap.to("footer h3", {
      duration: 0.5,
      stagger: 0.25,
      opacity: 1,
      y: 0
    });

    for (var i = 1; i <= 4; i++) {
      gsap.to("footer ul:nth-of-type(" + i + ") li", {
        duration: 0.5,
        delay: 0.5,
        stagger: 0.25,
        opacity: 1,
        y: 0
      });
    }

    gsap.to("footer select", { duration: 1, delay: 1.5, opacity: 1, y: 0 });
    gsap.to("footer p", { duration: 1, delay: 1.75, opacity: 1, y: 0 });
  }
};
