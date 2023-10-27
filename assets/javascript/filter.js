
$(".checkputFilter").change(function(){
  var val = $(this).val();
  var dataId = $(this).attr('data-id');
  if($(this).is(':checked')){
    $(".selectedCheckboxes").append("<div class='text1 mb-2 mr-1' data-checkbox='"+dataId+"'>"+val+" <img src='assets/icons/cross.svg' alt='' class='selected-cross'></div>");
  }else{
    $(".selectedCheckboxes .text1").each(function(){
      if (dataId == $(this).attr("data-checkbox") ) {
        $(this).remove();
      }
    })
  }
});
$(".selectedCheckboxes").on('click','.selected-cross',function(){
  var parent = $(this).parent();
  var data = $(parent).attr('data-checkbox');
  $(".all-checkboxes .checkputFilter").each(function(){
    if (data = $(this).attr('data-id')) {
        $(this).prop( "checked", false );
    }
  })
  $(parent).remove();
});
$(".clearCheckboxes").click(function(){
    $(".selectedCheckboxes .text1").each(function(){
        $(this).remove();
    });
    $(".all-checkboxes .checkputFilter").each(function(){
        if($(this).is(':checked')){
          $(this).prop( "checked", false );
        }
    })
});