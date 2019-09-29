$(function() {
  $("#sidebar a").click(function() {
    $("#sidebar a.active").removeClass("active");
    $(this).addClass("active");
  });
});
