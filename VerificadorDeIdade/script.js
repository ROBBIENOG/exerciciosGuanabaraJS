function verificar(){
    var data = new Date ();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if(fAno.value.length == 0 || Number (fAno.value)> ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fAno.value);
        var genero ='';
        var img = document.createElement('img');
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <10){
                //criança
                img.setAttribute('src','./assets/images/toodlerboy.jpg')
            }else if(idade<21){
                //Jovem
                img.setAttribute('src','./assets/images/youngboy.jpg')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src','./assets/images/adultman.jpg')
            }else{
                //idoso
                img.setAttribute('src','./assets/images/oldman.jpg')
            }
        }else if (fsex[1].checked){
            genero ='Mulher'
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src','./assets/images/toodlergirl.jpg')
            }else if(idade<21){
                //Jovem
                img.setAttribute('src','./assets/images/younggirl.jpg')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src','./assets/images/adultwoman.jpg')
            }else{
                //idoso
                img.setAttribute('src','./assets/images/oldwoman.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}