"use strict"

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  var buttons = document.getElementsByTagName("button")

for(var x of buttons) {
    x.addEventListener("click", function()){
        alert(this.innerText))
    }
}

