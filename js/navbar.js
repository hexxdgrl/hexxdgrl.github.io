function openNav() {
  document.getElementById("sideNav").style.width = "225px";
  document.getElementById("sideBarOpen").style.left = "-550px";
  document.getElementById("sideNav").style.borderRight = "5px";
  document.getElementById("sideNav").style.borderRightStyle = "solid";
  document.getElementById("sideNav").style.borderColor = "var(--bor-col)";
  document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
  document.getElementById("sideNav").style.width = "0px";
  document.getElementById("sideBarOpen").style.left = "5px";
  document.getElementById("sideNav").style.borderRight = "0px";
  document.getElementById("sideNav").style.borderRightStyle = "none";
  document.getElementById("main").style.marginLeft = "0px";
}
