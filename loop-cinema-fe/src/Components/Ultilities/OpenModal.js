// Config
const IS_OPEN = "modal-is-open";
const OPENING = "modal-is-opening";
const CLOSING = "modal-is-closing";
const ANIMATION_DURATION = 400; // ms
let visibleModal = null;

// Toggle modal
const toggleModal = (event) => {
  event.preventDefault();
  const modal = document.getElementById(event.currentTarget.getAttribute("data-target"));

  typeof modal != "undefined" && modal != null && isModalOpen(modal)
    ? closeModal(modal)
    : openModal(modal);
};

// Is modal open
const isModalOpen = (modal) => {
  return modal.hasAttribute("open") && modal.getAttribute("open") != "false" ? true : false;
};

// Open modal
const openModal = (modal) => {
  if (isScrollbarVisible()) {
    document.documentElement.style.setProperty("--scrollbar-width", `${getScrollbarWidth()}px`);
  }
  document.documentElement.classList.add(IS_OPEN, OPENING);
  setTimeout(() => {
    visibleModal = modal;
    document.documentElement.classList.remove(OPENING);
  }, ANIMATION_DURATION);
  modal.setAttribute("open", true);
};

// Close modal
const closeModal = (modal) => {
  visibleModal = null;
  document.documentElement.classList.add(CLOSING);
  setTimeout(() => {
    document.documentElement.classList.remove(CLOSING, IS_OPEN);
    document.documentElement.style.removeProperty("--scrollbar-width");
    modal.removeAttribute("open");
  }, ANIMATION_DURATION);
};

// Close with a click outside
document.addEventListener("click", (event) => {
  if (visibleModal != null) {
    const modalContent = visibleModal.querySelector("article");
    const isClickInside = modalContent.contains(event.target);
    !isClickInside && closeModal(visibleModal);
  }
});

// Close with Esc key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && visibleModal != null) {
    closeModal(visibleModal);
  }
});

// Get scrollbar width
const getScrollbarWidth = () => {
  // Creating invisible container
  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll"; // forcing scrollbar to appear
  outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement("div");
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
};

// Is scrollbar visible
const isScrollbarVisible = () => {
  return document.body.scrollHeight > window.screen.height;
};

export {
    toggleModal,
    closeModal
};