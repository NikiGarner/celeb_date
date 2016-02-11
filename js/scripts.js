$(document).ready(function() {
  $("form#date").submit(function(event) {
    var gender = $("select#gender").val();
    var hair = $("select#hair").val();




    if (gender === 'male' && hair === 'blonde') {
        $("#ryan").show();
      }


    if (gender === 'male' && hair === 'brunette') {
        $("#tim").show();
      }



    if (gender === 'male' && hair === 'red') {
        $("#carrot").show();
      }



    if (gender === 'female' && hair === 'blonde') {
        $("#jennifer").show();
      }


    if (gender === 'female' && hair === 'brunette') {
      $("#emmaw").show();
      }


    if (gender === 'female' && hair === 'red') {
        $("#emmas").show();
      }



    event.preventDefault();
  });
});
