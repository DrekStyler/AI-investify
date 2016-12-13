(function () {
  console.log('sanity check!');
  var q_counter = 0;
  var questions = [
    'How long has the current core of the company worked together?',
    'What is the fastest animal in the world?',
    'What is my favorite color?'
  ];

$('#change_question').on('click', ()=> {
  $('#change_question').text('Next Question');
  $('#question_container').html(`<b>${questions[q_counter]}</b>`);
  if (q_counter >= questions.length) {
    $('#question_container').html(`<b>Please Proceed to the Next Section</b>`);
    $('#change_question').text('Next Section');
  } else {
      q_counter++;
  }
});
})();
