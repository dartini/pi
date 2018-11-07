const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name? ', (name: string) => {
    console.log('my name is ' + name);
    process.exit(0);
});