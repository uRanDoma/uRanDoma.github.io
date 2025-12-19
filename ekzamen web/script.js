const button = document.querySelector("button");
const paragraphs = document.querySelectorAll("p");

button.addEventListener("click", () => {
  let max = -Infinity;
  let maxP = null;

  paragraphs.forEach(p => {
    p.style.border = "none";

    const number = parseInt(p.textContent.replace(/\D/g, ""));

    if (!isNaN(number) && number > max) {
      max = number;
      maxP = p;
    }
  });

  if (maxP) {
    maxP.style.border = "2px solid red";
  }
});
