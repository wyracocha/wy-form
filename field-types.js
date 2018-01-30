'use strict'
const inputText = (fieldItem) => {
  let html = `
    <div class='${fieldItem.className || '' }'>
      ${fieldItem.labelHtml ? fieldItem.labelHtml : '' }
      <input id='${fieldItem.id || ''}' class='${fieldItem.fieldClass}' ${(fieldItem.required && fieldItem.required === true) ? 'required': '' } type='text' name='${fieldItem.fieldName || ''}'>
    </div>
  `
  return html.trim()
}
const buttonSubmit = (fieldItem) => {
  let html = `
    <div id='${fieldItem.id || ''}' class='${fieldItem.className || '' }'>
      <button class='btn btn-${fieldItem.buttonLevel}' type='submit' name='${fieldItem.fieldName}'>${fieldItem.textValue}</button>
    </div>
  `
  return html.trim()
}
const inputTextEmail = (fieldItem) => {
  let html = `
    <div class='${fieldItem.className || '' }'>
      ${fieldItem.labelHtml ? fieldItem.labelHtml : '' }
      <input id='${fieldItem.id || ''}' class='${fieldItem.fieldClass}' ${(fieldItem.required && fieldItem.required === true) ? 'required': '' } type='email' name='${fieldItem.fieldName || ''}'>
    </div>
  `
  return html.trim()
}
const inputDateTimePicket = (fieldItem) => {
  let html =`
    <div class='${fieldItem.className || '' }'>
      ${fieldItem.labelHtml ? fieldItem.labelHtml : '' }
      <div class='input-group date' id='${fieldItem.id || ''}'>
          <input id='${fieldItem.id || ''}' ${(fieldItem.required && fieldItem.required === true) ? 'required': '' } name='${fieldItem.fieldName || ''}' type='text' class='${fieldItem.fieldClass} calendarPicker' />
          <span class="input-group-addon">
              <span class="glyphicon glyphicon-calendar"></span>
          </span>
      </div>
    </div>
  `
  return html.trim()
}
const inputImage = (fieldItem) => {
  let html = `
    <div class='${fieldItem.className || '' }'>
      ${fieldItem.labelHtml ? fieldItem.labelHtml : '' }
      <input id='${fieldItem.id || ''}' class='${fieldItem.fieldClass}' ${(fieldItem.required && fieldItem.required === true) ? 'required': '' } type='email' name='${fieldItem.fieldName || ''}'>
    </div>
  `
  return html.trim()
}
const inputRadio = (fieldItem) => {
  let html = `
  <div class='${fieldItem.className || '' }'>
    ${fieldItem.labelHtml ? fieldItem.labelHtml : '' }
    <div>
    ${fieldItem.items.map((e,i) => {
      var checked = i == 0 ? 'checked' : void(0)
      return '<label class="radio-inline"><input '+checked+' type="radio" name="'+fieldItem.fieldName+ '" value="'+e.value+'">'+e.text+'</label>'
    }).join('')}
    </div>
  </div>
  `
  return html.trim()
}
const Select = (fieldItem) => {
  let html = `
  <div class='${fieldItem.className || '' }'>
    ${fieldItem.labelHtml ? fieldItem.labelHtml : '' }
    <select name='${fieldItem.fieldName}' class='${fieldItem.fieldClass || '' }'>
    ${fieldItem.items.map(e => {
      return '<option value="'+e.value+'">'+e.text+'</option>'
    }).join('')}
    </select>
  </div>
  `
  return html.trim()
}
const inputTag = (fieldItem) => {
  let html = `
  <div class='${fieldItem.className || '' }'>
    <div>
      ${fieldItem.labelHtml ? fieldItem.labelHtml : '' }
    </div>
    <input style='' data-role='tagsinput' id='${fieldItem.id || ''}' class='${fieldItem.fieldClass}' ${(fieldItem.required && fieldItem.required === true) ? 'required': '' } type='text' name='${fieldItem.fieldName || ''}'>
  </div>
  `
  return html.trim()
}
module.exports = (fieldList) => {
  let  fields = fieldList.map((fieldItem) => {
    switch (fieldItem.fieldType) {
      case 'inputTag':
        return inputTag(fieldItem)
        break;
      case 'inputText':
        return inputText(fieldItem)
        break;
      case 'buttonSubmit':
        return buttonSubmit(fieldItem)
        break;
      case 'inputDateTimePicket':
        return inputDateTimePicket(fieldItem)
        break;
      case 'inputRadio':
        return inputRadio(fieldItem)
        break;
      case 'Select':
        return Select(fieldItem)
        break;
      default:
        return inputText(fieldItem)
    }
  })
  return fields
}