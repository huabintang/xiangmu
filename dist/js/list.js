"use strict";$(function(){$(".maincates-title span").hover(function(){$(".maincates-title span").removeClass("hov"),$(this).addClass("hov"),$(".catelist>div").css("display","none").eq($(this).index()).css("display","block")},function(){$(".catelist>div").css("display","none")}),$(".catelist>div").hover(function(){$(this).css("display","block")},function(){$(this).css("display","none")}),$("#catefm .catels").css("display","none"),$(".dogType ul>li").hover(function(){$(".dogType ul>li").removeClass("hov"),$(this).addClass("hov"),$("#catefm .catels").css("display","none").eq($(this).index()).css("display","block")},function(){$("#catefm .catels").css("display","none")}),$("#catefm .catels").hover(function(){$(this).css("display","block")},function(){$(this).css("display","none")});var a=getid("gdmenu"),i=a.offsetTop;$(window).scroll(function(){var t=window.scrollY;a.className=i<=t?"w-mid menn":"w-mid"}),$(".place-div").hover(function(){$(".place-hide").css("display","block")},function(){$(".place-hide").css("display","none")});var t=document.getElementsByClassName("bagLi")[0],n=t.children[0],s=document.getElementsByClassName("scart")[0],e=getid("cartbox");t.onmouseenter=function(){n.style.display="block"},t.onmouseleave=function(){n.style.display="none"},s.onmouseenter=function(){e.style.display="block"},s.onmouseleave=function(){e.style.display="none"},window.onscroll=function(){100<=(document.body.scrollTop||document.documentElement.scrollTop)?$("#hdb").css({display:"block"}):$("#hdb").css({display:"none"}),$("#hdb").click(function(){var a=window.setInterval(function(){var t=window.pageYOffset;0<t?window.scrollTo(0,t-1):window.clearInterval(a)},20)})};var c=document.getElementsByClassName("glist1")[0];function l(t){var a=t.map(function(t){return'<div class="list_box-li" data-id="'+t.gid1+'">\n            <div class="list-box-con">\n                \x3c!--国旗图片--\x3e\n                <div class="pro-country country-photo hide">\n                </div>\n                <div class="gimg rela">\n                    \x3c!--已售罄 BEGIN--\x3e\n                    <a href="javascript:" target="_blank" class="listsale-out hide">\n                        <img src="'+t.img1+'">\n                    </a>\n                    \x3c!--已售罄 END--\x3e\n                    \x3c!--规格字符串--\x3e\n                    <div class="hovtitle ">\n                    '+t.kg1+'kg </div>\n                    <div class="cloth">\n                    </div>\n                    \x3c!--商品图片--\x3e\n                    <a class="gd-photo db rela" href="javascript:" target="_blank" title="'+t.big_title+'">\n                        <img width="200" height="200" alt="'+t.mimgalt+'" src="'+t.img2+'">\n                    </a>\n                    \x3c!--活动标识--\x3e\n                    <div class="act-notice" style="display: block;">\n                    </div>\n                </div>\n\n                \x3c!--不同规格商品--\x3e\n\n                \x3c!--不同规格商品--\x3e\n                <div class="fmgoods-main gimgsrl" old-classname="gimg-min">\n                    <div class="gimg-srl fl">\n                        <ul class="gimg-srl-li" style="width: 117px;">\n                            <li data-yhprice="'+t.yhprice1+'" data-market="'+t.market1+'" data-price="'+t.price1+'" data-dprice="'+t.dprice1+'元/斤" data-gid="'+t.gid1+'" data-subject="'+t.subject1+'"\n                                data-title="'+t.title1+'" data-href=""\n                                data-weight="'+t.weight1+'" data-img="'+t.img1+'"\n                                data-formats=" '+t.formats1+'" data-cloth="" data-typename="" data-countryphoto="" data-stock="'+t.stock1+'"\n                                data-site="'+t.site1+'">\n                                <a href="javascript:" target="_blank" title=" '+t.title1+'" class="hov">\n                                    <img alt=" '+t.alt1+'" width="30" height="30" src="'+t.lig1+'">\n                                </a>\n                                \x3c!--购物车按钮--\x3e\n                                <div class="hide fm-addcar-btn">\n                                    <a onclick="add_gd(this);" gid="" class="bought-btn fl ftc db pointer gdgid">\n                                        <span>'+t.span+'</span>\n                                    </a>\n                                </div>\n                                \x3c!--活动提示--\x3e\n                                \x3c!--E宠商品才展示活动--\x3e\n                                <div class="hide fm-act-notice">\n                                </div>\n                            </li>\n                            <li data-yhprice="'+t.yhprice2+'" data-market="'+t.market2+'" data-price="'+t.price2+'" data-dprice="'+t.dprice2+'元/斤" data-gid="'+t.gid2+'" data-subject="'+t.subject2+'"\n                                data-title="'+t.title2+'" data-href=""\n                                data-weight="1800" data-img="'+t.weight2+'"\n                                data-formats=" '+t.imgb+'kg" data-cloth="" data-typename="" data-countryphoto="" data-stock="'+t.formats2+'"\n                                data-site="'+t.site2+'">\n                                <a href="javascript:" target="_blank" title=" '+t.title2+'">\n                                    <img alt=" '+t.alt2+'" width="30" height="30" src="'+t.lig2+'">\n                                </a>\n                                \x3c!--购物车按钮--\x3e\n                                <div class="hide fm-addcar-btn">\n                                    <a onclick="add_gd(this);" gid="" class="bought-btn fl ftc db pointer gdgid">\n                                        <span>加入购物车</span>\n                                    </a>\n                                </div>\n                                \x3c!--活动提示--\x3e\n                                \x3c!--E宠商品才展示活动--\x3e\n                                <div class="hide fm-act-notice">\n                                </div>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                <a class="gtitle" href="javascript:" target="_blank" title="">\n                    <span class="title-typename tit-label ft12 hide"></span>\n                    \x3c!--新增活动图标 BGEIN--\x3e\n\n                    <span class="title-subject"></span>\n                </a>\n                <p class="gprice">\n                    <span class="c999 through market-price">￥'+t.yuanjia+'</span>\n                    <span class="cred ft14 price">￥'+t.xianjia+'</span>\n                    <span class="c999 dprice">'+t.meijing+'元/斤</span>\n                </p>\n                <p class="c999 deal-cnt">\n                    <em>已售'+t.xiaoliang+'</em>\n                    <em class="lis_icon">'+t.hudong+'人互动</em>\n                </p>\n                <p class="c999 send-ps ml5"></p>\n            </div>\n        </div>'}).join("");c.innerHTML=a}function d(t){var a=t.text();console.log(a),$.ajax({type:"post",data:{APItype:"goodlist",page:a,qty:8},url:"../api/goodlist.php",success:function(t){l(JSON.parse(t).list)}})}$.ajax({type:"post",data:{page:1,qty:8,APItype:"goodlist"},url:"../api/goodlist.php",success:function(t){l(JSON.parse(t).list)}}),$(".jiye").on("click",function(){d($(this))}),$(".di").on("click",function(){d($(this))}),$(".glist1").on("click",".list_box-li",function(){$(this).attr("data-id"),location.href="details.html?"+$(this).attr("data-id")}),$(".pxprice").on("click",function(){$.ajax({type:"post",data:{APItype:"goodlisthotdown",page:1,qty:8},url:"../api/goodlist.php",success:function(t){l(JSON.parse(t).list)}})}),$(".jiangjia").on("click",function(){$.ajax({type:"post",data:{APItype:"goodlisthotup",page:1,qty:8},url:"../api/goodlist.php",success:function(t){l(JSON.parse(t).list)}})})});