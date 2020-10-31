const chalk = require('chalk')
const { argv } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')

//Customize yargs version
yargs.version('1.1.0')

//Create yargs add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)

        // console.log('Title: '+ argv.title)
        // console.log('Body: '+ argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

//Create a list command
yargs.command({
    command: 'list',
    describe: 'list a new note',
    handler: function () {
        console.log('listing a note!')
    }
})

//Create a read command
yargs.command({
    command: 'read',
    describe: 'read a new note',
    handler: function () {
        console.log('reading a new note')
    }
})

// console.log(yargs.argv)
yargs.parse()

