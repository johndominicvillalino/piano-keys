// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function (key) {
    notes.push(document.getElementById(key));
})

// Write named functions that change the color of the keys below

const dom = document;

const keyPlay = (event) => {

    const clickedId = event.target.id

    const type = event.type

    let color;

    if (type === 'mousedown') {
        color = 'orange'
    }
    if (type === 'mouseup') {
        color = ''
    }

    const clickedElement = notes.filter(note => note.id === clickedId)

    try {

        const id = clickedElement[0].id;

        console.log(id)

        dom.getElementById(id).style.backgroundColor = color

    } catch (error) {
       
    }

}



const playPiano = (e) => {

    notes.forEach(key => {

       key.onmousedown = keyPlay;
       key.onmouseup = keyPlay;

    })


}

dom.onclick = playPiano;


// Write a named function with event handler properties


// Write a loop that runs the array elements through the function


// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden = true;


nextOne.onclick = function (){


    nextTwo.hidden = false;
    nextOne.hidden = true;
    dom.getElementById('letter-note-five').innerHTML = 'D';
    dom.getElementById('letter-note-six').innerHTML = 'C'

}


nextTwo.onclick = function (){


    nextThree.hidden = false;
    nextTwo.hidden = true;
    dom.getElementById('word-five').innerHTML = 'DEAR';
    dom.getElementById('word-six').innerHTML = 'FRI-'
    lastLyric.display = 'inline-block'
    dom.getElementById('letter-note-three').innerHTML = 'E'
    dom.getElementById('letter-note-five').innerHTML = 'C'
    dom.getElementById('letter-note-six').innerHTML = 'D'
}


nextThree.onclick = function () {


    startOver.hidden = false
    nextThree.hidden = true
    dom.getElementById('word-one').innerHTML = 'HAP-'
    dom.getElementById('word-two').innerHTML = 'PY'
    dom.getElementById('word-three').innerHTML = 'BIRTH'
    dom.getElementById('word-four').innerHTML = 'DAY'
    dom.getElementById('word-five').innerHTML = 'TO'
    dom.getElementById('word-six').innerHTML = 'YOU!'


    dom.getElementById('letter-note-two').innerHTML = 'F'
    dom.getElementById('letter-note-three').innerHTML = 'E'
    dom.getElementById('letter-note-four').innerHTML = 'C'
    dom.getElementById('letter-note-five').innerHTML = 'D'
    dom.getElementById('letter-note-six').innerHTML = 'C'


    lastLyric.display = 'none'


}








// Write anonymous event handler property and function for the first progress button


// Write anonymous event handler property and function for the second progress button


// Write anonymous event handler property and function for the third progress button


// This is the event handler property and function for the startOver button
startOver.onclick = function () {
    nextOne.hidden = false;
    startOver.hidden = true;
    document.getElementById('word-one').innerHTML = 'HAP-';
    document.getElementById('letter-note-one').innerHTML = 'G';
    document.getElementById('word-two').innerHTML = 'PY';
    document.getElementById('letter-note-two').innerHTML = 'G';
    document.getElementById('word-three').innerHTML = 'BIRTH-';
    document.getElementById('letter-note-three').innerHTML = 'A';
    document.getElementById('word-four').innerHTML = 'DAY';
    document.getElementById('letter-note-four').innerHTML = 'G';
    document.getElementById('word-five').innerHTML = 'TO';
    document.getElementById('letter-note-five').innerHTML = 'C';
    document.getElementById('word-six').innerHTML = 'YOU!';
    document.getElementById('letter-note-six').innerHTML = 'B';
}