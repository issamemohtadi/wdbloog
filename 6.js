$(document).ready(function() {
    $(".paging-wdbloog").show(); 
    $(".paging-wdbloog a:first").addClass("active");

var imageWidth = $(".coolslider-wdbloog").width(); 
var imageSum = $(".wdbloog_img img").size(); 
var imageReelWidth = imageWidth * imageSum;

    $(".wdbloog_img").css({'width' : imageReelWidth});

rotate = function(){ var triggerID = $active.attr("rel") - 1; 

var wdbloog_imgPosition = triggerID * imageWidth;

    $(".paging-wdbloog a").removeClass('active');
        $active.addClass('active');

    $(".cooltitlewdbloog").stop(true,true).slideUp('slow');
    $(".cooltitlewdbloog").eq( 
    $('.paging-wdbloog a.active').attr("rel") - 1 ).slideDown("slow"); 
    $(".wdbloog_img").animate({left: -wdbloog_imgPosition}, 400 );
    };

rotateSwitch = function(){
    $(".cooltitlewdbloog").eq( $('.paging-wdbloog a.active').attr("rel") - 1 ).slideDown("slow");

play = setInterval(function(){
    $active = $('.paging-wdbloog a.active').next();

if ( $active.length === 0) {
    $active = $('.paging-wdbloog a:first'); } rotate(); }, 4000); };

rotateSwitch(); $(".wdbloog_img a, .cooltitlewdbloog a").hover(function() {
    clearInterval(play); }, function() { rotateSwitch();
    });
    $(".paging-wdbloog a").click(function() { $active = $(this);
    clearInterval(play); rotate(); rotateSwitch();  return false;
    });
});
