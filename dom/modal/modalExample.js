const openButton = document.querySelector("#openOverlay");
const body = document.querySelector("body")

openButton.addEventListener("click", function(element){
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  overlayElement.addEventListener("click", function(element) {
    if (!element.target.classList.contains("content")) {
    body.removeChild(overlayElement);
    }
  })
  const containerElement = document.createElement("div");
  containerElement.classList.add("modal-container");

  const contentElement = document.createElement("div");
  contentElement.classList.add("content");
  contentElement.innerHTML = "Modal window!";

  const closeElement = document.createElement("a");
  closeElement.classList.add("close");
  closeElement.textContent = "x";
  closeElement.href = "#";
  closeElement.addEventListener("click", function(element) {
    element.preventDefault();
    body.removeChild(overlayElement);
  })
  
  body.appendChild(overlayElement);
  overlayElement.appendChild(containerElement);
  containerElement.appendChild(closeElement);
  containerElement.appendChild(contentElement);
});