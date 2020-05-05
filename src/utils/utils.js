
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function clearColorButton() {
  const listButtonBirdColor = [...document.querySelectorAll('.button_bird--color')];
  listButtonBirdColor.forEach((item) => {
    const itemButton = item;
    itemButton.style.background = 'none';
  });
}

export { getRandomInt, clearColorButton };
