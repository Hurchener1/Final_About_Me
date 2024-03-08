let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}


var jokeSet = document.querySelector("#quotes")
var jokePunch = document.querySelector("#quotes2")
fetch('https://official-joke-api.appspot.com/jokes/random').then(response => {
    response.json().then(data => {
        console.log(data)
        jokeSet.textContent = data.setup
        jokePunch.textContent = data.punchline
    })
})
