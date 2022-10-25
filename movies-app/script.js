
$(document).ready(() => {
  $('#movie-submit').on('click', () => {
    const tableRow = $('<tr>');
    const cellName = $('<td>').text($('#movie-name').val());
    const cellRating = $('<td>').text($('#movie-rating').val());

    const deleteBtn = $('<button>').text("DELETE").addClass("m-0 py-1 px-7 bg-indigo-300 border rounded-md");
    
    deleteBtn.click((event) => {
      console.log("HEY");
      console.log($(this).html());
      $(this).parent('td').remove();
    });
    
    const cellBtn = $('<td>').append(deleteBtn);

    tableRow.append(cellName.addClass("border p-2 w-1/3"));
    tableRow.append(cellRating.addClass("border p-2 w-1/3"));
    tableRow.append(cellBtn.addClass("w-1/3"));

    $('tbody').append(tableRow)
  });

});