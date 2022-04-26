function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("time").innerHTML = this.responseText
  }
  xhttp.open("GET", "hi.txt", true);
  xhttp.send();
}
//hi
function hi() {
  document.getElementById("idk").innerHTML = "hi"
}
