// Task-1.1) Write a function that displays a message after 5s.
setTimeout(() => {
    // console.log('From task-1');
}, 5000);



// Task-1.2) Write a function called delayedGreeting() that takes two parameters,
//  name and delay time, and logs a greeting message after the given delay time.
function delayedGreeting(name, delayTime) {
    setTimeout(() => {
        console.log(`Hello, ${name}!`)
    }, delayTime);
};

// delayedGreeting('Jamal', 7000);



// Task-2) The function tellJoke() below logs a funny message every 2 seconds
//  and after 10 seconds, it stops.
function tellJoke() {
    // console.log("Why don't scientists trust atoms? Because they make up everything!");
}
const jokeInterval = setInterval(tellJoke, 2000);

setTimeout(() => {
    clearInterval(jokeInterval);
}, 10000);



// Task-3) Write an async/await function that fetch data from an api and logs a message.
const loadData = async () => {
    const res = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
    const data = await res.json();
    console.log(data.joke);
}

// loadData();

