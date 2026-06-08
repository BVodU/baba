let n = document.getElementById("input1")
let j = document.getElementById("input2")
let num = document.getElementById("input3")
const out = document.getElementById("out")
const allInf = {
    store: [],
}
const Add = document.getElementById("Add")
Add.addEventListener("click", ()=> {
     addUs(n, j, num)
    let st = addUs(n.value, j.value, num.value)
    addStore(st)
    console.log(allInf.store)
    render()
})
const Clear = document.getElementById("Clear")
Clear.addEventListener("click", ()=>{
    allInf.store = []
    console.log(allInf.store)
    render()
})
function addUs(n, j, num){
    return({name:n, job:j, numb:num})}
function addStore(st){
    return(allInf.store.push(st))
}
function render(){
    out.innerHTML = allInf.store.map(addUs => `<p>${addUs.name} | ${addUs.job} | ${addUs.numb} </p>`).join('')
}
