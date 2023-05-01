const stars = document.querySelectorAll(".stars i");
const starsNone = document.querySelector(".rating-box");

// ---- ---- Stars ---- ---- //
stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      // ---- ---- Active Star ---- ---- //
      index1 >= index2
        ? star.classList.add("active")
        : star.classList.remove("active");
    });
  });
});
