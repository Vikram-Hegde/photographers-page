window.onload = () => {
  const menu = document.querySelector('.menu');

  menu.addEventListener('click', () =>
    document.querySelector('ul').classList.toggle('open')
  );
};
