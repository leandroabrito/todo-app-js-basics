const formDOM = document.getElementById('form')
const inputDOM = document.getElementById('field')
const listDOM = document.getElementById('list')

formDOM.addEventListener("submit", (e) => {
  e.preventDefault()
  const inputValue = inputDOM.value
  createListItem(inputValue)
})

function createListItem(inputValue) {
  const listItemHTML = `<li>${inputValue} <button onclick="deleteItem(this.parentElement)">Delete</button></li>`
  listDOM.insertAdjacentHTML("beforeend", listItemHTML)
  inputDOM.value = ""
  inputDOM.focus()
}

function deleteItem(liToDelete) {
  liToDelete.remove()
}