let num = [8,1,7,4,2,9]
/*for(let pos = 0; pos < num.length; pos ++){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}*/
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
let pos = num.indexOf(10)
if (pos == -1){
    console.log('Valor não foi encontrado')
}else {
console.log(` ${pos}`)}