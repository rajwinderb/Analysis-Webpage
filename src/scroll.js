$(document).on("scroll", function () {
  
    var pixels = $(document).scrollTop();
    
    $("div.progress div.bar").html(pixels + " pixels down")
      
    if (pixels < 50) {
      $("header").removeClass("hide")
    } else {
      $("header").addClass("hide")
    }
    
    if (pixels < 400) {
      $("body").css("background-color", "#F4F4F4")
    } else if (pixels < 4800) {
      $("body").css("background-color", "#d9dfe4")
    } else if (pixels < 8470) {
      $("body").css("background-color", "#fff0f0")
    } else if (pixels < 11800) {
      $("body").css("background-color", "#cdccc7")
    } else {
      $("body").css("background-color", "#F4F4F4")
    }
    
    var windowHeight = $(window).height()
    var documentHeight = $(document).height()
    var difference = documentHeight - windowHeight
    
    var percentage = 100 * pixels / difference
    
    $("div.progress div.bar").css("width", percentage + "%")
    
  })