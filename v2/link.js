$(function() {
    $("a[contentId]").click(function() {
        $(".content").hide();
        $("#" + this.getAttribute("contentId")).show();
        return false;
    });
});