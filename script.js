function myFunction(smallImg) {
    let fullImg = document.getElementById('bigImg');
    fullImg.src = smallImg.src;
    fullImg.style.animation = "0.6s anima normal linear";
}