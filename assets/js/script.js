const ratingState = document.querySelector("[data-rating-state]"),
number = document.querySelectorAll("[data-number]"),
btn = document.querySelector("[data-btn]"),
thankYouState = document.querySelector("[data-thank-you-state]");

btn.addEventListener("click", () => {
    ratingState.classList.add("active");
    thankYouState.classList.add("active");
});

let lastRatedValue = NaN;

for (let i = 0, len = number.length; i < len; i++) {
    number[i].addEventListener("click", () => {
        if (lastRatedValue) number[lastRatedValue - 1].classList.remove("active");

        lastRatedValue = Number(this.textContent);
        this.classList.add("active");
    });
};