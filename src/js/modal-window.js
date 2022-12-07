(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.forEach(btn => {
    btn.addEventListener('click', onOpenModal);
  });
  refs.closeModalBtn.addEventListener('click', onCloseModal);
  refs.modal.addEventListener('click', onBackdropClick);

  function onOpenModal() {
    refs.modal.classList.remove('is-hidden');
    window.addEventListener('keydown', onEscPressKey);
  }
  function onCloseModal() {
    refs.modal.classList.add('is-hidden');
    window.removeEventListener('keydown', onEscPressKey);
  }
  function onBackdropClick(evt) {
    if (evt.currentTarget === evt.target) {
      onCloseModal();
    }
  }
  function onEscPressKey(evt) {
    if (evt.code === 'Escape') {
      onCloseModal();
    }
  }
})();
