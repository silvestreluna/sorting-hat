const students = [];
const expel = [];


const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

// event listeners are store here. 
const btnEvent = () => {
    document.getElementById('sortBtn').addEventListener('click', createStudentCard);
    document.getElementById('sortBtn').addEventListener('click', buildStudent);
    document.addEventListener('click', targetBtn);
    //document.addEventListener('click', removeStd);



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

const list = () => {
    return 1;
}

// this function will loop through the Students Array
// and print the Card to the DOM.

const buildStudent = () => {

    let studentCard = '';
    students.forEach((student) => {
        studentCard += `<div class="col-sm-4">`;
        studentCard += `<div class="card">`;
        studentCard += `<h5 class="card-title">${student.name}</h5>`;
        studentCard += `<p>${student.house}</p>`;
        studentCard += `<button id="expelBtn" type="button">Expel</button>`;
        studentCard += `</div>`;
        studentCard += `</div>`;
    });
    printToDom('studentCard', studentCard);


};



// target a expel button.


const targetBtn = (e) => {
    if (e.target.id === 'expelBtn') {
        expel.push(students);
         console.log(expel);
    };
};


// expel button



// calling functions on page load.
const init = () => {
    buildStudent();
    btnEvent();
};

init();