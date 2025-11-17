// ------------------- Swiper Slider -------------------
const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// ------------------- Smooth Scroll -------------------
document.querySelectorAll("header nav ul li a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);

    window.scrollTo({
      top: target.offsetTop - 60,
      behavior: "smooth",
    });
  });
});

// ------------------- EmailJS Contact Form -------------------
emailjs.init("qyJhsnn7g7Tfw6TUs");

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .sendForm("service_h06vftz", "template_xv6be55", this)
    .then(() => {
      responseMsg.innerText = "Message sent successfully!";
      responseMsg.style.color = "green";
      this.reset();
    })
    .catch(() => {
      responseMsg.innerText = "Failed to send!";
      responseMsg.style.color = "red";
    });
});

// ------------------- Accordion -------------------
document.querySelectorAll(".accordion-item").forEach((item) => {
  item.querySelector(".accordion-title").addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// ------------------- WhatsApp Booking -------------------
function bookService(serviceName, price) {
  const phone = "9448635922";
  const text = `Hello Garden Satellite,%0A%0AI want to book:%0AService: ${serviceName}%0APrice: ₹${price}%0A%0APlease share availability.`;

  window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
}
function goToPayment() {
  const paymentSection = document.getElementById("payment");

  window.scrollTo({
    top: paymentSection.offsetTop - 60,
    behavior: "smooth",
  });
}
