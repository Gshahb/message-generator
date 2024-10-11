// Arrays containing different pieces of data
const firstPart = ["Today", "Tomorrow", "This week"];
const secondPart = ["you will", "you should", "you might"];
const thirdPart = ["find happiness", "face a challenge", "learn something new"];

// Function to generate a random message
function generateMessage() {
    const randomFirst = firstPart[Math.floor(Math.random() * firstPart.length)];
    const randomSecond = secondPart[Math.floor(Math.random() * secondPart.length)];
    const randomThird = thirdPart[Math.floor(Math.random() * thirdPart.length)];

    return `${randomFirst}, ${randomSecond} ${randomThird}.`;
}

// Log the random message to the console
console.log(generateMessage());
