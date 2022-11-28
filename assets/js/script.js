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

        // loops over time blocks and parses data
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("name").split("hour")[1]);
            console.log( blockHour, currentHour)

            //checks if we have already passed the current hour, or if it is upcoming/passed
            if (blockHour < currentHour) {
                $(this).addClass("passed");
                $(this).removeClass("upcoming");
                $(this).removeClass("current");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("passed");
                $(this).addClass("current");
                $(this).removeClass("upcoming");
            }
            else {
                $(this).removeClass("current");
                $(this).removeClass("passed");
                $(this).addClass("upcoming");
            }
        })
    }
    hourTracker();
})

 //loads any saved data from LocalStorage and displays for each hour
 $("#9am .description").val(localStorage.getItem("9am"));
 $("#10am .description").val(localStorage.getItem("10am"));
 $("#11am .description").val(localStorage.getItem("11am"));
 $("#12pm .description").val(localStorage.getItem("12pm"));
 $("#1pm .description").val(localStorage.getItem("1pm"));
 $("#2pm .description").val(localStorage.getItem("2pm"));
 $("#3pm .description").val(localStorage.getItem("3pm"));
 $("#4pm .description").val(localStorage.getItem("4pm"));
 $("#5pm .description").val(localStorage.getItem("5pm"));
