const img = document.getElementById("carousel");
const rightBtn = document.getElementById("right-btn");
const leftBtn = document.getElementById("left-btn");



// Images are from unsplash
let pictures = [
  "./images/e_one.png",
  "./images/e_two.png",
  "./images/e_three.png",
  "./images/e_four.png",
  // "./assets/fordone.png",
  // "./assets/fordtwo.png",
  // "./assets/fordthree.png",
  // "./assets/fordfour.png",
];

let images = [
  "./images/st_one.png",
  "./images/st_two.png",
  "./images/st_three.png",
  "./images/st_four.png",
  // "./assets/est_one.png",
  // "./assets/est_two.png",
  // "./assets/est_three.png",
  // "./assets/est_four.png",
];

var listOfImages = pictures;
img.src = pictures[0];
let position = 0;

const moveRight = () => {
  if (position >= listOfImages.length - 1) {
    position = 0;
    img.src = listOfImages[position];
    return;
  }
  img.src = listOfImages[position + 1];
  position++;
};

const moveLeft = () => {
  if (position < 1) {
    position = listOfImages.length - 1;
    img.src = listOfImages[position];
    return;
  }
  img.src = listOfImages[position - 1];
  position--;
};

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);

function openTab(evt, tabName, thisTab, tabText) {
  var i, tabcontent, tablinks, tabUnderline;


  if (tabName != "tab1") {
    img.src = images[0]; 
    listOfImages = images;
    document.getElementById(thisTab).style.backgroundColor = "red";
    document.getElementById(tabText).style.color = "red";
    document.getElementById("form-button-title").innerHTML = "לחוות עוצמה";
  } else {
    img.src = pictures[0];
    listOfImages = pictures;
    document.getElementById("taby").style.color = "white";
    document.getElementById("form-button-title").innerHTML = "זה לחוות יוקרה";
  }

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
