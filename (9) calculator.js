let outputScreen = document.getElementById("output-screen"); //Get reference to the calculator display input

function display(num) { //function to display numbers/operators on screen
  outputScreen.value += num;  //append the clicked value button to the screen
}

function calculate() {
  try {
    outputScreen.value = eval(outputScreen.value); // evaluate mathematical expression entered
  } catch (err) {
    alert("Invalid Input"); // alert the user if input is invalid
  }
}

function Clear() {
  outputScreen.value = ""; //funciton to clear the entire display
}

function del() {
  outputScreen.value = outputScreen.value.slice(0, -1); //function to delete the last character on display
}

    function toggleNavBar(){ //function to toggle the nav bar's open/close
        const nav=document.getElementById("navbar");
        nav.classList.toggle("open");
    }


