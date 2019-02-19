'use strict';

window.onload = function () {
    var phone = getid('phone');
    var phonemsg_div = getid('phonemsg_div');
    var phonemsg_img = getid('phonemsg_img');
    var varify_msg_div = getid('varify_msg_div');
    phonemsg_div.style.display = 'none';
    var nickname = getid('nickname');
    var regvairfy = getid('regvairfy');
    var yzm = getid('yzm');
    var passwordr = getid('passwordr');
    var nickname_img = getid('nickname_img');
    var nickname_msg_div = getid('nickname_msg_div');
    var nickname_msg = getid('nickname_msg');
    var password_msg_div = getid('password_msg_div');
    var password_img = getid('password_img');
    var isok1 = false;
    var isok2 = false;
    var isok3 = false;
    var isok4 = false;
    var isok5 = false;
    //验证手机号是否存在
    phone.onblur = function () {
        var val1 = phone.value.trim();
        if (val1 && checkReg.tel(val1)) {
            $.ajax({
                type: "post",
                data: {
                    username: val1,
                    APItype: "uname"
                },
                url: "../api/users.php",
                success: function success(str) {
                    if (str == 1) {
                        phonemsg_img.style.display = 'block';
                        isok1 = true;
                    } else {
                        //当用户名已存在时，将span替换
                        phonemsg_div.style.display = 'block';
                        $('#phonemsg').html('<span class="c666 ft14">\u8BE5\u624B\u673A\u53F7\u5DF2\u5B58\u5728\uFF0C</span>\n            <a id="exitclick" href="/login.html" target="_blank" class="ft14 Logon">\u767B\u5F55</a>');
                    }
                }
            });
        } else {
            phonemsg_div.style.display = 'block';
        }
    };
    yzm.value = randomCode();
    yzm.style.textAlign = 'center';
    yzm.style.color = '#fff';
    yzm.style.backgroundColor = randomColor(16);
    //点击验证码，刷新一次
    yzm.onclick = function () {
        yzm.value = randomCode();
    };
    //验证码正确验证
    var varify_img = getid('varify_img');
    regvairfy.onblur = function () {
        var val2 = regvairfy.value.toLowerCase();
        var val3 = yzm.value.toLowerCase();
        if (val2) {
            if (val2 == val3) {
                varify_img.style.display = 'block';
                isok2 = true;
            } else {
                varify_msg_div.style.display = 'block';
                varify_msg_div.innerHTML = '请输入6位验证码';
            }
        } else {
            varify_msg_div.style.display = 'block';
        }
    };
    //用户名验证
    nickname.onblur = function () {
        var val = nickname.value.trim();
        if (val && checkReg.name(val)) {
            nickname_img.style.display = 'block';
            isok3 = true;
        } else {
            nickname_msg_div.style.display = 'block';
            nickname_msg.innerHTML = '请输入6-20位用户名';
        }
    };
    //密码验证
    passwordr.onblur = function () {
        var val4 = passwordr.value.trim();
        if (val4 && checkReg.name(val4)) {
            password_img.style.display = 'block';
            isok4 = true;
        } else {
            password_msg_div.style.display = 'block';
        }
    };
    var passwordag = getid('passwordag');
    var passwordag_img = getid('passwordag_img');
    var passwordag_msg_div = getid('passwordag_msg_div');
    var registerbtn = getid('registerbtn');
    //确认密码
    passwordag.onblur = function () {
        var val5 = passwordag.value.trim();
        if (val5) {
            if (passwordr.value == val5) {
                passwordag_img.style.display = 'block';
                isok5 = true;
                if (isok1 && isok2 && isok3 && isok4 && isok5) {
                    registerbtn.style.backgroundColor = '#58bc58';
                }
            } else {
                passwordag_msg_div.style.display = 'block';
                passwordag_msg_div.innerHTML = '两次密码密码不正确';
            }
        } else {
            passwordag_msg_div.style.display = 'block';
        }
    };
    registerbtn.onclick = function () {
        var va1 = phone.value.trim();
        var val2 = nickname.value.trim();
        var val3 = passwordr.value.trim();
        $.ajax({
            type: "post",
            data: {
                phone: va1,
                password: val3,
                username: val2,
                APItype: "reg"
            },
            url: "../api/users.php",
            success: function success(str) {
                registerbtn.innerHTML = '注册成功';
                location.href = "../html/login.html";
            }
        });
    };
};