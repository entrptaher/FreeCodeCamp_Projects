var streamers = [
  "ESL_SC2",
  "OgamingSC2",
  "cretetion",
  "freecodecamp",
  "storbeck",
  "habathcx",
  "RobotCaleb",
  "noobs2ninjas",
  "comster404"
];
$(document).ready(function() {
  streamers.forEach(function(element) {
    $('<div>', {
      id: element,
      class: "row stream"
    }).appendTo('.container');
    $('<div>', {
      class: "logo col-xs-6 col-md-2"
    }).appendTo("#" + element);
    $('<div>', {
      class: "name col-xs-2"
    }).appendTo("#" + element);
    $('<div>', {
      class: "status col-xs-2 hidden-xs"
    }).appendTo("#" + element);
    $('<div>', {
      class: "streaming col-xs-6"
    }).appendTo("#" + element);

    $.getJSON('https://wind-bow.gomix.me/twitch-api/users/' + element + '?callback=?', function(data) {
      $('<img>', {
        src: data.logo,
        width: "100px",
        height: "100px",
        class: "thumbnail"
      }).appendTo("#" + element + " .logo");
      $('<div>', {
        html: '<a href="https://www.twitch.tv/' + data.name + '">' + data.display_name + '</a>'
      }).appendTo("#" + element + " .name");
      console.log(data)
      if(data.error){
        $("#" + element + " .name").text(element + " Stream Unavailable");
      }
    });
    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + element + '?callback=?', function(data) {
      if (data.stream) {
        $('<div>', {
          html: " Online",
          class: "glyphicon glyphicon-ok"
        }).appendTo("#" + element + " .status");
        $("#" + element).addClass('stream-on bg-success');
        $('<div>', {
          html: data.stream.channel.game + ": " + data.stream.channel.status
        }).appendTo("#" + element + " .streaming");
      } else {
        $('<div>', {
          html: " Offline",
          class: "glyphicon glyphicon-remove"
        }).appendTo("#" + element + " .status");
        $("#" + element).addClass('stream-off bg-danger');
      }
      console.log(data)
    });

  })
  $('#showall').click(function() {
    $(".stream").show();
  })
  $('#showon').click(function() {
    $(".stream-on").show();
    $(".stream-off").hide();
  })
  $('#showoff').click(function() {
    $(".stream-on").hide();
    $(".stream-off").show();
  })
})