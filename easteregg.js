
/*Easter egg nr1 - clicking a "secret spot"*/

const secretSpot = document.getElementById('secret-spot');

secretSpot.addEventListener('click', () => {
    document.body.style.backgroundColor = "var(--primarycolor)";

    document.body.style.color = "white";
}
);

/*Easter egg nr2 - writing the secret code */

let input = "";
const secretCode = "lol";

window.addEventListener("keydown", (e) => {
    // check if key is of "correct value"(a-z) and add every new key to the input-string
    if (e.key.length === 1 && /[a-z]/i.test(e.key)) {
        input += e.key.toLowerCase();
    }

    /*if input gets longer than secret code, this trims the start by using substring to keep only most resent keys.*/
    if (input.length > secretCode.length) {
        input = input.substring(input.length - secretCode.length);
    }

    if (input === secretCode) {
        alert("Pretend I wrote something really funny :D");
        input = ""; /*reset after success*/
    }
}
);