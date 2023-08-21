$(document).ready(function() {
  $("#btn").on("click", function() {
    $("#video").html("<source src='"+ $("#url").val() +"' type='video/mp4'>");
    var ply = videojs("video");
    ply.play();
  });
});
