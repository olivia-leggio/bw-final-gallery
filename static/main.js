/*
shows overlay with full sized image*/
function showFull(num) {
    if (parseInt(num) <= 0) {
        num = "13";
    }
    if (parseInt(num) > 13) {
        num = "1";
    }
    document.getElementById("overlay").style.display = "block";
    var image = document.getElementById("overImg");
    image.setAttribute("src", `static/img/large/${num}.jpg`);
    image.setAttribute("data-num", num);

    document.getElementById("progTxt").innerHTML = `${num} of 13`;
    document.getElementById("set1").style.display = "none";
}

/*
changes which full image is displayed*/
function changeSlide(mod) {
    var currStr = document.getElementById("overImg").getAttribute("data-num");
    var currInt = parseInt(currStr);

    var newInt = currInt + mod;
    showFull(newInt);
}

/*
hides the overlay and returns to the main gallery*/
function closeSlides() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("set1").style.display = "block";
}