$(document).ready(function() {
    $("a.photos").on("click", function (ev) {
        ev.preventDefault();
        $(this).toggleClass("clicked");
        
        $(".modal").fadeIn(500);
        
        var content = $(this).html()
        
        $(".modal-content").html(content);
        
    });
    
    $("div.modal-background, div.modal-close").on("click", function (ev) {
        ev.preventDefault();
        $(".modal").fadeOut(500);
    });
});