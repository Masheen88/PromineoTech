/*
Asynchronous javascript and XML (AJAX) allows you to updated sections of a page 
without having to update the entire page while allowing the webpage to continue operating normally as the AJAX response is completed.
*/

//.GET - method
$.get("https://reqres.in/api/users/2", (data) => {
  console.log("Test .get Data:", data);
}); //mock API to request test data from.

//.POST - method
$.post(
  "https://reqres.in/api/users",
  { name: "Tommy", job: "Front-End Software Developer" },
  (data) => {
    console.log("test .post Data:", data);
  }
); //mock API to send test data to.
