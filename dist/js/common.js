"use strict";function getid(t){return document.getElementById(t)}function randomNum(t,e){return parseInt(Math.random()*(e-t+1))+t}function randomColor(t){if(16==t){for(var e="#",n=0;n<6;n++){e+="0123456789abcdef"[randomNum(0,15)]}return e}if("rgb"==t)return"rgb("+randomNum(0,255)+","+randomNum(0,255)+","+randomNum(0,255)+")"}function pullMenu(t,e){t.onmouseover=function(){e.style.display="block"},t.onmouseout=function(){e.style.display="none"}}function randomCode(){for(var t="",e="0123456789zxcvbnmlkjhgfdsaqwertyuiopZXCVBNMLKJHGFDSAQWERTYUIOP",n=0;n<6;n++){var r=randomNum(0,e.length-1);t+=e.charAt(r)}return t}function filterTex(t){for(var e=["傻B","妈蛋","bitch","fuck","操","小学生","反清复明"],n=0;n<e.length;n++){var r=new RegExp(e[n],"gi");t=t.replace(r,"***")}return t}function strToObj(t){for(var e={},n=t.split("&"),r=0;r<n.length;r++){var o=n[r].split("=");e[o[0]]=o[1]}return e}function toDB(t){return t<10?"0"+t:""+t}function setTime(t){return{secs:toDB(t%60),mins:toDB(Math.floor(t/60)%60),hours:toDB(Math.floor(t/60/60)%24),days:toDB(Math.floor(t/60/60/24))}}function objToStr(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e=e.slice(0,-1)}function firstChild(t){return t.firstElementChild?t.firstElementChild:t.firstChild}function lastChild(t){return t.lastElementChild?t.lastElementChild:t.lastChild}function bind(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n)}function rollerDir(t,e){var n=!0;function r(t){t=t||event;n=t.wheelDelta?0<t.wheelDelta:t.detail<0,e(n)}t.onmousewheel=r,t.addEventListener&&t.addEventListener("DOMMouseScroll",r,!1)}var checkReg={trim:function(t){return t.replace(/^\s+|\s+$/g,"")},tel:function(t){return/^1[3-9]\d{9}$/.test(t)},email:function(t){return/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(t)},idcard:function(t){return/^(\d{17}|\d{14})[\dX]$/.test(t)},psweasy:function(t){return/^[a-zA-Z]\w{5,17}$/.test(t)},pwwagain:function(t,e){return t===e},urladr:function(t){return/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/.test(t)},name:function(t){return/^[a-zA-Z][\w\-]{5,19}$/.test(t)},chinese:function(t){return/^[\u2E80-\u9FFF]+$/.test(t)},birthday:function(t){return/^((((19|20)\d{2})-(0?[13-9]|1[012])-(0?[1-9]|[12]\d|30))|(((19|20)\d{2})-(0?[13578]|1[02])-31)|(((19|20)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-0?2-29))$/.test(t)}},cookie={set:function(t,e,n){var r=t+"="+e;n.expires&&(r+=";expires="+n.expires.toUTCString()),n.path&&(r+=";path="+n.path),n.domain&&(r+=";domain="+n.domain),document.cookie=r},get:function(t){for(var e=document.cookie.split("; "),n=0;n<e.length;n++){var r=e[n].split("=");if(t==r[0])return r[1]}},remove:function(t){var e=new Date;e.setDate(e.getDate()-1),cookie.set(t,"",{expires:e})}};function css(){if(2==arguments.length)return arguments[0].style[arguments[1]];3==arguments.length&&(arguments[0].style[arguments[1]]=arguments[2])}function deepClone(t){var e=JSON.stringify(t);return JSON.parse(e)}function getStyle(t,e){return getComputedStyle(t,!1)?getComputedStyle(t,!1)[e]:t.currentStyle(e)}function startMove(o,a,s){clearInterval(o.timer),o.timer=setInterval(function(){var t=!0;for(var e in a){var n=0;n="opacity"==e?100*getStyle(o,e):parseInt(getStyle(o,e));var r=(a[e]-n)/6;r=0<r?Math.ceil(r):Math.floor(r),t=n==a[e],"opacity"==e?(o.style.opacity=(n+r)/100,o.style.filter="alpha(opacity:"+(n+r)+")"):o.style[e]=n+r+"px"}t&&(clearInterval(o.timer),s&&s())},30)}function lunbo(t,e){var n=getid(t),r=n.getElementsByClassName("ul")[0].getElementsByTagName("li"),o=r[0].offsetWidth,a=n.getElementsByClassName("light")[0].getElementsByTagName("span"),s=n.getElementsByClassName("prev")[0],i=n.getElementsByClassName("next")[0];console.log(o);for(var l=0;l<r.length;l++)css(r[l],"left",o+"px");css(r[0],"left",0);var u=0,c=null,f=function(){startMove(r[u],{left:-o}),u=++u>=r.length?0:u,css(r[u],"left",o+"px"),startMove(r[u],{left:0}),d()},d=function(){for(var t=0;t<a.length;t++)a[t].className="";a[u].className=e};c=setInterval(f,2e3),n.onmouseover=function(){clearInterval(c)},n.onmouseout=function(){clearInterval(c),c=setInterval(f,2e3)};var m=new Date;i.onclick=function(){500<new Date-m&&f(),m=new Date};s.onclick=function(){startMove(r[u],{left:o}),u=--u<0?r.length-1:u,css(r[u],"left",-o+"px"),startMove(r[u],{left:0}),d()};for(l=0;l<a.length;l++)a[l].index=l,a[l].onclick=function(){console.log(this.index),u<this.index&&(startMove(r[u],{left:-o}),css(r[this.index],"left",o+"px")),u>this.index&&(startMove(r[u],{left:o}),css(r[this.index],"left",-o+"px")),startMove(r[this.index],{left:0}),u=this.index,d()}}function ajax(t,e,n,r){var o=new XMLHttpRequest;"get"==t&&n&&(e=e+"?day="+new Date+"&"+n),o.open(t,e,!0),"get"==t?o.send(null):(o.setRequestHeader("content-type","application/x-www-form-urlencoded"),o.send(n)),o.onreadystatechange=function(){4==o.readyState&&(200==o.status?r&&r(o.responseText):alert("出错了，因为："+o.status))}}function setTimes(t){var e=new Date(t),n=e.getFullYear(),r=toDB(e.getMonth()+1),o=toDB(e.getDate()),a=toDB(e.getHours()),s=toDB(e.getMinutes());return{secs:toDB(e.getSeconds()),mins:s,hours:a,days:o,mons:r,years:n}}