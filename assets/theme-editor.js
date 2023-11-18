function hideProductModal() {
  const productModal = document.querySelectorAll('product-modal[open]');
  productModal && productModal.forEach((modal) => modal.hide());
}

document.addEventListener('shopify:block:select', function (event) {
  hideProductModal();
  const blockSelectedIsSlide = event.target.classList.contains('slideshow__slide');
  if (!blockSelectedIsSlide) return;

  const parentSlideshowComponent = event.target.closest('slideshow-component');
  parentSlideshowComponent.pause();

  setTimeout(function () {
    parentSlideshowComponent.slider.scrollTo({
      left: event.target.offsetLeft,
    });
  }, 200);
});

document.addEventListener('shopify:block:deselect', function (event) {
  const blockDeselectedIsSlide = event.target.classList.contains('slideshow__slide');
  if (!blockDeselectedIsSlide) return;
  const parentSlideshowComponent = event.target.closest('slideshow-component');
  if (parentSlideshowComponent.autoplayButtonIsSetToPlay) parentSlideshowComponent.play();
});

document.addEventListener('shopify:section:load', () => {
  hideProductModal();
  const zoomOnHoverScript = document.querySelector('[id^=EnableZoomOnHover]');
  if (!zoomOnHoverScript) return;
  if (zoomOnHoverScript) {
    const newScriptTag = document.createElement('script');
    newScriptTag.src = zoomOnHoverScript.src;
    zoomOnHoverScript.parentNode.replaceChild(newScriptTag, zoomOnHoverScript);
  }
});

document.addEventListener('shopify:section:reorder', () => hideProductModal());

document.addEventListener('shopify:section:select', () => hideProductModal());

document.addEventListener('shopify:section:deselect', () => hideProductModal());

document.addEventListener('shopify:inspector:activate', () => hideProductModal());

document.addEventListener('shopify:inspector:deactivate', () => hideProductModal());
/* Split Layout */
.split-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.left-side {
    /* Style as needed for the image section */
}

.right-side {
    /* Style as needed for the product display section */
}

/* Typography */
body {
    font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    background-color: #FFFFFF;
    color: #000000;
}

h1 {
    font-size: 2em; /* Adjust as needed */
    font-weight: bold;
}

/* Color Scheme */
.button-cta {
    background-color: red;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.button-cta:hover {
    background-color: darkred;
}

/* Navigation Bar */
.navigation-menu {
    list-style-type: none;
    padding: 0;
}

.navigation-menu li {
    display: inline-block;
    margin-right: 20px; /* Adjust spacing as needed */
}

/* Responsive Design */
@media (max-width: 768px) {
    .split-layout {
        grid-template-columns: 1fr;
    }

    .navigation-menu li {
        display: block;
        margin-bottom: 10px;
    }
}

/* Footer */
footer {
    background-color: #f2f2f2;
    padding: 20px;
    text-align: center;
}

