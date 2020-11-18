
pika=()=>{
    battle("progressbar-enemy","health-enemy")
}

charmander=()=>{
    battle("progressbar-character","health-character")
}

reset=()=>{
    document.getElementById("enemy-btn-kick").removeAttribute('disabled')
    document.getElementById("character-btn-kick").removeAttribute('disabled')
    document.getElementById("progressbar-character").style.width='100%'
    document.getElementById("progressbar-enemy").style.width='100%'
    document.getElementById('victory').remove()
}

victory=(a)=>{
    document.getElementById("enemy-btn-kick").setAttribute('disabled','true')
    document.getElementById("character-btn-kick").setAttribute('disabled','true')
    const block=document.getElementById('play')
    const childElem=document.getElementById('enemy')
    var elem=document.createElement('div')
    elem.setAttribute('id','victory')
    elem.style.margin='auto'
    elem.style.width='150px'
    elem.style.color='white'
    elem.style.fontSize='24px'
    elem.style.fontWeight='bold'
    elem.textContent='Winner'
    const img=new Image(100,100)
    img.src=a
    const btn=document.createElement('button')
    btn.classList.add('button')
    btn.style.margin='center'
    btn.textContent='Play again'
    block.insertBefore(elem,childElem)
    elem.appendChild(img)
    elem.appendChild(btn)
    btn.setAttribute('onclick','reset()')
}

battle=(a,c)=>{
    var pika=document.getElementById(a).style.width
    var b=Number(pika.substring(0,pika.length-1))
    b-=Math.floor( Math.random() * b+1)
    document.getElementById(c).textContent=b+'/100'
    if(b==0){ 
        if(c=="health-enemy"){victory("http://sify4321.000webhostapp.com/pikachu.png")}
        else{victory('http://sify4321.000webhostapp.com/charmander.png')}
    }
    document.getElementById(a).style.width=b+'%'
}