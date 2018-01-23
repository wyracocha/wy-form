'use strict'
const Joi = require('joi')
module.exports = {
  className: 'row',
  id: '',
  formMethod: 'POST',
  formAction: '/user',
  fields: [
    {
      fieldType: 'inputText',
      className: 'form-group',
      fieldClass: 'form-control',
      fieldName: 'name',
      id: 'user-name',
      required: false,
      labelHtml: '<label for="user-name">User Name</label>'
    },
    {
      fieldType: 'buttonSubmit',
      className: 'form-group',
      fieldName: 'submit',
      id: ''
    },
    {
      fieldType: 'inputDateTimePicket',
      className: 'form-group',
      fieldClass: 'form-control',
      fieldName: 'calendar',
      id: 'calendarPicker',
      required: true,
      labelHtml: '<label for="calendarPicker">Choose Date time</label>'
    }
  ]
}