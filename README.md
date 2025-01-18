# Synchronous Programming

- Synchronous ka matlab hota hai step-by-step execution. Ek task tab tak complete hona zaroori hai jab tak agla task start na ho.
- Yeh blocking behavior kehlata hai, kyunki ek kaam khatam hone tak agla kaam ruk jata hai.

```javascript
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");

Output
Task 1
Task 2
Task 3
```

# Asynchronous Programming

- Asynchronous ka matlab hota hai ki tasks parallelly chal sakte hain aur ek task ko dusre task ke liye rukna nahi padta.
- Yeh non-blocking behavior kehlata hai, jisme ek task apna kaam karte hue dusre ko interrupt nahi karta.
- Mostly asynchronous tasks ke liye JavaScript callbacks, promises, aur async/await ka use karta hai.

```javascript
console.log("Task 1");

setTimeout(() => {
  console.log("Task 2 (Delayed)");
}, 2000);

console.log("Task 3");


Output
Task 1
Task 3
Task 2 (Delayed)
```

# JavaScript me Asynchronous kaam kaise hota hai?

- JavaScript ek single-threaded language hai, lekin asynchronous programming ke liye Event Loop aur Call Stack ka use karta hai.
- `Call Stack`: JavaScript ke synchronous code ko execute karta hai.
- `Web APIs`: Asynchronous tasks (e.g., setTimeout, HTTP requests) ko handle karne ke liye browser ya Node.js ke Web APIs ka use hota hai.
- `Callback Queue`: Jab asynchronous task complete hota hai, tab uska callback function queue me add hota hai.
- `Event Loop`: Event loop check karta hai ki Call Stack khali hai ya nahi. Agar khali hota hai, toh wo Callback Queue se task ko execute karta hai.

```javascript
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data fetched!");
  }, 2000);
});

fetchData
  .then((data) => {
    console.log(data);
    console.log("Processing data...");
  })
  .catch((error) => {
    console.error(error);
  });


Output
Data fetched!
Processing data...
```
