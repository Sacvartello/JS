const imgs = ['https://images.pexels.com/photos/27245504/pexels-photo-27245504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
'https://images.pexels.com/photos/27576423/pexels-photo-27576423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
'https://images.pexels.com/photos/27926212/pexels-photo-27926212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
'https://images.pexels.com/photos/27637648/pexels-photo-27637648.jpeg',
'https://images.pexels.com/photos/27935498/pexels-photo-27935498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
'https://images.pexels.com/photos/16541441/pexels-photo-16541441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
'https://images.pexels.com/photos/27849805/pexels-photo-27849805.png'
]

const img = document.querySelector('.img')
const attrSrc = document.createAttribute('src')
const [prevBtn,nextBtn] = document.querySelectorAll('.btn')
img.setAttributeNode(attrSrc)

const slider = new Slider(imgs)

function updateView() {
    attrSrc.value= slider.currentSlide
}
function createBtnHandler(direction){
    return function () {
        slider.currentIndex = slider[direction]
        updateView()
    }
}

// function prevImg() {
//     slider.currentIndex = slider.prev()
//     updateView()
// }
// function nextImg() {
//     slider.currentIndex = slider.next()
//     updateView()
// }
updateView()
prevBtn.addEventListener('click', createBtnHandler('prev'))
nextBtn.addEventListener('click', createBtnHandler('next'))
