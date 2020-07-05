var brimBtn = document.getElementById("brim");
var brimMarker = document.getElementById("brimMarker");
brimBtn.onclick = function() {
  if (brimMarker.style.display == "block") {
    brimMarker.style.display = "none";
  } else {
    brimMarker.style.display = "block";
  }
}

var breachBtn = document.getElementById("breach");
var breachMarker = document.getElementById("breachMarker");
breBtn.onclick = function() {
  if (breachMarker.style.display == "block") {
    breachMarker.style.display = "none";
  } else {
    breachMarker.style.display = "block";
  }
}

function toggleText() {
  var text = document.getElementById("marker");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}