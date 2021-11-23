const wrapper = document.querySelector(".wrapper");
let bars = document.querySelectorAll(".bar");
const resetButton = document.querySelector(".reset-button");
const bubbleSortButton = document.querySelector(".bubble-sort-button");

const setButton = document.querySelector(".set-button");
const linesInput = document.querySelector(".lines");
const freqInput = document.querySelector(".freq");

let frequency = 30;

bars.forEach(bar => {
    bar.addEventListener("mouseover", () => {
        bar.style.backgroundColor = "black";
    });
    bar.addEventListener("mouseout", () => {
        bar.style.backgroundColor = "whitesmoke";
    });
});

const convert = (pixels) => {
    let str = '';
    for(let i = 0; i < pixels.length - 2; i++) {
        str += pixels[i];
    }
    return parseInt(str);
}

const reset = () => {
    i = 0; 
    j = 0;
    bars.forEach(bar => {
        let rand = Math.ceil(Math.random() * 800);
        bar.style.width = rand + "px";
    });
}
const set = (e) => {

    e.preventDefault();
    bars.forEach(bar => { bar.remove(); });

    for(let i = 0; i < linesInput.value; i++) {
        let bar = document.createElement("div");
        wrapper.append(bar);
        bar.classList.add("bar");
        bar.addEventListener("mouseover", (e) => {
            bar.style.backgroundColor = "black";
            console.log(e);
        });
        bar.addEventListener("mouseout", (e) => {
            bar.style.backgroundColor = "whitesmoke";
        });
    }
    bars = document.querySelectorAll(".bar");

    if(freqInput.value > 10) {
        frequency = freqInput.value;
    } else {
        frequency = 10;
    }
    reset();
}

var i = 0, j = 0;
var prevJ = 0;

const bubbleSort = () => {

    bars[prevJ].style.backgroundColor = "whitesmoke";
    bars[prevJ + 1].style.backgroundColor = "whitesmoke";

    prevJ = j;

    bars[j].style.backgroundColor = "black";
    bars[j + 1].style.backgroundColor = "black";

    if(convert(bars[j].style.width) < convert(bars[j + 1].style.width)) {
        let temp = bars[j].style.width;
        bars[j].style.width = bars[j + 1].style.width;
        bars[j + 1].style.width = temp;
    } 
    j++;
    if(j >= bars.length - 1 - i) {
        j = 0;
        i++;
    }
    if(i < bars.length && j < bars.length - 1 - i) {
        window.setTimeout(bubbleSort, frequency);
    } else {
        bars[j].style.backgroundColor = "whitesmoke";
        bars[j + 1].style.backgroundColor = "whitesmoke";
    }
} 

reset();

resetButton.addEventListener("click", reset);
bubbleSortButton.addEventListener("click", bubbleSort);
setButton.addEventListener("click", set);

