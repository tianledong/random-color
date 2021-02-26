const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById("btn");
const resetBtn = document.getElementById("rest-btn");
const color = document.querySelector(".color");


const randomHex = () => Math.floor(Math.random() * hex.length);


resetBtn.addEventListener('click', () => {
    const resetColor = '#f1f5f8';
    color.textContent = resetColor;
    document.body.style.backgroundColor = resetColor;
})

btn.addEventListener('click', () => {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[randomHex()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})