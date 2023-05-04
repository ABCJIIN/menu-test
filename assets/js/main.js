$(document).ready(function(){
   $(".list-item").click(function(){
   $(this).next("div").slideToggle(200);
   });
});

// $(document).ready(function(){
//    $('li').click(function(){
//       $('li').removeClass()
//          $(this).addClass('on')
//    });
// });