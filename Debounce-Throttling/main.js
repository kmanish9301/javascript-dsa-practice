const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearInterval(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
input.addEventListener("input", (e) => {
  defaultText.textContent = e.target.value;
});
input.addEventListener(
  "input",
  debounce((e) => {
    debounceText.textContent = e.target.value;
  }, 500),
);
