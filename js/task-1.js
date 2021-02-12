const itemsRef = document.querySelectorAll('.item');
const titlesRef = document.querySelectorAll('h2')
const itemListRef = document.querySelectorAll('.item > ul')

console.log(`В списке ${itemsRef.length} категории.`);
const makeMessage = () => {
    for (let i = 0; i < titlesRef.length; i += 1) {
        console.log('Категория:', titlesRef[i].textContent);
        console.log('Количество элементов:', itemListRef[i].childElementCount);
    }
}
makeMessage()


