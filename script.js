//////////////////////////////////////////////////
// Open Invitation Animation
//////////////////////////////////////////////////

function openInvitation() {

    const opening = document.getElementById("opening");
    const website = document.getElementById("website");
    const music = document.getElementById("weddingMusic");
    opening.style.opacity = "0";


 

    if(music){

        music.volume = 0.3;

        music.play();

    } else {

        console.log("Music file not found");

    }


    setTimeout(() => {

        opening.style.display = "none";

        website.style.display = "block";


        window.scrollTo({
            top:0,
            behavior:"smooth"
        });


    },1500);

}





//////////////////////////////////////////////////
// Wedding Countdown
//////////////////////////////////////////////////


const weddingDate = new Date(
    "September 18, 2026 19:00:00"
).getTime();



function updateCountdown(){


    const now = new Date().getTime();


    const distance = weddingDate - now;



    if(distance <= 0){

        document.getElementById("days").innerHTML="00";
        document.getElementById("hours").innerHTML="00";
        document.getElementById("minutes").innerHTML="00";
        document.getElementById("seconds").innerHTML="00";

        return;

    }




    const days = Math.floor(
        distance /
        (1000*60*60*24)
    );



    const hours = Math.floor(
        (distance %
        (1000*60*60*24))
        /
        (1000*60*60)
    );



    const minutes = Math.floor(
        (distance %
        (1000*60*60))
        /
        (1000*60)
    );



    const seconds = Math.floor(
        (distance %
        (1000*60))
        /
        1000
    );




    document.getElementById("days").innerHTML =
        String(days).padStart(2,"0");



    document.getElementById("hours").innerHTML =
        String(hours).padStart(2,"0");



    document.getElementById("minutes").innerHTML =
        String(minutes).padStart(2,"0");



    document.getElementById("seconds").innerHTML =
        String(seconds).padStart(2,"0");

}




setInterval(updateCountdown,1000);

updateCountdown();






//////////////////////////////////////////////////
// Floating Gold Particles Generator
//////////////////////////////////////////////////


const particleContainer =
document.querySelector(".gold-particles");



for(let i=0;i<35;i++){


    let particle =
    document.createElement("span");


    particle.className="particle";


    particle.style.left =
    Math.random()*100+"%";


    particle.style.animationDuration =
    (5+Math.random()*10)+"s";


    particle.style.animationDelay =
    Math.random()*5+"s";


    particleContainer.appendChild(particle);

}






//////////////////////////////////////////////////
// Smooth Section Appearance
//////////////////////////////////////////////////


const sections =
document.querySelectorAll("section");



window.addEventListener("scroll",()=>{


sections.forEach(section=>{


const position =
section.getBoundingClientRect().top;



if(position <
window.innerHeight-100){


section.style.opacity="1";

section.style.transform="translateY(0)";


}


});


});





sections.forEach(section=>{

section.style.opacity="0";

section.style.transform=
"translateY(50px)";

section.style.transition=
"1s ease";

});

//////////////////////////////////////////////////
// Music Control
//////////////////////////////////////////////////
let musicPlaying = false;

const music = document.getElementById("weddingMusic");


if (music) {

    music.volume = 0.3;
    music.loop = true;
    music.currentTime = 0;

}


function toggleMusic() {


    if (!music) {

        console.log("Music element not found");
        return;

    }


    if (musicPlaying) {


        music.pause();

        document.getElementById("musicButton").innerHTML = "🎵";


    } else {


        music.play()
        .then(() => {

            console.log("Music started");

        })
        .catch(error => {

            console.log("Browser blocked autoplay:", error);

        });


        document.getElementById("musicButton").innerHTML = "🔇";

    }


    musicPlaying = !musicPlaying;

}