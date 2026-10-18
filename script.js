const room = document.getElementById("room");
const lamp = document.getElementById("lamp");
const radio = document.getElementById("radio");
const book = document.getElementById("book");
const plant = document.getElementById("plant");
const teddy = document.getElementById("teddy");

const lampImage = document.getElementById("lampImage");
const radioImage = document.getElementById("radioImage");
const bookImage = document.getElementById("bookImage");
const plantImage = document.getElementById("plantImage");
const message = document.getElementById("message");

let lampOn = false;
let radioOn = false;
let bookOpen = false;
let plantBlooming = false;

const lampSound = new Audio("audio/lightswitch.mp3");
const teddySound = new Audio("audio/toysqueak.mp3");
const plantSound = new Audio("audio/plant.mp3");
const bookSound = new Audio("audio/bookflipping.mp3");
const radioPress = new Audio("audio/radiopress.mp3");
const radioMusic = new Audio("audio/radiosong.mp3");

lampSound.volume = 0.4;
teddySound.volume = 0.5;
plantSound.volume = 0.4;
bookSound.volume = 0.5;
radioPress.volume = 0.4;
radioMusic.volume = 0.3;

radioMusic.loop = true;

function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}

let messageTimer;

function showMessage(text) {
    message.textContent = text;
    message.classList.add("show");

    clearTimeout(messageTimer);

    messageTimer = setTimeout(function () {
        message.classList.remove("show");
    }, 2000);
}

/*
Most object interactions are handled by switching images between 
two states using JavaScript click events.For instance, For instance,
the lamp can turn on and off, the book can open and close, and 
the plant can grow flowers.

I wanted to make the interactions feel more responsive therefore
I had added in sound effects, all of the sounds and musics were used
in this project are royalty free which are from Pixabay website. To make
the sound effects more suitable I adjusted the volume a bit low as high 
volume would not suite with a relaxing mood.

The only challenge that I faced during the developing process was to adjust
the position and scale of the objects, since I zoomed out the background the 
placement of the objects were not in right position. To solve this I kept 
adjusting the percentage values of each object until they were in the right position.
*/

lamp.addEventListener("click", function () {
    lampOn = !lampOn;

    playSound(lampSound);

    if (lampOn) {
        lampImage.src = "imagesat4/lampon.PNG";
        room.classList.add("lights-on");
        lamp.setAttribute("aria-label", "Turn lamp off");
        showMessage("A little warmth ♡");
    } else {
        lampImage.src = "imagesat4/lampoff.PNG";
        room.classList.remove("lights-on");
        lamp.setAttribute("aria-label", "Turn lamp on");
        showMessage("Lights off");
    }
});

radio.addEventListener("click", function () {
    radioOn = !radioOn;

    playSound(radioPress);

    if (radioOn) {
        radioImage.src = "imagesat4/radioon.PNG";
        radioMusic.play();
        radio.setAttribute("aria-label", "Turn radio off");
        showMessage("Radio on ♫");
    } else {
        radioImage.src = "imagesat4/radio.PNG";
        radioMusic.pause();
        radio.setAttribute("aria-label", "Turn radio on");
        showMessage("Radio off");
    }
});

book.addEventListener("click", function () {
    bookOpen = !bookOpen;

    playSound(bookSound);

    if (bookOpen) {
        bookImage.src = "imagesat4/bookopen.PNG";
        book.setAttribute("aria-label", "Close book");
        showMessage("Time for a little reading");
    } else {
        bookImage.src = "imagesat4/bookclose.PNG";
        book.setAttribute("aria-label", "Open book");
        showMessage("Book closed");
    }
});

plant.addEventListener("click", function () {
    plantBlooming = !plantBlooming;

    if (plantBlooming) {
        plantImage.src = "imagesat4/plantwithflower.PNG";
        playSound(plantSound);
        plant.setAttribute("aria-label", "Reset plant");
        showMessage("Something is blooming!");
    } else {
        plantImage.src = "imagesat4/plant.PNG";
        plant.setAttribute("aria-label", "Make plant bloom");
        showMessage("Back to normal");
    }
});

teddy.addEventListener("click", function () {
    teddy.classList.toggle("hug");

    playSound(teddySound);

    showMessage("A little hug for you ♡");
});


/*
If this grows into a bigger project, I plan to include extra 
areas and objects for users to discover I would also improve
the layout for smaller screens. It was great to see through this 
prototype how easily click interactions, images, and sound work 
together to create an interactive experience.
*/
