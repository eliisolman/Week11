const currentMainImage = document.querySelector(".gallery-image4 img");
const imagesToChoosefrom = document.querySelectorAll(".gallery img");

imagesToChoosefrom.forEach(img => img.addEventListener('click', imageClick));


function imageClick(e) {

    imagesToChoosefrom.forEach(img => img.style.opacity = 1)

    currentMainImage.src = e.target.src;
    e.target.style.opacity = 0.5
}