const main = ()=> {
    try {
        codigo
    } catch (error) {
        console.error(`Deu erro no codigo e o erro é esse: \n\n ${error}`)
    } finally {
        console.info(`Esse valor sempre será mostrado`)
    }
    
}

main()