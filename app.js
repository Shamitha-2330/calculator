let input = document.querySelector('input')

let getvalue = (e) => {
    let btntext = e.target.innerText;
    input.value += btntext
}
let calculateRes = () => {
    let res = eval(input.value)
    input.value = res
}
let clearAll = () => {
    input.value = ""
}