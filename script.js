$(document).ready(function () {
  // This is to show the date and the time
  var todayDate = moment().format("MMMM Do YYYY, h:mm:ss a");
  $("currentDay").text(todayDate);
  // listen for save button clicks
  $('.saveBtn').on('click', function () {
    // get nearby values
    console.log(this)
    var text = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    // save in localStorage
    localStorage.setItem(time, text);
  })

  var hourNine = 9;
  var hourTen = 10; 
  var hourEleven = 11;
  var hourTwelve = 12;
  var hourThirteen = 13;
  var hourFourteen = 14;
  var hourFifteen = 15;
  var hourSixteen = 16;
  var hourSeventeen = 17;

  function timeTracker() {
    // get current number of hours
    var currentHour = moment().hours();

    // loop over time blocks
    // $('.time-block').each(function() {
    //   var blockHour = parseInt($(this).attr('id').split('-')[1]);
    //     console.log (blockHour, currentHour)

      // check if we've moved past this time
      if (currentHour < hourNine) {
        $("hour-9").addClass('past');
      }
      else if (currentHour === hourNine) {
        $("hour-9").removeClass("present");
      }
      else if (currentHour > hourNine) {
      $("hour-9").removeClass("future");
      }

      if (currentHour < hourTen) {
        $("hour-10").addClass('past');
      }
      else if (currentHour=== hourTen) {
        $("hour-10").removeClass("present");
      }
      else if (currentHour > hourTen) {
      $("hour-10").removeClass("future");
      }

      if (currentHour < hourEleven) {
        $("hour-11").addClass('past');
      }
      else if (currentHour === hourEleven) {
        $("hour-11").removeClass("present");
      }
      else if (currentHour > hourEleven) {
      $("hour-11").removeClass("future");
      }

      if (currentHour< hourTwelve) {
        $("hour-12").addClass('past');
      }
      else if (currentHour === hourTwelve) {
        $("hour-12").removeClass("present");
      }
      else if (currentHour > hourTwelve) {
      $("hour-12").removeClass("future");
      }

      if (currentHour < hourThirteen) {
        $("hour-13").addClass('past');
      }
      else if (currentHour === hourThirteen) {
        $("hour-13").removeClass("present");
      }
      else if (currentHour > hourThirteen) {
      $("hour-13").removeClass("future");
      }

      if (currentHour < hourFourteen) {
        $("hour-14").addClass('past');
      }
      else if (currentHour ===  hourFourteen) {
        $("hour-14").removeClass("present");
      }
      else if (currentHour >  hourFourteen) {
      $("hour-14").removeClass("future");
      }

      if (currentHour < hourFifteen) {
        $("hour-15").addClass('past');
      }
      else if (currentHour === hourFifteen) {
        $("hour-15").removeClass("present");
      }
      else if (currentHour > hourFifteen) {
      $("hour-15").removeClass("future");
      }

      if (currentHour < hoursixteen) {
        $("hour-16").addClass('past');
      }
      else if (currentHour === hoursixteen) {
        $("hour-16").removeClass("present");
      }
      else if (currentHour > hoursixteen) {
      $("hour-16").removeClass("future");
      }

      if (currentHour < hourSeventeen) {
        $("hour-17").addClass('past');
      }
      else if (currentHour === hourSeventeen) {
        $("hour-17").removeClass("present");
      }
      else if (currentHour > hourSeventeen) {
      $("hour-17").removeClass("future");
      }
  }


  // load any saved data from localStorage
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));


timeTracker();
})
