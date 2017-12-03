$( document ).ready(function() {


/* only can see latinDiv everything else is hidden */
$('.general').hide();
$('.general1').hide();
$('.tline').hide();
$('.locations').hide();
$('.general2').hide();
$('.locations1').hide();
$('.general3').hide();
$('#about').hide();

/* user clicks learn more and growing general appears */

$('#learnmore').click(function() {
   $('#begin2').slideToggle();
   $('.latinDiv').hide();
   $('footer').hide();
 });

/* user clicks once group */

$('#mexbut').click(function() {
   $('#mexican').slideToggle();
   $('#begin2').hide();
 });



 $('#mexlinebut').click(function() {
   $('#mex-timeline').slideToggle();
    $('#mexican').hide();
  });






}); /* DO NOT DELETE */
