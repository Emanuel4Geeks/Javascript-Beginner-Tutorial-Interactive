let total = prompt('How many km are left to go?');

// Your code below:
let resp;

if (total > 100) {
    resp = "We still have a bit of driving left to go";
} else if (total > 50) {
    resp = "We'll be there in 5 minutes";
} else {
    resp = "I'm parking. I'll see you right now";
}

console.log(resp);
