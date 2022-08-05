$(document).ready(function () {
  // This is to show the date and the time
  var TodayDate = moment().format("MMMM Do YYYY, h:mm:ss a");
  $("currentDay").html(TodayDate)
  // listen for save button clicks
  $('.saveBtn').on('click', function () {
    // get nearby values
    console.log(this)
    var text = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    // save in localStorage
    localStorage.setItem(time, text);
  })

    // Show notification that item was saved to localStorage by adding class 'show'
    $('.notification').addClass('show');

    // Timeout to remove 'show' class after 5 seconds
    setTimeout(function () {
      $('.notification').removeClass('show');
    }, 5000);

  function timeTracker() {
    // get current number of hours
    var currentHour = moment().hours();

    // loop over time blocks
    $('.time-block').each(function () {
      var blockHour = parseInt($(this).attr('id').split('-')[1]);
        console.log (blockHour, currentHour)

      // check if we've moved past this time
      if (blockHour < currentHour) {
        $(this).addClass('past');
        $(this).removeClass("future");
        $(this).removeClass("present");
      }

       else if (blockHour === currentHour) {
        $(this).removeClass('past');
        $(this).removeClass('future');
        $(this).addClass('present');
      } 
      
      else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    })
  }

  // set up interval to check if current time needs to be updated
  var interval = setInterval(hourUpdater, 15000);

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
});
