(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{217:function(n,s,t){"use strict";t.r(s);var a=t(0),i=Object(a.a)({},(function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"简单了解html5中的web-notification桌面通知"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单了解html5中的web-notification桌面通知"}},[n._v("#")]),n._v(" 简单了解HTML5中的Web Notification桌面通知")]),n._v(" "),t("blockquote",[t("p",[n._v("特别感谢： "),t("a",{attrs:{href:"https://www.zhangxinxu.com/wordpress/2016/07/know-html5-web-notification/",target:"_blank",rel:"noopener noreferrer"}},[n._v("张鑫旭博客"),t("OutboundLink")],1)])]),n._v(" "),t("h3",{attrs:{id:"_1-传统通知实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-传统通知实现"}},[n._v("#")]),n._v(" 1. 传统通知实现")]),n._v(" "),t("p",[n._v("通知可以说是web中比较常见且重要的功能，私信、在线提问、或者一些在线即时通讯工具我们总是希望第一时间知道对方有了新的反馈，这个时候，就需要页面给予即使的通知。")]),n._v(" "),t("p",[n._v("在以前，我们的通知实现主要是通过闪烁页面的标题内容来实现，实现原理其实很简单，就是定时器不断修改"),t("code",[n._v("document.title")]),n._v("的值")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var titleInit = document.title, isShine = true;\n\nsetInterval(function() {\n    var title = document.title;\n    if (isShine == true) {\n        if (/新/.test(title) == false) {\n            document.title = '【你有新消息】';    \n        } else {\n            document.title = '【　　　　　】';\n        }\n    } else {\n        document.title = titleInit;\n    }\n}, 500);\n\nwindow.onfocus = function() {\n    isShine = false;\n};\nwindow.onblur = function() {\n    isShine = true;\n};\n\n// for IE\ndocument.onfocusin = function() {\n    isShine = false;\n};\ndocument.onfocusout = function() {\n    isShine = true;\n};\n\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br"),t("span",{staticClass:"line-number"},[n._v("17")]),t("br"),t("span",{staticClass:"line-number"},[n._v("18")]),t("br"),t("span",{staticClass:"line-number"},[n._v("19")]),t("br"),t("span",{staticClass:"line-number"},[n._v("20")]),t("br"),t("span",{staticClass:"line-number"},[n._v("21")]),t("br"),t("span",{staticClass:"line-number"},[n._v("22")]),t("br"),t("span",{staticClass:"line-number"},[n._v("23")]),t("br"),t("span",{staticClass:"line-number"},[n._v("24")]),t("br"),t("span",{staticClass:"line-number"},[n._v("25")]),t("br"),t("span",{staticClass:"line-number"},[n._v("26")]),t("br"),t("span",{staticClass:"line-number"},[n._v("27")]),t("br"),t("span",{staticClass:"line-number"},[n._v("28")]),t("br"),t("span",{staticClass:"line-number"},[n._v("29")]),t("br"),t("span",{staticClass:"line-number"},[n._v("30")]),t("br")])]),t("p",[n._v("如果复杂场景，请使用"),t("code",[n._v("addEventListener")]),n._v("和"),t("code",[n._v("attchEvent")]),n._v("进行事件绑定。")]),n._v(" "),t("p",[n._v("然而，这种提示有个致命的缺陷，就是用户的浏览器要一直是张开的。比方说用户浏览器最小化，标题就看不见，自然就无法及时get到有新消息的信息。")]),n._v(" "),t("p",[n._v("好了，新技术的出现不会是无缘无故的，总是为解决某一类问题或需求出现的。Web Notification就可以很好地解决上面的痛点")]),n._v(" "),t("h3",{attrs:{id:"_2-html5-web-notification桌面通知特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-html5-web-notification桌面通知特点"}},[n._v("#")]),n._v(" 2. HTML5 Web Notification桌面通知特点")]),n._v(" "),t("p",[n._v("HTML5 Web Notification通知是属于桌面性质的通知，有点类似于显示器右下角蹦出的QQ弹框，杀毒提示之类的，跟浏览器是脱离的，消息是置顶的")]),n._v(" "),t("p",[t("strong",[n._v("首次使用时，浏览器会弹出一个是否允许通知的弹窗，用户点击允许之后才能使用，否则不能使用，设置里也可以打开允许")])]),n._v(" "),t("p",[n._v("用例代码：")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("//HTML代码：\n<button id=\"button\">有人想加你为好友</button>\n<p id=\"text\"></p>\n\n//JS代码：\nif (window.Notification) {\n    var button = document.getElementById('button'), text = document.getElementById('text');\n    \n    var popNotice = function() {\n        if (Notification.permission == \"granted\") {\n            var notification = new Notification(\"Hi，帅哥：\", {\n                body: '可以加你为好友吗？',\n                icon: '//image.zhangxinxu.com/image/study/s/s128/mm1.jpg'\n            });\n            \n            notification.onclick = function() {\n                text.innerHTML = '张小姐已于' + new Date().toTimeString().split(' ')[0] + '加你为好友！';\n                notification.close();    \n            };\n        }    \n    };\n    \n    button.onclick = function() {\n        if (Notification.permission == \"granted\") {\n            popNotice();\n        } else if (Notification.permission != \"denied\") {\n            Notification.requestPermission(function (permission) {\n              popNotice();\n            });\n        }\n    };\n} else {\n    alert('浏览器不支持Notification');    \n}\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br"),t("span",{staticClass:"line-number"},[n._v("17")]),t("br"),t("span",{staticClass:"line-number"},[n._v("18")]),t("br"),t("span",{staticClass:"line-number"},[n._v("19")]),t("br"),t("span",{staticClass:"line-number"},[n._v("20")]),t("br"),t("span",{staticClass:"line-number"},[n._v("21")]),t("br"),t("span",{staticClass:"line-number"},[n._v("22")]),t("br"),t("span",{staticClass:"line-number"},[n._v("23")]),t("br"),t("span",{staticClass:"line-number"},[n._v("24")]),t("br"),t("span",{staticClass:"line-number"},[n._v("25")]),t("br"),t("span",{staticClass:"line-number"},[n._v("26")]),t("br"),t("span",{staticClass:"line-number"},[n._v("27")]),t("br"),t("span",{staticClass:"line-number"},[n._v("28")]),t("br"),t("span",{staticClass:"line-number"},[n._v("29")]),t("br"),t("span",{staticClass:"line-number"},[n._v("30")]),t("br"),t("span",{staticClass:"line-number"},[n._v("31")]),t("br"),t("span",{staticClass:"line-number"},[n._v("32")]),t("br"),t("span",{staticClass:"line-number"},[n._v("33")]),t("br"),t("span",{staticClass:"line-number"},[n._v("34")]),t("br")])]),t("p",[n._v("结语：个人认为桌面通知不适合开发新用户，因为确实看起来很扰民；对于固定用户强制打开还是不错的，例如外卖商家，不打开接接不到通知，包括声音")])])}),[],!1,null,null,null);s.default=i.exports}}]);