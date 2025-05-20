const showPopups = document.querySelectorAll('.experience');
const closeButtons = document.querySelectorAll('.close-button');
const popups = document.querySelectorAll('.popup');

showPopups.forEach(function (popup, index) {
  popup.addEventListener('click', function () {
    popups[index].classList.add('show');
  });
});

closeButtons.forEach(function (button, index) {
  button.addEventListener('click', function () {
    popups[index].classList.remove('show');
  });
});

window.addEventListener('click', function (event) {
  popups.forEach(function (popup) {
    if (event.target == popup) {
      popup.classList.remove('show');
    }
  });
});