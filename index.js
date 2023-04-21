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

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    tablinks[i].style.color = "black";
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
  evt.currentTarget.style.color = "red";
}

// Set the first tab to be active by default
document.getElementById("tab1").style.display = "block";
document.getElementsByClassName("tablinks")[0].className += " active";
