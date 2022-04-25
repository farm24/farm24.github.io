function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload() = function() {
    document.getElementById("b").innerHTML = this.responseText;
  }
  xhttp.open("GET", "hi.txt", true);
  xhttp.send();
}
