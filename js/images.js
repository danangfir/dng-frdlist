export function changeImage(input) {
  var reader;
  if (input.files && input.files[0]) {
    reader = new FileReader();
    reader.onload = function(e) {
      outputImages.setAttribute('src', e.target.result);
    }
    reader.readAsDataURL(input.files[0]);
  }
  inputDiv.style.display="none";
  outputImages.style.width="100px";
  outputImages.style.height="100px";
  imageDiv.style.borderWidth = "0px";
}
