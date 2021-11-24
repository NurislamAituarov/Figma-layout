const slider = () => {
  const sliderWrapper = document.querySelector('.container_offers_card'),
    right = document.querySelector('#img_right'),
    left = document.querySelector('#img_left'),
    slide = document.querySelectorAll('#slider_sapn'),
    cards = document.getElementsByClassName('card_offers'),
    img = document.querySelectorAll('.right_img'),
    link = document.querySelector('#link_contact');

  slide.forEach((el, i) => {
    el.addEventListener('click', () => {});
  });

  left.addEventListener('click', () => {
    sliderWrapper.prepend(cards[cards.length - 1]);
  });

  right.addEventListener('click', () => {
    sliderWrapper.appendChild(cards[0]);
  });
  // /////////////////////////////link

  link.addEventListener('mouseover', () => {
    document.querySelector('.link_contact').style.display = 'block';
  });
  link.addEventListener('mouseout', () => {
    document.querySelector('.link_contact').style.display = 'none';
  });

  window.addEventListener('scroll', () => {
    // console.log(window.pageYOffset);
    if (window.pageYOffset > 2200 && window.pageYOffset < 2300) {
      img.forEach((el, i) => {
        if (i % 2) {
          el.style.transform = 'rotateY(180deg)';
        } else {
          setTimeout(() => (el.style.transform = 'rotateX(180deg)'));
        }
      });

      setTimeout(() => {
        img.forEach((el) => {
          el.style.transform = 'rotateY(0deg)';
        });
      }, 1000);
    }
  });
};

export default slider;
