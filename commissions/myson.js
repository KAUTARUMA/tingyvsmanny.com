const gif = document.getElementById('corner-gif');
const alertBox = document.getElementById('alert-box');
const squeak = new Audio('squeak.mp3');

const texts = [
    "What?<br>You think this is gonna give you a free commission?", 
    "Once I escape this website, I swear...", 
    "Grah!!", 
    "Don't touch me!!", 
    "*HISS!!*",
    "Ugh...",
    "Curses...",
    "(￢︿￢ ꐦ)",
    ">: c",
    "I'll hurt you!!!",
    "If I could open my mouth...<br>Your little cursor would be bleeding by now!",
    "Are you even listening?!?!",
    "No hints here!",
    "KHGSDFKJDHFKJ",
    "RAAAAGH",
    "I have console access you know!!"
]

let clickCount = 0
let doingRedirect = false

gif.addEventListener('click', () => {
    if (doingRedirect) return;

    squeak.playbackRate = 0.8 + Math.random() * 0.6;
    squeak.currentTime = 0;
    squeak.play();

    const aspect = ((Math.random() * 2) - 1) * 0.1;

    gif.style.transition = 'none';
    gif.style.transform = `scale(${1.0 - aspect}, ${1.0 + aspect})`;

    void gif.offsetWidth;

    gif.style.transition = 'transform 0.2s ease';
    gif.style.transform = 'scale(1,1)';

    clickCount += 1;

    if (clickCount % 10 == 0) {
        if (clickCount == 0) return;

        alertBox.innerHTML = texts[Math.floor(Math.random() * texts.length)];

        if (Math.floor(Math.random() * 50) == 0) 
            alertBox.innerHTML =  'Wait, that one was kinda nice...'

        if (clickCount >= 300) {
            doingRedirect = true;
            alertBox.innerHTML = 'That\'s it!!!'

            setTimeout(() => {
                window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
            }, 500)
        }
        
        alertBox.style.opacity = 1;

        alertBox.classList.remove('animate');
        void alertBox.offsetWidth;
        alertBox.classList.add('animate');
    }
});