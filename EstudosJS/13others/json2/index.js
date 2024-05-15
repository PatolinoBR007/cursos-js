const pessoa = {
    nome: "pato",
    idade: 21,
    curso: 'JavaScrypt',
    aulas: {
        aula01: "intrudução",
        aula02: "Variaveis",
        aula03: "Condicionais",
    }
}

const string_pessoa = '{"nome":"pato","idade":21,"curso":"JavaScrypt","aulas":{"aula01":"intrudução","aula02":"Variaveis","aula03":"Condicionais"}}'

const s_json_pessoa = JSON.stringify(pessoa)
const o_json_pessoa = JSON.parse(s_json_pessoa)

console.log(pessoa)
console.log(s_json_pessoa)
console.log(o_json_pessoa)
