const breakpoint = 768;
let mySwiper;

function initializeSwiper() {
  if (window.innerWidth < breakpoint && !mySwiper) {
    mySwiper = new Swiper(".swiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      spaceBetween: 16,
      slidesPerView: 1.3,
    });

    const gridContainer = document.querySelector(".grid-container");
    if (gridContainer) {
      gridContainer.classList.remove("grid-container");
    }
  } else if (window.innerWidth >= breakpoint && mySwiper) {
    mySwiper.destroy();
    mySwiper = null;

    const swiperWrapper = document.querySelector(".swiper-wrapper");
    swiperWrapper.classList.add("grid-container");
  }
}

initializeSwiper();

window.addEventListener("resize", initializeSwiper);