console.log("Starting javascript...");
var myName = "Elizabeth";
console.log(myName);
var age = 19;
console.log(age);

var ignasiAge = 32;
var ageDiff = ignasiAge - age; /*para calcular la diferencia de edad*/
console.log(ageDiff);

if (age < 21) {
  console.log("You are not older than 21")
} 
else {
  console.log("You are older than 21");
} 


if (age < ignasiAge) {
  console.log("Ignasi is older than you")
} else if (age == ignasiAge){ console.log("You have the same age as Ignasi")} 
else {
  console.log("Ignasi is younger than you");
}
