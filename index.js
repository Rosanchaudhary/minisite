const img = document.getElementById("carousel");
const rightBtn = document.getElementById("right-btn");
const leftBtn = document.getElementById("left-btn");

// Images are from unsplash
let pictures = [
  "./assets/fordone.png",
  "./assets/fordtwo.png",
  "./assets/fordthree.png",
  "./assets/fordfour.png",
];

let images = [
  "./assets/st_one.png",
  "./assets/st_two.png",
  "./assets/st_three.png",
  "./assets/st_four.png",
];

img.src = pictures[0];
let position = 0;

const moveRight = () => {
  if (position >= pictures.length - 1) {
    position = 0;
    img.src = pictures[position];
    return;
  }
  img.src = pictures[position + 1];
  position++;
};

const moveLeft = () => {
  if (position < 1) {
    position = pictures.length - 1;
    img.src = pictures[position];
    return;
  }
  img.src = pictures[position - 1];
  position--;
};

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);

function openTab(evt, tabName, thisTab, tabText) {
  var i, tabcontent, tablinks, tabUnderline,tabTextDiv;

  if (tabName != "tab1") {
    img.src = images[0];
    document.getElementById(thisTab).style.backgroundColor = "red";
    document.getElementById(tabText).style.color = "red";
  } else {
    img.src = pictures[0];
  }
  // tabTextDiv = document.getElementsByClassName("tab-text");
  // for (i = 0; i < tabTextDiv.length; i++) {
  //   tabTextDiv[i].style.color = "white";
  // }
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  tabUnderline = document.getElementsByClassName("tab-underline");
  for (i = 0; i < tabUnderline.length; i++) {
    tabUnderline[i].style.display = "none";
  }

  document.getElementById(tabName).style.display = "block";
  document.getElementById(thisTab).style.display = "flex";

  evt.currentTarget.className += " active";
}

// Set the first tab to be active by default
document.getElementById("tab1").style.display = "block";
document.getElementById("taba").style.display = "block";
document.getElementsByClassName("tablinks")[0].className += " active";
