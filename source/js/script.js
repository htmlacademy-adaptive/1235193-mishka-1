const productCart = document.querySelector('.product__cart');
const modal = document.querySelector('.modal');
const modalButton = document.querySelector('.modal__button');

productCart.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.remove('modal--close');
});

modalButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.add('modal--close');
});
