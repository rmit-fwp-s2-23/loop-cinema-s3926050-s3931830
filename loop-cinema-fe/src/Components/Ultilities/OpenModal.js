// Config
const IS_OPEN = "modal-is-open";
const OPENING = "modal-is-opening";
const CLOSING = "modal-is-closing";
const ANIMATION_DURATION = 400; // ms
let visibleModal = null;

/**
 * get element which has the same id (modal id) as data-target attribute of the event element (a or button tag)
 * @param {*} event 
 */
const toggleModal = (event) => {
  event.preventDefault();
  const modal = document.getElementById(event.currentTarget.getAttribute("data-target"));

  typeof modal != "undefined" && modal != null && isModalOpen(modal)
    ? closeModal(modal)
    : openModal(modal);
};

/**
 * check if modal is already open
 * @param {*} modal : element
 * @returns true if is opened
 */
const isModalOpen = (modal) => {
  return modal.hasAttribute("open") && modal.getAttribute("open") != "false" ? true : false;
};

/**
 * open modal
 * @param {*} modal : element
 * @description 
 * if having scroll bar -> disabled
 * add class to modal (open and is opening)
 * set animation time for opening 
 * set attribute to element to open
 */
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

/**
 * close modal
 * @param {*} modal : element
 * @description
 * add class closing
 * set animation duration
 * remove open and closing class 
 * remove lock scroll bar
 * remove open attribute
 */
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