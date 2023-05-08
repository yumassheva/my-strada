const kelvinToCelsius = 273.13;
const milisecToHoursMinuts = 1000;
function calcMilisecToHoursMinuts(phaseOfSun) {
  return `${(new Date(phaseOfSun * milisecToHoursMinuts)).getHours()}
    :
    ${(new Date(phaseOfSun * milisecToHoursMinuts)).getMinutes()}`
}
function calckelvinToCelsius(temp) {
  return `${Math.round(temp - kelvinToCelsius)}°C`
}
export {
  calcMilisecToHoursMinuts,
  calckelvinToCelsius,
}