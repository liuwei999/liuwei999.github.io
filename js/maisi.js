$(document).ready(function(){
	// 顶部的自动滚动
	var n = 1
	function fun(){
		n=n==6?0:n
		$(".list").stop().animate({"margin-top":n*-40},200)
		n++
	}
	var t = setInterval(fun,3000)

	$(".scroll").hover(function(){
		clearInterval(t)
	},function(){
		t = setInterval(fun,3000)

	})

	// 导航hover 事件
	$(".nav li").hover(function(){
		$(this).find("img").stop().animate({
				"width":"160px",
				"height":"160px",
				"left":0,	
				"z-index":99
			},300,"easeOutBack")
		$(this).find("span").stop().animate({
				"top":"80px","height":"160px","line-height":"160px"
			},200)
		$(this).find("div").show(200)
	},function(){
		$(this).find("img").stop().animate({
				"width":"0px",
				"height":"0px",
				"bottom":"0px",
				"left":"center",	
				"z-index":0
			},300)
			$(this).find("span").stop().animate({
				"top":"0px","height":"80px","line-height":"80px"
			},200)
			$(this).find("div").hide(200)
	})

	// 移入最后一个li的时候 个、改变盒子的方向
	$(".nav .last").hover(function(){
		$(this).find("div").css({"top":80,"left":-170},500)
		$(this).find("div").show(200)
	},function(){
		$(this).find("div").hide(100)
		$(this).find("div").css({"top":80,"left":160},500)
	})

	// 按钮 移入换图片
	$(".banner-in .left").hover(function(){
		$(this).attr({"src":"images/left_on.gif"})
	},function(){
		$(this).attr({"src":"images/left.gif"})
	})

	$(".banner-in .right").hover(function(){
		$(this).attr({"src":"images/right_on.gif"})
	},function(){
		$(this).attr({"src":"images/right.gif"})
	})

	// 点击按钮图片轮播
	$(".banner-in .right").click(function(){
		$(".pic-list").stop().animate({"margin-left":-960},500,
			function(){
				var li = $(".pic-list li:first");
				li.remove();
				$(".pic-list").append(li);
				$(".pic-list").css("margin-left",0)		
			})

	})

	$(".banner-in .left").click(function(){
		var li = $(".pic-list li:last")
		li.remove();
		$(".pic-list").prepend(li);
		$(".pic-list").css("margin-left","-960px")
		$(".pic-list").stop().animate({"margin-left":0},500)
	})

	$(".content .jianjie p").hover(function(){
		$(this).css("color","#fff")
	},function(){
		$(this).css("color","#aaf")
	})

	$(".content .wenhua").hover(function(){
		$(this).find(".imgBox").stop().animate({
			"width":"100px","height":"100px"
		})
	},function(){
		$(this).find(".imgBox").stop().animate({
			"width":"100%","height":"100%"
		})
	})

	// 底部终极滚动

	$(".scrollBox").marquee('pointer').mouseover(function () {
            $(this).trigger('stop');
        }).mouseout(function () {
            $(this).trigger('start');
        }).mousemove(function (event) {
            if ($(this).data('drag') == true) {
                this.scrollLeft = $(this).data('scrollX') + ($(this).data('x') - event.clientX);
            }
        }).mousedown(function (event) {
            $(this).data('drag', true).data('x', event.clientX).data('scrollX', this.scrollLeft);
        }).mouseup(function () {
            $(this).data('drag', false);
        });


})