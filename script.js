/*
1meter = 3.281 feet
1liter = 0.264 gallon
1kilogram = 2.204 pound
*/

let btn = document.getElementById("btn");
let Length = document.getElementById("length");
let Volume = document.getElementById("volume");
let Mass = document.getElementById("mass");
let inputEl = document.getElementById("input-field");

let meterFeet= 3.281;
let literGallon = 0.264;
let kiloPound = 2.204;

btn.addEventListener("click", function () 
{
  let val = Number(inputEl.value);

  if (!val) {
    alert("Please enter a number");
  } else {
    convert (inputEl, Length, meterFeet, "meters", "feet");
    convert(inputEl, Volume, literGallon, "liters", "gallons");
    convert(inputEl, Mass, kiloPound, "kilos", "pounds");
  }
});

/*dark-side*/

let darkBtn = document.getElementById("dark-btn");
let darkLength = document.getElementById("dark-length");
let darkVolume = document.getElementById("dark-volume");
let darkMass = document.getElementById("dark-mass");
let darkInputEl = document.getElementById("dark-input-field");

darkBtn.addEventListener("click", function () {
  let ent = Number(darkInputEl.value);
  if (!ent) {
    alert("Please enter a number");
  } else {
    convert(darkInputEl, darkLength, meterFeet, "meters", "feet");
    convert(darkInputEl, darkVolume, literGallon, "liters", "gallons");
    convert(darkInputEl, darkMass, kiloPound, "kilos", "pounds");
  }
});

let unit1 = "";
let unit2 = "";

function convert(field, measure, convRate, unit1, unit2) {

  let num = field.value;
  let conversion1 = num * convRate;
  let conversion2 = num / convRate;
  let conv1 = conversion1.toFixed(3);
  let conv2 = conversion2.toFixed(3);
  measure.innerHTML = `${num} ${unit1} = ${conv1} ${unit2} | ${num} ${unit2} = ${conv2} ${unit1}`;
}