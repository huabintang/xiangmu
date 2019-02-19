'use strict';

$(function () {

    //导航选项卡

    $('.maincates-title span').hover(function () {
        $('.maincates-title span').removeClass('hov');
        $(this).addClass('hov');
        $('.catelist>div').css('display', 'none').eq($(this).index()).css('display', 'block');
    }, function () {
        $('.catelist>div').css('display', 'none');
    });
    $('.catelist>div').hover(function () {
        $(this).css('display', 'block');
    }, function () {
        $(this).css('display', 'none');
    });
    //二级选项卡
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

    //数据渲染
    var box = document.getElementsByClassName('cloud-zoom-wrap')[0];
    function tt(arr) {
        var sst = arr.map(function (item) {
            return '<a href="' + item.img2 + '" id="zoom1" class="cloud-zoom db rela" style="z-index: 0; position: relative; display: block;" rel="showTitle:false,zoomWidth:500,zoomHeight:380,minWidth:400,minHeight:300,adjustX:-10">\n            <img alt="115032" src="' + item.img2 + '" style="display: block;" id="tup">\n        </a>';
        }).join();
        box.innerHTML = sst;
    }
    function ss(arr) {
        var res = arr.map(function (item) {
            return '<div class="gddes fl gdms">\n            <h1 class="gdtitle c333 ft18 bold" id="abcde">' + item.subject1 + '</h1>\n            <div class="ft14 mt c93c">' + item.title1 + '</div>\n            <div class="epet-pprice mt15 ft14">\n                <div data-name="activity_item_normal">\n                    <div class="mt5 clearfix">\n                        <div class="pt20 pl20 pr20 clearfix">\n                            <span class="c999 fl">\n                                \u5E02\u573A\u4EF7 \uFF1A\n                            </span>\n                            <del class="c333 fl">\xA5' + item.yuanjia + '</del>\n                        </div>\n                    </div>\n                    <div class="clearfix sale-prices">\n                        <!--brand-daybg-->\n                        <!--\u54C1\u724C\u65E5-->\n                        <span class="c999 fl mt20">\n                            E\u5BA0\u4EF7 \uFF1A\n                        </span>\n                        <span class="ft20 c93c">\uFFE5</span>\n                        <span class="c93c goods-font bold" id="goods-sale-price" data-name="sale_price">' + item.xianjia + '</span>\n                        <!--VIP\u4E13\u4EAB-->\n                        <div style="display: inline-block"></div>\n                    </div>\n                </div>\n                <div data-name="e_plus" class="e-plus ft15"></div>\n            </div>\n\n            <!--\u4FC3\u9500\u6D3B\u52A8\u63D0\u793A-->\n\n            <!--\u591A\u4EF6\u4F18\u60E0\u3001\u8D60\u54C1-->\n\n\n            <!--\u4ED6\u516C\u76CA\u8BA1\u5212\u63D0\u793A-->\n\n            <div class="gdtable gdattr gadttrnoBorder ft14  pt10 pb10">\n                <div class="clearfix">\n                    <div class="ats-style mt5">\n                        <span class="c999">\u5DF2\u552E\uFF1A</span>\n                        <span class="ce54649">' + item.xiaoliang + '</span>\u888B</div>\n                    <div class="ats-style mt5 ml20">\n                        <span class="c999">\u8BC4\u4EF7\uFF1A</span>\n                        <a href="javascript:;" target="_blank">\n                            <span class="c300 ce54649">(' + item.hudong + ')</span>\n                        </a>&nbsp;&nbsp;&nbsp;&nbsp;\n                        <a href="javascript:;" target="_blank">\n                            <span class="c999">\u54A8\u8BE2\uFF1A</span>\n                            <span class="c999 ce54649">(' + item.hudong + ')</span>\n                        </a>\n                    </div>\n                    <div class="ats-style mt5 ml20">\n                        <span class="c999">\u8D60\u9001\uFF1A</span>\u6700\u591A\n                        <span class="c78b300">' + item.stock2 + '</span>E\u5BA0\u5E01</div>\n                </div>\n                <div class="quality-assurance-con mt pb10 pointer">\n                    <ul class="clearfix">\n                        <li class="fl">\n                            <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/qualityassurance.png" alt=""> \u6B63\u54C1\u4FDD\u8BC1\n                            <div class="qa-tc hide">\n                                <div class="qa-tccon bgwhite">\n                                    <em></em>\n                                    <span class="qa-sj"></span>\n                                    <p>\u6B63\u89C4\u6388\u6743\uFF0C\u6240\u6709\u5546\u54C1\u53EF100%\u8FFD\u6EAF\u6765\u6E90\u3002</p>\n                                </div>\n                            </div>\n                            <!--<p class="abs qa-content hide">\u6B63\u89C4\u6388\u6743\uFF0C\u6240\u6709\u5546\u54C1\u53EF100%\u8FFD\u6EAF\u6765\u6E90\u3002</p>-->\n                        </li>\n                        <li class="fl">\n                            <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/freeshipping.png" alt=""> 99\u5143\u5305\u90AE\n                            <div class="qa-tc hide">\n                                <div class="qa-tccon bgwhite">\n                                    <em></em>\n                                    <span class="qa-sj"></span>\n                                    <p>\u5355\u4E2A\u4ED3\u5E93\u5355\u7B14\u8BA2\u5355\u6EE199\u5305\u90AE\uFF08\u897F\u90E8\u5927\u4ED3\u8986\u76D6\u7684\u5DDD\u6E1D\u5730\u533A\u6EE158\u5143\u5305\u90AE\uFF09\uFF0CE\u5BA0\u81EA\u8425\u5FEB\u9012\u8986\u76D6\u533A\u57DF\u6EE158\u5305\u90AE\uFF1B\u4E0D\u5305\u90AE\u5730\u533A\uFF1A\u897F\u85CF\u3001\u65B0\u7586\uFF1B\u4E0D\u5305\u90AE\u5FEB\u9012\uFF1A\u987A\u4E30\u3001EMS\uFF1B</p>\n                                </div>\n                            </div>\n                            <!--<p class="abs qa-content hide">\u5355\u4E2A\u4ED3\u5E93\u5355\u7B14\u8BA2\u5355\u6EE199\u5305\u90AE\uFF08\u897F\u90E8\u5927\u4ED3\u8986\u76D6\u7684\u5DDD\u6E1D\u5730\u533A\u6EE158\u5143\u5305\u90AE\uFF09\uFF0CE\u5BA0\u81EA\u8425\u5FEB\u9012\u8986\u76D6\u533A\u57DF\u6EE158\u5305\u90AE\uFF1B\u4E0D\u5305\u90AE\u5730\u533A\uFF1A\u897F\u85CF\u3001\u65B0\u7586\uFF1B\u4E0D\u5305\u90AE\u5FEB\u9012\uFF1A\u987A\u4E30\u3001EMS\uFF1B</p>-->\n                        </li>\n                        <li class="fl">\n                            <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/thirtydays.png" alt=""> 30\u5929\u9000\u8D27\n                            <div class="qa-tc hide">\n                                <div class="qa-tccon bgwhite">\n                                    <em></em>\n                                    <span class="qa-sj"></span>\n                                    <p>\u5728\u4E0D\u5F71\u54CD\u8BE5\u5546\u54C1\u4E8C\u6B21\u9500\u552E\u7684\u60C5\u51B5\u4E0B\uFF0C\u81EA\u6536\u5230\u5546\u54C130\u5929\u5185\uFF0C\u53EF\u7533\u8BF7\u9000\u6362\u8D27\u670D\u52A1\uFF08\u5B9A\u5236\u72D7\u724C\u3001\u86CB\u7CD5\u7B49\u7279\u6B8A\u5546\u54C1\u9664\u5916\uFF09\u3002</p>\n                                </div>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n\n            <!--\u89C4\u683C-->\n            <div class="norms clearfix mt15 ">\n                <span class="fl ft14 db c999">\u89C4\u683C\uFF1A</span>\n                <div class="norms-con fl">\n                    <a href="javascript:;" title="' + item.stock2 + '" class="norms-a">\n                    ' + item.stock2 + 'kg\n                        <span class="goods-select"></span>\n                    </a>\n                    <a href="javascript:;" title="' + item.alt2 + '" class="norms-a">\n                    ' + item.alt2 + ' </a>\n                    <a href="javascript:;" title="1kg" class="norms-a">\n                    1kg </a>\n                </div>\n            </div>\n            <!--\u6570\u91CF-->\n            <div class="norms clearfix mt15 pb10">\n                <span class="fl ft14 db c999 mt5">\u6211\u8981\u4E70\uFF1A</span>\n                <div class="norms-con fl">\n                    <span class="cgnum fl mr">\n                        <span class="chgnum lim-buynum ft14">-</span>\n                        <input type="text" onchange="Epet.Goods.changeNum(this.value)"  id="cart_buynum"\n                            class="text buynum" value="1" size="2">\n                        <span class="chgnum add-buynum ft14">+</span>\n                    </span>\n                    <span class="fl mt">\u888B</span>\n                </div>\n            </div>\n\n            <div class="gdtable sent-city ">\n                <div class="clearfix">\n                    <div class="fl div-sentcity clearfix rela">\n                        <span class="fl ft14 db c999 mt15">\u9001\u8D27\u81F3\uFF1A</span>\n                        <div class="rela goods-place-div fl" data-name="locationPlace">\n                            <div class="rela place-div">\n                                <div class="rela c666 mt5 place-show bgwhite pointer">\n                                    <div class="clearfix place-str">\u91CD\u5E86 \u6E1D\u4E2D\u533A</div>\n                                    <b class=""></b>\n                                </div>\n                                <!--\u9690\u85CF\u90E8\u5206-->\n                                <div class="place-hide hide" align="left" style="display: none;">\n                                    <div class="citys bgwhite">\n                                        <ul class="place-header">\n                                            <li class="title-province current" data-placeid="24" data-parentid="0">\u91CD\u5E86</li>\n                                            <li class="title-city" style="display:none;" data-placeid="4974" data-parentid="24">\u91CD\u5E86</li>\n                                            <li class="title-area" data-placeid="5115" data-parentid="4974">\u6E1D\u4E2D\u533A</li>\n                                            <li class="title-high" data-placeid="0" data-parentid="5115"></li>\n                                            <li class="title-street" data-placeid="0" data-parentid="0"></li>\n                                        </ul>\n                                        <div class="place-content">\n                                            <div class="place-province" data-type="province">\n                                                <div class="city-conbox bgwhite c666 mt5">\n                                                    <div class="pt10 pl10 pr10 pb5">\n                                                        <span>\u534E\u5317\uFF1A</span>\n                                                        <a href="javascript:;" data-placeid="1">\u5317\u4EAC</a>\n                                                        <a href="javascript:;" data-placeid="2">\u5929\u6D25</a>\n                                                        <a href="javascript:;" data-placeid="3">\u6CB3\u5317</a>\n                                                        <a href="javascript:;" data-placeid="4">\u5C71\u897F</a>\n                                                        <a href="javascript:;" data-placeid="5">\u5185\u8499\u53E4</a>\n                                                    </div>\n                                                    <div class="pt10 pl10 pr10 pb5">\n                                                        <span>\u534E\u4E1C\uFF1A</span>\n                                                        <a href="javascript:;" data-placeid="9">\u4E0A\u6D77</a>\n                                                        <a href="javascript:;" data-placeid="10">\u6C5F\u82CF</a>\n                                                        <a href="javascript:;" data-placeid="11">\u6D59\u6C5F</a>\n                                                        <a href="javascript:;" data-placeid="12">\u5B89\u5FBD</a>\n                                                        <a href="javascript:;" data-placeid="13">\u798F\u5EFA</a>\n                                                        <a href="javascript:;" data-placeid="15">\u5C71\u4E1C</a>\n                                                    </div>\n                                                    <div class="pt10 pl10 pr10 pb5">\n                                                        <span>\u534E\u5357\uFF1A</span>\n                                                        <a href="javascript:;" data-placeid="20">\u5E7F\u4E1C</a>\n                                                        <a href="javascript:;" data-placeid="28">\u5E7F\u897F</a>\n                                                        <a href="javascript:;" data-placeid="21">\u6D77\u5357</a>\n                                                    </div>\n                                                    <div class="pt10 pl10 pr10 pb5">\n                                                        <span>\u534E\u4E2D\uFF1A</span>\n                                                        <a href="javascript:;" data-placeid="14">\u6C5F\u897F</a>\n                                                        <a href="javascript:;" data-placeid="17">\u6CB3\u5357</a>\n                                                        <a href="javascript:;" data-placeid="18">\u6E56\u5317</a>\n                                                        <a href="javascript:;" data-placeid="19">\u6E56\u5357</a>\n                                                    </div>\n                                                    <div class="pt10 pl10 pr10 pb5">\n                                                        <span>\u897F\u5357\uFF1A</span>\n                                                        <a href="javascript:;" data-placeid="24" class="current">\u91CD\u5E86</a>\n                                                        <a href="javascript:;" data-placeid="25">\u56DB\u5DDD</a>\n                                                        <a href="javascript:;" data-placeid="26">\u8D35\u5DDE</a>\n                                                        <a href="javascript:;" data-placeid="27">\u4E91\u5357</a>\n                                                        <a href="javascript:;" data-placeid="29">\u897F\u85CF</a>\n                                                    </div>\n                                                    <div class="pt10 pl10 pr10 pb5">\n                                                        <span>\u897F\u5317\uFF1A</span>\n                                                        <a href="javascript:;" data-placeid="30">\u9655\u897F</a>\n                                                        <a href="javascript:;" data-placeid="31">\u7518\u8083</a>\n                                                        <a href="javascript:;" data-placeid="32">\u9752\u6D77</a>\n                                                        <a href="javascript:;" data-placeid="33">\u5B81\u590F</a>\n                                                        <a href="javascript:;" data-placeid="34">\u65B0\u7586</a>\n                                                    </div>\n                                                    <div class="pt10 pl10 pr10 pb5">\n                                                        <span>\u4E1C\u5317\uFF1A</span>\n                                                        <a href="javascript:;" data-placeid="6">\u8FBD\u5B81</a>\n                                                        <a href="javascript:;" data-placeid="7">\u5409\u6797</a>\n                                                        <a href="javascript:;" data-placeid="8">\u9ED1\u9F99\u6C5F</a>\n                                                    </div>\n                                                    <div class="pt10 pl10 pr10 pb5">\n                                                        <span>\u5176\u4ED6\uFF1A</span>\n                                                        <a href="javascript:;" data-placeid="22" data-index="2">\u9999\u6E2F</a>\n                                                        <a href="javascript:;" data-placeid="23" data-index="2">\u6FB3\u95E8</a>\n                                                        <a href="javascript:;" data-placeid="16">\u53F0\u6E7E</a>\n                                                        <a href="javascript:;" data-placeid="49574" data-index="2">\u9493\u9C7C\u5C9B</a>\n                                                        <a href="javascript:;" data-placeid="49579" data-index="2">\u5357\u6C99\u7FA4\u5C9B</a>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class="place-city hide city-conbox bgwhite c666 mt5"></div>\n                                            <div class="place-area hide city-conbox bgwhite c666 mt5"></div>\n                                            <div class="place-high hide city-conbox bgwhite c666 mt5"></div>\n                                            <div class="place-street hide city-conbox bgwhite c666 mt5"></div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <!--\u53D1\u8D27\u4FE1\u606F-->\n            <div class="norms clearfix mt15">\n                <div class="norms-con fl">\n                    <div class="c999 ft13">\n                        E\u5BA0\u5FEB\u901215\u70B9\u524D\u4E0B\u5355\uFF0C\u5176\u4ED6\u5FEB\u901216\u70B9\u524D\u4E0B\u5355\uFF0C\u5F53\u5929\u53D1\u8D27\u3002\n                        <a href="javascript:;" target="_blank">\u8FD0\u8D39\u8BE6\u60C5&gt;&gt;</a>\n                    </div>\n                </div>\n            </div>\n            <div class="clearfix mt20 pt10">\n\n                <div class="fl addcart-div" id="addcart-div">\n                    <div class="add-buycart ft20 cfff ftc pointer" data-name="addcart-botton">\n                        <input id="cart_gid" type="hidden" value="115032">\n                        <input id="cart_buymode" type="hidden" value="">\n                        <input id="cart_pam" type="hidden" value="">\n                        <input id="cart_pam1" type="hidden" value="">\n                        <input id="cart_extend_pam" type="hidden" value="">\n\n                        <!--\u66FF\u6362button-->\n                        <a class="db epet_sensor_add_cart">\n                            <span class="cfff">' + item.span + '</span>\n                        </a>\n                        <div id="recommend_tips"></div>\n                    </div>\n                </div>\n                <!--<div class="advice ml20 fl">-->\n                <!--<a href="javascript:;" onclick="pub_reply(\'115032\', \'ask\');" class="db ft14 c333 mt5"><i class="db xqico"></i>\u54A8\u8BE2</a>-->\n                <!--</div>-->\n            </div>\n        </div>';
        }).join('');
        $(".goods-md-bg").append(res);
        //点击产品规格，出现被勾图片
        $('.norms-a').click(function () {
            $(this).siblings().find("span").remove();
            $(this).append('<span class="goods-select"></span>');
        });

        //商品数量
        $('#cart_buynum').each(function () {
            var clone_value = this.value;
            $(this).focus(function () {
                if (this.value == clone_value) {
                    this.value = '';
                }
            });
            $(this).blur(function () {
                if (this.value == '') {
                    this.value = clone_value;
                }
            });
        });
        $('.add-buynum').click(function () {
            var val = $('#cart_buynum').val() * 1;
            val++;
            $('#cart_buynum').val(val);
        });
        $('.lim-buynum').click(function () {

            var val = $('#cart_buynum').val() * 1;
            val--;
            if (val <= 1) {
                val = 1;
            }
            $('#cart_buynum').val(val);
        });
        //点击加入购物车出现大屏
        $('.epet_sensor_add_cart').click(function () {
            $("body").append('<div class="panel window quanping" style="display: block; width: 612px; left: 400px; top: 577.333px; z-index: 9002;">\n        <div id="dialog_sd_box" class="cswindow panel-body panel-body-noheader panel-body-noborder window-body" style="overflow: hidden; width: 612px; height: 400px;"\n            title="">\n            <div class="panel" style="display: block; width: 613px;">\n                <div title="" class="panel-body panel-body-noheader panel-body-noborder dialog-content" style="width: 613px; height: 399px;">\n                    <div class="shade">\n                        <div class="cartPopupDiv rel">\n                            <a class="abs closePop" href="javascript:;" >\n                                <img src="//static.epetbar.com/www/close.png" alt="">\n                            </a>\n                            <div class="popupConUp">\n                                <div class="fl picBox">\n                                    <img src="//static.epetbar.com/www/buy_dog.gif" alt="">\n                                </div>\n                                <div class="fl buyDes">\n                                    <h1>\n                                        \u606D\u559C\u5C0F\u4E3B ,\u6210\u529F\u6DFB\u52A0\u5230\u8D2D\u7269\u8F66\u54AF~\n                                    </h1>\n                                    <h2>\n                                        \u8D2D\u7269\u8F66\u5171\u6709\n                                        <span>2</span>\u4EF6\u5546\u54C1\uFF0C\u5408\u8BA1\uFF1A\n                                        <span class="ft18">29.00\u5143</span>\n                                    </h2>\n                                    <div class="cartBtn">\n                                        <a class="continueBuy" href="javascript:;" onclick="$(\'#dialog_sd_box\').dialog(\'close\')">\u7EE7\u7EED\u8D2D\u7269</a>\n                                        <a class="buyNow" href="javascript:;">\u7ACB\u5373\u7ED3\u7B97</a>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="popupConDown addcart_tc">\n                                <p>\u8D2D\u4E70\u8FC7\u8BE5\u5546\u54C1\u7684\u4EBA\u8FD8\u4E70\u8FC7</p>\n                                <ul>\n                                    <li>\n                                        <p class="gimg">\n                                            <a href="javascript:;" title="">\n                                                <img src="//img1.epetbar.com/2018-07/03/10/035b85bf9fd1cafea55cddb0d522dda3.jpg@!200w-c" alt="\u987D\u76AEWanpy \u732A\u8089+\u852C\u83DC\u914D\u65B9 \u9C9C\u5C01\u5305 100g 1\u5305">\n                                            </a>\n                                        </p>\n                                        <p class="gtitle mb">\n                                            <a href="javascript:;" title="\u987D\u76AEWanpy \u732A\u8089+\u852C\u83DC\u914D\u65B9 \u9C9C\u5C01\u5305 100g 1\u5305">\u987D\u76AEWanpy \u732A\u8089+\u852C\u83DC\u914D\u65B9 \u9C9C\u5C01\u5305 100g 1\u5305</a>\n                                        </p>\n                                        <p class="cf60">\uFFE54.50</p>\n                                    </li>\n                                    <li>\n                                        <p class="gimg">\n                                            <a href="javascript:;" title="">\n                                                <img src="//img1.epetbar.com/2018-03/09/15/2f70740a40c1f7c6cb06c9ccb5d87503.jpg@!200w-c" alt="\u591A\u683C\u6F2B \u72AC\u7528\u85AF\u9999\u9E21\u8089\u677E 90g">\n                                            </a>\n                                        </p>\n                                        <p class="gtitle mb">\n                                            <a href="javascript:;" title="\u591A\u683C\u6F2B \u72AC\u7528\u85AF\u9999\u9E21\u8089\u677E 90g">\u591A\u683C\u6F2B \u72AC\u7528\u85AF\u9999\u9E21\u8089\u677E 90g</a>\n                                        </p>\n                                        <p class="cf60">\uFFE517.00</p>\n                                    </li>\n                                    <li>\n                                        <p class="gimg">\n                                            <a href="javascript:;" title="">\n                                                <img src="//img1.epetbar.com/2015-03/13/344d77fde46afea2eef243891b6ff0ea.jpg@!200w-c" alt="\u8BFA\u745E \u98DF\u8865\u72D7\u7CAE\u7CFB\u5217 \u86CB\u9EC4\u52A9\u957F\u6CF0\u8FEA\u8D35\u5BBE\u5E7C\u72AC\u7CAE 1.6kg ">\n                                            </a>\n                                        </p>\n                                        <p class="gtitle mb">\n                                            <a href="javascript:;" title="\u8BFA\u745E \u98DF\u8865\u72D7\u7CAE\u7CFB\u5217 \u86CB\u9EC4\u52A9\u957F\u6CF0\u8FEA\u8D35\u5BBE\u5E7C\u72AC\u7CAE 1.6kg ">\u8BFA\u745E \u98DF\u8865\u72D7\u7CAE\u7CFB\u5217 \u86CB\u9EC4\u52A9\u957F\u6CF0\u8FEA\u8D35\u5BBE\u5E7C\u72AC\u7CAE 1.6kg </a>\n                                        </p>\n                                        <p class="cf60">\uFFE532.00</p>\n                                    </li>\n                                    <li>\n                                        <p class="gimg">\n                                            <a href="javascript:;" title="">\n                                                <img src="//img1.epetbar.com/2018-09/13/13/cd8d8a74ba357929f594fdb660d4d87c.jpg@!200w-c" alt="\u987D\u76AEWanpy\u80A0\u9053\u5475\u62A4\u914D\u65B9\u8D35\u5BBE\u72AC\u5E7C\u72AC\u5168\u4EF7\u7CAE 2.5kg">\n                                            </a>\n                                        </p>\n                                        <p class="gtitle mb">\n                                            <a href="javascript:;" title="\u987D\u76AEWanpy\u80A0\u9053\u5475\u62A4\u914D\u65B9\u8D35\u5BBE\u72AC\u5E7C\u72AC\u5168\u4EF7\u7CAE 2.5kg">\u987D\u76AEWanpy\u80A0\u9053\u5475\u62A4\u914D\u65B9\u8D35\u5BBE\u72AC\u5E7C\u72AC\u5168\u4EF7\u7CAE 2.5kg</a>\n                                        </p>\n                                        <p class="cf60">\uFFE565.00</p>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n\n\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="window-shadow" style="display: block; left: 400px; top: 577.333px; z-index: 9001; width: 624px; height: 413px;"></div>\n    <div class="window-mask" style="width: 1480px; height: 1840px; display: block; z-index: 9000;"></div>');
            $('.buyNow').click(function () {
                location.href = "cart.html";
            });
            $('.continueBuy,.closePop img').click(function () {

                $('.quanping,.window-shadow,.window-mask').remove();
            });
        });
        //配送地址显示
        $('.place-div').hover(function () {
            $('.place-hide').css('display', 'block');
        }, function () {
            $('.place-hide').css('display', 'none');
        });
    }
    //拿id
    var data = decodeURI(location.search);
    var stt = data.slice(1);
    $.ajax({
        type: "post",
        data: {
            APItype: "goodlistDetail",
            id: stt
        },
        url: "../api/goodlist.php",
        success: function success(str) {
            var arr = JSON.parse(str);
            ss(arr);
            tt(arr);
            //点击加入购物车
            var xinjia = $('#goods-sale-price').html() * 1;
            var shulian = $('#cart_buynum').val();
            var rn = $('#abcde').html();
            var sl = $('#cart_buynum').val();
            var tup = $('#tup').attr('src');

            $('.epet_sensor_add_cart').click(function () {
                //通过id查询购物车有么有该商品
                $.ajax({
                    type: "post",
                    data: {
                        APItype: 'findid',
                        id: stt
                    },
                    url: "../api/cart.php",
                    success: function success(str) {
                        if (str == 1) {
                            $.ajax({
                                type: "post",
                                data: {
                                    APItype: "addOrderCar",
                                    neirong: rn,
                                    shuliang: sl,
                                    danjia: xinjia,
                                    img: tup,
                                    id: stt
                                },
                                url: "../api/cart.php",
                                success: function success() {}
                            });
                        } else {
                            $.ajax({
                                type: "post",
                                data: {
                                    APItype: "addOrderCarnum",
                                    id: stt,
                                    shuliang: sl
                                },
                                url: "../api/cart.php"
                            });
                        }
                    }
                });
            });
        }
    });
});