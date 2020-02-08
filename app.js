const list = document.getElementById("list");
const enter = document.getElementById("enter");
list.innerHTML = localStorage.getItem("items");

enter.addEventListener("click", add => {
    var input = document.getElementById("form").value;
    var node = document.createElement("LI");
    var text = document.createTextNode(input);
    node.appendChild(text);
    list.appendChild(node);
    localStorage.setItem('items', document.getElementById("list").innerHTML);
})
document.querySelector('#list').addEventListener('click', function({target}) {
  if (target.matches('li'));
    target.remove();
    localStorage.setItem('items', document.getElementById("list").innerHTML);
}, false);
