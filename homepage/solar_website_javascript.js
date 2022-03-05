// this is the script file
// you better not mess with this

function reloadconfirm() {
  let v = window.confirm("Do you want to reload");
  if (v == true) {
    alert(" Ok reloading")
    window.location.reload()
  }
  else {
    alert("Ok not reloading")
  }
}

console.log("the script properly loaded");
document.getElementById("button").onclick = function() {
    reloadconfirm()
}
