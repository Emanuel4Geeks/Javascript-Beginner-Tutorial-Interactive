function fizzBuzz() {
	// Your code here
	for (let i = 1; i <= 100; i++) {
		let resp = i % 3 === 0 && i % 5 === 0 ?
			"FizzBuzz" : i % 3 === 0 ?
				"Fizz" : i % 5 === 0 ?
					"Buzz" : i;

		console.log(resp);
	}
}

fizzBuzz();