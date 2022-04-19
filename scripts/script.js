var owEl = document.getElementById("owSubmitButton");
var lolEl = document.getElementById("lolSubmitButton");
var vEl = document.getElementById("valorantSubmitButton");
var rlEl = document.getElementById("rlSubmitButton");
var ssbEl = document.getElementById("ssbSubmitButton");


// Overwatch Submit Button
owEl.addEventListener("click", owDisplayRole);
owEl.addEventListener("click", owDisplayYear);
owEl.addEventListener("click", owDisplayRank);
owEl.addEventListener("click", owDisplayCharacter);
owEl.addEventListener("click", owDisplayGamerTag);
owEl.addEventListener("click", owDisplayExtra);

// League of Legends Submit Button
lolEl.addEventListener("click", lolDisplayRole);
lolEl.addEventListener("click", lolDisplayYear);
lolEl.addEventListener("click", lolDisplayRank);
lolEl.addEventListener("click", lolDisplayCharacter);
lolEl.addEventListener("click", lolDisplayGamerTag);
lolEl.addEventListener("click", lolDisplayExtra);

// Valorant Submit Button
vEl.addEventListener("click", vDisplayYear);
vEl.addEventListener("click", vDisplayRank);
vEl.addEventListener("click", vDisplayCharacter);
vEl.addEventListener("click", vDisplayGamerTag);
vEl.addEventListener("click", vDisplayExtra);

// Rocket League Submit Button
rlEl.addEventListener("click", rlDisplayYear);
rlEl.addEventListener("click", rlDisplayRank);
rlEl.addEventListener("click", rlDisplayCharacter);
rlEl.addEventListener("click", rlDisplayGamerTag);
rlEl.addEventListener("click", rlDisplayExtra);

// Smash Bros Submit Button
ssbEl.addEventListener("click", ssbDisplayYear);
ssbEl.addEventListener("click", ssbDisplayCharacter);
ssbEl.addEventListener("click", ssbDisplayGamerTag);
ssbEl.addEventListener("click", ssbDisplayExtra);

// Overwatch Functions

function owDisplayRole() {
  // grab the value of the user input
  var elOwRole = document.getElementById("owRole");
  //do something with it

  //don't use an alert
  alert("This players role is " + elOwRole.value);
}

function owDisplayYear() {
  // grab the value of the user input
  var elOwYear = document.getElementById("owYear");
  //do something with it

  //don't use an alert
  alert("This players year is " + elOwYear.value);
}

function owDisplayRank() {
  // grab the value of the user input
  var elOwRank = document.getElementById("owRank");
  //do something with it

  //don't use an alert
  alert("This players rank is " + elOwRank.value);
}

function owDisplayCharacter() {
  // grab the value of the user input
  var elOwCharacter = document.getElementById("owCharacter");
  //do something with it

  //don't use an alert
  alert("This player plays " + elOwCharacter.value);
}

function owDisplayGamerTag() {
  // grab the value of the user input
  var elOwGamertag = document.getElementById("owGamerTag");
  //do something with it
  
  //don't use an alert
  alert("This players gamertag is " + elOwGamertag.value);
}

function owDisplayExtra() {
  // grab the value of the user input
  var elOwExtra = document.getElementById("owExtra");
  //do something with it
  
  //don't use an alert
  alert("This player wanted to say: " +elOwExtra.value);
}

//League of Legends Functions

function lolDisplayRole() {
  // grab the value of the user input
  var elLolRole = document.getElementById("lolRole");
  //do something with it

  //don't use an alert
  alert("This players role is " + elLolRole.value);
}

function lolDisplayYear() {
  // grab the value of the user input
  var elLolYear = document.getElementById("lolYear");
  //do something with it

  //don't use an alert
  alert("This players year is " + elLolYear.value);
}

function lolDisplayRank() {
  // grab the value of the user input
  var elLolRank = document.getElementById("lolRank");
  //do something with it

  //don't use an alert
  alert("This players rank is " + elLolRank.value);
}

function lolDisplayCharacter() {
  // grab the value of the user input
  var elLolCharacter = document.getElementById("lolCharacter");
  //do something with it

  //don't use an alert
  alert("This player plays " +elLolCharacter.value);
}

function lolDisplayGamerTag() {
  // grab the value of the user input
  var elLolGamertag = document.getElementById("lolGamerTag");
  //do something with it

  //don't use an alert
  alert("This players gamertag is " +elLolGamertag.value);
}

function lolDisplayExtra() {
  // grab the value of the user input
  var elLolExtra = document.getElementById("lolExtra");
  //do something with it
  
  //don't use an alert
  alert("This player wanted to say: " +elLolExtra.value);
}

// Valorant Functions

