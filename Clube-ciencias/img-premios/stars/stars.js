document.addEventListener("DOMContentLoaded", function () {
  Stars(".star1", "rating-value1");
  Stars(".star2", "rating-value2");
  Stars(".star3", "rating-value3");
  Stars(".star4", "rating-value4");
  Stars(".star5", "rating-value5");
  Stars(".star6", "rating-value6");
  Stars(".star7", "rating-value7");
  Stars(".star8", "rating-value8");
  Stars(".star9", "rating-value9");
  Stars(".star10", "rating-value10");
});

function Stars(starSelector, ratingValueId) {
  const stars = document.querySelectorAll(starSelector);
  const ratingValue = document.getElementById(ratingValueId);

  stars.forEach((star) => {
    star.addEventListener("click", function () {
      const rating = parseInt(star.getAttribute("data-rating"));
      ratingValue.innerText = rating;
      stars.forEach((s) => {
        const sRating = parseInt(s.getAttribute("data-rating"));
        if (sRating <= rating) {
          s.classList.add("selected");
        } else {
          s.classList.remove("selected");
        }
      });
    });
  });
}
