const countUp = () => {
  var counts = document.getElementById("clicks").innerHTML;

  number = parseInt(counts);

  console.log(typeof number);
  number += 1;
  console.log(number);
  document.getElementById("clicks").innerHTML = number;
};
