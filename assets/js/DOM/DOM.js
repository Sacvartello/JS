const presskMeBtn = document.getElementById('btn1')
const pressBtn1 = function (event) {
    console.log('Btn was clicked');
};
presskMeBtn.onclick = pressBtn1

const noClickMeBtn = document.getElementById('btn2')
const clickbtn2 = function (event) {
    alert('Virus instaling...');
};
noClickMeBtn.addEventListener('click', clickbtn2);
presskMeBtn.onclick = null

const deadliestBtn = document.getElementById('btn3')
const funcForBtn3 = function (event) {
    alert('Your computer is hacked!!!');
};
deadliestBtn.addEventListener('click', funcForBtn3);