var $ = window.jQuery

// Write a jQuery statement that selects all <h2> tags
var h2 = $('h2')

// Write a jQuery statement that selects the tag with ID="first"
var first = $('#first')

// Using jQuery, create a click event on a button with ID of 'hidediv' that
// will hide a div tag with an ID of 'hideme'. (For reference, jQuery has a .hide() method)

$('hidediv').click(function () {
  $('#hideme').hide()
})

// Using jQuery, create a mouseover event on all H1 tags that writes the message 'MouseOver on H1' using console.log().
$('h1').mouseover(function () {
  console.log('MouseOver on H1')
})

// Create a jQuery statement that causes anchor to disappear when clicked.
// The anchor tags are each contained within a p tag and all p tags are contained in a div
$('div p a').click(function () {
  $(this).hide()
})

// Write a jQuery statement that adds a button with an ID of 'SubmitMe' and
// displays the text 'Login' to a paragraph that uses a class of 'highlight'.
$('#SubmitMe').click(function () {
  $('p.highlight').val('Login')
})

// Write a jQuery statement that displays nothing more than a label containing
// 'Update Unsuccessful!' within a div with an ID of 'message'. For a bigger
// challenge, make the text display in red.
$('div#message label').val('Update Unsuccessful!').css('color', 'red')

// Write a jQuery statement to set a text box with an ID of 'userid' to the value of 'gwashington'.
$('#userid').val('gwashington')

// Write a jQuery statement to set the selected value of a listbox with the ID
// of 'states' to the item with the value of 'NY'. Make sure the cause the event to fire.
$('select#states').val('NY').change()

// Write a jQuery statement to set the value of a label control with the class
// of 'alert' to the value of 'Emergency Failure!!!'.
$('label.alert').val('Emergency Failure!!!')
