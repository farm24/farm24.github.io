function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("dd").innerHTML = Date()
  }
  //xhttp.open("GET", "hi.txt", true);
  xhttp.send();
}
//hi hi
