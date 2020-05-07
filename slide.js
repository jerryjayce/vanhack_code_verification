
// <!--slide script-->

$(document).ready(function () {
    // setInterval(nextSlide, 5000);

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
});

// <!--Modal script-->


//open and close modal, transfer slide text contents to modal
let button_event_details = $(".button_event_details");

button_event_details.click(function (e) {
    let event_title = $(".event-title");
    let event_desc_abbr = $(".event_desc_abbr");

    $(".modal_event_title").text(event_title[0].innerText);
    $(".modal_event_body").text(event_desc_abbr[0].innerText);

    $(".modal_event_details").fadeIn(500);

    console.log(event_title[0].innerText);
    console.log(event_desc_abbr[0].innerText);

});

$(".close, .close1").click(function () {
    $(".modal_event_details").fadeOut(500);
});
//close modal with escape key`
$(document).keydown(function (event) {
    if (event.which === 27) {
        $(".modal_event_details").fadeOut(500);
    }
});


// <!--facebook share script-->
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));