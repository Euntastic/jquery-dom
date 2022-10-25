// When the DOM is ready, console.log the message 
// “Let’s get ready to party with jQuery!”

$(function() {
  console.log("Let's get ready to party with jQuery!");
});

// Give all images inside of an article tag the class of image-center 
// (this class is defined inside of the style tag in the head).

$('article>img').attr('class', 'image-center');

// Remove the last paragraph in the article.
$('article>p:last-child').remove();

// Set the font size of the title to be a random pixel size from 0 to 100.
let randomSize = Math.floor(Math.random() * 100);
$('#title').css('font-size', `${randomSize}px`);

// Add an item to the list; it can say whatever you want.
$('ol').append($('<li>').text('HELLO'));

// Scratch that; the list is silly. Empty the aside and put a paragraph in it 
// apologizing for the list’s existence.
$('aside').empty();
$('aside').append($('<p>').text('HELLO, SORRY ABOUT THE PREVIOUS LIST THAT OCCUPIED THIS SPACE.'));

// When you change the numbers in the three inputs on the bottom, the 
// background color of the body should change to match whatever the three 
// values in the inputs are.
$('.form-control').change(() => {
  const red = $('.form-control').eq(0).val();
  const blue = $('.form-control').eq(1).val();
  const green = $('.form-control').eq(2).val();
  $('body').css('background-color', `rgb(${red},${green},${blue})`);
});

// Add an event listener so that when you click on the image, it is removed 
// from the DOM.

$('img').on('click', () => $('img').remove());

