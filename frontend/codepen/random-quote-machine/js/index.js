$(document).ready(function() {
  getquote();
});

function getquote() {
  $.ajax({
    url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
    dataType: 'json',
    cache: false,
    success: function(quote) {
      $('#title').html(quote[0].title);
      $('#quote').html(quote[0].content);
      $('#tweet a').attr('href', 'https://twitter.com/intent/tweet?text=' + quote[0].title + ' said \"' + quote[0].content.replace(/(<([^>]+)>)/ig,"") + '\"');
    }
  })
}

$('#refresh').click(function() {
  getquote();
});