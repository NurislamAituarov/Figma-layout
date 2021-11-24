let trigger = false;
const header = () => {
  const ul = document.querySelector('ul'),
    li = document.querySelectorAll('li'),
    burger = document.querySelector('.burger'),
    spanBurger = document.querySelectorAll('#burger_span');

  if (window.innerWidth < 400) {
    ul.style.display = 'none';
    burger.style.display = 'block';
    window.addEventListener('click', windowClick);
  }
  window.addEventListener('resize', () => {
    if (window.innerWidth < 400) {
      ul.style.display = 'none';
      burger.style.display = 'block';
      window.addEventListener('click', windowClick);
    }
    if (window.innerWidth > 400) {
      ul.style.display = 'flex';
      burger.style.display = 'none';
      window.removeEventListener('click', windowClick);
    }
  });

  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    if (trigger) {
      hiddenBurger();
    } else {
      spanBurger[1].style.display = 'none';
      spanBurger[2].style.cssText = 'transform:rotate(45deg); top:50%';
      spanBurger[0].style.cssText = 'transform:rotate(-45deg); top:50%';
      ul.style.display = 'block';
      trigger = true;
    }
  });

  function hiddenBurger(e) {
    spanBurger[1].style.display = 'block';
    spanBurger[2].style.cssText = 'transform:rotate(0deg); bottom:0';
    spanBurger[0].style.cssText = 'transform:rotate(0deg); top:0';
    ul.style.display = 'none';
    trigger = false;
  }

  function windowClick(e) {
    const main = [...li];
    const result = main.filter((el) => {
      if (el === e.target) {
        return el;
      }
    });
    if (result[0] !== e.target) {
      hiddenBurger();
    }
  }
};
export default header;
