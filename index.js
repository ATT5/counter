let countEl = document.getElementById("count-el")
let count = 0
let saveEL = document.getElementById("save-el")
function increment(){
    count += 1
    countEl.textContent = count
}

function save(){
    let contain = count + " - "
    saveEL.textContent += contain
    console.log(count)
    count = 0
    countEl.textContent = count
}
