const validator = require('validator')
const getNotes = require('./notes.js')
const msg = getNotes()
console.log(msg)

console.log(validator.isURL('example.com'))

// const fs = require('fs')

// //fs.writeFileSync('notes.txt','Hello, My name is Surabhi.')

// fs.appendFileSync('notes.txt',' I live in Dhanbad.')

// const add = require('./utils.js')
// //const name = 'Surabhi'

// const sum = add(4,2)
// console.log(sum) 