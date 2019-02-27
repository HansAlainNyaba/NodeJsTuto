
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

var printfz = (...args) => {
  var str = ''
  for (var i = 0; i < args.length - 1; i++) {
    str += args[i] + ' '
  }
  if (args.length > 0) {
    str += args[args.length - 1];
  }
  console.log(str);
}

var fetchNote =()=>{
  try {
    return JSON.parse(fs.readFileSync('notes-data.json', 'utf8'));
  } catch (error) {
    return [];
  }
}

var saveNote = (note)=>{
  fs.writeFileSync('notes-data.json', JSON.stringify(note));
}

var addNote = function (title, body) {
  var notes = fetchNote();
  var note = {
    title,
    body
  }
  notes.push(note);
  var duplicate = notes.filter((note)=> note.title === title);

  if(duplicate.length === 0){
    saveNote(notes);
    printfz('Note added: ', title, body);
  }

}

var getAllNote = function () {
  var notes = fetchNote();
  note = {
    title:"",
    body:""
  };
  notes.forEach((note) => { 
    console.log('-', note.title + ':', note.body)
  });

}



var removeNote = function (title) {
  printfz('Removing note: ', title);
  var notes = fetchNote();
  var note = {
    title,
    body:""
  };

  var stripedNote = notes.filter((note)=> note.title !== title);
  if(stripedNote.length !== 0){
      saveNote(stripedNote);
  }
} 

var readNote = function (title) {
  printfz('Reading: ', title);
  var notes = fetchNote();
  var note = {
    title,
    body:""
  };
  var readnote = notes.filter((note)=> note.title === title);
  printfz(readnote[0].title + ':', readnote[0].body);

} 

module.exports = {
  addNote,
  printfz,
  readNote,
  getAllNote,
  removeNote
}
/*ar fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};

var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
  debugger;
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};*/


