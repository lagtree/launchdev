feather.replace();

document.addEventListener("keydown", onKeyPressed);

var Money = 0;
var textfield = [];
var Dname = "guestUser";
var Dwhoami = "users/" + Dname;
var dismantleTime;
var MoneyM = 0.5;

var textLeak = [];

function onKeyPressed(e) {
  var keyCode = e.keyCode;
  var key = e.key;
  var currentText;
  if (keyCode == 13) {
    currentText = document.getElementById("Input").value;
    textfield.push(currentText);
    textLeak = textfield[textfield.length-1].split(" ");
    $("#Input").val("");
    if (textfield[textfield.length-1] === "cls"){
      statsBar(1000);
      setTimeout(() => {
        document.getElementById("Output").innerHTML = ""
      }, 1000);
      textfield = [];
    }else if (textfield[textfield.length-1] === "whoami"){
      Dwhoami = "users/" + Dname;
      $("#Output").append(Dwhoami + '<br/>');
    }else if (textLeak[0] === "hostname"){
      if(textLeak[1] === "show"){
        $("#Output").append(Dname + '<br/>');
      }else if (textLeak[1] === "set"){
        Dname = textLeak[2].toLowerCase();
        $("#Output").append("New Hostname: " + Dname + '<br/>');
      }else{
        $("#Output").append("Usage: hostname set {New Hostname} ," + '<br/>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; hostname show" + '<br/>');
      } 
    }else{
      $("#Output").append('Did not understand input: ' + currentText + '<br/>');
    }
  };
}

function statsBar(ms){
  var timeChunk = Math.round(ms/12);
  for (let i = 0; i <= 12; i++) {
    setTimeout(() => {
      document.getElementById("DispStatus").innerHTML = "[" + ('|'.repeat(i)) + ('-'.repeat(12 - i)) + "]";
    }, i * timeChunk);
  }
}

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});