/*Exercise closely resembles 10 - consider introducing another concept here? */

function getRandomInt()
{
	let randomNumber = Math.random() * 10 + 1;
	return Math.floor(randomNumber);
}


console.log(getRandomInt());
