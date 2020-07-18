console.log("welcome to the project 1 NOTES APP");
showNotes();

// if user adds a note to localstorage 
let z = document.getElementById('addBtn');
let onClick = function (e) {

    let addTxt = document.getElementById('addTxt');
    let addtitle = document.getElementById('addtitle');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title: addtitle.value,
        text: addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";
    addtitle.value = "";
    // console.log(notesObj);
    showNotes();

    let display = new Display();
    if (display.validate(note)) {
        display.add(note);
        display.clear();
        display.show("success","Your notes has been added sucsessfully.")
    }
    else {
        display.show("danger","You cannot add empty note.")
    }
}
z.addEventListener('click', onClick);

class Display {
    add(note) {
        console.log("adding to UI");
        let tableBody = document.getElementById("tableBody")
        let uiString = ` <tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                        </tr>`;
        tableBody.innerHTML += uiString;
    }
    // implement clear function
    clear() {
        let notesId = document.getElementById("notesId");
        notesId.reset();
    }
    // implement validate function
    validate(note) {
        if (note.name.length < 2 || note.author.length < 2) {
            return false
        }
        else {
            return true;
        }
    }
    // implement show function
    // add methods to display prototype
    show(type, displayMessage) {
        let message = document.getElementById("message");
        let boldText;
        if(type==='success'){
            boldText = 'Success';
        }
        else{
            boldText = 'Error!';
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                  <strong>${boldText}</strong> ${displayMessage}
                                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                  </button>
                             </div>`;
                             setTimeout(function(){
                                 message.innerHTML=""
                             },5000);
    }
}










// function to show elements from localstorage
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = '';
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.text}</p>
                <buttton id="${index}" onClick="deleteNote(this.id)" class="btn btn-primary">Delete Note</a>
            </div>
        </div>`;
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show! Use "Add Notes" to add notes.`;
    }
}

// fuction to delete a note
function deleteNote(index) {
    // console.log('i am deleting', index);
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}


// function to search
let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!,inputVal');
    let noteCard = document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach(function (element) {
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
        // console.log(cardTxt);
    });
});
// var a = "http://magicnotes.com";
// a.hostname == "magicnotes.com";
// a.pathname == "magicnotes";

// const myUrl = new URL("https://www.magicnotes.com");
/*
Done By-Devbhan Singh
Special Thanks-Shreyansh Chohan.
*/