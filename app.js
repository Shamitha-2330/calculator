// let input = document.querySelector('input')

// let getvalue = (e) => {
//     let btntext = e.target.innerText;
//     input.value += btntext
// }
// let calculateRes = () => {
//     let res = eval(input.value)
//     input.value = res
// }
// let clearAll = () => {
//     input.value = ""
// }

let input = document.querySelector('input')
let isError = false
const OPS = '+-*/%'

let getvalue = (e) => {
    let btn = e.target.innerText
    if (isError) { input.value = ''; isError = false }
    let last = input.value.slice(-1)

    if (!last && OPS.includes(btn) && btn !== '-') return
    if (btn === '.' && input.value.split(/[+\-*/%]/).pop().includes('.')) return
    if (last && OPS.includes(btn) && OPS.includes(last)) {
        input.value = input.value.slice(0, -1) + btn
        return
    }
    input.value += btn
}

let calculateRes = () => {
    if (!input.value) return
    let expr = input.value
        .replace(/(?<![\d.])0+(?=\d)/g, '')
        .replace(/%/g, '/100')
    try {
        if (!/^[\d+\-*/.()]+$/.test(expr)) throw Error()
        let res = eval(expr)
        if (!isFinite(res)) throw Error()
        input.value = Math.round(res * 1e10) / 1e10
    } catch {
        input.value = 'Error'
        isError = true
    }
}

let clearAll = () => {
    input.value = ''
    isError = false
}