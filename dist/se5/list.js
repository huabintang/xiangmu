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
    //吸顶功能


    var boxx = getid('gdmenu');
    var iT = boxx.offsetTop;
    $(window).scroll(function () {
        var scrollTop = window.scrollY;
        if (scrollTop >= iT) {
            //添加样式
            boxx.className = 'w-mid menn';
        } else {
            boxx.className = 'w-mid';
        }
    });

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
    //数据渲染
    var uli = document.getElementsByClassName('glist1')[0];
    function xlan(arr) {
        var res = arr.map(function (item) {
            return '<div class="list_box-li" data-id="' + item.gid1 + '">\n            <div class="list-box-con">\n                <!--\u56FD\u65D7\u56FE\u7247-->\n                <div class="pro-country country-photo hide">\n                </div>\n                <div class="gimg rela">\n                    <!--\u5DF2\u552E\u7F44 BEGIN-->\n                    <a href="javascript:" target="_blank" class="listsale-out hide">\n                        <img src="' + item.img1 + '">\n                    </a>\n                    <!--\u5DF2\u552E\u7F44 END-->\n                    <!--\u89C4\u683C\u5B57\u7B26\u4E32-->\n                    <div class="hovtitle ">\n                    ' + item.kg1 + 'kg </div>\n                    <div class="cloth">\n                    </div>\n                    <!--\u5546\u54C1\u56FE\u7247-->\n                    <a class="gd-photo db rela" href="javascript:" target="_blank" title="' + item.big_title + '">\n                        <img width="200" height="200" alt="' + item.mimgalt + '" src="' + item.img2 + '">\n                    </a>\n                    <!--\u6D3B\u52A8\u6807\u8BC6-->\n                    <div class="act-notice" style="display: block;">\n                    </div>\n                </div>\n\n                <!--\u4E0D\u540C\u89C4\u683C\u5546\u54C1-->\n\n                <!--\u4E0D\u540C\u89C4\u683C\u5546\u54C1-->\n                <div class="fmgoods-main gimgsrl" old-classname="gimg-min">\n                    <div class="gimg-srl fl">\n                        <ul class="gimg-srl-li" style="width: 117px;">\n                            <li data-yhprice="' + item.yhprice1 + '" data-market="' + item.market1 + '" data-price="' + item.price1 + '" data-dprice="' + item.dprice1 + '\u5143/\u65A4" data-gid="' + item.gid1 + '" data-subject="' + item.subject1 + '"\n                                data-title="' + item.title1 + '" data-href=""\n                                data-weight="' + item.weight1 + '" data-img="' + item.img1 + '"\n                                data-formats=" ' + item.formats1 + '" data-cloth="" data-typename="" data-countryphoto="" data-stock="' + item.stock1 + '"\n                                data-site="' + item.site1 + '">\n                                <a href="javascript:" target="_blank" title=" ' + item.title1 + '" class="hov">\n                                    <img alt=" ' + item.alt1 + '" width="30" height="30" src="' + item.lig1 + '">\n                                </a>\n                                <!--\u8D2D\u7269\u8F66\u6309\u94AE-->\n                                <div class="hide fm-addcar-btn">\n                                    <a onclick="add_gd(this);" gid="" class="bought-btn fl ftc db pointer gdgid">\n                                        <span>' + item.span + '</span>\n                                    </a>\n                                </div>\n                                <!--\u6D3B\u52A8\u63D0\u793A-->\n                                <!--E\u5BA0\u5546\u54C1\u624D\u5C55\u793A\u6D3B\u52A8-->\n                                <div class="hide fm-act-notice">\n                                </div>\n                            </li>\n                            <li data-yhprice="' + item.yhprice2 + '" data-market="' + item.market2 + '" data-price="' + item.price2 + '" data-dprice="' + item.dprice2 + '\u5143/\u65A4" data-gid="' + item.gid2 + '" data-subject="' + item.subject2 + '"\n                                data-title="' + item.title2 + '" data-href=""\n                                data-weight="1800" data-img="' + item.weight2 + '"\n                                data-formats=" ' + item.imgb + 'kg" data-cloth="" data-typename="" data-countryphoto="" data-stock="' + item.formats2 + '"\n                                data-site="' + item.site2 + '">\n                                <a href="javascript:" target="_blank" title=" ' + item.title2 + '">\n                                    <img alt=" ' + item.alt2 + '" width="30" height="30" src="' + item.lig2 + '">\n                                </a>\n                                <!--\u8D2D\u7269\u8F66\u6309\u94AE-->\n                                <div class="hide fm-addcar-btn">\n                                    <a onclick="add_gd(this);" gid="" class="bought-btn fl ftc db pointer gdgid">\n                                        <span>\u52A0\u5165\u8D2D\u7269\u8F66</span>\n                                    </a>\n                                </div>\n                                <!--\u6D3B\u52A8\u63D0\u793A-->\n                                <!--E\u5BA0\u5546\u54C1\u624D\u5C55\u793A\u6D3B\u52A8-->\n                                <div class="hide fm-act-notice">\n                                </div>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                <a class="gtitle" href="javascript:" target="_blank" title="">\n                    <span class="title-typename tit-label ft12 hide"></span>\n                    <!--\u65B0\u589E\u6D3B\u52A8\u56FE\u6807 BGEIN-->\n\n                    <span class="title-subject"></span>\n                </a>\n                <p class="gprice">\n                    <span class="c999 through market-price">\uFFE5' + item.yuanjia + '</span>\n                    <span class="cred ft14 price">\uFFE5' + item.xianjia + '</span>\n                    <span class="c999 dprice">' + item.meijing + '\u5143/\u65A4</span>\n                </p>\n                <p class="c999 deal-cnt">\n                    <em>\u5DF2\u552E' + item.xiaoliang + '</em>\n                    <em class="lis_icon">' + item.hudong + '\u4EBA\u4E92\u52A8</em>\n                </p>\n                <p class="c999 send-ps ml5"></p>\n            </div>\n        </div>';
        }).join('');
        uli.innerHTML = res;
    }
    $.ajax({
        type: "post",
        data: {
            page: 1,
            qty: 8,
            APItype: 'goodlist'
        },
        url: "../api/goodlist.php",
        success: function success(str) {
            var arr = JSON.parse(str);
            xlan(arr.list);
        }
    });
    //翻页
    function bl(nrw) {
        var page = nrw.text();
        console.log(page);
        $.ajax({
            type: "post",
            data: {
                APItype: 'goodlist',
                page: page,
                qty: 8
            },
            url: "../api/goodlist.php",
            success: function success(str) {
                var arr = JSON.parse(str);
                xlan(arr.list);
            }
        });
    }
    $('.jiye').on('click', function () {
        bl($(this));
    });
    $('.di').on('click', function () {
        bl($(this));
    });
    //点击传id给详情
    $('.glist1').on('click', '.list_box-li', function () {
        $(this).attr('data-id');
        location.href = 'details.html?' + $(this).attr('data-id');
    });

    //价格排序
    $('.pxprice').on('click', function () {
        $.ajax({
            type: "post",
            data: {
                APItype: 'goodlisthotdown',
                page: 1,
                qty: 8
            },
            url: "../api/goodlist.php",
            success: function success(str) {
                var arr = JSON.parse(str);
                xlan(arr.list);
            }
        });
    });
    $('.jiangjia').on('click', function () {
        $.ajax({
            type: "post",
            data: {
                APItype: 'goodlisthotup',
                page: 1,
                qty: 8
            },
            url: "../api/goodlist.php",
            success: function success(str) {
                var arr = JSON.parse(str);
                xlan(arr.list);
            }
        });
    });
});