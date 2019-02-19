'use strict';

window.onload = function () {
    //导航选项卡

    $('.maincates-title span').hover(function () {
        $('.maincates-title span').removeClass('hov');
        $(this).addClass('hov');
        $('.catelist>div').css('display', 'none').eq($(this).index()).css('display', 'block');
    });
    //二级选项卡
    console.log($('#catefm .catels'));
    $('#catefm .catels').css('display', 'none');
    $('.dogType ul>li').hover(function () {
        $('.dogType ul>li').removeClass('hov');
        $(this).addClass('hov');
        $('#catefm .catels').css('display', 'none').eq($(this).index()).css('display', 'block');
    }, function () {
        $('#catefm .catels').css('display', 'none');
    });
    $('#catefm .catels').hover(function () {
        $(this).css('display', 'block');
    }, function () {
        $(this).css('display', 'none');
    });
    //如果勾选了自动登陆，显示页面
    if ($.cookie('usernamel') && $.cookie('passwordl')) {
        $('.headerr1').html($.cookie('usernamel'));
        $('.headerr2').html("<a href='' class='qt'>[退出]</a>");
        //点击退出，删除cookie
        $('.qt').click(function () {
            $.cookie("usernamel", "", { expires: -7, path: '/' });
            $.cookie("passwordl", "", { expires: -7, path: '/' });
        });
    }
    //如果没有勾选自动登陆，显示页面
    if ($.cookie('usernamel')) {
        $('.headerr1').html($.cookie('usernamel'));
        $('.headerr2').html("<a href='' class='qt'>[退出]</a>");
        $('.qt').click(function () {
            $.cookie("usernamel", "", { expires: -7, path: '/' });
            $.cookie("passwordl", "", { expires: -7, path: '/' });
        });
    }
    //轮播图
    var num = 0;
    var timer = null;
    //定时器
    timer = setInterval(function () {
        foo();
    }, 2000);

    function foo() {
        //图片变化
        num++;
        if (num == 4) {
            num = 0;
        }
        if (num == -1) {
            num = 3;
        }
        $(".indexaapic section").eq(num).stop().animate({ "opacity": 1 }, 400, function () {
            $(".indexaapic section").eq(num).siblings().stop().animate({ "opacity": 0 }, 400);
        });
        //小图标变化
        if (num == 4) {
            $(".playpic a").eq(0).addClass("hov").siblings().removeClass("hov");
        } else {
            $(".playpic a").eq(num).addClass("hov").siblings().removeClass("hov");
        }
    }
    // 滑入轮播图按钮出现，轮播图静止，离开开启
    $(".indexmidpic").mouseover(function () {
        clearInterval(timer);
    });
    $(".indexmidpic").mouseout(function () {
        timer = setInterval(function () {
            foo();
        }, 2000);
    });
    //点击小图标变化至图片
    $(".playpic a").hover(function () {
        var i = $(this).index();
        num = i - 1;
        foo();
    });

    //每日疯抢右侧选项卡
    $('.menubox li').hover(function () {
        //排他
        $('.menubox li').attr('class', 'fl timemove');
        $('.time-proconli ul').css('display', 'none');
        $(this).attr('class', 'fl timemove on');
        $('.time-proconli ul').eq($(this).index()).css('display', 'block');
    });
    $('.timeproright').click(function () {
        $(".time-proconli ul").animate({ 'left': -211 });
    });
    if ($(".time-proconli ul")) $('.timeproleft').click(function () {
        $(".time-proconli ul").animate({ 'left': 0 });
    });

    $('.lib-menu li').hover(function () {
        //排他
        $('.lib-menu li').attr('class', 'fl bgwhite pointer');
        $('.lib_conbox>div').css('display', 'none');
        $(this).attr('class', 'fl bgwhite pointer hover');
        $('.lib_conbox>div').eq($(this).index()).css('display', 'block');
    });

    // for(var i = 0; i < $('.time-proconli ul').size(); i++) {
    // 	if($('.time-proconli ul').eq(i).prop('display','block')) {
    // 		$('.timeproright').click(function(){
    //             console.log($('.time-proconli ul').eq(i))
    //             // $('.time-proconli ul').eq(i).animate({left:-211})
    //         })
    // 	}
    // }
    //鼠标滑到狗头像
    var bagLi = document.getElementsByClassName('bagLi')[0];
    var bagBox = bagLi.children[0];
    var scart = document.getElementsByClassName('scart')[0];
    var cartbox = getid('cartbox');
    bagLi.onmouseenter = function () {
        bagBox.style.display = 'block';
    };
    bagLi.onmouseleave = function () {
        bagBox.style.display = 'none';
    };
    scart.onmouseenter = function () {
        cartbox.style.display = 'block';
    };
    scart.onmouseleave = function () {
        cartbox.style.display = 'none';
    };
    window.onscroll = function () {
        //滚动距离:滚动事件里面使用，并且在滚动中才能获取
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (scrollTop >= 100) {
            //当滚动到300px的时候，盒子显示，否则隐藏
            $('#hdb').css({ "display": "block" });
        } else {
            $('#hdb').css({ "display": "none" });
        }
        $('#hdb').click(function () {
            //点击缓慢回到顶部
            var scrollTop = window.setInterval(function () {
                //pageYOffset获取窗口离上面的距离
                console.log(window.pageYOffset + ':' + scrollTop);
                var pop = window.pageYOffset;
                if (pop > 0) {
                    window.scrollTo(0, pop - 1);
                } else {
                    window.clearInterval(scrollTop);
                }
            }, 20);
        });
    };
};