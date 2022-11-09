function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    

    msg.innerHTML = `Agora são ${hora} horas.`;

    if(hora >= 0 && hora < 12) {
        img.src = './assets/morning.jpg'; //add imagem para mudar de acordo com a hora
        document.body.style.background = '#e2cd9f'; //add cor para mudar de acordo com a hora
    }else if(hora >= 12 && hora <=18) {
        img.src ='./assets/afternoon.jpg';
        document.body.style.background = '#b9846f';
    }else{
        img.src ='./assets/night.jpg'; 
        document.body.style.background = '#515154';
    }
}

