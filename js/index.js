$(window).load(function() {
  $(".flipCard").css("cursor", "pointer");
  $(".moreInfo").click(function(){
    $(".main").addClass("blur");
    $(".popup").fadeToggle(200);
    $(".body").addClass("blur");
    $(".popup").empty();
    $(".overlay").addClass("dimBackground");
    $(".areaText").addClass("hidden");


    var empPosition = "#" +
      $(this).closest('.flipCard').attr('id') +
      "Bio";
    $(".popup").append($(empPosition).html());
     });
    $(".popup").click(function(){
     $(".main").removeClass("blur");
     $("body").removeClass("blur");

    $(".popup").fadeToggle(150);
    $("body").removeClass("blur");
    $(".overlay").removeClass("dimBackground");
    $(".areaText").removeClass("hidden");
  });
});
