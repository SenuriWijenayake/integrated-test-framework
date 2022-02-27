document.querySelector('crowd-form').onsubmit = function(e) {
  e.preventDefault();
  const boundingBoxes = document.querySelector('crowd-bounding-box').value.boundingBoxes;
  console.log(boundingBoxes);
}

