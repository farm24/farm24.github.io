// this is the script file
// you better not mess with this

function reloadconfirm() {
  let v = window.confirm("Do you want to reload");
  if (v == true) {
    window.location.reload()
  }
  else {
    alert("ok not reloading")
  }
}

console.log("the script properly loaded");
document.getElementById("Button").onclick = function() {
    reloadconfirm()
}
