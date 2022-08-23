function myFunction() {
  var myLinks = document.getElementById("myLinks");
  var menuLogo = document.getElementById("menuLogo");
  var x = document.getElementById("nav-mobile-x")
  if (myLinks.style.display === "block") {
    myLinks.style.display = "none";
    menuLogo.style.display = "block";
  } else {
    myLinks.style.display = "block";
    menuLogo.style.display = "none";
  }
}