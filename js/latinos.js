$( document ).ready(function() {


/* only can see #top everything else is hidden */
$('.general').hide();
$('.general1').hide();
$('.tline').hide();
$('.locations').hide();
$('.general2').hide();
$('.locations1').hide();
$('.general3').hide();
$('#about').hide();
$('.intro1').hide();
$('.intro2').hide();

/* user clicks learn more and growing general appears */


$('#beginbutton').click(function() {
 $('.intro1').slideToggle(300);
 $('#top').hide();
 $('footer').hide();
});

$('#nextfirst').click(function() {
 $('.intro2').slideToggle(300);
 $('.intro1').hide();
});




$('#learnmore').click(function() {
   $('#begin2').slideToggle(300);
   $('.intro2').hide();
   $('footer').hide();
 });


 $('#aboutsite').click(function() {
    $('#about').slideToggle(300);
    $('#top').hide();
    $('footer').hide();
  });


  $('#aboutstart').click(function() {
     $('#top').slideToggle(300);
     $('#about').hide();
     $('footer').show();
   });



  /* MEXICO */

$('#mexbut').click(function() {
   $('#mexican').slideToggle(300);
   $('#begin2').hide();
 });



 $('#mexlinebut').click(function() {
   $('#mex-timeline').slideToggle(300);
    $('#mexican').hide();
  });


  $('#mloc-next').click(function() {
    $('#mex-loc').slideToggle(300);
     $('#mex-timeline').hide();
   });

   $('#mim-next').click(function() {
     $('#mex-im').slideToggle(300);
      $('#mex-loc').hide();
    });


       $('#mvot-next').click(function() {
         $('#mex-vot').slideToggle(300);
          $('#mex-im').hide();
        });


  $('#start').click(function() {
  $('#top').slideToggle(300);
  $('#mex-vot').hide();
  $('footer').show();
         });


           $('#learnothers').click(function() {
           $('#begin2').slideToggle(300);
           $('#mex-vot').hide();
             $('footer').hide();
                  });

  $( "#miss-text2" ).hide();

  $('#mexwhy').click(function() {
  $('#miss-text2').slideToggle();
                       });

/* PUERTO RICO */

$('#prbut').click(function() {
   $('#ricans').slideToggle(300);
   $('#begin2').hide();
 });

 $('#prtime-next').click(function() {
    $('#pr-timeline').slideToggle(300);
    $('#ricans').hide();
  });


  $('#prloc-next').click(function() {
     $('#pr-loc').slideToggle(300);
     $('#pr-timeline').hide();
   });

   $('#prim-next').click(function() {
      $('#pr-im').slideToggle(300);
      $('#pr-loc').hide();
    });


    $('#prvot-next').click(function() {
       $('#pr-vot').slideToggle(300);
       $('#pr-im').hide();
     });

$( "#extra" ).hide();

     $('#expandpr').click(function() {
         $('#extra').slideToggle();
     });


     $('#start2').click(function() {
     $('#top').slideToggle(300);
     $('#pr-vot').hide();
     $('footer').show();

            });

  $('#learn2').click(function() {
  $('#begin2').slideToggle(300);
  $('#pr-vot').hide();
  $('footer').hide();
                   });


/* CUBA */

$('#cubbut').click(function() {
   $('#cuban').slideToggle(500);
   $('#begin2').hide();
  $('footer').hide();
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


          $('#start3').click(function() {
          $('#top').slideToggle(300);
          $('#cuban-vot').hide();
          $('footer').show();

          });

          $('#learn3').click(function() {
          $('#begin2').slideToggle(300);
          $('#cuban-vot').hide();
            $('footer').hide();
                           });

}); /* DO NOT DELETE */
