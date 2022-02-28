document.querySelector('crowd-form').onsubmit = function(e) {
  e.preventDefault();
  const boundingBoxes = document.querySelector('crowd-bounding-box').value.boundingBoxes || document.querySelector('crowd-bounding-box')._submittableValue.boundingBoxes;
  console.log(boundingBoxes);
  sessionStorage.setItem("boundingBox", JSON.stringify(boundingBoxes));
  $('#aws-submit').trigger('click');
}

