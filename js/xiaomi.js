$(document).ready(function(){
  $(".size_center_head_ul_li01").mouseover(function(){
    $(".phone").css("display","block");
  });
  $(".size_center_head_ul_li01").mouseout(function(){
    $(".phone").css("display","none");
  });
  
  var ul = $(".lunbo");
  var dot = $(".ellipsis");
  var onewidth = ul.find("li").eq(0).width();
  var num = dot.find("i");
});
