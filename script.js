// ------------------- Footer Year -------------------
document.getElementById('year').innerText = new Date().getFullYear();

// ------------------- Nav Toggle -------------------
const toggle = document.getElementById('navToggle');
const nav = document.getElementById('mainNav');
toggle.addEventListener('click', ()=> nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=> nav.classList.remove('open')));

// ------------------- Accordion -------------------
document.querySelectorAll('.accordion-item').forEach(item => {
  const btn = item.querySelector('.accordion-title');
  const body = item.querySelector('.accordion-body');
  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.accordion-item.open').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.accordion-body').style.maxHeight = null;
    });
    if (!isOpen) {
      item.classList.add('open');
      body.style.maxHeight = body.scrollHeight + 'px';
    }
  });
});

// ------------------- Swiper Slider -------------------
const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: { delay: 3000, disableOnInteraction: false },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  pagination: { el: ".swiper-pagination", clickable: true }
});

// ------------------- Smooth Scroll -------------------
document.querySelectorAll("header nav ul li a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    window.scrollTo({ top: target.offsetTop - 60, behavior: "smooth" });
  });
});

// ------------------- EmailJS Contact Form -------------------
emailjs.init("qyJhsnn7g7Tfw6TUs");
const form = document.getElementById("contactForm");
const responseMsg = document.getElementById("responseMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  emailjs.sendForm("service_h06vftz", "template_xv6be55", this)
    .then(() => {
      responseMsg.innerText = "Message sent successfully!";
      responseMsg.style.color = "green";
      this.reset();
    }).catch(() => {
      responseMsg.innerText = "Failed to send!";
      responseMsg.style.color = "red";
    });
});

// ------------------- WhatsApp Booking -------------------
function bookService(serviceName, price) {
  const phone = "9448635922";
  const text = `Hello Garden Satellite,%0A%0AI want to book:%0AService: ${serviceName}%0APrice: ₹${price}%0A%0APlease share availability.`;
  window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
}

