import "./styles/normalise.css";
import "./styles/general.scss";

import "./components/product.scss";
import "./components/richtext.scss";

const buttons = document.querySelectorAll<HTMLButtonElement>(
  '[data-c="product-pack-btn"]',
);
const infos = document.querySelectorAll<HTMLElement>(
  '[data-c="product-pack-info"]',
);

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.id;
    buttons.forEach((b) => b.classList.toggle("active", b === btn));
    infos.forEach((i) => i.classList.toggle("hidden", i.dataset.id !== id));
  });
});
