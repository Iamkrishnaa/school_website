//the below code will show loader until page loads
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector(
      "body").style.visibility = "hidden";
    document.querySelector(
      "#loader").style.visibility = "visible";
  } else {
    document.querySelector(
      "#loader").style.display = "none";
    document.querySelector(
      "body").style.visibility = "visible";
  }
};

//Get the button
var mybutton = document.getElementById("goUp");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}