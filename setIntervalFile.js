console.log("hey 1")
setInterval(() => {
    console.log("hey 2") // run after 2 seconds everytime
}, 2000);
console.log("hey 3")

var count = 0;
const handleSetInterval = setInterval(() => {
    ++count;
    if (count > 4) clearInterval(handleSetInterval);
    console.log(count)
}, 1000);