function vDisplayYear() {
  // grab the value of the user input
  var elValorantYear = document.getElementById("vYear");
  //do something with it

  //don't use an alert
  alert("This players year is " + elValorantYear.value);
}

function vDisplayRank() {
  // grab the value of the user input
  var elValorantRank = document.getElementById("vRank");
  //do something with it

  //don't use an alert
  alert("This players rank is " + elValorantRank.value);
}

function vDisplayCharacter() {
  // grab the value of the user input
  var elValorantCharacter = document.getElementById("vCharacter");
  //do something with it

  //don't use an alert
  alert("This player plays " +elValorantCharacter.value);
}

function vDisplayGamerTag() {
  // grab the value of the user input
  var elValorantGamertag = document.getElementById("vGamerTag");
  //do something with it
  
  //don't use an alert
  alert("This players gamertag is " +elValorantGamertag.value);
}

function vDisplayExtra() {
  // grab the value of the user input
  var elValorantExtra = document.getElementById("vExtra");
  //do something with it
  
  //don't use an alert
  alert("This player wanted to say: " +elValorantExtra.value);
}

// Rocket League Functions

function rlDisplayYear() {
  // grab the value of the user input
  var elRlYear = document.getElementById("rlYear");
  //do something with it

  //don't use an alert
  alert("This players year is " + elRlYear.value);
}

function rlDisplayRank() {
  // grab the value of the user input
  var elRlRank = document.getElementById("rlRank");
  //do something with it

  //don't use an alert
  alert("This players rank is " + elRlRank.value);
}

function rlDisplayCharacter() {
  // grab the value of the user input
  var elRlCharacter = document.getElementById("rlCharacter");
  //do something with it

  //don't use an alert
  alert("This players plays " + elRlCharacter.value);
}

function rlDisplayGamerTag() {
  // grab the value of the user input
  var elRlGamertag = document.getElementById("rlGamerTag");
  //do something with it
  
  //don't use an alert
  alert("This players gamertag is " + elRlGamertag.value);
}

function rlDisplayExtra() {
  // grab the value of the user input
  var elRlExtra = document.getElementById("rlExtra");
  //do something with it
  
  //don't use an alert
  alert("This player wanted to say " + elRlExtra.value);
}

// Smash Bros Functions

function ssbDisplayYear() {
  // grab the value of the user input
  var elSsbYear = document.getElementById("ssbYear");
  //do something with it

  //don't use an alert
  alert("This players year is " +  elSsbYear.value);
}

function ssbDisplayCharacter() {
  // grab the value of the user input
  var elSsbCharacter = document.getElementById("ssbCharacter");
  //do something with it

  //don't use an alert
  alert("This player plays " + elSsbCharacter.value);
}

function ssbDisplayGamerTag() {
  // grab the value of the user input
  var elSsbGamertag = document.getElementById("ssbGamerTag");
  //do something with it

  //don't use an alert
  alert("This players gamertag is " +elSsbGamertag.value);
}

function ssbDisplayExtra() {
  // grab the value of the user input
  var elSsbExtra = document.getElementById("ssbExtra");
  //do something with it
  
  //don't use an alert
  alert("This player wanted to say: " +elSsbExtra.value);
}

$(function () {
  let alphaRegex = /^[a-zA-Z]*$/;
  
// This is the list created with all of the Overwatch Characters
  let owCharacters = [
    ["tank", ["D.va", "Orisa", "Reinhardt", "Roadhog", "Sigma", "Winston", "Wrecking Ball", "Zarya"]],
    ["dps", ["Ashe", "Bastion", "Cassidy", "Doomfist", "Echo", "Genji", "Hanzo", "Junkrat", "Mei", "Pharah", "Reaper", "Solder 76", "Sombra", "Symmetra", "Torbjorn", "Tracer", "Widowmaker"]],
    ["support", ["Ana", "Baptiste", "Brigitte", "Lucio", "Mercy", "Moira", "Zenyatta"]]
  ];
  
  

 $("#owRole").on("change", function (e) {
    //enables the dropdown
    $("#owCharacter").prop("disabled", false);

    let inputVal = this.value;

    //loop though array of Overwatch Character names
    $.each(owCharacters, function (key, value) {
      //match the character name to user selected
      if (inputVal === value[0]) {
        $.each(value, function (nestKey, nestValue) {

          switch (nestKey) {
            case 0:
              $("label[for=owCharacter]").text(nestValue);
              $("#owCharacter").empty();
              $("#owCharacter").append(
                $("<option>").text(`select a ${nestValue} `)
              );
              break;
            case 1:
              $.each(nestValue, function (nameKey, nameValue) {
                console.log(nameKey, nameValue);

                $("#owCharacter").append(
                  $("<option>").val(nameValue).text(nameValue)
                                  );
              });
              break;
          }
        });
      }
    });
  });
                
});             