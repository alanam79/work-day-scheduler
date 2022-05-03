$(document).ready(function () {
  var displayCurrentDay = $("#currentDay");
  var currentDay = moment();
  displayCurrentDay.textContent = currentDay.format("dddd, MMMM Do");

  $(".saveBtn").on("click", function () {
    var textAreaValue = $(this).siblings(".description").val();
    console.log(textAreaValue);
    var timeBlock = $(this).parent().attr("id");
    console.log("timeblock", timeBlock);

    localStorage.setItem(timeBlock, textAreaValue);
  });

  function keepingTime() {
    var currentTime = moment().hours();
    console.log("hour of the day", currentTime);

    $(".time-block").each(function () {
      var timeBlockHour = parseInt($(this).attr("id"));
      console.log("timeBlockHour", timeBlockHour);

      if (timeBlockHour < currentTime) {
        $(this).addClass("past");
      } else if (timeBlockHour === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("future");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  keepingTime();

  for (var i = 9; i < 18; i++) {
    $("#" + i + ".description").val(localStorage.getItem(i));

    // String Interpolation 
    // console.log(`#${i}.description`).val(localStorage.getItem(i));  
}
});
