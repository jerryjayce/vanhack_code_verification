// Add your javascript here. Plagiarism will NOT be tolerated!


// slide script
$(document).ready(function () {
    $('#next').click(function () {
        nextSlide(1);
    });
    $('#prev').click(function () {
        nextSlide(0);
    });

    function nextSlide(direction) {

        let motherBox = $('.slide_holder');
        let boxes = $('.slide_column');
        // let boxes = $('.slide_content');


        let slide_index = (direction === 1) ? 0 : boxes.length - 1;


        if (direction === 1) {

            $(boxes[slide_index]).css("opacity", "0.5").slideUp(1000, function () {
                $(motherBox).append(boxes[slide_index]);
                $(boxes[slide_index]).show();
                $(boxes[slide_index]).css("opacity", "1");
            });

        } else {
            $(boxes[0]).css("opacity", "0.5");
            $(boxes[slide_index]).hide();
            $(motherBox).prepend(boxes[slide_index]);
            $(boxes[slide_index]).css("opacity", "1").slideDown(1000, function () {
                $(boxes[0]).css("opacity", "1");
            });
        }

    }


//    slide variables
    let event_title = $(".event-title");
    let event_desc_abbr = $(".event_desc_abbr");
    let attend = $(".attend");
    let share_event_title = event_title[0].innerText;
    let share_event_details = event_desc_abbr[0].innerText;


//open and close modal, transfer slide text contents to modal
    $(".button_event_details").click(function () {

        close_notification();

        init_current_slide_variables();

        $(".modal_event_title").text(event_title[0].innerText);
        $(".modal_event_body").text(event_desc_abbr[0].innerText);
        $(".attend1").text(attend[0].innerText);

        //disable attend button if event is already booked
        if (attend[0].innerText == "Booked") {
            let modal_attend_button = $(".attend1");
            modal_attend_button[0].setAttribute("disabled", "true");
        }

        $(".modal_event_details").fadeIn(500);


        //share event on twitter
        let url_and_data = " <a href='https://twitter.com/intent/tweet?text=";
        url_and_data += share_event_title;
        url_and_data += ": " + share_event_details;
        url_and_data += " ' ";
        url_and_data += " class='text-white text-decoration-none' ";
        url_and_data += " data-show-count='false'>Tweet</a> ";
        $(".share_event").html(url_and_data);

    });

    $(".close, .close1").click(function () {
        $(".modal_event_details").fadeOut(500);
    });
    //close modal with escape key
    $(document).keydown(function (event) {
        if (event.which === 27) {
            $(".modal_event_details").fadeOut(500);
        }
    });


    //attend button and notification
    $(".attend, attend1").click(function () {
        close_notification();
        init_current_slide_variables();
        save_attend_status_locally(share_event_title);
        update_booked_event_button();


        $(".modal_event_details").fadeOut(500, function () {
            $("#notification_type").html(share_event_title);
            $("#notification").fadeIn(1000);
        });
    });

    $(".close_notification").click(function () {
        close_notification();
    });

    function close_notification() {
        $("#notification").fadeOut(500);
    }


    function init_current_slide_variables() {
        event_title = $(".event-title");
        event_desc_abbr = $(".event_desc_abbr");
        share_event_title = event_title[0].innerText;
        attend = $(".attend");
        share_event_details = event_desc_abbr[0].innerText;
    }

    function save_attend_status_locally(share_event_title) {
        localStorage.setItem(share_event_title, "1");
    }

    update_booked_event_button();

    function update_booked_event_button() {
        let attend_button = $(".attend");

        event_title.map(element => {
            if (localStorage.getItem(event_title[element].innerText) !== null) {
                attend_button[element].innerText = "Booked";
                attend_button[element].setAttribute("disabled", "true");
            }

        })
    }


});