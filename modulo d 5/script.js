function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO]Verifique o ano e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >=0 && idade <10){
                img.setAttribute('src', 'hnovobg.png')
            } else if (idade <30){
                img.setAttribute('src', 'hjovembg.png')
            }else {
                img.setAttribute('src', 'hvelhobg.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade <10){
                img.setAttribute('src', 'mnovobg.png')
            } else if (idade <30){
                img.setAttribute('src', 'mjovembg.png')
            }else {
                img.setAttribute('src', 'mvelhabg.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML= `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}