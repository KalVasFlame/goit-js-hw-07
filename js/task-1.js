const categoriesRef = document.querySelector('#categories');
console.log(`В списке ${categoriesRef.children.length} категории.`);

const titlesRef = document.querySelectorAll('h2');
const itemListRef = document.querySelectorAll('.item > ul')

console.log('Категория:', titlesRef[0].innerText)
console.log('Количество элементов:', itemListRef[0].childElementCount)

console.log('Категория:', titlesRef[1].innerText)
console.log('Количество элементов:', itemListRef[1].childElementCount)

console.log('Категория:', titlesRef[2].innerText)
console.log('Количество элементов:', itemListRef[2].childElementCount)


