
    $(".service-section-heading").click(function (e) {
        e.stopPropagation();
        if ($(window).width() < 768) { // for smaller displays
            var visible = $("#online-services-div").toggle().is(":visible");
            if (visible)
                $("#online-services-plus-minus").text("-");
            else $("#online-services-plus-minus").text("+");
        }
        else {
            $(".free-holder").css("min-height", "auto");
            $(".government-initiatives-holder").css("min-height", "auto");
            hideallservices();

        }


    });
    $(".service-section-government-heading").click(function (e) {
        e.stopPropagation();
        $(".government-initiatives-holder").css("min-height", "auto");
        if ($(window).width() < 768) { // for smaller displays
            var visible = $("#government-initiatives-div").toggle().is(":visible");
            if (visible)
                $("#government-initiatives-plus-minus").text("-");
            else $("#government-initiatives-plus-minus").text("+");
        }
        else {
            $(".free-holder").css("min-height", "auto");
            hideallservices();
        }

    });
    $(".service-free-heading").click(function (e) {
        e.stopPropagation();
        $(".free-holder").css("min-height", "auto");
        if ($(window).width() < 768) { // for smaller displays
            var visible = $("#whats-new-div").toggle().is(":visible");
            if (visible)
                $("#whats-new-plus-minus").text("-");
            else $("#whats-new-plus-minus").text("+");
        }
        else {
            $(".government-initiatives-holder").css("min-height", "auto");
            hideallservices();
        }

    });
    function hideallservices() {
        var visible = $("#online-services-div,#government-initiatives-div,#whats-new-div").toggle().is(":visible");
        if (visible)
            $(".plus-minus-btn-large").text("-");
        else $(".plus-minus-btn-large").text("+");
    }