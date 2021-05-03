$(document).ready(function () {

    function showMessage() {
        $("#message").show().delay(3500).hide("slow");
    }

    function saveTask() {
        showMessage();
        let userInfo = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");

        localStorage.setItem(time, userInfo);
        //show message to user

        //hide message after so many seconds
    }

    $('.saveBtn').on('click', saveTask);

    function updateRowColor() {
        // set variable to current hour
        let currentTime = moment().hour();

        $(".time-block").each(function () {
            let blockTime = parseInt($(this).attr("id").split("hour")[1]);

            if (blockTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    updateRowColor();

    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    $("#hour18 .description").val(localStorage.getItem("hour18"));

    let timeNow = $('#time-display');
    function displayTime() {
        let rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
        timeNow.text(rightNow);
    }

    setInterval(displayTime, 1000);
});