$(document).ready(function(){
  $("form#depo_list").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=select_list]:checked").each(function(){
      const select_item = $(this).val();
      $('#work-responses').append(select_item + "<br>");
    });
    $('#depo_list').hide();
  });
});