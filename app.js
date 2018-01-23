'use strict'
const rules = require('./config')
const procesor = require('./field-types')
let fields = procesor(rules.fields)
let wrapper = `
  <div class='${rules.className}' id='${rules.id}'>
    <form method='${rules.formMethod}' action='${rules.formAction}'>
      ${fields.map((field) => {return field}).join('')}
    </form>
  </div>
`
wrapper = wrapper.trim()
console.log(wrapper)