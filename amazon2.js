/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2014-12-28 14:51:43
 * @version $Id$
 */
 var timeid1;
$(function(){
	var sel=document.getElementById('sel');
	$("#fl").click(function(){
		
		
		if(sel.size>1){
			sel.size=1;
			sel.style.height="20px";
		}
		else{
			sel.size=11;
			sel.style.height="200px";
		}
	});
	$("#sel option").click(function(){
		var txt=this.text;
		$("#fl").text(txt);
		sel.size=1;
		sel.style.height="20px";

	});
	$("input[type=text]").focus(function(){
		
		$(this).css("borderColor","#f00");
		sel.size=1;
	    sel.style.height="20px";

	});
	$("input[type=text]").blur(function(){
		$(this).css("borderColor","#ccc");
	})
	$("#cdu li").mouseover(togglemenu);
	function togglemenu(){
		$("#cdu").css("borderRadius","5px 0 0 5px");
		$("#tc").css("display","block").animate({width:"546px"},200);
		
		

		var index=$("#cdu li").index(this);
		
		index=parseInt(index)+1;
		
		$("div.l"+index).css("display","block").siblings().css("display","none");
		
	}
	$(".cd").mouseout(function(event){
		console.log(event.target);
		if(event.target==document.getElementById("tc")){
			$("#tc").css("display","none").css("width","0");
			console.log("aa");

		}
	})
	$(".cd").mouseover(function(event){
		if(event.target==this){
			$("#cdu").css("display","block");
		}

	})
	
	var i=0;
	var cal;
	$(".toum div").mouseover(function(event){
		
		$(this).addClass("hover").siblings().removeClass();
		i=$(".toum div").index(this);
		cal="ll"+i;
		$("div."+cal).stop().animate({opacity:"1"},500).css("display","block").siblings().stop().animate({opacity:"0"},500);

	});
	$("div#zsq").hover(function(){
		$("div.toum").stop().animate({bottom:"0"},200);
		clearInterval(timeid);
	},function(){
		$("div.toum").stop().animate({bottom:"-45px"},200);
		timeid=setInterval(chageb,5000)
	});
	

	function chageb(){
		if(i<7){
			i=i+1;
			
		}
		else{
			i=0;
		}
		
		cal="ll"+i;
		
		$("div.toum div:eq("+i+")").addClass("hover").siblings().removeClass("hover");
		$("div."+cal).stop().animate({opacity:"1"},1000).css("display","block").siblings().stop().animate({opacity:"0"},1000);
	}
	$("#ldoit").click(function(){
		if(i==0){
			i=7;
		}
		else{
			i=i-1;
		}
		cal="ll"+i;
		$("div.toum div:eq("+i+")").addClass("hover").siblings().removeClass("hover");
		$("div."+cal).stop().animate({opacity:"1"},1000).css("display","block").siblings().stop().animate({opacity:"0"},1000);
	})
	$("#rdoit").click(function(){
		if(i==7){
			i=0;

		}
		else{
			i=i+1;
		}
		cal="ll"+i;
		$("div.toum div:eq("+i+")").addClass("hover").siblings().removeClass("hover");
		$("div."+cal).stop().animate({opacity:"1"},1000).css("display","block").siblings().stop().animate({opacity:"0"},1000);
	})

	var timeid=setInterval(chageb,5000);
	
	
});
