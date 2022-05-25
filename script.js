var imageArray = ["Images/PCs.jpeg", "Images/PC2.jpg", "Images/PC3.jpg"];
var index = 0;

function rotateImage(){
  document.querySelector("img").setAttribute("src", imageArray[index]);
  index++;
  if(index >= imageArray.length) {
    index = 0;
  }
}

setInterval(rotateImage, 5000);