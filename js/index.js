$(window).load(function() {
  $(".flipCard").css("cursor", "pointer");
  $(".moreInfo").click(function(){
    $("main").addClass("blur");
    $(".popup").fadeToggle(200);

    $(".popup").empty();
    $(".overlay").addClass("dimBackground");
    $(".areaText").addClass("hide");

    var empPosition = "#" +
      $(this).closest('.flipCard').attr('id') +
      "Bio";
    $(".popup").append($(empPosition).html());
  });

  $(".popup").click(function(){
   $("main").removeClass("blur");
   $("body").removeClass("blur");

   $(".popup").fadeToggle(150);
   $(".overlay").removeClass("dimBackground");
   $(".areaText").removeClass("hide");
 });
});

/* function popupClose() {
  $("main").removeClass("blur");
  $("body").removeClass("blur");

  $(".popup").fadeToggle(150);
  $(".overlay").removeClass("dimBackground");
  $(".areaText").removeClass("hide");
}; */
