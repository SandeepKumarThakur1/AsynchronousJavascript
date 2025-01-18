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

# single-threaded language kya hai ?

- Single-threaded language ka matlab hai ki language ka execution ek hi thread me hota hai, jisme ek samay me sirf ek hi kaam perform kiya ja sakta hai. JavaScript ek single-threaded language hai, iska matlab hai ki iska code ek Call Stack ke madhyam se execute hota hai aur ek samay par sirf ek hi task ko process karta hai.

## Thread Kya Hota Hai?

- Thread ek chhota execution unit hai jo program ke instructions ko execute karta hai.
- Ek single-threaded system me ek samay me sirf ek hi task execute hota hai.
- Multi-threaded system me ek se zyada threads hoti hain, jo alag-alag tasks ko parallel execute kar sakti hain.

## Single-threaded Language ke Features

- One Task at a Time
- Event Loop ke Sath Kaam
- Call Stack

## Why JavaScript is Single-threaded?

### Designed for Web Browsers:

- JavaScript originally web browsers ke liye banaya gaya tha, jisme ek user ke input aur DOM updates ko efficiently handle karna hota hai.
- Single-threaded hona browsers ke UI ko responsive banata hai.

### Concurrency Through Event Loop:

- Single-threaded hone ke bawjood JavaScript asynchronous operations ko handle kar sakta hai Event Loop aur Web APIs ki madad se, jisme heavy tasks non-blocking tarike se execute hote hain.

# SetTimeout

- JavaScript ka ek built-in function hai jo ek specific delay ke baad ek function ko execute karta hai. Iska primary use asynchronous tasks ko handle karna hai jo kuch samay baad hone chahiye.

#### Syntax

```javascript
setTimeout(function, delay, ...arguments);
```

- `function`: Wo callback function jo delay ke baad execute hoga.
- `delay`: Milliseconds me time interval jo specify karta hai kitna time wait karna hai (1 second = 1000 milliseconds).
- `arguments`: Optional. Callback function ke liye arguments pass karne ke liye.

#### Example

```javascript
console.log("Pehle print hoga");

setTimeout(() => {
  console.log("2 seconds ke baad print hoga");
}, 2000);

console.log("Ye bhi pehle print hoga");

Output
Pehle print hoga
Ye bhi pehle print hoga
2 seconds ke baad print hoga

```
