function send(){
$.getJSON('http://qfdk.me/md5.php', {md5:$("#md5").val()}, function(json, textStatus) {
    /*optional stuff to do after success */
    console.log(textStatus);
    if(textStatus=='success')
    {
      if(json.result!=null)
      	$("#res").html("<p>"+json.result+"</p>");
      else
      	$("#res").html("<p>没有结果呢.</p>");
    }
});
}
