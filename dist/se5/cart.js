'use strict';

$(function () {
    //导航滑块
    $('#one1').hover(function () {
        $('.nav-currentt').animate({ 'width': 176, 'left': 0 });
    }, 400);

    $('#one5').hover(function () {
        $('.nav-currentt').animate({ 'width': 194, 'left': 180 });
    }, 400);

    $('#one2').hover(function () {
        $('.nav-currentt').animate({ 'width': 137, 'left': 378 });
    }, 400);

    $('#one3').hover(function () {
        $('.nav-currentt').animate({ 'width': 137, 'left': 522 });
    }, 400);
    $('#one4').hover(function () {
        $('.nav-currentt').animate({ 'width': 139, 'left': 665 });
    }, 400);
    $('.cart-menu').mouseleave(function () {
        $('.nav-currentt').animate({ 'width': 176, 'left': 0 });
    }, 400);
    //配送地址显示
    $('.place-div').hover(function () {
        $('.place-hide').css('display', 'block');
    }, function () {
        $('.place-hide').css('display', 'none');
    });

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
                var pop = window.pageYOffset;
                if (pop > 0) {
                    window.scrollTo(0, pop - 1);
                } else {
                    window.clearInterval(scrollTop);
                }
            }, 20);
        });
    };
    $('.cart-table b').hover(function () {
        $('.cart-tc').css('display', 'block');
    }, function () {
        $('.cart-tc').css('display', 'none');
    });
    //数据渲染
    var tbody = getid('miid');
    function bb(arr) {
        var res = arr.map(function (item) {
            return '<tr class="cart-order" id="' + item.cid + '">\n            <td width="50" align="center">\n                <input autocomplete="off" type="checkbox" name="check_goods_115032" doclick="check" class="chk">\n            </td>\n            <td width="500" valign="middle">\n                <div class="por-img fl overflow bgwhite ftc">\n                    <a href="javascript:;" target="_blank">\n                        <img src="' + item.img + '" width="80">\n                    </a>\n                </div>\n                <div class="por-intro fl ml20 mt" style="margin-top: 30px;">\n                    <a href="javascript:;" target="_blank" class="c333">\n                        ' + item.content + '</a>\n                </div>\n                <div class="clear"></div>\n            </td>\n            <td width="150" align="center" style="padding-top:20px;">\n                <div class="buynum-wrap clearfix">\n                    <span  doclick="changeBuyNum" act="sub" class="ft18 fl less">-</span>\n                    <input autocomplete="off" name="gnum_115032" stock="49" oldnum="1" type="text" class="text buynum ftc fl bgwhite " value="' + item.num + '"\n                         size="2">\n                    <span doclick="changeBuyNum" act="add" class="fl addnum">+</span>\n                </div>\n                <p class="c666 mtneg10"></p>\n            </td>\n            <td width="200" align="center" class="c000 bold ft14">\n                <p class="c000 bold ft14 ee">\uFFE5' + (item.price * item.num).toFixed(2) + '</p>\n                <p class="c89 fe">\uFFE5' + item.price + '</p></td>\n            <td width="200" align="center">\n                <a href="javascript:;" onclick="Epet.Common.addFavors(115032)" class="c666">[\u6536\u85CF]</a>\n                <a href="javascript:;" doclick="deleteGoods" gid="115032" class="c666 delete">[\u5220\u9664]</a>\n            </td>\n        </tr>';
        }).join('');
        tbody.innerHTML = res;
    }
    $.ajax({
        type: "post",
        data: {
            APItype: 'changdu'
        },
        url: "../api/cart.php",
        success: function success(str) {
            if (str == 1) {
                $.ajax({
                    type: "post",
                    data: {
                        APItype: 'xuanlan'
                    },
                    url: "../api/cart.php",
                    success: function success(str) {
                        var arr = JSON.parse(str);
                        bb(arr);
                    }
                });
            } else {
                $('#tabb').remove();
                $('.kongbai').css('display', 'block');
            }
        }
    });
    //输入数量
    $('#tabb').on('input', '.buynum', function () {
        var val = $(this).val();
        if (val >= 100) {
            //库存量
            val = 100;
        }
        if (val <= 1) {
            //库存量
            val = 1;
        }
        var id = $(this).parents('.cart-order').attr('id');
        $(this).val(val); //赋值
        goodtotal($(this));
        $.ajax({
            type: "post",
            data: {
                APItype: 'orderCaNum',
                shuliang: val,
                id: id
            },
            url: "../api/cart.php"
        });
    });
    //点击加减改变数量
    //点击加
    $('#tabb').on('click', '.addnum', function () {
        var val = $(this).prev().val();
        val++;
        if (val >= 100) {
            //库存量
            val = 100;
        }
        var id = $(this).parents('.cart-order').attr('id');
        $(this).prev().val(val); //赋值
        goodtotal($(this));
        $.ajax({
            type: "post",
            data: {
                APItype: 'orderCaNum',
                shuliang: val,
                id: id
            },
            url: "../api/cart.php"
        });
    });
    //点击减
    $('#tabb').on('click', '.less', function () {
        var val = $(this).next().val();
        val--;
        if (val <= 1) {
            //库存量
            val = 1;
        }
        var id = $(this).parents('.cart-order').attr('id');
        $(this).next().val(val); //赋值
        goodtotal($(this));
        $.ajax({
            type: "post",
            data: {
                APItype: 'orderCaNum',
                shuliang: val,
                id: id
            },
            url: "../api/cart.php"
        });
    });
    //3.小计的运算：单价*数量
    function goodtotal(now) {
        //找单价
        var price = now.parent().parent().next().children('.fe').text().substring(1) * 1;
        //找数量
        var num = now.parent().find('.buynum ').val() * 1;
        //小计=单价*数量
        var total = (price * num).toFixed(2);
        now.parent().parent().next().children('.ee').html('￥&nbsp;' + total);
        NumPrice();
    }
    //删除当行
    $('#tabb').on('click', '.delete', function () {
        var id = $(this).parents('.cart-order').attr('id');
        var res = confirm('您确定要删除吗？');
        if (res) {
            $(this).parent().parent().remove();
            $.ajax({
                type: "post",
                data: {
                    APItype: 'orderCarDelete',
                    id: id
                },
                url: "../api/cart.php"
            });
            update(); //判断是否删完了
            NumPrice();
        }
    });
    function update() {
        if ($('.addnum').size() == 0) {
            //已结删完所有的行，没有必要保留总价了
            $('#tabb').remove();
            $('.kongbai').css('display', 'block');
        }
    }

    //4.选中单行
    $('#tabb').on('click', '.chk', function () {
        // console.log($(this).prop('checked'));
        NumPrice();
    });

    //总数量和总价
    var arr = []; //存被选中的行的下标数
    var tip = document.getElementsByClassName('cart-tip')[0];
    function NumPrice() {
        arr = [];
        for (var i = 0; i < $('.chk').size(); i++) {
            if ($('.chk').eq(i).prop('checked')) {
                arr.push(i);
            }
        }
        if (arr.length == $('.chk').size()) {
            //所有商品被选中了，控制权限勾上
            $('.all-checkbox').prop('checked', 'checked');
            $('.shopmi').prop('checked', 'checked');
        } else {
            $('.all-checkbox').removeAttr('checked');
            $('.shopmi').removeAttr('checked');
        }

        if (arr.length > 0) {
            tip.style.display = 'none';
            $('.epet_sensor_settlement').css('background', '#459d36');
            $('.baoyou-tip').css('display', 'block');
            $(".shengcheng").find("a").css({ "visibility": "visible" });
        } else {
            tip.style.display = 'block';;
            $('.epet_sensor_settlement').css('background', '#b1b1b1');
            $('.baoyou-tip').css('display', 'none');
            $(".shengcheng").find("a").css({ "visibility": "hidden" });
        }

        var priceAll = 0; //总价
        var numAll = 0; //总数量

        for (var i = 0; i < arr.length; i++) {
            numAll += $('.buynum ').eq(arr[i]).val() * 1;
            priceAll += $('.ee').eq(arr[i]).text().substring(1) * 1;
        }
        $('.current').html('E宠购物车' + numAll);
        $('.epet_sensor_settlement').html('去结算(' + numAll + ')');
        $('.cart-price strong').html('￥' + priceAll.toFixed(2));
    }
    //5.全选、不选
    //attr绑定属性     表单某些属性是有行为的：这种属性需要用prop去绑定
    $('.all-checkbox,.shopmi').on('click', function () {
        if ($(this).prop('checked')) {
            //给所有的复选框都勾上
            $('.chk').prop('checked', 'checked');
            $('.shopmi').prop('checked', 'checked');
        } else {
            $('.chk').removeAttr('checked');
        }
        NumPrice();
    });
    //删除
    $('.xzs').on('click', function () {
        var res = confirm('您真的不要我了吗');
        if (res) {
            for (var i = arr.length; i >= 0; i--) {
                var id = $(this).parents('tfoot').prev().children('tr').attr('id');
                console.log(id);
                $('#miid tr').eq(arr[i]).remove();
                $.ajax({
                    type: "post",
                    data: {
                        APItype: 'orderCarDelete',
                        id: id
                    },
                    url: "../api/cart.php"
                });
                update(); //判断是否删完了
                NumPrice();
            }
        }
    });
    //6.全删
    // $('#delall').on('click', function() {
    // 	console.log(arr);
    // 	var res = confirm('您真的不要我了吗');
    // 	if(res) {
    // 		for(var i = arr.length -1 ; i >= 0 ; i--) {//从尾部开始删除
    // 			console.log(arr[i] + 1);
    // 			$('#cart li').eq(arr[i] + 1).remove();
    // 			update();
    // 			NumPrice();
    // 		}
    // 	}

    // });
});