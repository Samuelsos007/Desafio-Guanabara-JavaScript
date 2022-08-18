let amigo = {nome : 'josé', sexo:'H', peso:'84.5',
engordar(p){
    console.log('Engodou')
    this.peso += p
}
}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)