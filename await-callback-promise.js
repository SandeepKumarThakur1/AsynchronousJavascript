// Callback function
function fetcherData(url, callback) {
    fetch(url)
        .then(raw => raw.json())
        .then(result => {
            callback(result);
        })
}

fetcherData("https://fakestoreapi.com/products", function (result) {
    console.log(result[0])
})

// Promise
function fetcherData(url) {
    const productData = new Promise((resolve, reject) => {
        fetch(url)
            .then(raw => raw.json())
            .then(result => {
                resolve(result);
            })
    })
    return productData;
}

const data = fetcherData("https://fakestoreapi.com/products")
    .then(result => {
        console.log(result[0])
    })

// Async/Await
async function fetcherData(url) {
    let data = await fetch(url)
    let result = await data.json()
    return result;
}

async function ProductData() {
    let dataa = await fetcherData("https://fakestoreapi.com/products")
    console.log(dataa[0])
}

ProductData()