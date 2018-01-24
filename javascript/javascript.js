/* 
    IBM In-house {Web Coder} course Assignment Snippet.
    Javascript interactive slave file.
    For internal IBM learning usage.
*/

/*  ----- Javascript functhion() -----  */
$(function () {

    // on submitting the form
    $('form').submit(function (event) {
        // prevent the default action of reloading the page
        event.preventDefault();

        var sendData = {};
        $(event.target.nodeName +' :input').each(function () {
            var radioStatus = $(this).prop('checked');
            var checkboxStatus = $(this).prop('checked');

            if (this.type == 'radio' && !radioStatus) {
                // check for Radio status for NOT checked and DO nothing...
            } else if (this.type == 'checkbox' && !checkboxStatus) {
                // check for Checkbox status for NOT checked and DO nothing...
            } else {
                // otherwise executes the following to send data
                sendData[this.name] = $(this).val();
                console.log("sendData: "+ this.type +' '+ this.name +' '+ this.value);
            }
        });

        var posting = $.ajax({
            type: 'POST',
            url: $(event.target.nodeName).prop('action'),
            data: sendData
        });

        posting.done(function (response) {
            console.log(response);

            if ($('#alert-id').length > 0) {
                $('#alert-id').prop('hidden', false);
            } else {
                $('form').append('<p>Thank you</p>')
            }

            $('form :input').each(function () {
                $(this).val('');
            })
        });

        posting.fail(function (response) {
            console.log(response);
        });
    });

        
    // RESPONSE ALERT WINDOW-------------------------------------------------------------------------------
    /* include the following HTML to use:
    <div class="form-group">
        <button type="submit" class="btn btn-default my-btn form-control" id="submit-id">submit</button>                   
        <div class="alert alert-danger alert-dismissible fade-in" id="alert-id" hidden>
            <button type="button" class="close" id="close-id"><span>&times;</span></button>
            Thank you! I will get in touch.
        </div>
    </div>
    */

    // on clicking the X button
    $('#close-id').click(function () {
        // hide the alert panel by adding the hidden property
        $('#alert-id').prop('hidden', true);
        // optionally reload the webpage
        location.reload();
    });

    var player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('video-placeholder', {
            width: 600,
            height: 400,
            videoId: 'Xa0Q0J5tOP0',
            playerVars: {
                color: 'white',
                playlist: 'taJ60kskkns,FG0fTKAqZ5g'
            },
            events: {
                onReady: initialize
            }
        });
    }
    
    function initialize(){
        // Update the controls on load
        updateTimerDisplay();
        updateProgressBar();
    
        // Clear any old interval.
        clearInterval(time_update_interval);
    
        // Start interval to update elapsed time display and
        // the elapsed part of the progress bar every second.
        time_update_interval = setInterval(function () {
            updateTimerDisplay();
            updateProgressBar();
        }, 1000)
    
    }

})

// == this is new one == 
$('.ytvideo[data-video]').one('click', function() {

    var $this = $(this);
    var width = $this.attr("width");
    var height = $this.attr("height");
    
    $this.html('<iframe src="https://www.youtube.com/embed/' + $this.data("video") + '?autoplay=1"></iframe>');
});

// == for modal picture == 
    
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $('.myImg');
var modalImg = $("#img01");
var captionText = document.getElementById("caption");
$('.myImg').click(function(){
    modal.style.display = "block";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}   

// When user clicks on button, scroll to top 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});

$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

// end of script!
