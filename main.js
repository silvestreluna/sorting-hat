const students = [];

let idCounter = 1;
const inputName = document.getElementById('inputName');
const sortButton = document.getElementById('sortBtn');


const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];



// Print to the DOM function. 

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};



const removeStudent = (e) => {
    const delBtnId = e.target.id;
    students.forEach((student, index) =>{
        if(student.id === delBtnId) {
            students.splice(index, 1);
        }
    });
    buildStudent(students);
    addExpelEvent();
 
};


// this function will loop through the Students Array
// and print the Card to the DOM.

const buildStudent = (arrayToPrint) => {
    let studentCard = '';
    arrayToPrint.forEach((student) => {
        studentCard += `<div class="col-sm-4">`;
        studentCard += `<div class="card">`;
        studentCard += `<h5 class="card-title">${student.name}</h5>`;
        studentCard += `<p>${student.house}</p>`;
        studentCard += `<button id=${student.id} class="expelBtn" type="button">Expel</button>`;
        studentCard += `</div>`;
        studentCard += `</div>`;  
        //idCounter++;
    });
    console.log(arrayToPrint);
    printToDom('student-card', studentCard);
};



// this prevents will prevent the page from refreshing
// when enter key is clicked when input box is selected.
$("form").bind("keydown", (e) => {
    if (e.keyCode === 13) return false;
});



// target a expel button.

const addExpelEvent = () => {
    const expelButtons = document.getElementsByClassName('expelBtn');
    for (let i = 0; i < expelButtons.length; i++) {
        expelButtons[i].addEventListener('click', removeStudent);
    }
};


// this function will grabs the value enter, 
// adds it

const addStudent = (e) => {
    e.preventDefault();
    const getRandomH = Math.floor(Math.random() * houses.length);
    getHouseR = houses[getRandomH];
    const inputText = inputName.value;
    const newStudents = {
        name: inputText, 
        house: getHouseR,
        id: `student${idCounter}`,
    };
    students.push(newStudents);
   idCounter++;
    buildStudent(students);
    addExpelEvent();
    inputName.value = '';
}

const addEventListener = () => {
    sortButton.addEventListener('click', addStudent);
}

// calling functions on page load.
const init = () => {
    addEventListener();
};

init();