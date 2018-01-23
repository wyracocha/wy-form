'use strict'
const procesor = require('./field-types')
module.exports = (rules) => {
  let fields = procesor(rules.fields)
  let wrapper = `
    <div class='${rules.className}' id='${rules.id}'>
      <form method='${rules.formMethod}' action='${rules.formAction}' class='col-md-10 col-md-offset-1'>
        ${fields.map((field) => {
          return field
        }).join('')}
      </form>
    </div>
  `
  wrapper = wrapper.trim()
  return wrapper
}