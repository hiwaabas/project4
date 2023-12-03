$(document).ready(function(){
    $("#button").click(function(){
        $(".img-con").toggle();
    });

    // $(".gingham").click(function()
    // {
    // $("#first").removeClass();
    // $("#first").addClass('gingham');
   
    // });

    // $(".hudson").click(function()
    // {
    // $("#first").removeClass();
    // $("#first").addClass('hudson');
    // });

    // $(".toaster").click(function()
    // {
    // $("#first").removeClass();
    // $("#first").addClass('toaster');
    // });

    // $(".walden").click(function()
    // {
    // $("#first").removeClass();
    // $("#first").addClass('walden');
    // });

    // $(".lofi").click(function()
    // {
    // $("#first").removeClass();
    //     $("#first").addClass('lofi');
    // });
    
    // $(".rise").click(function()
    // {
      // $("#first").removeClass();
    //     $("#first").addClass('rise');
    // });


    

// var result = '';
// $('figure').each(function(){
//  result +=  $(this).on('click',function(){
//      $('.earlybird').removeClass(this).addClass($(this).attr('class'))
//   })
//   $('.earlybird').removeClass(this);
// })


// $('figure').each(function(){
// $(this).on('click',function(){
//      $('.earlybird').removeClass();
//      $('.earlybird').addClass($(this).attr('class'))
//   })
// })


});
// $(document).ready(function() {
//   $('figure').on('click', function() {
   
//     var clickedClass = $(this).attr('class');

//     $('.earlybird').removeClass().addClass(clickedClass);
//   });
// });



// function edit(name){
//     $("#first").removeClass();
//     $("#first").addClass(name);
// }


$(document).ready(function() {
  $('figure').each(function() {
    $(this).on('click', function() {
      var my_class =new Hiwa('main', 'class' , this);
      my_class.help();
    });
  });
});

class Hiwa {
  constructor(id, cl ,my) {
    this.id = id;
    this.cl = cl;
    this.my=my;
  }
  help(){
    $(`#${this.id}`).removeClass().addClass($(this.my).attr(`${this.cl}`));

  }
}







