function primeiraFuncao() {
    return new Promise((resolve)=> {
        setTimeout(() => {
            console.log("Esperou isso aqui!")
            resolve()
        }, 2000);

    })
}

async function segundaFuncao() {
    console.log("iniciou")

    await primeiraFuncao()

    console.log("Finalizou")
}

// segundaFuncao()

function getUser(id) {
    return fetch(`http://reqres.in/api/users?id=${id}`)
    .then(data => data.json())
    .catch(err => console.log(err))
}

async function showUserName(id) {
    try {
        const user = await getUser(id)
        console.log(`O nome do usuario é ${user.data.first_name}`)
    } catch (err) {
        console.error(`Error: ${err}`)
    }
}

showUserName(3)