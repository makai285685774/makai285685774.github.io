(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{228:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"利用canvas-生成带有专属二维码的动态海报"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利用canvas-生成带有专属二维码的动态海报"}},[t._v("#")]),t._v(" 利用canvas 生成带有专属二维码的动态海报")]),t._v(" "),a("blockquote",[a("p",[t._v("需求：双十二活动期间，每一个参与活动的用户专门定制一张带有自己二维码的海报")])]),t._v(" "),a("p",[a("strong",[t._v("思路整理")])]),t._v(" "),a("ol",[a("li",[t._v("海报的背景图片是一张固定的大图")]),t._v(" "),a("li",[t._v("大图的固定区域描绘二维码")]),t._v(" "),a("li",[t._v("二维码由活动链接生成，扫描之后跳转")])]),t._v(" "),a("p",[a("strong",[t._v("准备工作")])]),t._v(" "),a("p",[t._v("海报最后合成一张大图，html5 中 canvas 自然避免不了；根据链接字符串生成二维码 ，比较之后 QRCode.js 是不错的选择 "),a("a",{attrs:{href:"https://github.com/davidshimjs/qrcodejs",target:"_blank",rel:"noopener noreferrer"}},[t._v("github地址"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("进入正题")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("生成二维码，传入一串字符（或者是链接）")]),t._v(" "),a("p",[t._v("页面中准备Dom容器")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<div id='inviteQRCode'></div>\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("调用 QRCode.js 方法")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.baidu.com'")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//或者其他")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QRCode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"inviteQRCode"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    colorDark"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#000000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    colorLight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#ffffff"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    correctLevel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" QRCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CorrectLevel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("H")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("绘制背景海报，此时，如果一切正常的话，页面中就会出现一个二维码，先不去管他")]),t._v(" "),a("p",[t._v("加载背景海报图")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("qrcodeBgImg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./img/share.jpg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("上面是一张统一的背景图，因为此时不应该在页面看到它（没经过加工的半成品），所以"),a("code",[t._v("display:none")]),t._v("隐藏，此时还需要绘制后的容器 如下")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<img id="img3">\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("需要考虑的问题，浏览器窗口宽和高不固定，海报的宽和高是固定的，所以当窗口宽度大于海报宽度，绘制后的背景图片保持原图宽，而当窗口宽度小于海报宽度，绘制后的背景图应该等于窗口宽度， 至于高度还要看具体海报的实际高度，在不变形的前提下有所取舍，我的思路是宽和高都按百分比缩放（0.8），这样就可以保证图片所有部分都被绘制出来，并且按照原比例不变形")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" canvas "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"canvas"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//画布=对象")]),t._v("\n     context "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上下文=画笔")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" qrcodeBgImg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'qrcodeBgImg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//背景图")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ratio "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//缩放比例")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" CanvasBgWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("450")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("qrcodeBgImg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" CanvasBgHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("800")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("qrcodeBgImg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("css")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//画布大小")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'width'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" CanvasBgWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" ratio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'height'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" CanvasBgHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" ratio\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[t._v("这里要注意"),a("code",[t._v("js")]),t._v("原生对象和"),a("code",[t._v("Jquery")]),t._v("对象的区别, "),a("code",[t._v("qrcodeBgImg.width")]),t._v("而不是"),a("code",[t._v("qrcodeBgImg.width()")]),t._v(",   代码中450和800代表 原图的实际宽和高，可根据实际情况修改,  绘制代码如下")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawImage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("qrcodeBgImg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CanvasBgWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" ratio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CanvasBgHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" ratio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("绘制二维码 ，实际上二维码图片已经存在Dom中了，把它找到并绘制到画布 即可")])])]),t._v(" "),a("p",[t._v("用浏览器查看元素 可以清晰的找到")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" codeImg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#inviteQRCode img'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//jq转原生")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("二维码的位置出现在绘制后海报的固定区域，而绘制后的海报跟浏览器看和高相关，计算代码如下")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" wScale "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CanvasBgWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("450")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" hScale "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CanvasBgHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("800")]),t._v("\ncontext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawImage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("codeImg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("175")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" wScale "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" ratio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("595")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" hScale "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" ratio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" wScale "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" ratio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" wScale "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ratio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("二维码的位置坐标 长 宽  ，都和绘制后的背景海报相关，175 ，595 是二维码最初的位置坐标，绘制后按照比例计算坐标即可，这样大致还是原来的位置,  100代表二维码原长和宽，也要进行一下调整")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[t._v("导出 "),a("code",[t._v("base64")]),t._v("用于"),a("code",[t._v("img")]),t._v("标签使用")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("return canvas.toDataURL() \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这里 我整体封装了一个方法，返回的是图片的源，用"),a("code",[t._v("<img> src属性接收")])])])]),t._v(" "),a("p",[t._v("以上 ，图片已经绘制完成，下一步就是如何用"),a("code",[t._v("<img>")]),t._v(" 接收")]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[a("p",[t._v("我希望 点击按钮后弹出图片层（也就是绘制好的海报）")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("//点击之前二维码已经存在Dom中\n$('.share').click(function (e) {  //点击按钮执行\n\t//弹出执行layer.open\n}\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])])]),t._v(" "),a("p",[t._v("需要注意，加载绘制好的图片属于异步操作，所以"),a("code",[t._v("layer.open")]),t._v("应该在加载图片的回调函数里执行，前四步封装的函数叫 draw()  ,使用图片预加载代码如下")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//点击之前二维码已经存在Dom中")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.share'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("click")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//点击按钮执行")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" img "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("draw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//赋值后img 对象开始加载图片")]),t._v("\n     \n    img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onload")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 图片加载完成")]),t._v("\n        img3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//img3 容器，已存在Dom中，用于存放绘制完成的图片容器")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 省略layer.open() //弹出img3图片层")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("省略的部分参考 layer官方文档")]),t._v(" "),a("p",[t._v("图片预加载说明，浏览器的缓存机制，同一个资源（例如图片）,只有第一次加载是异步耗时的（当然手动清理缓存除外），当再一次加载同一个资源，默认从缓存中取。预加载就是利用这个原理，预先在内存中加载资源，等到Dom中需要该资源时直接从缓存获取 ，使用户感知不到加载的过程")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("img3")]),t._v(" 为什么没有执行 "),a("code",[t._v("var img3 =")]),t._v("document.getElementById ('img3')` ,就可以直接使用?")])]),t._v(" "),a("p",[t._v("这个源自于javascript  这门语言的特点 ， 任何在Dom中存在Id 的标签"),a("code",[t._v("<div id='element'><div>")]),t._v(", window对象中都存在一个 "),a("strong",[t._v("全局")]),t._v(" 的"),a("code",[t._v("element")]),t._v("对象，和 "),a("code",[t._v("var element =")]),t._v("document.getElementById ('element')` 效果是一样的")])])}),[],!1,null,null,null);s.default=e.exports}}]);