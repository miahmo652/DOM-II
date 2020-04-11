// Your code goes here

// Images animation

const images = document.querySelectorAll("img");
images.forEach((image) => {
    image.addEventListener("mouseenter", (event) => {
        image.style.transform = "scale(1.4)";
        image.style.transition = "all 1s";
    });
    image.addEventListener("mouseleave", (event) => {
        image.style.transform = "scale(1)";
    });
});

// h4 rotation

const links = document.querySelectorAll(".content-pick h4");
links.forEach((link) => {
    link.addEventListener("mousedown", (event) => {
        event.target.style.transform = "rotate(360deg)";
        event.target.style.transition = "transform 1s";

    })
})

// Background color changes

const bodys = document.querySelector("body");
bodys.addEventListener("wheel", function() {

    if (bodys.style.backgroundColor === "white") {
        bodys.style.backgroundColor = "skyblue"
    } else {
        bodys.style.backgroundColor = "white";
    }

})

const butt = document.querySelectorAll(".btn");
butt.forEach((but) => {
    but.addEventListener("click", (event) => {
        event.target.style.transform = "rotate(360deg)";
        event.target.style.transition = "transform 1s";
    })
})