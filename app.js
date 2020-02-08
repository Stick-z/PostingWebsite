const list = document.getElementById("list")
const enter = document.getElementById("enter")

enter.addEventListener("click", add => {
    localStorage("input", "document.getElementById("form").value")
    localStorage("node", "document.createElement("LI")")
    localStorage("node", "document.createTextNode(localStorage.getItem("input"))")
    node.appendChild(localStorage.getItem("text"))
    list.appendChild(localStorage.getItem("node"))
})
document.querySelector('#list').addEventListener('click', function({target}) {
  if (target.matches('li'))
    target.remove()
}, false);
