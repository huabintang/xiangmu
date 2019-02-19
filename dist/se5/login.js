'use strict';

window.onload = function () {
    var usernamel = getid('usernamel');
    var passwordl = getid('passwordl');
    var loginbtn = getid('loginbtn');
    loginbtn.onclick = function () {
        var val1 = usernamel.value.trim();
        var val2 = passwordl.value.trim();
        if (val1) {
            if (val2) {
                $.ajax({
                    type: "post",
                    data: {
                        username: val1,
                        APItype: "namer"
                    },
                    url: "../api/users.php",
                    success: function success(str) {
                        if (str) {
                            $.ajax({
                                type: "post",
                                data: {
                                    username: val1,
                                    password: val2,
                                    APItype: "login"
                                },
                                url: "../api/users.php",
                                success: function success(str) {
                                    if (str == 1) {
                                        loginbtn.innerHTML = '登陆成功';
                                        loginbtn.style.color = 'blue';
                                        loginbtn.style.backgroundColor = '#ccc';
                                        location.href = '../shouye.html';
                                        var name = $('#usernamel').val(); //用户名
                                        //设置cookie
                                        $.cookie("usernamel", name, { path: "/" });
                                        //七天免登陆
                                        if ($('#zidong').prop('checked')) {
                                            var name = $('#usernamel').val(); //用户名
                                            var password = $('#passwordl').val(); //密码
                                            $.cookie("usernamel", name, { expires: 7, path: '/' });
                                            $.cookie("passwordl", password, { expires: 7, path: '/' });
                                        }
                                    } else {
                                        $("body").append('<div class="panel window messager-window" style="display: block; width: 288px; left: 524.5px; top: 364px; z-index: 9002;">\n                                <div class="panel-header panel-header-noborder window-header" style="width: 288px;">\n                                    <div class="panel-title">E\u5BA0\u5546\u57CE\u63D0\u793A\u4FE1\u606F\u3002</div>\n                                    <div class="panel-tool">\n                                        <a class="panel-tool-close" href="javascript:void(0)"></a>\n                                    </div>\n                                </div>\n                                <div class="messager-body panel-body panel-body-noborder window-body" title="" style="width: 266px; height: auto;">\n                                    <div>\u5BC6\u7801\u4E0D\u6B63\u786E</div>\n                                    <div style="clear:both;"></div>\n                                    <div class="messager-button">\n                                        <a href="javascript:void(0)" class="l-btn" group="" id="" style="margin-left: 10px;">\n                                            <span class="l-btn-left">\n                                                <span class="l-btn-text">\u786E\u5B9A</span>\n                                            </span>\n                                        </a>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="window-shadow" style="display: block; left: 524.5px; top: 364px; z-index: 9001; width: 300px; height: 106px;"></div>\n                            <div class="window-mask" style="width: 1349px; height: 926px; display: block; z-index: 9000;"></div>');
                                        $('.panel-tool-close,.l-btn').click(function () {
                                            $(".messager-window,.window-shadow,.window-mask").remove();
                                        });
                                    }
                                }
                            });
                        } else {
                            $("body").append('<div class="panel window messager-window" style="display: block; width: 288px; left: 524.5px; top: 364px; z-index: 9002;">\n                                <div class="panel-header panel-header-noborder window-header" style="width: 288px;">\n                                    <div class="panel-title">E\u5BA0\u5546\u57CE\u63D0\u793A\u4FE1\u606F\u3002</div>\n                                    <div class="panel-tool">\n                                        <a class="panel-tool-close" href="javascript:void(0)"></a>\n                                    </div>\n                                </div>\n                                <div class="messager-body panel-body panel-body-noborder window-body" title="" style="width: 266px; height: auto;">\n                                    <div>\u8D26\u6237\u672A\u6CE8\u518C\uFF01</div>\n                                    <div style="clear:both;"></div>\n                                    <div class="messager-button">\n                                        <a href="javascript:void(0)" class="l-btn" group="" id="" style="margin-left: 10px;">\n                                            <span class="l-btn-left">\n                                                <span class="l-btn-text">\u786E\u5B9A</span>\n                                            </span>\n                                        </a>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="window-shadow" style="display: block; left: 524.5px; top: 364px; z-index: 9001; width: 300px; height: 106px;"></div>\n                            <div class="window-mask" style="width: 1349px; height: 926px; display: block; z-index: 9000;"></div>');
                            $('.panel-tool-close,.l-btn').click(function () {
                                $(".messager-window,.window-shadow,.window-mask").remove();
                            });
                        }
                    }
                });
            } else {
                $("body").append('<div class="panel window messager-window" style="display: block; width: 288px; left: 524.5px; top: 364px; z-index: 9002;">\n            <div class="panel-header panel-header-noborder window-header" style="width: 288px;">\n                <div class="panel-title">E\u5BA0\u5546\u57CE\u63D0\u793A\u4FE1\u606F\u3002</div>\n                <div class="panel-tool">\n                    <a class="panel-tool-close" href="javascript:void(0)"></a>\n                </div>\n            </div>\n            <div class="messager-body panel-body panel-body-noborder window-body" title="" style="width: 266px; height: auto;">\n                <div>\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01</div>\n                <div style="clear:both;"></div>\n                <div class="messager-button">\n                    <a href="javascript:void(0)" class="l-btn" group="" id="" style="margin-left: 10px;">\n                        <span class="l-btn-left">\n                            <span class="l-btn-text">\u786E\u5B9A</span>\n                        </span>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class="window-shadow" style="display: block; left: 524.5px; top: 364px; z-index: 9001; width: 300px; height: 106px;"></div>\n        <div class="window-mask" style="width: 1349px; height: 926px; display: block; z-index: 9000;"></div>');
                $('.panel-tool-close,.l-btn').click(function () {
                    $(".messager-window,.window-shadow,.window-mask").remove();
                });
            }
        } else {
            $("body").append('<div class="panel window messager-window" style="display: block; width: 288px; left: 524.5px; top: 364px; z-index: 9002;">\n            <div class="panel-header panel-header-noborder window-header" style="width: 288px;">\n                <div class="panel-title">E\u5BA0\u5546\u57CE\u63D0\u793A\u4FE1\u606F\u3002</div>\n                <div class="panel-tool">\n                    <a class="panel-tool-close" href="javascript:void(0)"></a>\n                </div>\n            </div>\n            <div class="messager-body panel-body panel-body-noborder window-body" title="" style="width: 266px; height: auto;">\n                <div>\u8BF7\u8F93\u5165\u7528\u6237\u540D\uFF01</div>\n                <div style="clear:both;"></div>\n                <div class="messager-button">\n                    <a href="javascript:void(0)" class="l-btn" group="" id="" style="margin-left: 10px;">\n                        <span class="l-btn-left">\n                            <span class="l-btn-text">\u786E\u5B9A</span>\n                        </span>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class="window-shadow" style="display: block; left: 524.5px; top: 364px; z-index: 9001; width: 300px; height: 106px;"></div>\n        <div class="window-mask" style="width: 1349px; height: 926px; display: block; z-index: 9000;"></div>');
            $('.panel-tool-close,.l-btn').click(function () {
                $(".messager-window,.window-shadow,.window-mask").remove();
            });
        }
    };
};