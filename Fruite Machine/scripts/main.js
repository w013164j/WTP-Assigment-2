const credits = document.getElementById("credits");
const winnings = document.getElementById("winnings");

const picture = document.querySelectorAll(".picture");

const output = document.getElementById("output");
const spin = document.getElementById("spin");
const credit = document.getElementById("credit");
const collect = document.getElementById("collect");

const items = ["pictures/apple.png", "pictures/banana.png", "pictures/bar.png", "pictures/cherries.png", "pictures/grapes.png", "pictures/lemon.png", "pictures/melon.png", "pictures/orange.png"];

spin.addEventListener("click", function(){
    if (credits.innerText < 1) {
        output.innerText = "You need more credits";
		return;
    } else {
        credits.innerText = parseInt(credits.innerText) - 1;
    }
  
    let random = [];

    for (i = 0; i < 3; i++) {
        let number = Math.floor(Math.random() * items.length);
        random[i] = items[number];
    }

    for (i = 0; i < 3; i++) {
        picture[i].src = random[i];
    }

    switch (true) {
        case (random[0] == random[1] && random[0] == random[2]):
            winnings.innerText = parseInt(winning.innerText) + 10;
            output.innerText = "You have won";
            break;

        case (random[1] == random[2]):
            winnings.innerText = parseInt(winnings.innerText) + 5;
            output.innerText = "You have won";
            break;

        default:
            winnings.innerText = parseInt(winnings.innerText);
            output.innerText = "You haven't won";
            break;
    }
});

credit.addEventListener("click", function() {
    credits.innerText = parseInt(credits.innerText) + 1;
});

collect.addEventListener("click", function() {
    winnings.innerText = 0;
});