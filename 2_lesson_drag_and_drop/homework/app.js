const item = document.querySelector('.item')
const placeHolders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', DragStart)
item.addEventListener('dragend', DragEnd)

for (const placeHolder of placeHolders) {
    placeHolder.addEventListener('dragover', dragover)//элемент, котороый перетаскиванием находится над элементом, куда можем поместить
    placeHolder.addEventListener('dragenter', dragenter)//заходим на территорию
    placeHolder.addEventListener('dragleave', dragleave)//
    placeHolder.addEventListener('drop', dragdrop)//отпустили
}

function DragStart(event) {
    // console.log('dragstart', event.target) //лучше способ
    // console.log('dragstart', this)
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)//чтобы при переносе не исчезал элемент

}

function DragEnd(event) {
    // event.target.classList.remove('hold', 'hide')//первый способ удалить класс
    event.target.className = 'item' //второй способ удалить класс
}

function dragover(event) {
    event.preventDefault()//чтобы не было блокировки элемента
}

function dragenter(event) {
    event.target.classList.add('hovered')
}

function dragleave(event) {
    event.target.classList.remove('hovered')
}

function dragdrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)//для перетаскивания элемента
}
