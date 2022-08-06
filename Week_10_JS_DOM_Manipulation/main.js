//Class to define a list of contacts
class ContactList {
  constructor(id, email, fullName) {
    this.id = id;
    this.email = email;
    this.fullName = fullName;
    this.contacts = [];
  }

  addContact(contact) {
    this.contacts.push(contact);
  }

  deleteContact(contact) {
    let contactIndex = this.contacts.indexOf(contact);
    this.contacts.splice(contactIndex, 1);
  }
}

let contacts = [];
let contactId = 0;

onClick("submitContactButton", () => {
  contacts.push(
    new ContactList(
      contactId++,
      getEmailValue("emailInput"),
      getEmailValue("fullNameInput")
    )
  );
  console.log("testing of contacts:", contacts);
  //   console.log(contactId, "ContactId Test:", contactId);
  //   console.log(contactId, "Contacts Test:", contacts[0]);
  //   console.log("Contacts Email Test:", contacts[0].id);
  //   console.log("Contacts Email Test:", contacts[0].email);
  //   console.log("Contacts Full Name Test:", contacts[0].fullName);
  let newEmail = contacts.splice(-1);
  // console.log("newemail:", newEmail[0].email);
  //   console.log("arrayTest:", newEmail[0].ContactList.email);
  addContact(contactId, newEmail[0].email, newEmail[0].fullName);
  //   console.log("Contacts Array:", contacts);
});

function onClick(id, formAction) {
  let element = document.getElementById(id);
  element.addEventListener("click", formAction);
  //   console.log("formAction Testing:", formAction);
  //   console.log("elementeTesting:", element);
  return element;
}

function getEmailValue(id) {
  //   console.log("valueIDTesting", id);
  let idValue = document.getElementById(id).value;
  console.log("idValue Test:", idValue);
  return idValue;
}

function createDeleteContactButton(id) {
  let btn = document.createElement("button");
  btn.className = "btn btn-primary";
  btn.setAttribute("id", id[0]);
  btn.innerHTML = "Delete!";
  console.log("Btn Testing:", btn);
  btn.onclick = () => {
    // console.log("Contact Testing in Function:", id);

    btn.parentNode.removeChild(btn);
    let rowId = id[0];
    document.getElementById(`table-row-${rowId}`).innerHTML = "";
  };

  return btn;
}

function addContact(contactId, fullName, email) {
  let contactInTable = [contactId, fullName, email];
  console.log("contactInTable Testing:", contactInTable);
  // console.log("fullName Test:", fullName);
  let contactTable = document.getElementById("contactTable");
  let contactRow = contactTable.insertRow(1);
  let contactTableHeader = contactTable.createTHead();
  let contactNumber = contactRow.insertCell(-1);
  let contactFullName = contactRow.insertCell(1);
  let contactEmail = contactRow.insertCell(2);
  let contactDeleteBtn = contactRow.insertCell(3);

  contactRow.setAttribute("id", `table-row-${contactId}`);

  contactNumber.innerHTML = contactId;
  contactFullName.innerHTML = fullName;
  contactEmail.innerHTML = email;
  contactDeleteBtn.appendChild(createDeleteContactButton(contactInTable));
}
