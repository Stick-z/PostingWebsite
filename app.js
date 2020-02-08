const list = document.getElementById("list")
const enter = document.getElementById("enter")

enter.addEventListener("click", add => {
    var input = document.getElementById("form").value
    var node = document.createElement("LI")
    var text = document.createTextNode(input)
    node.appendChild(text)
    list.appendChild(node)
})
document.querySelector('#list').addEventListener('click', function({target}) {
  if (target.matches('li'))
    target.remove()
}, false);
