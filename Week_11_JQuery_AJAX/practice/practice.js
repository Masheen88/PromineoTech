/*

// $(Selector).action()

// ALL Selector
$("*");

// Specific Tag Selector
$("p");

// Element and Parent Selector
$(":button"); //Gets the button and the parent element.

// Select Even Elements
$("tr:even");

// Select Odd Elements
$("tr:odd");

// Select Only the Parent Element
$("button:parent");

// Select By Attribute
$("[href]"); //ie. Select any element with an href attribute

// Select form Elements.
$(":input"); //ie. Selects an entire form for example.

*/
console.log("Week 11 Class Practice", "\n \n");

/*
//3 main types of Events

// Mouse Events //
//Mouse enters bounds
$("h1:first").on("mouseenter", () => {
  console.log("mouseenter test");
});
// Mouse leaves bounds
$("h1:first").on("mouseleave", () => {
  console.log("mouseleave test");
});
// Mouse Double Click
$("h1:first").on("dblclick", () => {
  console.log("dblclick test");
});
// Click
$("h1:first").on("click", () => {
  console.log("click test");
});
// Mouse button down - waits for left-click to push
$("h1:first").on("mousedown", () => {
  console.log("mousedown test");
});
// Mouse button up 0 waits for left-click to release
$("h1:first").on("mouseup", () => {
  console.log("mouseup test");
});

//3 main types of Keyboard Events //
// Keypress
$("h1:first").on("keypress", () => {
  console.log("keypress test");
});

// Keydown
$("h1:first").on("keydown", () => {
  console.log("keydown test");
});
// Keyup
$("h1:first").on("keyup", () => {
  console.log("keyup test");
});
//3 main types of  Form Events //
// Change
$("h1:first").on("change", () => {
  console.log("change test");
});
// Focus
$("h1:first").on("focus", () => {
  console.log("focus test");
});
// Blur
$("h1:first").on("blur", () => {
  console.log("blur test");
});

//Global Events
//Browser Elements
// Browser (error)-- Can throw an error
$("browser").on("error", () => {
  console.log("browser error test");
});
// Browser (scroll)-- Can scroll.
$("browser").on("scroll", () => {
  console.log("browser scroll test");
});

//Document Elements
// Browser (load) - ie. elemnt is added to the DOM
$("document").on("load", () => {
  console.log("load test");
});
// Browser (unload) - ie. elemnt is removed from the DOM
$("document").on("scroll", () => {
  console.log("unload test");
});
*/

console.log("effects");
/*
// Effects //
// Hide
$("h1").click(function () {
  $(this).hide();
});

// Hide ex2
$("h1").on("click", function () {
  $(this).hide();
});

//Show
$("h1").on("click", function () {
  $(this).show();
});

// Show all ex2
$("h1").on("click", function () {
  $("*").show();
});

// Toggle - Toggles visibility
// Show all ex2
$("h1").on("click", function () {
  $("#check").toggle();
});

// Animations //
// Fade Out
$("h1:first").on("click", function () {
  $(this).fadeOut();
});

// Fade In
$("h1:first").on("click", function () {
  $("h1").fadeIn();
});

// This is useful when having multiple forms  / elements.
// Slide Down
$("h1:last").on("click", function () {
  $(this).slideDown();
});

// Slide Up
$("p").on("click", function () {
  $(this).slideUp();
});

//
*/
console.log("Conditionals");
/*
// Conditionals
if ($("p").is(":visible")) {
  console.log("Conditioanls Testing");
}

//On Error
$("form").on("Error", function () {
  if (!$(this).hasClass("broken-form")) {
    $(this).prop("innerHTML", "Broken").addClass("BrokenForm");
  }
});

// Ajax - HTTP Reuqests are the simplest requests.

//GET
$.ajax({
  url: "/urlString", //URL to make AJAX request
  method: "GET", //AJAX request Method name
  accepts: application / json, // Accepts - defines the response data expected from the server
  async: true, // async defaults to true
  beforeSend: function (jqXHR, settings) {
    // beforeSend executes before request - used to apply settings
    //jqXHR is a potential external variable.
    return true;
  },
  crossDomain: false, // is generally insecure - opens the potential for hacking.
  cache: true, //Cache defines that it needs to be cached in the browser
  // statusCode: {404: function(alert("Page not found"))},
  //If a code is met you can perform a function
  timeout: 20000,
})
  .done(function (responseData, textStatus, jqXHR) {
    //Do something with the data
  })
  .fail(function (responseData, textStatus, error) {
    // Check for errors
  })
  .always(function (jqXHR, statusText) {
    statusText = "success";
  });

$.get("Test", { name: "Bob", time: "2pm" }, function (data) {
  alert("data loaded");
}); // Can use .done .fail .always if needed.

$.getJSON(); // can be used.

$.post("nameofform", { name: "bob", time: "2pm" }); // doesn't need a function - can use .done .fail .always
*/

//Jquery calls from top to bottom
//Poke' Search
// const pkSearch = () => {
//   var pkId = $("pkName").text();
// //   $.get(`http://pokeapi.co/api/v2/pokemon/${pkId}`).done(alert("works"));

// };

// const initialize = () => {
//   $("#search").on("click", pkSearch());
// };

// $(document).ready(function () {
//   var id = 2;
//   $.get(`https://pokeapi.co/api/v2/pokemon/${id}`, function (pokemon) {
//     console.log(pokemon.name);
//     console.log(pokemon);
//     $(".image").attr("src", pokemon.sprites.front_default);
//   });
// });

//Input values

$("button").on("click", function () {
  //Can prevent default if needed on a button
  var id = $("#pkName").val();
  $.get(`https://pokeapi.co/api/v2/pokemon/${id}`, function (pokemon) {
    console.log(id);
    $(".image").attr("src", pokemon.sprites.front_default);
  });
});

//
