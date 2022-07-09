function playSound(e){
    let keyNumber = e.keyCode;
    const audio = document.querySelector(`audio[data-key="${keyNumber}"]`)
    const divSelector = document.querySelector(`div[data-key="${keyNumber}"]`);
    if(!audio){
        return
    } else {
        audio.play();
        audio.currentTime = 0;
        divSelector.classList.add('playing');
    }
}

function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

window.addEventListener('keydown',playSound);
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));
