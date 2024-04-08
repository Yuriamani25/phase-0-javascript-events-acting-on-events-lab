// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

//add event listener
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
  });
  
  //move dodger left
  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  //console.log(left);
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  //move dodger right
  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  //console.log(left);
    if (left < 359) {
      dodger.style.left = `${left + 1}px`;
    }
  }