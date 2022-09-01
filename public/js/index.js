const imgContainer = document.querySelector('#image-container');
let imgArr = [];
let currentImg = 0;

//creates an arr of all images retrieved from the webserver at public/images
const loadImages = async function (){
    await fetch('/api/images')
    .then(response => response.json())
    .then(data => {
        data.map(imageName => {
            let img = new Image();
            img.src = '../images/' + imageName;
            imgContainer.appendChild(img);
        })
        //creates arr of all the images
        imgArr = imgContainer.children;

        //hide all images in the array using css
        for (let i = 0; i < imgArr.length; i++) {
            imgArr[i].style.display = 'none';
        }

        //display only the first image
        imgArr[0].style.display = 'block';
    });
}

//swaps to the next image in the arr
const nextImage = function(){
    imgArr[currentImg].style.display = 'none';
    currentImg++;
    if(currentImg > imgArr.length-1){
        currentImg = 0;
    }
    imgArr[currentImg].style.display = 'block';
}

//swaps to the previous image in the arr
const previousImage = function(){
    imgArr[currentImg].style.display = 'none';
    currentImg--;
    if(currentImg < 0){
        currentImg = imgArr.length-1;
    }
    imgArr[currentImg].style.display = 'block';
}

loadImages();

//listens for key presses when the browser window is active
window.addEventListener('keydown', function(event) {
    if(event.key === 'e'){
        nextImage();
    }
    if(event.key === 'q'){
        previousImage();
    }
}, false)