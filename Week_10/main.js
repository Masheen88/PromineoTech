//Class to define a list of contacts
class ContactList {
  constructor(id, email, fullName) {
    this.id = id;
    this.email = email;
    this.fullName = fullName;
    this.contacts = [];
  }

  addContact(contact) {
    this.contact.push(contact);
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
  console.log("ContactId Test:", contactId);
  console.log("Contacts Test:", contacts[0]);
  console.log("Contacts Email Test:", contacts[0].id);
  console.log("Contacts Email Test:", contacts[0].email);
  console.log("Contacts Full Name Test:", contacts[0].fullName);
  addContact(contactId, contacts[0].email, contacts[0].fullName);
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

function createDeleteContactButton() {
  let btn = document.createElement("button");
  btn.className = "btn btn-primary";
  btn.innerHTML = "Delete";
  console.log("Testing:", btn);
  //after rendering returns the button value

  return btn;
}

function addContact(contactId, fullName, email) {
  let contactTable = document.getElementById("contactTable");
  let contactRow = contactTable.insertRow(1);
  let contactNumber = contactRow.insertCell(0);
  let contactFullName = contactRow.insertCell(1);
  let contactEmail = contactRow.insertCell(1);
  let contactDeleteBtn = contactRow.insertCell(3);

  contactNumber.innerHTML = contactId;
  contactFullName.innerHTML = fullName;
  contactEmail.innerHTML = email;

  contactDeleteBtn.innerHTML = createDeleteContactButton();
}
