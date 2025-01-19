async function apiData() {
    let data = await fetch(`https://jsonplaceholder.typicode.com/todos/2`)
    data = await data.json()
    console.log(data)
}

apiData()