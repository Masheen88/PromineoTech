let id = 0;

document.getElementById("add").addEventListener("click", () => {
  let createdDate = new Date(); //Current Date is used
  let table = document.getElementById("list");
  //Adds a row below the header which is position 0
  let row = table.insertRow(1);
  row.setAttribute("id", `item-${id}`);
  //Sets value of first cell in a row ie. the 'task'
  row.insertCell(0).innerHTML = document.getElementById("new-task").value;
  row.insertCell(1).innerHTML = `
  ${createdDate.getFullYear()}-${
    createdDate.getMonth() + 1
  }-${createdDate.getDate()}`;
  row.insertCell(2).innerHTML = document.getElementById("new-start-date").value;
  row.insertCell(3).innerHTML = document.getElementById("new-end-date").value;
  let actions = row.insertCell(4);
  actions.appendChild(createDeleteButton(id++));
  document.getElementById("new-task").value = "";
});

function createDeleteButton(id) {
  let btn = document.createElement("button");
  btn.className = "btn btn-primary";
  btn.id = id;
  btn.innerHTML = "Delete";
  btn.onclick = () => {
    console.log(`Deleting row with id:, item-${id}`);
    let elementToDelete = document.getElementById(`item-${id}`);
    //Finds the parenmt of the element and deletes it.
    elementToDelete.parentNode.removeChild(elementToDelete);
  };
  return btn;
}
