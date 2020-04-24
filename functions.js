function toggleHeader() {

  var x = document.getElementById("navBar");
  var y = document.getElementById("mainNav");

  if (x.style.display == "none") {
     x.style.display = "block";
     y.style.display = "none";
  } else {
    x.style.display = "none";
  }
}
function alertData() {
  alert("Hello");
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}