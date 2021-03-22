const quantitySelector = document.querySelector(".quantity-selector");
const colorSelector = document.querySelector(".color-selector");
const blocksContainer = document.querySelector(".blocks");

quantitySelector.addEventListener("change", function (element) {
  const quantity = element.target.value;
  let markup = "";

  for (let i = 0; i < quantity; i++) {
    const block = document.createElement("div");
    block.classList = "item";
    block.innerText = i + 1;

    markup += block.outerHTML
  }

  blocksContainer.innerHTML = markup;
});

const colorTheBlock = function (block, color) {
  block.style.backgroundColor = color;
}

let changed = false;

colorSelector.addEventListener("change", function (element) {
  const color = element.target.value;
  const items = blocksContainer.querySelectorAll(".item");

  changed = !changed;

  for (let i = 0; i < items.length; i++) {
    const currentBlock = items[i];
    const blockNumber = i + 1;

    if (changed) {
      if (blockNumber % 2 !== 0) {
        colorTheBlock(currentBlock, color);
      } else {
        colorTheBlock(currentBlock, "#fff");
      }
    } else {
      if (blockNumber % 2 == 0) {
        colorTheBlock(currentBlock, color);
      } else {
        colorTheBlock(currentBlock, "#fff");
      }
    }
  }

  if (blockNumber % 2 !== 0) {
    colorTheBlock(currentBlock, color);
  }

  console.log(color);
})