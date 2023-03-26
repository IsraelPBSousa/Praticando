let di = document.getElementById('dia')
let me = document.getElementById('mes')
let res = document.getElementById('res')
let img = document.createElement('img')
let cap = document.getElementById('capa')

function verificar() {
    if (di.value == 0 || di.value > 31 || me.value > 12 || me.valeu == 0) {
        res.innerHTML = 'ERRO informe os dados corretamente'
    } else { 
        if  (di == 1 && me == 1) // • Áries: nascidos entre 21 de março a 20 de abril.
        res.innerHTML ='Seu signo é Áries'
        cap.style.display = 'none'
        img.setAttribute('src','aries.png')
        foto.appendChild(img) 
        if (di == 2 && me == 2) // • Touro: nascidos entre 21 de abril a 20 de maio.
        res.innerHTML ='Seu signo é Touro'
        cap.style.display = 'none'
        img.setAttribute('src','touro.png')
        foto.appendChild(img) 
        if (di == 3 && me == 3) // • Gêmeos: nascidos entre 21 de maio a 20 de junho.
        res.innerHTML ='Seu signo é Gêmeos'
        cap.style.display = 'none'
        img.setAttribute('src','gemeos.png')
        foto.appendChild(img)
        if (di == 4 && me == 4) // • Câncer: nascidos entre 21 de junho a 22 de julho.
        res.innerHTML ='Seu signo é Câncer'
        cap.style.display = 'none'
        img.setAttribute('src','carcer.png')
        foto.appendChild(img)
        if (di == 5 && me == 5) // • Leão: nascidos entre 23 de julho a 22 de agosto.
        res.innerHTML ='Seu signo é Leão'
        cap.style.display = 'none'
        img.setAttribute('src','leao.png')
        foto.appendChild(img)
        if (di == 6 && me == 6) // • Virgem: nascidos entre 23 de agosto a 22 de setembro.
        res.innerHTML ='Seu signo é Virgem'
        cap.style.display = 'none'
        img.setAttribute('src','virgem.png')
        foto.appendChild(img)
        if (di == 7 && me == 7) // • Libra: nascidos entre 23 de setembro a 22 de outubro.
        res.innerHTML ='Seu signo é Libra'
        cap.style.display = 'none'
        img.setAttribute('src','Libra.png')
        foto.appendChild(img)
        if (di == 8 && me == 8) // • Escorpião: nascidos entre 23 de outubro a 21 de novembro.
        res.innerHTML ='Seu signo é Escorpião'
        cap.style.display = 'none'
        img.setAttribute('src','escorpiao.png')
        foto.appendChild(img)
        if (di == 9 && me == 9) // • Sagitário: nascidos entre 22 de novembro a 21 de dezembro.
        res.innerHTML ='Seu signo é Sagitário'
        cap.style.display = 'none'
        img.setAttribute('src','sargitario.png')
        foto.appendChild(img)
        if (di == 10 && me == 10) // • Capricórnio: nascidos entre 22 de dezembro a 20 de janeiro.
        res.innerHTML ='Seu signo é Capricórnio'
        cap.style.display = 'none'
        img.setAttribute('src','sargitario.png')
        foto.appendChild(img)
        if (di == 11 && me == 11) // • Aquário: nascidos entre 21 de janeiro a 18 de fevereiro.
        res.innerHTML ='Seu signo é Aquário'
        cap.style.display = 'none'
        img.setAttribute('src','aguarios.png')
        foto.appendChild(img)
        if (di == 12 && me == 12) // • Peixes: nascidos entre 19 de fevereiro a 20 de março. 
        res.innerHTML ='Seu signo é Peixes'
        cap.style.display = 'none'
        img.setAttribute('src','peixes.png')
        foto.appendChild(img)
    }
    
    img.setAttribute('id', 'foto')
    img.style.width = '220px'
    img.style.height = '220px'
    
}
