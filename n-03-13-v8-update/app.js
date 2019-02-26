
console.log('Starting app.js');

const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

console.log('yargs Argv: ',yargs.argv);

var command = yargs.argv._[0];

console.log('Command: ', command);


/////const yargv = yargs.argv;
const argv  = yargs.argv;


//console.log('Yargv', yargv);
//console.log('Aargv', argv);


if(command ==='add'){
  notes.addNote(argv.title,argv.body)
}else if(command ==='list'){
  notes.getAllNote();
}else if(command ==='read'){
  notes.readNote(argv.title)
}else if(command ==='remove'){
  notes.removeNote(argv.title);
}
else {
  notes.printfz("Command not found...");
}
console.log('ENDING');


/*if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('Note title taken');
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('Note found');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}*/
