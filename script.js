

const tooltip = document.getElementById("tooltip");
const positionSelector = document.getElementById("position");
const codeBox = document.getElementById("codeBox");
const copyBtn = document.querySelector(".copy-btn")

positionSelector.addEventListener("change", (e) => {
  const position = e.target.value;
  tooltip.setAttribute("data-position", position);
  generateCode(position);
});

document.querySelector(".hover-btn").addEventListener("mouseenter", () => {
  tooltip.style.visibility = "visible";
  tooltip.style.opacity = "1";
});

document.querySelector(".hover-btn").addEventListener("mouseleave", () => {
  tooltip.style.visibility = "hidden";
  tooltip.style.opacity = "0";
});

function generateCode(position) {
  const html = `<button class="hover-btn">Hover me 👀</button>\n  <div class="tooltip" data-position="${position}">This is a magic tooltip!</div>`;
  codeBox.innerText = html;
}

generateCode(positionSelector.value);

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(codeBox.textContent.trim());
  
  copyBtn.textContent = "Copied!";
  setTimeout(() => {
    copyBtn.textContent = "Copy Tooltip Code";
  }, 1200);
});

