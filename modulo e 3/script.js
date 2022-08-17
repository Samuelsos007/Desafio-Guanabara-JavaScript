function Tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    
    if (num.value.lenght == 0){
        alert('Por favor, Digite um Número!')
    }else{
        let n = Number(num.value) 
        let c = 1
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${num.value} X ${c} = ${num.value*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}