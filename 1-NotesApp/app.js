const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js')

//customize yargs version
// yargs.version('1.1.0);


// add, remove, read, list

// ADD
yargs.command({
    command: 'add',
    describe: 'add new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        //console.log('title: '+ argv.title);
        //console.log('body: ' + argv.body);
        notes.addNote(argv.title, argv.body);

    }
})

yargs.command({
    command: 'remove',
    describe: '',
    builder: {
        title: {
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('removing')
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: '',
    handler: function () {
        console.log('listing')
    }
})
yargs.command({
    command: 'read',
    describe: '',
    handler: function () {
        console.log('reading')
    }
})

yargs.parse()
//console.log(yargs.argv);
