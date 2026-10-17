
 // Get the objects from HTML
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

// Keep track of the objects
let lampOn = false;
let radioOn = false;
let bookOpen = false;
let plantBlooming = false;

// Sound effects
const lampSound = new Audio("audio/lightswitch.mp3");
const teddySound = new Audio("audio/toysqueak.mp3");
const plantSound = new Audio("audio/plant.mp3");
const bookSound = new Audio("audio/bookflipping.mp3");
const radioPress = new Audio("audio/radiopress.mp3");
const radioMusic = new Audio("audio/radiosong.mp3");

// Set sound volume
lampSound.volume = 0.4;
teddySound.volume = 0.5;
plantSound.volume = 0.4;
bookSound.volume = 0.5;
radioPress.volume = 0.4;
radioMusic.volume = 0.3;

// Loop the radio music
radioMusic.loop = true;

// Play sound from the beginning
function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}

// Show a message for 2 seconds
let messageTimer;

function showMessage(text) {
    message.textContent = text;
    message.classList.add("show");

    clearTimeout(messageTimer);

    messageTimer = setTimeout(function () {
        message.classList.remove("show");
    }, 2000);
}

// Lamp - turn light on and off
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

// Radio - play and pause music
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

// Book - open and close
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

// Plant - grow flowers
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

// Teddy bear - hug and squeak
teddy.addEventListener("click", function () {
    teddy.classList.toggle("hug");

    playSound(teddySound);

    showMessage("A little hug for you ♡");
});
