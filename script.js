const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const pfp = document.getElementById("pfp");

inputFile.addEventListener('change', uploadImage )

function uploadImage(){
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    pfp.src = imgLink;
}