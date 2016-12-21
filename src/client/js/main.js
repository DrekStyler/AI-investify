$('#consumer,#business').click(()=> {
  window.location = '/team';
});

$('#record_name').change(function () {
  console.log('hey');
  localStorage.setItem('record_name',$('#record_name').val());
});
