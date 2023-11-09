const funcao1 = ()=> {
    console.log('sou a função1')

    try {
        codigo;
    } catch (error) {
        console.error(error);
    }

}

const main = ()=> {
    funcao1();

    console.log('passou por aqui')
}

main()