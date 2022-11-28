$(document).ready(function () {
    //display current day & time.
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    //Assign saveBtn click listener for user input and time stamp??
    $(".saveBtn").on("click", function () {
        //get nearby values.
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //set items in local storage.
        localStorage.setItem(time, text);
    })
   
    function hourTracker() {
        //get current number of hours.
        var currentHour = moment().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("name").split("hour")[1]);
            console.log( blockHour, currentHour)

            //check if we've moved past this time
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourTracker();
})

 //loads any saved data from LocalStorage and display for each hour
 $("#9am .description").val(localStorage.getItem("9am"));
 $("#10am .description").val(localStorage.getItem("10am"));
 $("#11am .description").val(localStorage.getItem("11am"));
 $("#12pm .description").val(localStorage.getItem("12pm"));
 $("#1pm .description").val(localStorage.getItem("1pm"));
 $("#2pm .description").val(localStorage.getItem("2pm"));
 $("#3pm .description").val(localStorage.getItem("3pm"));
 $("#4pm .description").val(localStorage.getItem("4pm"));
 $("#5pm .description").val(localStorage.getItem("5pm"));
