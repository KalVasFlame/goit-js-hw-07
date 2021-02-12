const ingredients = ['Картошка','Грибы','Чеснок','Помидоры','Зелень','Приправы',]
const ulRef = document.querySelector('#ingredients')
 
// const createListItem = (ingredients) => {
//   for (let i = 0; i < ingredients.length; i += 1) { 
//     const listItem = document.createElement('li');
//     listItem.textContent = ingredients[i];
//     ulRef.appendChild(listItem);
//   }
// }
// const createListItem = (ingredients) => {
//   for (let ingredient of ingredients) { 
//     const listItem = document.createElement('li');
//     listItem.textContent = ingredient;
//     ulRef.appendChild(listItem);
//   }
// }
const createListItem = ingredients => { 
  ingredients.map(item => { 
    const listItem = document.createElement('li');
    listItem.textContent = item;
    ulRef.appendChild(listItem);
  })
}

createListItem(ingredients)

