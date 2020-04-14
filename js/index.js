// Your code goes here



//mouseenter event
const images = document.querySelectorAll("img");
images.forEach((image) => {
    image.addEventListener("mouseenter", (event) => {
        image.style.transform = "scale(1.4)";
        image.style.transition = "all 1s";
    });
    // mouseleave event
    image.addEventListener("mouseleave", (event) => {
        image.style.transform = "scale(1)";
    });
});

// mousedown event

const links = document.querySelectorAll(".content-pick h4");
links.forEach((link) => {
    link.addEventListener("mousedown", (event) => {
            event.target.style.transform = "rotate(180deg)";
            event.target.style.transition = "transform 1s";

        }) // mouseup event
    link.addEventListener("mouseup", (event) => {
        event.target.style.transform = "rotate(360deg)";
    })
})

//  wheel event 

const bodys = document.querySelector("body");
bodys.addEventListener("wheel", function() {

    if (bodys.style.backgroundColor === "white") {
        bodys.style.backgroundColor = "skyblue"
    } else {
        bodys.style.backgroundColor = "white";
    }

})

// click event

const butt = document.querySelectorAll(".btn");
butt.forEach((but) => {
    but.addEventListener("click", (event) => {
        event.target.style.transform = "rotate(360deg)";
        event.target.style.transition = "transform 1s";
    })
})

// keydown event
const kdown = document.querySelectorAll("img");
kdown.forEach((image) => {
    image.addEventListener("dblclick", (event) => {
        image.style.transform = "scale(2)";
        image.style.transition = "all 1s";
    });
});


// resizing event
const resiz = document.querySelector("body");
resiz.addEventListener('resize', (event) => {
    event.style.backgroundColor = "pink";
})


//focus

const foc = document.querySelector(".nav");
foc.addEventListener('focus', (event) => {
    event.target.style.background = 'orange';
}, true);


//contextmenu
noContext = document.querySelector('.intro h2');

noContext.addEventListener('contextmenu', event => {
    event.preventDefault();
});