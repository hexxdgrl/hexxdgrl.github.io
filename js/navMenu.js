function openNav() {
  document.getElementById("sideNav").style.width = "100vw";
  document.getElementById("sideBarOpen").style.left = "-100vw";
  document.getElementById("sideNav").style.borderRight = "2px";
  document.getElementById("sideNav").style.borderRightStyle = "solid";
  document.getElementById("sideNav").style.borderColor = "var(--bor-col)";
}
function closeNav() {
  document.getElementById("sideNav").style.width = "0px";
  document.getElementById("sideBarOpen").style.left = "0px";
  document.getElementById("sideNav").style.borderRight = "0px";
  document.getElementById("sideNav").style.borderRightStyle = "none";
}
var home = "index.html";
var sites = "interesting-sites.html";
var layouts = "learning_layouts.html";
var keebing = "silly-keyboard-stuff.html";
var swallowtail = "swallowtail.html";
function getPages() {
  document
    .getElementById("navmenu")
    .insertAdjacentHTML(
      "beforeend",
      '<div id="sideNav" class="sideNav">\n' +
        '<a class="closebutton" onclick="closeNav()">close</a>\n' +
        '<a href="' +
        home +
        '">home</a>\n' +
        '<a href="' +
        layouts +
        '">learning_engram</a>\n' +
        '<a href="' +
        keebing +
        '">general_keebing\n' +
        '<a href="' +
        swallowtail +
        '">swallowtail_keyboard</a>' +
        '<a href="' +
        sites +
        '">cool_sites</a>' +
        "</div>\n",
    );
}
function getTitle() {
  let title = document.getElementById("pagetitle").innerText;
  document.getElementById("sideBarOpen").innerText += title;
}
