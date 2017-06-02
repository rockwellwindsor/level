$(function () {
  
  // For Ruby on Rails applications.  Feel free to comment this out or remove it if using a different framework.
  $(document).on('turbolinks:load', function() {
    // Find all the elements to level
    var el = document.getElementsByClassName('level');
    // If there are none we do not need to do anything
    if (el.length > 0 ) {
      // Set the default value
      var maxHeight = -1;
      // Iterate through each element found
      $('.level').each(function(){
        // Get the highest value 
        maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
        // console.log(maxHeight);
      });
      // Level the elements out to the highest value
      $('.level').css('height', maxHeight);
    }
  });

  // 
  $(document).on('load', function() {
    // Find all the elements to level
    var el = document.getElementsByClassName("level");
    // If there are none we do not need to do anything
    if (el.length > 0 ) {
      // Set the default value
      var maxHeight = -1;
      // Iterate through each element found
      $('.level').each(function(){
        // Get the highest value 
        maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
        // console.log(maxHeight);
      });
      // Level the elements out to the highest value
      $('.level').css('height', maxHeight);
    }
  });
});
