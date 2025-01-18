fetch(`https://fakestoreapi.com/products`)
    .then(raw => raw.json()) // Use `json()` with lowercase 'j'
    .then(response => console.log(response)) // Process the response
    .catch(error => console.error(error)); // Handle errors
