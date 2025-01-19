console.log(`callback`)

const getUser = (url, callback) => {
    fetch(url)
        .then(raw => raw.json())
        .then(result => {
            callback(result)
        })
}

getUser('https://randomuser.me/api/', function (result) {
    console.log(result);
})