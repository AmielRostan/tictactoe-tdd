
const TTT = require("./class/ttt");
const readline = require('readline');

// ttt = new TTT();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Do you want to play against the AI? (y/n): ', (answer) => {
    const isAgainstAI = answer.toLowerCase() === 'y';
    new TTT(isAgainstAI);
});
