function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("d").innerHTML = this.responseXML
  }
  xhttp.open("GET", "hi.xml", true);
  xhttp.send();
}
//hi
