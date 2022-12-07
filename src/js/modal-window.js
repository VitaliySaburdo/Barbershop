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
    const body = document.body;
    body.style.height = '100vh';
    body.style.overflowY = 'hidden';
  }
  function onCloseModal() {
    refs.modal.classList.add('is-hidden');
    window.removeEventListener('keydown', onEscPressKey);
    const body = document.body;
    body.style.position = '';
    body.style.top = '';
    body.style.height = '';
    body.style.overflowY = '';
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
