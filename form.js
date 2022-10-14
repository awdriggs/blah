console.log(COLORS);

window.onload = (event) => {
  console.log('page is fully loaded');
  let inputField = document.querySelector('#color');

  inputField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      colorize();
    }

  });
};

function colorize(){
  let color = document.querySelector('#color').value;

  console.log(color);
  color = color.toLowerCase();
  console.log(color); //turn lower case to reduce number of possible states.

  let msg = "";

  let i = COLORS.indexOf(color);

  if(i >= 0){
    document.body.style.backgroundColor = COLORS[i];
  } else {
    let r = Math.floor(Math.random() * COLORS.length);
    alert("I don't know that color! Enjoy " + COLORS[r] + " instead.");
    document.body.style.backgroundColor = COLORS[r];
  }

  //switch ugh
  // switch(color) {
  //   case "green":
  //     msg = "that is my favorite color too!";
  //     document.body.style.backgroundColor = "green";
  //     break;
  //   case "orange":
  //     msg = "I am not a fan of orange.";
  //     document.body.style.backgroundColor = "orange";
  //     break;
  //   case "red":
  //     text = "How you like them apples?";
  //     document.body.style.backgroundColor = "red";
  //     break;
  //   case "blue":
  //     text = "How you like them apples?";
  //     document.body.style.backgroundColor = "steelblue";
  //     break;
  //   default:
  //     text = "I've never heard of that color?";
  // }

  console.log(msg);
}
