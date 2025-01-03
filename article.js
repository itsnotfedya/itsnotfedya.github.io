var readMoreButton = document.querySelector(".content__read-more p");
var wrapper = document.querySelector(".content__article");

readMoreButton.addEventListener("click", function (e) {
  e.preventDefault();

  if (readMoreButton.textContent === "Читать далее") {
    wrapper.style.height = "auto";
    readMoreButton.textContent = "Свернуть";
  } else if (window.innerWidth < 768) {
    wrapper.style.height = "100px";
    readMoreButton.textContent = "Читать далее";
  } else if (768 <= window.innerWidth < 1120) {
    wrapper.style.height = "150px";
    readMoreButton.textContent = "Читать далее";
  } else if (window.innerWidth >= 1120) {
    wrapper.style.height = "160px";
    readMoreButton.textContent = "Читать далее";
  }
});
