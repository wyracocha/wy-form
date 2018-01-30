'use strict'
const procesor = require('./field-types')
module.exports = (rules) => {
  let fields = procesor(rules.fields)
  let wrapper = `
    <div class='content'>
      <div class='box box-primary'>
        <div class='box-header with-border'>
          <h3 class='box-title'>
            ${rules.title}
          </h3>
        </div>
        <div id='${rules.id}' class='box-body'>
          <form method='${rules.formMethod}' action='${rules.formAction}' >
            <input type="hidden" name="_csrf" value="${rules.csrfToken}">
            ${fields.map((field) => {
              return field
            }).join('')}
            <p class='message'>${rules.message ||}</p>
          </form>
        </div>
      </div>
    </div>
  `
  wrapper = wrapper.trim()
  return wrapper
}