$(function() {

  'use strict';

  //fade title out & in
  $('#main-header').delay(2000).fadeOut(400);
  $("#name").delay(3000).fadeIn(400);

//Starting the timer
  $('#timer').timer({
      seconds: -3 //Specify start time in seconds
  });

  // Randomizing the api info
  var randomNumber = Math.floor(Math.random() * 5);

  function getAjax() {

    return $.ajax({
      url: 'http://api.namegame.willowtreemobile.com/',
      method: 'GET',
      dataType: 'json'
    });

  }

  getAjax().done(function(data) {

    var randomArray = [];

    while ($('.l-box').length < 5) {

      var randomEmployee = Math.floor(Math.random() * data.length);

      if (randomArray.indexOf(randomEmployee) < 0) {

        // Selecting a picture & putting it in Pure.css grid
        if ($('.l-box').length === randomNumber) {

          $('.employees').append(
          '<div class="pure-u-1-6 l-box">' + '<img class="pure-img picture" src="' + data[randomEmployee].url +'" >' +
            '<div class="info-div">' + '<span class="employee-name">' + data[randomEmployee].name + '</span>' +
            '</div>' +
          '</div>'
          );

          $('.question').append(
            '<span>Who is </span>' + '<span class="name">' + data[randomEmployee].name + '</span>' +
            '<span>?</span>'
          )

        } else {

          // other images in pure.css grid
          $('.employees').append(
          '<div class="pure-u-1-6 l-box">' +
            '<img class="pure-img" src="' + data[randomEmployee].url +'" >' +
            '<div class="info-div">' +
              '<span class="employee-name">' + data[randomEmployee].name + '</span>' +
            '</div>' +
          '</div>'
          );

        }

        randomArray.push(randomEmployee);

      }

    }

  });

//lining up correct answer on click
  $('.employees').on('click', '.l-box', function(e) {
    e.preventDefault();

    if ($(this).find('.employee-name').text() === $('.name').text()) {

      $(this).find('.info-div').addClass('right');

//random fact alert when correct answer is clicked
    var randomFact = new Array ();
      randomFact[0] = "Likes to take long walks on the beach";
      randomFact[1] = "Favorite color is green";
      randomFact[2] = "Loves autumn";
      randomFact[3] = "Favorite hobby is sailing";
      randomFact[4] = "Enjoys a good JavaScript puzzle";
      randomFact[5] = "Is actually a Canadian";
      randomFact[6] = "Wants to travel to Argentina";
      randomFact[7] = "Loves Mozart";
      randomFact[8] = "Used to be a professional poker player";
      randomFact[9] = "Goes to live concerts weekly";
      randomFact[10] = "Plays in a jazz band";
      randomFact[11] = "Collects snowglobes";
      randomFact[12] = "Favorite show is 'The Office' ";
    var i = Math.floor(13 * Math.random())
    var message = randomFact[i]

    alert(message)

//reload
      window.setTimeout(function() {
        location.reload();
      }, 1000);

    } else {

//wrong answer
      $(this).find('.info-div').addClass('wrong');

    }

  });

});
