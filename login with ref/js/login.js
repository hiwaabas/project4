// $(document).ready(function() {

//   function updateScreen() {
//     if (window.matchMedia('(max-width: 1498px)').matches) {
//       $('.circle1,.circle2,.circle3,.class-video,img,.gishti,.empty').addClass('hide');
//       $('.section1').addClass('background');
//       $('#animateButton').addClass('button-style');
//       $('#animateButton').click(function() {
//         $('.section1').addClass('animate-sec1');
//         $('.section2').addClass('animate-sec2');
//         $(".gishti").hide();
//         $(".con-sec2").css('width', '100%');
//         $(".logo i").css('font-size', '50px');
//         $(".logo .half-circle").css('padding', '50px');
//         $(".container").css('background-color', '#52c6cb');
//         $('.circle-form').addClass('show');
//       });
//     } else {
    
//       $('.circle1,.circle2,.circle3,.class-video,img,.gishti').removeClass('hide');
//       $('.section1').removeClass('background');
//       $('#animateButton').removeClass('button-style');
//       $('#animateButton').unbind('click').click(function() {
//         $('.section1').addClass('animate');
//         $('.section2').addClass('animate2');
//         $('.section2').addClass('back');
//         $("#animateButton").hide(1500);
//         $('.circle1').hide(1000);
//         $(".gishti").show(2000);
//       $('.empty').addClass('hide');
//       });
//     }
//   }
//   $(window).resize(function() {
//     updateScreen();
//   });
//   updateScreen();
// });


$(document).ready(function() {

  function updateScreen() {
    if (window.matchMedia('(max-width: 1498px)').matches) {
      $('.circle1,.circle2,.circle3,.class-video,img,.gishti,.empty').addClass('hide');
      $('.section1').addClass('background');
      $('#animateButton').addClass('button-style');
      $('#animateButton').click(function() {
        $('.section1').addClass('animate-sec1');
        $('.section2').addClass('animate-sec2');
        $(".gishti").hide();
        $(".con-sec2").css('width', '100%');
        $(".logo i").css('font-size', '50px');
        $(".logo .half-circle").css('padding', '50px');
        $(".container").css('background-color', '#52c6cb');
        $('.circle-form').addClass('show');
      });
    } else {
      $('.circle1,.circle2,.circle3,.class-video,img,.gishti').removeClass('hide');
      $('.section1').removeClass('background');
      $('#animateButton').removeClass('button-style');
      $('#animateButton').unbind('click').click(function() {
        $('.section1').addClass('animate');
        $('.section2').addClass('animate2');
        $('.section2').addClass('back');
        $("#animateButton").hide(1500);
        $('.circle1').hide(1000);
        $(".gishti").show(2000);
      $('.empty').addClass('hide');
      });
    }
  }


  $(window).resize(function() {
    updateScreen();
  });
  updateScreen();
});