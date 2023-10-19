const productCarts= document.querySelectorAll('.product__cart');
const modal = document.querySelector('.modal');
const modalButton = document.querySelector('.modal__button');
const nav = document.querySelector('.main-nav');
const menuButton = document.querySelector('.main-nav__toggle');

nav.classList.add('main-nav--js');
nav.classList.add('main-nav--closed');

menuButton.addEventListener('click', () => {
nav.classList.toggle('main-nav--closed');
})

if (modal) {
  productCarts.forEach((item) => {
    item.addEventListener('click', (evt) => {
      evt.preventDefault();
      modal.classList.remove('modal--close');
    });
  })

  modalButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.add('modal--close');
  });
}
