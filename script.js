const name = document.getElementById("name");
const submit = document.getElementById("submit");
const clear = document.getElementById("clear");
const show = document.getElementById("show");

name.addEventListener("keydown", () => {
    show.innerText = "";
});

submit.addEventListener("click", (event) => {
    event.preventDefault();
    if (name.value != "") {
        show.innerText = `تبا لك ${name.value}`;
    }
});

clear.addEventListener("click", () => {
    name.value = "";
    show.innerText = "";
})