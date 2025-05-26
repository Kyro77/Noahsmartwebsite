document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".project-slider");
    const leftBtn = document.querySelector(".scroll-left");
    const rightBtn = document.querySelector(".scroll-right");
  
    // Button-based scroll
    if (slider && leftBtn && rightBtn) {
      leftBtn.addEventListener("click", () => {
        slider.scrollBy({ left: -600, behavior: "smooth" });
      });
  
      rightBtn.addEventListener("click", () => {
        slider.scrollBy({ left: 600, behavior: "smooth" });
      });
    } else {
      console.error("Slider or buttons not found.");
    }
  
    // Drag/Touch scroll
    let isDragging = false;
    let startX;
    let currentX;
    let prevScrollLeft;
  
    // Mouse Events
    slider.addEventListener("mousedown", (e) => {
      isDragging = true;
      startX = e.pageX;
      prevScrollLeft = slider.scrollLeft;
      slider.classList.add("dragging");
    });
  
    slider.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      e.preventDefault();
      currentX = e.pageX;
      const delta = currentX - startX;
      slider.scrollLeft = prevScrollLeft - delta;
    });
  
    slider.addEventListener("mouseup", () => {
      isDragging = false;
      slider.classList.remove("dragging");
    });
  
    slider.addEventListener("mouseleave", () => {
      isDragging = false;
      slider.classList.remove("dragging");
    });
  
    // Touch Events
    slider.addEventListener("touchstart", (e) => {
      isDragging = true;
      startX = e.touches[0].clientX;
      prevScrollLeft = slider.scrollLeft;
    });
  
    slider.addEventListener("touchmove", (e) => {
      if (!isDragging) return;
      const touchX = e.touches[0].clientX;
      const delta = touchX - startX;
      slider.scrollLeft = prevScrollLeft - delta;
    });
  
    slider.addEventListener("touchend", () => {
      isDragging = false;
    });
  });


  function copyEmailToClipboard(event) {
    event.preventDefault(); // prevent default link behavior
    const email = "Noah_smart@outlook.com";
    navigator.clipboard.writeText(email).then(() => {
      alert("Email copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy email: ", err);
    });
  }


const header = document.getElementById('mainHeader');
let lastScroll = 0; // <-- Initialize the variable

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 50) {
    // Scrolling down - hide header
    header.classList.add('hidden');
  } else {
    // Scrolling up - show header
    header.classList.remove('hidden');
  }

  lastScroll = currentScroll;
});
