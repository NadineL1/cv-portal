
/*Easter egg nr1 - clicking a "secret spot"*/

const secretSpot = document.getElementById('secret-spot');

secretSpot.addEventListener('click', () => {
    document.body.style.backgroundColor = "var(--primarycolor)";

    document.body.style.color = "white";
}
);
