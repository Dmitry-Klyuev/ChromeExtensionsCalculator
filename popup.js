document.getElementById('button').addEventListener("click", ()=>{
    const input = document.querySelector('.input').value
    let out = document.querySelector('.out').textContent
    document.querySelector('.out').innerHTML = `${Math.floor(input / 78)} ${out}`
})