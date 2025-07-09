// function showProperties(element){
//   document.getElementById('message').innerHTML = element.alt;
// }

function update(previewPic) {
  const display = document.getElementById("image");
  display.innerHTML = previewPic.alt;
  display.style.backgroundImage = `url('${previewPic.src}')`;
  console.log("Updated to: " + previewPic.alt);
}

function reset() {
  const display = document.getElementById("image");
  display.innerHTML = "Hover over an image below to display here.";
  display.style.backgroundImage = "";
  console.log("Reset to default");
}

function init() {
  const images = document.querySelectorAll(".preview");
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
    console.log("tabindex added to image: " + i);
  }
}
