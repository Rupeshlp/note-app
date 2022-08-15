
showNotes();

// navbar display none and block ;
function my() {
  let a = document.getElementById('form');
  let b = document.getElementById('navBar');
  //console.log(a);
  if (a.style.top == 0 + 'px') {
    a.style.top = -100 + 'px';
  }
  else {
    a.style.top = 0 + 'px';
  }
}


// If user add a note add it to the localStorage;
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function(e) {
  let addTxt = document.getElementById('textId');
  let addTitle = document.getElementById('titleTxt');
  let notes = localStorage.getItem('notes');
  let alt1 = document.getElementById('alert1');
  let alt2 = document.getElementById('alert2');
  // console.log(notes);

  if (addTxt.value == '') {
    
    alt1.style.display = 'block';
    alt2.style.display = 'none';
    
    setTimeout(()=>{
      alt1.style.display = 'none';
    }, 4000);
    
  } else {

    if (notes == null) {
      notesObj = [];
    }
    else {
      notesObj = JSON.parse(notes);
    }

    let myObj = {
      title: addTitle.value,
      text: addTxt.value
    }

    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    // console.log(notesObj);
    
    alt1.style.display = 'none';
    
    alt2.style.display = 'block';
    
    setTimeout(()=>{
      alt2.style.display = 'none';
    }, 4000)

    showNotes();
  }

});


// Function to show element from localStorage;
function showNotes() {
  let notes = localStorage.getItem('notes');
  // console.log(notes);
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function(element, index) {
    html += `
      <div class="notes">
              <br />
              <h2>${element. title}</h2>
              <br />
              <p><i>${element. text}</i></p>
              <br />
              <button id="${index}" onclick="deleteNote(this.id)" type="button">Delete Note</button>
              <br /><br />
            </div>
           `
    // console.log(notesObj);
    // console.log(html);
    // console.log(localStorage.length);
  });
  // console.log(notesObj);
  let notesElm = document.getElementById('note');
  // console.log(notesElm);
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  }
  else {
    note.innerHTML = `<p id="font">Nothing to show! Use "Add a Note" section to add notes</p>`;
  }
}

// Function to delete a note;
function deleteNote(index) {
  // console.log('deleteNote', index);
  let notes = localStorage.getItem('notes');
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

// function to search a note
let search = document.getElementById('searchNotes');
search.addEventListener("input", function() {
  let searchVal = search.value;
  // searchVal.toLowerCase();
  // searchVal.toUpperCase()
  console.log('searchNotes', searchVal);
  let notesCard = document.getElementsByClassName('notes');
  Array.from(notesCard).forEach(function(element) {
    let cardTxt = element.getElementsByTagName('p')[0].innerText;


    // console.log(notesCard);
    if (cardTxt.includes(searchVal)) {
      element.style.display = 'block';
    }
    else {
      element.style.display = 'none';
    }
  });
});
