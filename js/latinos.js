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
   $('#begin2').slideToggle(700);
   $('.latinDiv').hide();
   $('footer').hide();
 });


 $('#aboutsite').click(function() {
    $('#about').slideToggle(700);
    $('.latinDiv').hide();
    $('footer').hide();
  });


  $('#aboutstart').click(function() {
     $('.latinDiv').slideToggle(700);
     $('#about').hide();
   });



  /* MEXICO */

$('#mexbut').click(function() {
   $('#mexican').slideToggle(700);
   $('#begin2').hide();
 });



 $('#mexlinebut').click(function() {
   $('#mex-timeline').slideToggle(700);
    $('#mexican').hide();
  });


  $('#mloc-next').click(function() {
    $('#mex-loc').slideToggle(700);
     $('#mex-timeline').hide();
   });

   $('#mim-next').click(function() {
     $('#mex-im').slideToggle(700);
      $('#mex-loc').hide();
    });


       $('#mvot-next').click(function() {
         $('#mex-vot').slideToggle(700);
          $('#mex-im').hide();
        });


  $('#start').click(function() {
  $('.latinDiv').slideToggle(700);
  $('#mex-vot').hide();
         });


           $('#learnothers').click(function() {
           $('#begin2').slideToggle(700);
           $('#mex-vot').hide();
                  });

  $( "#miss-text2" ).hide();

  $('#mexwhy').click(function() {
  $('#miss-text2').slideToggle();
                       });

/* PUERTO RICO */

$('#prbut').click(function() {
   $('#ricans').slideToggle(700);
   $('#begin2').hide();
 });

 $('#prtime-next').click(function() {
    $('#pr-timeline').slideToggle(700);
    $('#ricans').hide();
  });


  $('#prloc-next').click(function() {
     $('#pr-loc').slideToggle(700);
     $('#pr-timeline').hide();
   });

   $('#prim-next').click(function() {
      $('#pr-im').slideToggle(700);
      $('#pr-loc').hide();
    });


    $('#prvot-next').click(function() {
       $('#pr-vot').slideToggle(700);
       $('#pr-im').hide();
     });

$( "#extra" ).hide();

     $('#expandpr').click(function() {
         $('#extra').slideToggle();
     });


/* CUBA */

$('#cubbut').click(function() {
   $('#cuban').slideToggle(500);
   $('#begin2').hide();
 });


 $('#cubtime-next').click(function() {
    $('#cuban-timeline').slideToggle(500);
    $('#cuban').hide();
  });


   $('#cubloc-next').click(function() {
      $('#cuban-loc').slideToggle(500);
      $('#cuban-timeline').hide();
    });


    $('#cubim-next').click(function() {
       $('#cuban-im').slideToggle(500);
       $('#cuban-loc').hide();
     });



         $('#cubvot-next').click(function() {
            $('#cuban-vot').slideToggle(500);
            $('#cuban-im').hide();
          });



}); /* DO NOT DELETE */
