//buttons
const drumA = document.querySelector('.drumA');
const drumS = document.querySelector('.drumS');
const drumD = document.querySelector('.drumD');
const drumF = document.querySelector('.drumF');
const drumG = document.querySelector('.drumG');
const drumH = document.querySelector('.drumH');
const drumJ = document.querySelector('.drumJ');
const drumK = document.querySelector('.drumK');
const drumL = document.querySelector('.drumL');


//type of sound
const soundA = document.getElementById('drumA'); 
const soundS = document.getElementById('drumS'); 
const soundD = document.getElementById('drumD'); 
const soundF = document.getElementById('drumF'); 
const soundG = document.getElementById('drumG'); 
const soundH = document.getElementById('drumH'); 
const soundJ = document.getElementById('drumJ'); 
const soundK = document.getElementById('drumK'); 
const soundL = document.getElementById('drumL'); 


const playMusic = (sound)=>{
    sound.load()
     sound.play()
}

const stopMusic = (sound) => { 
    sound.pause()
    
}

const keyboardAlert = () => { 
    setTimeout(()=>{
        alert('keyboard is required for this app ')
    },1000)
    
}


document.onkeydown = function(e){ 
    switch(event.keyCode){ 
        case 65:
        drumA.classList.add('activeDrum')
        playMusic(soundA)
        
        break;
        case 83:
            drumS.classList.add('activeDrum')
            playMusic(soundS)
        break; 
        case 68:
            drumD.classList.add('activeDrum')
            playMusic(soundD)
        break; 
        case 70:
            drumF.classList.add('activeDrum')
            playMusic(soundF)
        break; 
        case 71:
            drumG.classList.add('activeDrum')
            playMusic(soundG)
        break; 
        case 72:
            drumH.classList.add('activeDrum')
            playMusic(soundH)
        break; 
        case 74:
            drumJ.classList.add('activeDrum')
            playMusic(soundJ)
        break; 
        case 75:
            drumK.classList.add('activeDrum')
            playMusic(soundK)
        break; 
        case 76:
            drumL.classList.add('activeDrum')
            playMusic(soundL)
        break; 
    } 
}

document.onkeyup = function(e){ 
    switch(event.keyCode){ 
        case 65:
        drumA.classList.remove('activeDrum')
        stopMusic(soundA)
        break;
        case 83:
            drumS.classList.remove('activeDrum')
        break; 
        case 68:
            drumD.classList.remove('activeDrum')
        break; 
        case 70:
            drumF.classList.remove('activeDrum')
        break; 
        case 71:
            drumG.classList.remove('activeDrum')
        break; 
        case 72:
            drumH.classList.remove('activeDrum')
        break; 
        case 74:
            drumJ.classList.remove('activeDrum')
        break; 
        case 75:
            drumK.classList.remove('activeDrum')
        break; 
        case 76:
            drumL.classList.remove('activeDrum')
        break; 
    } 
}

keyboardAlert()