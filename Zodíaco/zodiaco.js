let di = document.getElementById('dia')
let me = document.getElementById('mes')
let res = document.getElementById('res')
let img = document.createElement('img')
let cap = document.getElementById('capa')

function verificar() {
    if (di.value == 0 || di.value > 31 || me.value > 12 || me.valeu == 0) {
        res.innerHTML = 'ERRO informe os dados corretamente'
    } else { 
        if  ((di >= 21 && di <= 31 && me == 3) || (di >= 01 && di <= 20 && me == 4)) 
        res.innerHTML ='Seu signo é Áries'
        cap.style.display = 'none'
        img.setAttribute('src','aries.png')
        foto.appendChild(img) 
        if ((di >= 21 && di <= 30 && me == 4) || (di >= 01 && di <= 20 && me == 5)) 
        res.innerHTML ='Seu signo é Touro'
        cap.style.display = 'none'
        img.setAttribute('src','touro.png')
        foto.appendChild(img) 
        if ((di >= 21 && di <= 31 && me == 5) || (di >= 01 && di <= 20 && me == 6)) 
        res.innerHTML ='Seu signo é Gêmeos'
        cap.style.display = 'none'
        img.setAttribute('src','gemeos.png')
        foto.appendChild(img)
        if ((di >= 21 && di <= 30 && me == 6) || (di >= 01 && di <= 22 && me == 7)) 
        res.innerHTML ='Seu signo é Câncer'
        cap.style.display = 'none'
        img.setAttribute('src','carcer.png')
        foto.appendChild(img)
        if ((di >= 23 && di <= 31 && me == 7) || (di >= 01 && di <= 22 && me == 8)) 
        res.innerHTML ='Seu signo é Leão'
        cap.style.display = 'none'
        img.setAttribute('src','leao.png')
        foto.appendChild(img)
        if ((di >= 23 && di <= 31 && me == 8) || (di >= 01 && di <= 22 && me == 9)) 
        res.innerHTML ='Seu signo é Virgem'
        cap.style.display = 'none'
        img.setAttribute('src','virgem.png')
        foto.appendChild(img)
        if ((di >= 23 && di <= 30 && me == 9) || (di >= 01 && di <= 22 && me == 10)) 
        res.innerHTML ='Seu signo é Libra'
        cap.style.display = 'none'
        img.setAttribute('src','Libra.png')
        foto.appendChild(img)
        if ((di >= 23 && di <= 31 && me == 10) || (di >= 01 && di <= 21 && me == 11)) 
        res.innerHTML ='Seu signo é Escorpião'
        cap.style.display = 'none'
        img.setAttribute('src','escorpiao.png')
        foto.appendChild(img)
        if ((di >= 22 && di <= 30 && me == 11) || (di >= 01 && di <= 21 && me == 12)) 
        res.innerHTML ='Seu signo é Sagitário'
        cap.style.display = 'none'
        img.setAttribute('src','sargitario.png')
        foto.appendChild(img)
        if ((di >= 22 && di <= 31 && me == 12) || (di >= 01 && di <= 20 && me == 1)) 
        res.innerHTML ='Seu signo é Capricórnio'
        cap.style.display = 'none'
        img.setAttribute('src','sargitario.png')
        foto.appendChild(img)
        if ((di >= 21 && di <= 31 && me == 1) || (di >= 01 && di <= 21 && me == 2)) 
        res.innerHTML ='Seu signo é Aquário'
        cap.style.display = 'none'
        img.setAttribute('src','aguarios.png')
        foto.appendChild(img)
        if ((di >= 19 && di <= 28 && me == 2) || (di >= 01 && di <= 20 && me == 3)) 
        res.innerHTML ='Seu signo é Peixes'
        cap.style.display = 'none'
        img.setAttribute('src','peixes.png')
        foto.appendChild(img) 
    }
    
    img.setAttribute('id', 'foto')
    img.style.width = '220px'
    img.style.height = '220px'
    
}
