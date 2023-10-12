


$(function () {
  var today = dayjs().format("dddd, MMMM DD, YYYY")
  $("#currentDay").text(today);
  console.log(today)

  $(".saveBtn").on("click", function () {

    let hourKey = $(this).parent().attr('id');
    let activity = $(this).siblings('.description').val();
    localStorage.setItem(hourKey, activity);
  })
  $(function () {
    for (var i = 9; i < 18; i++) {
      $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
    }
    var currentHour = dayjs().hour()
    console.log(currentHour)
    $(".time-block").each(function () {
      let rowHour = parseInt($(this).attr('id').split('-').pop());
      if (rowHour < currentHour) {
        $(this).children(".description").removeClass("present");
        $(this).children(".description").removeClass("future");
        $(this).children(".description").addClass("past");
      }
      else if (rowHour === currentHour) {
        $(this).children(".description").removeClass("past");
        $(this).children(".description").removeClass("future");
        $(this).children(".description").addClass("present");
      }
      else {
        $(this).children(".description").removeClass("present");
        $(this).children(".description").removeClass("past");
        $(this).children(".description").addClass("future");
      }

    })


  })
});




