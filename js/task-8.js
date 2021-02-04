const ref = {
  form: document.querySelector('#controls > input'),
  btnRender: document.querySelector('button[data-action="render"]'),
  btnDestroy: document.querySelector('button[data-action="destroy"]'),
  boxesContainer: document.querySelector('#boxes'),
};
let startBoxSize = 30;
const createRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
};

const destroyBoxes = () => {
  while (ref.boxesContainer.firstChild) {
    ref.boxesContainer.removeChild(ref.boxesContainer.firstChild);
  }

};

const createBoxes = amount => {
  let newBoxes = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');

    box.style.backgroundColor = `#${createRandomColor()}`;
    box.style.width = `${startBoxSize}px`;
    box.style.height = `${startBoxSize}px`;

    // newBoxes.push(box);
    newBoxes[i] = box;
    startBoxSize += 10;
  }

  ref.boxesContainer.append(...newBoxes);
};

ref.btnRender.addEventListener('click', () => {
  const boxesAmount = ref.form.value;
  createBoxes(boxesAmount);
});

ref.btnDestroy.addEventListener('click', destroyBoxes);







