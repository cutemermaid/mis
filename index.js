$(".list").click(function() {
  $(".add-new").removeClass("active");
  $(".list").addClass("active");
  $(".student-info").hide();
  $(".table").show();
});

$(".add-new").click(function() {
  $(".list").removeClass("active");
  $(".add-new").addClass("active");
  $(".student-info").show();
  $(".table").hide();
});

$(".student-info").submit(function(e) {
  e.preventDefault(); /*stop reloding page*/
  var allok = true;
  var name = $(".js-form-name").val();
  var emailid = $(".js-form-email").val();
  var phoneno = $(".js-form-phone-no").val();
  $(".js-form-name-alert").hide();
  $(".js-form-email-alert").hide();
  $(".js-form-phone-no-alert").hide();
  if (name == "") {
    $(".js-form-name-alert").show();
    allok = false; /*if condition is false*/
  }
  if (emailid == "") {
    $(".js-form-email-alert").show();
    allok = false;
  }
  if (phoneno == "") {
    $(".js-form-phone-no-alert").show();
    allok = false;
  }

  if (allok == true) {
    var arrStudentInfo = JSON.parse(localStorage.getItem("studentInfo")) || [];
    arrStudentInfo.push({
      name: name,
      emailid: emailid,
      phoneno: phoneno
    });
    localStorage.setItem("studentInfo", JSON.stringify(arrStudentInfo));
    $(".student-info").trigger("reset");
    $(".list").trigger("click");
  }
});
