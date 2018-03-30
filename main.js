$(document).ready(function() {
    $(".rotate").textrotator({
        animation: "flipUp",
        separator: ",",
        speed: 2000 //
    });
});

$(document).ready(function() {
    if( ! $('#aboutCanvas').tagcanvas({
            textColour : '#000',
            outlineColour: '#f4f4f4',
            outlineThickness : 0,
            maxSpeed : 0.03,
            depth : 0.75
        })) {
    }



});

//smooth scrolling
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    //contact form hide/show
    $(".contactMe").click(function(){
        var $window = $(window);

        var windowsize = $window.width();

        if (windowsize <= 767) {

            $( ".contactForm" ).hide();
            $(".contactInfo").show(1000);
        } else {
            $(".contactForm").show(1000);
            $(".contactMe").hide(1000);
            $(".contactInfo").hide(1000);
        }

    });
});

//contact form
(function(d, t){
    var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
    g.src = "http://www.foxyform.com/js.php?id=924105&sec_hash=ecc0ba6ba45&width=350px";
    s.parentNode.insertBefore(g, s);
}(document, "script"));

$(document).ready(function() {
    var $window = $(window);

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize >= 1400) {
            $( "#aboutCanvas" ).attr({
                width: 500,
                height: 380
            });

        } else if (windowsize >= 768 && windowsize <= 1399) {
            console.log('itfired');
            $( "#aboutCanvas" ).attr({
                width: 250,
                height: 250
            });

        } else if (windowsize <= 767) {
            $( "#aboutCanvas" ).attr({
                width: 250,
                height: 250
            });
            $( ".mailForm" ).hide();


        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});
