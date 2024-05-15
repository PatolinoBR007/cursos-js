const valores = [1,2,3,4,5]

const op = [
    (val)=> {
        let res = 0
        for (const v of val) {
            res += v
        }
        return res
    },
    (val)=> {
        let res = 1
        for (const v of val) {
            res *= v
        }
        return res
    },
    (val)=> {
        let res = 0
        for (const v of val) {
            console.log(v)
        }
    }
]

console.log(op[2](valores))