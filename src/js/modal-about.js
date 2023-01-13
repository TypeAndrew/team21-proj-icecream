(() => {
  const refs = {
    openAboutModalBtn: document.querySelector('[data-modal-about-open]'),
    closeAboutModalBtn: document.querySelector('[data-modal-about-close]'),
    modal: document.querySelector('[data-modal-about]'),
  };

  refs.openAboutModalBtn.addEventListener('click', toggleModal);
  refs.closeAboutModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
