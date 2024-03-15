
let contactMeBtn = document.getElementById('contactMeBtn');
let closePopupBtn = document.getElementById('closePopupBtn');
let savePopupBtn = document.getElementById('savePopupBtn');

var typed_1 = new Typed('#element_1', {
    strings: ['Hello!', 'Hola!', 'Namaste!'],
    typeSpeed: 150,
});
var typed_2 = new Typed('#element_2', {
    strings: ['Web Developer', 'Graphic Designer', 'Web Designer'],
    typeSpeed: 60,
});

function redirectToResume() {
    window.open('Files/Resume_Naman Somani.pdf', '_blank');
}

function openPopup() {
    document.getElementById('cardContainer').style.display = 'flex';
}

function closePopup() {
    document.getElementById('cardContainer').style.display = 'none';
}

contactMeBtn.addEventListener('click', openPopup);
closePopupBtn.addEventListener('click', closePopup);
savePopupBtn.addEventListener('click', () => {
    const filename = 'V-C.png';
    const filepath = 'IMG/' + filename; 
    const downloadLink = document.createElement('a');
    downloadLink.href = filepath;
    downloadLink.download = filename;
    downloadLink.click();
});

