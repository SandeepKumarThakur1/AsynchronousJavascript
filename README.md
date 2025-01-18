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
