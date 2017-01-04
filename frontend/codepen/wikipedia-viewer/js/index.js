$(document).ready(function() {
  $('input[name="submit"]').click(function(event) {
    event.preventDefault();
    if ($('input[name="q"]').val() != "") {
      $.ajax({
        url: "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=" + $('input[name="q"]').val(),
        type: "GET",
        cache: false,
        contentType: "application/json; charset=utf-8",
        success: function(data) {
          $('#test').empty();
          for (var i = 0; i < data[1].length; i++) {
            $('#test').append(
              $('<div>').addClass('alert alert-info').append(
                $('<a>').addClass('text-primary').attr('href', data[3][i]).append('<b>' + data[1][i] + "</b> : " + data[2][i])
              )
            )
          }
        }
      })
    }
  });
})