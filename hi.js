function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload() = function() {
    document.getElementById("d").innerHTML = this.response;
  }
  xhttp.open("GET", "hi.", true);
  xhttp.send();
}
