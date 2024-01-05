/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const input = document.getElementById("input-field")
const button = document.getElementById("convert-btn")
const displayLength = document.getElementById("length")
const displayVolume = document.getElementById("volume")
const displayMass = document.getElementById("mass")


button.addEventListener("click", function(){
    const metersToFeet = (input.value * 3.281).toFixed(3)
    const feetToMeters = (input.value / 3.281).toFixed(3)
    displayLength.innerHTML = `${input.value} meters = ${metersToFeet} feet | ${input.value} feet = ${feetToMeters} meters`
    
    const litersToGallons = (input.value * 0.264).toFixed(3)
    const gallonsToLiters = (input.value / 0.264).toFixed(3)
    displayVolume.innerHTML = `${input.value} liters = ${litersToGallons} gallons | ${input.value} gallons = ${gallonsToLiters} liters`
    
    const kgsToPounds = (input.value * 2.204).toFixed(3)
    const poundsToKgs = (input.value / 2.204).toFixed(3)
    displayMass.innerHTML = `${input.value} kilos = ${kgsToPounds} pounds | ${input.value} pounds = ${poundsToKgs} kilos`
})