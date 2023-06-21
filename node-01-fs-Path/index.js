// import { readFile } from 'node:fs'

import fs, { read, readFile } from 'node:fs'
import path, { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
//since we dont have __dirname, __filename in ES Module
console.log(__dirname, 'dirname')

// syntax
// * readfile()
// * first param is string as path eg readFile('/files/lorem.txt')
// * second param is anonmys fn eg readFile('files/lorem.txt', (err, data) => {})

readFile('./files/lorem.txt', (err, data) => {
  if (err) throw err
  // console.log(JSON.stringify(data))
})

// if we have empty file it returns empty buffer as <buffer>
// also we have used JSON.stringify method to conver buffer into string
// we can use another param which is

readFile('./files/lorem.txt', 'utf8', (err, data) => {
  if (err) throw err
  // console.log(data, 'using utf8')
})

process.on('uncaughtException', (err) => {
  console.error('There was unchaught err', err)
  process.exit(1)
})

// questions what is buffer
// what is bits bytes
