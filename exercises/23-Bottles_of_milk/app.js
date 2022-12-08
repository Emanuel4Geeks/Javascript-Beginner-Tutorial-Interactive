// Your code here:
function song() {
    const t1 = "Take one down and pass it around, ";
    const t2 = "Go to the store and buy some more, 99";

    const text = (i) => `${i} bottle${i == 1 ? "" : "s"} of milk on the wall, ${typeof i == 'number' ?
        i : i.toLowerCase()} bottle${i == 1 ? "" : "s"} of milk. ${typeof i == 'number' ?
            i - 1 ?
                t1 + (i - 1) : t1 + 'no more' :
            t2} bottle${i - 1 == 1 ?
                "" : "s"} of milk on the wall.`

    for (let i = 99; i >= 0; i--) {
        if (i !== 0) {
            console.log(text(i));
        } else {
            console.log(text('No more'));
        }
    }
}

song();