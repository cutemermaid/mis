$(".list-group-item").click(function() {
    $(".student-info").hide();
    $("body").css("overflow", "hidden");
  });
  $(".add-new").click(function() {
    $(".student-info").show();
    $("body").css("overflow", "hidden");
  });
  
  