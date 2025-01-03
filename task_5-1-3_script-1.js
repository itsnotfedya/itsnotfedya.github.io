var showMoreButton = document.querySelector(".show-more");
var cells = document.querySelectorAll(".swiper-slide-copy");
var isAllShown = false;

function updateCellVisibility() {
  cells.forEach(function (cell, index) {
    if (isAllShown) {
      cell.style.display = "flex";
    } else {
      if (window.innerWidth >= 1120) {
        if (index >= 8) {
          cell.style.display = "none";
        } else {
          cell.style.display = "flex";
        }
      } else if (window.innerWidth < 1120) {
        if (index >= 6) {
          cell.style.display = "none";
        } else {
          cell.style.display = "flex";
        }
      }
    }
  });
}

showMoreButton.addEventListener("click", function (e) {
  e.preventDefault();

  if (showMoreButton.textContent === "Показать все") {
    isAllShown = true;
    cells.forEach(function (cell) {
      cell.style.display = "flex";
    });
    showMoreButton.textContent = "Скрыть";
  } else {
    isAllShown = false;
    updateCellVisibility();
    showMoreButton.textContent = "Показать все";
  }
});

updateCellVisibility();
window.addEventListener('resize', updateCellVisibility);