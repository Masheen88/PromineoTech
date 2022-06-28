$(document).ready(function () {
  $("h2").attr("style", "background-color: red;");
  $(".reditem").attr("style", "color:orange;");
  document.getElementsByClassName("reditem");
  $("#Test123").attr("style", "color: purple");
  $("h3.reditem").attr("style", "background-color:blue;");
  $("ul.reditem").attr("style", "background-color:blue;");
});

$(function () {
  document.getElementById("submit").addEventListener("click", () => {
    var table = document.getElementById("tasks");
    var newRow = table.insertRow();
    let newCell = newRow.insertCell(0);
    let newText = document.createTextNode("Test");
    let newFunction = newRow.insertCell(1);
    let newDelete = doucment.createElement("button", this.nodeValue("test"));
    newFunction.appendChild(newDelete);
    newCell.appendChild(newText);
  });
});
