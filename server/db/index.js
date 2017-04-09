const promise = require('bluebird')
const project = require('../../project.config.js')
const options = {
  promiseLib: promise
}
const pgp = require('pg-promise')(options)
const db = pgp(project)

console.log(`Connecting to: ${project}`)

module.exports = db
