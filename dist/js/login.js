"use strict";window.onload=function(){var e=getid("usernamel"),a=getid("passwordl"),d=getid("loginbtn");d.onclick=function(){var n=e.value.trim(),s=a.value.trim();n?s?$.ajax({type:"post",data:{username:n,APItype:"namer"},url:"../api/users.php",success:function(e){e?$.ajax({type:"post",data:{username:n,password:s,APItype:"login"},url:"../api/users.php",success:function(e){if(1==e){d.innerHTML="登陆成功",d.style.color="blue",d.style.backgroundColor="#ccc",location.href="../shouye.html";var n=$("#usernamel").val();if($.cookie("usernamel",n,{path:"/"}),$("#zidong").prop("checked")){n=$("#usernamel").val();var s=$("#passwordl").val();$.cookie("usernamel",n,{expires:7,path:"/"}),$.cookie("passwordl",s,{expires:7,path:"/"})}}else $("body").append('<div class="panel window messager-window" style="display: block; width: 288px; left: 524.5px; top: 364px; z-index: 9002;">\n                                <div class="panel-header panel-header-noborder window-header" style="width: 288px;">\n                                    <div class="panel-title">E宠商城提示信息。</div>\n                                    <div class="panel-tool">\n                                        <a class="panel-tool-close" href="javascript:void(0)"></a>\n                                    </div>\n                                </div>\n                                <div class="messager-body panel-body panel-body-noborder window-body" title="" style="width: 266px; height: auto;">\n                                    <div>密码不正确</div>\n                                    <div style="clear:both;"></div>\n                                    <div class="messager-button">\n                                        <a href="javascript:void(0)" class="l-btn" group="" id="" style="margin-left: 10px;">\n                                            <span class="l-btn-left">\n                                                <span class="l-btn-text">确定</span>\n                                            </span>\n                                        </a>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="window-shadow" style="display: block; left: 524.5px; top: 364px; z-index: 9001; width: 300px; height: 106px;"></div>\n                            <div class="window-mask" style="width: 1349px; height: 926px; display: block; z-index: 9000;"></div>'),$(".panel-tool-close,.l-btn").click(function(){$(".messager-window,.window-shadow,.window-mask").remove()})}}):($("body").append('<div class="panel window messager-window" style="display: block; width: 288px; left: 524.5px; top: 364px; z-index: 9002;">\n                                <div class="panel-header panel-header-noborder window-header" style="width: 288px;">\n                                    <div class="panel-title">E宠商城提示信息。</div>\n                                    <div class="panel-tool">\n                                        <a class="panel-tool-close" href="javascript:void(0)"></a>\n                                    </div>\n                                </div>\n                                <div class="messager-body panel-body panel-body-noborder window-body" title="" style="width: 266px; height: auto;">\n                                    <div>账户未注册！</div>\n                                    <div style="clear:both;"></div>\n                                    <div class="messager-button">\n                                        <a href="javascript:void(0)" class="l-btn" group="" id="" style="margin-left: 10px;">\n                                            <span class="l-btn-left">\n                                                <span class="l-btn-text">确定</span>\n                                            </span>\n                                        </a>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="window-shadow" style="display: block; left: 524.5px; top: 364px; z-index: 9001; width: 300px; height: 106px;"></div>\n                            <div class="window-mask" style="width: 1349px; height: 926px; display: block; z-index: 9000;"></div>'),$(".panel-tool-close,.l-btn").click(function(){$(".messager-window,.window-shadow,.window-mask").remove()}))}}):($("body").append('<div class="panel window messager-window" style="display: block; width: 288px; left: 524.5px; top: 364px; z-index: 9002;">\n            <div class="panel-header panel-header-noborder window-header" style="width: 288px;">\n                <div class="panel-title">E宠商城提示信息。</div>\n                <div class="panel-tool">\n                    <a class="panel-tool-close" href="javascript:void(0)"></a>\n                </div>\n            </div>\n            <div class="messager-body panel-body panel-body-noborder window-body" title="" style="width: 266px; height: auto;">\n                <div>请输入密码！</div>\n                <div style="clear:both;"></div>\n                <div class="messager-button">\n                    <a href="javascript:void(0)" class="l-btn" group="" id="" style="margin-left: 10px;">\n                        <span class="l-btn-left">\n                            <span class="l-btn-text">确定</span>\n                        </span>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class="window-shadow" style="display: block; left: 524.5px; top: 364px; z-index: 9001; width: 300px; height: 106px;"></div>\n        <div class="window-mask" style="width: 1349px; height: 926px; display: block; z-index: 9000;"></div>'),$(".panel-tool-close,.l-btn").click(function(){$(".messager-window,.window-shadow,.window-mask").remove()})):($("body").append('<div class="panel window messager-window" style="display: block; width: 288px; left: 524.5px; top: 364px; z-index: 9002;">\n            <div class="panel-header panel-header-noborder window-header" style="width: 288px;">\n                <div class="panel-title">E宠商城提示信息。</div>\n                <div class="panel-tool">\n                    <a class="panel-tool-close" href="javascript:void(0)"></a>\n                </div>\n            </div>\n            <div class="messager-body panel-body panel-body-noborder window-body" title="" style="width: 266px; height: auto;">\n                <div>请输入用户名！</div>\n                <div style="clear:both;"></div>\n                <div class="messager-button">\n                    <a href="javascript:void(0)" class="l-btn" group="" id="" style="margin-left: 10px;">\n                        <span class="l-btn-left">\n                            <span class="l-btn-text">确定</span>\n                        </span>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class="window-shadow" style="display: block; left: 524.5px; top: 364px; z-index: 9001; width: 300px; height: 106px;"></div>\n        <div class="window-mask" style="width: 1349px; height: 926px; display: block; z-index: 9000;"></div>'),$(".panel-tool-close,.l-btn").click(function(){$(".messager-window,.window-shadow,.window-mask").remove()}))}};