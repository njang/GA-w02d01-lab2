const solarSystem = [
	{ name: "Mercury", ringSystem: false, moons: [] },
	{ name: "Venus", ringSystem: false, moons: [] },
	{ name: "Earth", ringSystem: false, moons: ["The Moon"] },
	{ name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
	{ name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
	{ name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },
	{ name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },
	{ name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] }
];

// 1. Print the array of Jupiter's moons to the console (no for loop, just print the entire array).
console.log(solarSystem[4].moons);
// 2. Print the name of Neptune's moon "Nereid" to the console.
console.log(solarSystem[7].moons[1]);
// 3. Add a new moon called "Endor" to Venus' moons array.
solarSystem[1].moons.push("Endor");
console.log(solarSystem[1]);
// 4. Add a Pluto object to the solarSystem array using .push. The object should contain Pluto's name, ringSystem boolean, and moons array (which includes "Charon").
solarSystem.push({name: "Pluto", ringSystem: false, moons: ["Charon"]});
console.log(solarSystem);
// 5. Add a new key value pair to the the Earth object: the key should be 'diameter', and the value should be Earth's diameter in miles represented as a string.
solarSystem[2].diameter = "7917.5";
console.log(solarSystem[2]);
// 6. Change Mercury's ringSystem boolean to true.
solarSystem[0].ringSystem = true;
console.log(solarSystem[0]);
// 7. Change Uranus' moon "Umbriel" to "Oberon"
solarSystem[6].moons[4] = "Oberon";
console.log(solarSystem[6]);
// 8. Iterate through the solarSystem array and print only the objects that have a ringSystem (where ringSystem: true), and ignore the others. You want to make a loop that goes over each item in the array, and include an if statement.
// Expected result for question 8
// { name: 'Mercury', ringSystem: true, moons: [] }
// { name: 'Jupiter', ringSystem: true, moons: [ 'Europa', 'Ganymede', 'Io', 'Callisto' ] }
// { name: 'Saturn', ringSystem: true, moons: [ 'Titan', 'Enceladus', 'Rhea', 'Mimas' ] }
// { name: 'Uranus', ringSystem: true, moons: [ 'Miranda', 'Titania', 'Ariel', 'Oberon' ] }
// { name: 'Neptune', ringSystem: true, moons: [ 'Triton', 'Nereid' ] }
for (let i = 0; i < solarSystem.length; i++) {
	if (solarSystem[i].ringSystem) {
		console.log(solarSystem[i]);
	}
}
