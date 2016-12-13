(function () {
  console.log('sanity check!');
  let q_counter = 0;
  const questions = [
    'How long has the current core of the company worked together? (Including Previous Ventures)',
    'In management meetings, which of the two following scenarios best describes the meeting style?  Scenario A: Each memeber talks at length about their particular specialty and the group makes its decision based on the members informed opinion, the meeting is efficient and small talk is limited.  Scenario B: The meeting is filled with small talk and all members have input on issues even if it is not their specialty.',
    'What is my favorite color?'
  ];
  const answers = [
    ['>6 Months','6 Months to a Year', '1 to 3 Years', '3 to 5 Years', '5+ Years'],
    ['Scenario A', 'Scenario B'],
    [],
    []
  ];

$('#change_question').on('click', ()=> {
  $('#change_question').text('Next Question');
  $('#question_container').html(`<b>${questions[q_counter]}</b>`);
  $('#input_div').empty();
  answers[q_counter].forEach((a) => {
    $('#input_div').append(`<button data-val="${a}">${a}</button>`);
  });
  
  console.log(answers[q_counter]);


  if (q_counter >= questions.length) {
    $('#question_container').html(`<b>Please Proceed to the Next Section</b>`);
    $('#change_question').text('Next Section');
  } else {
      q_counter++;
  }
});
})();
