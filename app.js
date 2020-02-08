const list = document.getElementById("list")
const enter = document.getElementById("enter")

enter.addEventListener("click", add => {
    window.localStorage("input", "document.getElementById("form").value")
    window.localStorage("node", "document.createElement("LI")")
    window.localStorage("node", "document.createTextNode(window.localStorage.getItem("input"))")
    node.appendChild(window.localStorage.getItem("text"))
    list.appendChild(window.localStorage.getItem("node"))
})
document.querySelector('#list').addEventListener('click', function({target}) {
  if (target.matches('li'))
    target.remove()
}, false);
