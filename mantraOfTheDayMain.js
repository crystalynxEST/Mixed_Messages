const mantras = ['I am shifting into my highest timeline of freedom and abundance', "I focus on what's going RIGHT for me", 'I feel incredible', 'I am the highest version of myself right now'];
const numberTimes = [2, 3, 4, 5, 6 ];
const duringTimes = ['during the day', 'before bed', 'during the day and before bed'];


messageGenerator = () => {
let mantra = mantras[(Math.floor(Math.random() * mantras.length))];
let numberTime = numberTimes[(Math.floor(Math.random() * numberTimes.length))];
let duringTime = duringTimes[(Math.floor(Math.random() * duringTimes.length))];

let message = `Your mantra of the day is: ${mantra}.
You should say it ${numberTime} times a day and say your mantras ${duringTime}.`
console.log(message);
}

messageGenerator();