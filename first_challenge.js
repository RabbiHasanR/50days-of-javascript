// return a random number between given range inclusive

function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
	// write your solution here
    let min = Math.ceil(rangeStart)
    let max = Math.ceil(rangeEnd)

	return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`)