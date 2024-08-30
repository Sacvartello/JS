const addressImgURL = 'https://images.pexels.com/photos/27245504/pexels-photo-27245504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

const img = document.querySelector('.img')
const attrSrc = document.createAttribute('src')
img.setAttributeNode(attrSrc)
attrSrc.value = addressImgURL

function changeImg(attrSrc){
    const newImg = 'https://images.pexels.com/photos/27576423/pexels-photo-27576423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    attrSrc.value = newImg
}