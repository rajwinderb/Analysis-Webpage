$(document).ready(function() {
    $("#photos").on("click", function (ev) {
        $(this).toggleClass("clicked");
        
        $(".modal").fadeIn(500);
        
        var content = $(this).html()
        
        $(".modal-content").html(content);
        
        ev.preventDefault();
    });
    
    $("div.modal-background, div.modal-close").on("click", function (ev) {
        $(".modal").fadeOut(500);
        ev.preventDefault();
    });
});