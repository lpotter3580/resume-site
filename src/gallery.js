//adapted from Prof. Robert Kostin's Gallery script used in ISTE-140
//makes img element with "icon" id cycle through below images on click.

//images to cycle through
var images = [
    "images/logan1.jpg",
    "images/logan2.jpg",
    "images/logan3.jpg"
];

var i = 0;
var slide = document.getElementById("icon");

function advanceImage(){
    i = i + 1;
    //checks wraparound
    if(i === images.length){
        i = 0;
    }

    //set icon to current image
    slide.src = images[i];

    slide.alt = "Image " + (i + 1);
}

//sets initial image
slide.src = images[i]