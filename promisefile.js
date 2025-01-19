const userData = new Promise((resolve, reject) => {
    fetch('https://randomuser.me/api/')
        .then(raw => raw.json())
        .then(result => {
            if (result.results[0].gender === 'male') resolve();
            else reject();
        })
})

userData
    .then(() => {
        console.log('User is male');
    })
    .catch(() => {
        console.log('User is female');
    })