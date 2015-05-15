$(function () {
  $('#btnAdd').click(function () {
    var num = $('.clonedInput').length,
    newNum  = new Number(num+1),
    newElem = $('#task' + num).clone().attr('id', 'task' + newNum).fadeIn('slow');
    
    newElem.find('.heading-reference').attr('id', 'ID' + newNum + '_reference').attr('name', 'ID' + newNum + '_reference').html('New task ' + newNum);
    newElem.find('.input_fn').attr('id', 'subject_tasks_attributes_' + (newNum-1) + '_title').attr('name', 'subject[tasks_attributes][' + (newNum-1) + '][title]').val('');
    newElem.find('.input_ta').attr('id', 'subject_tasks_attributes_' + (newNum-1) + '_content').attr('name', 'subject[tasks_attributes][' + (newNum-1) + '][content]').val('');

    $('#task' + num).after(newElem);
    $('#ID' + newNum + '_title').focus();

    $('#btnDel').attr('disabled', false);

    if (newNum == 5)
    $('#btnAdd').attr('disabled', true).prop('value', "You've reached the limit");
  });

  $('#btnDel').click(function () {
    if (confirm("Are you sure you wish to remove this section? This cannot be undone."))
      {
        var num = $('.clonedInput').length;
        $('#task' + num).slideUp('slow', function () {$(this).remove(); 
            if (num -1 === 1)
        $('#btnDel').attr('disabled', true);
        $('#btnAdd').attr('disabled', false).prop('value', "Add task");});
      }
    return false;
    $('#btnAdd').attr('disabled', false);
  });
  $('#btnDel').attr('disabled', true);
});
