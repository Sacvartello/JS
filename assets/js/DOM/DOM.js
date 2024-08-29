function handler1(event){
    const STEP = 10
    const box = event.currentTarget.body.children.box
    const x = box.offsetLeft
    const y = box.offsetTop
    console.dir();
    switch (event.code) {
        case 'ArrowUp':{
            box.style.top = `${y - STEP}px`
            break;
        }
        
        case 'ArrowDown':{
            box.style.top = `${y + STEP}px`
            break;
        }

        case 'ArrowLeft':{
            box.style.left = `${x - STEP}px`
            break;
        }
        case 'ArrowRight':{
            box.style.left = `${x + STEP}px`
            break;
        }

        default: {
            break;
        }
    }
}
document.addEventListener('keydown', handler1)