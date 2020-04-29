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
function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById('back2Top').style.display = "block";
  } else {
    document.getElementById('back2Top').style.display = "none";
  }
}
function cookieBanner (){
  banner = document.getElementById('cookie');
  banner.style.display = "none";
}
function toggleChat (){
  var x = document.getElementById("chatButton");
  var y = document.getElementById("chatContainer");

  if(y.style.display == "none"){
    y.style.display= "block";
  }
  else{
    y.style.display = "none";
  }
}
function openDetailModal (){
   var x = document.getElementById("detailModal");
      x.style.display = "block";
}
function closeDetailModal () {
  var x = document.getElementById("detailModal");
  x.style.display = "none";
}