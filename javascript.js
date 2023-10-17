function minimizeImage() {

    let myImg = document.getElementById("image");
    let myCurrWidth = myImg.clientWidth;
    if (myCurrWidth === 0) {
        alert("Minimum size reached");
    } else {
        myImg.style.width = (myCurrWidth - 50) + "px";
    }
}

function maximizeImage() {

    let myImg = document.getElementById("image");
    let myCurrWidth = myImg.clientWidth;
    if (myCurrWidth === 1000) {
        alert("Maximum size reached");
    } else {
        myImg.style.width = (myCurrWidth + 50) + "px";
    }

}