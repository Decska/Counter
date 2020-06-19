let a = 0

$('#increase').on('click', () => {
    a++;
    $('h2').text(a);
  });
  $('#decrease').click(() => {
    a--;
    $('h2').text(a);
  });

  