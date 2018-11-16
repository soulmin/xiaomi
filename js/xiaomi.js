$(document).ready(function(){
  $(".size_center_head_ul_li01").mouseover(function(){
    $(".phone").css("display","block");
  });
  $(".size_center_head_ul_li01").mouseout(function(){
    $(".phone").css("display","none");
  });
  
  var sidebox = $(".sidebox")
  var ul = $(".lunbo");
  var dot = $(".ellipsis");
  var onewidth = ul.find("li").eq(0).width();
  var num = dot.find("i");
  var sw = 0;
  var timer = null;
  //每个i绑定click事件，完成切换颜色和动画，以及读取参数值
  num.on("click",function(){
  	$(this).addClass("active").siblings("i").removeClass("active");
  	sw = $(this).index();
  	ul.animate({
  			"right":onewidth*sw,		
  	});
  	ul.fadeIn(onewidth*sw).siblings().fade()
  });
  
  //左右按钮的控制效果
  $(".next").stop(true,true).click(function(){
  		sw++;
  		if(sw == num.length){
  			sw = 0;
  		}
  		num.eq(sw).trigger("click");
  		
  });
  
 	$(".prev").stop(true,true).click(function(){
 			sw--;
 			if(sw == num.length){
 				sw = 0;
 			}
 			num.eq(sw).trigger("click");
 	});
 
 
 //定时器的使用，自动开始
 		timer = setInterval(function(){
 				sw++;
 				if(sw == num.length){
 					sw = 0;
 				}
 				num.eq(sw).trigger("click");
 		},3000);
 		
 	//hover事件完成悬停和，左右图标的动画效果
 		sidebox.hover(function(){
 				$(".next,.prev").animate({
 						"opacity":1,
 				},200);
 				
 				clearInterval(timer);
 		},function(){
 				$(".next,.prev").animate({
 						"opacity":0.5,
 				},500);
 				
 				timer = setInterval(function(){
 					sw++;
 					if(sw == num.length){
 							sw = 0;
 					}
 					num.eq(sw).trigger("click");
 				},2000);
 		});
});		
