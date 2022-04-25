function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("d").innerHTML = this.responseText
  }
  xhttp.open("GET", "hi.txt", true);
  xhttp.send();
}
//hi
