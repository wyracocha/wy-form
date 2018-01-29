'use strict'
const procesor = require('./field-types')
module.exports = (rules) => {
  let fields = procesor(rules.fields)
  let wrapper = `
    <div class='${rules.className}' id='${rules.id}'>
      <form method='${rules.formMethod}' action='${rules.formAction}' class='col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3'>
        ${fields.map((field) => {
          return field
        }).join('')}
      </form>
    </div>
  `
  wrapper = wrapper.trim()
  return wrapper
}