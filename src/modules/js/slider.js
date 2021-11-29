const slider = () => {
  const sliderWrapper = document.querySelector('.container_offers_card'),
    right = document.querySelector('#img_right'),
    left = document.querySelector('#img_left'),
    cards = document.getElementsByClassName('card_offers');

  left.addEventListener('click', () => {
    sliderWrapper.prepend(cards[cards.length - 1]);
  });
  right.addEventListener('click', () => {
    sliderWrapper.appendChild(cards[0]);
  });

  // touch///////////////////////

  sliderWrapper.addEventListener('touchstart', handleTouchStart, false);
  sliderWrapper.addEventListener('touchmove', handleTouchMove, false);
  let x1 = null;
  let y1 = null;

  function handleTouchStart(e) {
    const firstTouch = e.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
    // console.log(x1, y1);
  }
  function handleTouchMove(e) {
    if (!x1 || !y1) {
      return;
    }
    let x2 = e.touches[0].clientX;
    let y2 = e.touches[0].clientY;
    // console.log(x1, y1);
    let xDiff = x2 - x1;
    let yDiff = y2 - y1;
    // console.log(yDiff);

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        console.log('right');
        sliderWrapper.prepend(cards[cards.length - 1]);
      } else {
        console.log('left');
        sliderWrapper.appendChild(cards[0]);
      }
    } else {
      if (yDiff > 0) {
        console.log('down');
      } else {
        console.log('top');
      }
    }
    x1 = null;
    y1 = null;
  }
};

export default slider;
