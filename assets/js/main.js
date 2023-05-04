$(document).ready(function(){
   $('.list-item').click(function(){
      $(this).first().nextAll('div').slideUp(200);
      if($(this).next('div').is(':hidden')) {
         $(this).next("div").slideDown(200);
      } else if ($(this).next('div').is(':visible')) {
         $(this).next('div').slideUp(200);
      } else {
      }
   })
})
