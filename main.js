const students = [];


const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

// event listeners are store here. 
const btnEvent = () => {
    document.getElementById('sortBtn').addEventListener('click', createStudentCard);
    document.getElementById('sortBtn').addEventListener('click', buildStudent);
    document.addEventListener('click', clearValue);


};

// Print to the DOM function. 

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};


// This function will create the cards when the "sort" button
// is clicked and push to the students array. 
const createStudentCard = () => {
    const getName = document.getElementById('inputName').value;
    const getRandomH = Math.floor(Math.random() * houses.length);
    getHouseR = houses[getRandomH];

    students.push(
        {
            name: getName,
            house: getHouseR
        }
    );
};


// this function will loop through the Students Array
// and print the Card to the DOM.

const buildStudent = () => {

    let studentCard = '';

    students.forEach((student) => {
        studentCard += `<div class="col-sm-4">`;
        studentCard += `<div class="card">`;
        studentCard += `<h5 class="card-title">${student.name}</h5>`;
        studentCard += `<p>${student.house}</p>`;
        studentCard += `<button id="expel" type="button">Expel</button>`;
        studentCard += `</div>`;
        studentCard += `</div>`;
    });
    printToDom('studentCard', studentCard);

};


// This will clear the input field after Sort button is clicked.
const clearValue = () => {
    document.getElementById('inputName').value = '';
};

// this prevents will prevent the page from refreshing
// when enter key is clicked when input box is selected.
$("form").bind("keydown", (e) => {
    if (e.keyCode === 13) return false;
});



// calling functions on page load.
const init = () => {

    buildStudent();
    btnEvent();
};

init();