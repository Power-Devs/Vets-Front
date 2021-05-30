var slider = document.getElementById("userRating");
var output = document.getElementById("userNota");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}