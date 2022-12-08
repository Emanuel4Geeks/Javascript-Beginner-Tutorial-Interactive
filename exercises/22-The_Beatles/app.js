function sing() {
    const rep = "let it be, ";
    const whisper = "whisper words of wisdom, ";
    const answer = "there will be an answer, let it be";
    let text = "";

    for (let i = 0; i <= 10; i++) {
        text += i === 4 || i === 10 ?
            i === 4 ? whisper : answer : rep;
    }

    return text
}

//Your code above ^^^

console.log(sing());