alert('Olá mundo')
prompt('digite seu nome: ')
confirm('Está gostando de javascript?')
var a = document.getElementById('a')
a.addEventListener("click", clicar)
function clicar(){
    a.innerHTML = 'Clicou'
}