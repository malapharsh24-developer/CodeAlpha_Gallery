const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');
const showImage = document.querySelector('.showImage');
const showImage_img = document.querySelector('.showImage>img');
const closeBtn = document.querySelector('span');

gallery.addEventListener('click',(e)=>{
    console.log(e.target.src);
    if(e.target.src!=undefined){
        overlay.classList.add('showOverlay');
        showImage_img.src = e.target.src;
    
        showImage.classList.add('showOverlay');
    }
});

closeBtn.addEventListener('click',(e)=>{
    overlay.classList.remove('showOverlay');
    showImage.classList.remove('showOverlay');
});

overlay.addEventListener('click',(e)=>{
    overlay.classList.remove('showOverlay');
    showImage.classList.remove('showOverlay');
});

