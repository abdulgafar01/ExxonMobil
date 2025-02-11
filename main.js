const sliderControls = document.querySelector(".slider-controls");
const sliderTabs = sliderControls.querySelectorAll(".slider-tab");
const sliderIndicator = sliderControls.querySelector(".slider-indicator");

// Update the indicator
const updateIndicator = (tab, index) => {
  document.querySelector(".slider-tab.current")?.classList.remove("current");
  tab.classList.add("current");

  sliderIndicator.style.transform = `translateX(${tab.offsetLeft - 20}px)`;
  sliderIndicator.style.width = `${tab.getBoundingClientRect().width}px`;

  // Calculate the scroll position and scroll smoothly
  const scrollLeft = sliderTabs[index].offsetLeft - sliderControls.offsetWidth / 2 + sliderTabs[index].offsetWidth / 2;
  sliderControls.scrollTo({ left: scrollLeft, behavior: "smooth" });
}

// Initialize swiper instance
const swiper = new Swiper(".slider-container", {
  effect: "fade",
  speed: 1300,
  autoplay: { delay: 4000 },
  navigation: {
    prevEl: "#slide-prev",
    nextEl: "#slide-next",
  },
  on: {
    // Update indicator on slide change
    slideChange: () => {
      const currentTabIndex = [...sliderTabs].indexOf(sliderTabs[swiper.activeIndex]);
      updateIndicator(sliderTabs[swiper.activeIndex], currentTabIndex);
    },
    // reachEnd: () => swiper.autoplay.stop(),
  },
});

// Update the slide on tab click
sliderTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    swiper.slideTo(index);
    updateIndicator(tab, index);
  });
});

updateIndicator(sliderTabs[0], 0);
window.addEventListener("resize", () => updateIndicator(sliderTabs[swiper.activeIndex], 0));



// change the autoplay slider on click
document.addEventListener("DOMContentLoaded", function () {
  const playBtn = document.querySelector(".play-btn");
  let isPlaying = false; // Track autoplay state

  playBtn.addEventListener("click", function () {
      if (isPlaying) {
          swiper.autoplay.stop(); // Stop autoplay
      } else {
          swiper.autoplay.start(); // Start autoplay
      }
      isPlaying = !isPlaying; // Toggle state
      playBtn.classList.toggle("playing"); // Toggle play/pause UI
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn"); // Button to open the menu
  const mobileNav = document.querySelector(".mobile__nav"); // Mobile navigation container
  const closeBtn = document.querySelector(".mobile__nav .material-symbols-outlined"); // Close button

  // Open menu when the menu button is clicked
  menuBtn.addEventListener("click", function () {
      mobileNav.classList.add("open"); // Add 'open' class to show menu
  });

  // Close menu when the close button is clicked
  closeBtn.addEventListener("click", function () {
      mobileNav.classList.remove("open"); // Remove 'open' class to hide menu
  });

});


document.addEventListener("DOMContentLoaded", function () {
  // Select all dropdown buttons
  const dropdownBtns = document.querySelectorAll(".links__main-heading .material-symbols-outlined");

  dropdownBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
          const subMenu = this.closest("li").querySelector(".htmlCss-sub-menu");

          if (subMenu) {
              subMenu.classList.toggle("active"); // Toggle submenu visibility
              this.textContent = subMenu.classList.contains("active") ? "keyboard_arrow_up" : "keyboard_arrow_down"; // Toggle icon
          }
      });
  });
});





