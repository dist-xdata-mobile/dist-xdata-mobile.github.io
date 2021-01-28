(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{501:function(t,e,a){"use strict";a.r(e);var s=a(6),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"如何开发webapi服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何开发webapi服务"}},[t._v("#")]),t._v(" 如何开发Webapi服务")]),t._v(" "),a("blockquote",[a("p",[t._v("作者:李小龙  时间： 2021-01-05")])]),t._v(" "),a("p",[t._v("WebAPI是网络应用程序接口。包含了广泛的功能，网络应用通过API接口，可以实现存储服务、消息服务、计算服务等能力，利用这些能力可以进行开发出强大功能的web应用。")]),t._v(" "),a("p",[t._v("本文档介绍的是控制台+Owin+Topshelf搭建WebAPI接口服务。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/623b4f38e6367beef207390c79a7c58d/wps23.jpg",alt:"img"}}),t._v(" "),a("h1",{attrs:{id:"一、新建控制台项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、新建控制台项目"}},[t._v("#")]),t._v(" 一、新建控制台项目")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/dd7d30d692904812d26d1bf8b66c0e34/wps24.jpg",alt:"img"}}),t._v(" "),a("h1",{attrs:{id:"二、安装相关依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、安装相关依赖"}},[t._v("#")]),t._v(" 二、安装相关依赖")]),t._v(" "),a("p",[t._v("​\t主要是以下几个")]),t._v(" "),a("p",[t._v("​\tMicrosoft.AspNet.WebApi")]),t._v(" "),a("p",[t._v("Microsoft.AspNet.WebApi.Owin")]),t._v(" "),a("p",[t._v("Microsoft.Owin.Hosting")]),t._v(" "),a("p",[t._v("Microsoft.Owin.Host.HttpListener")]),t._v(" "),a("p",[t._v("Topshelf")]),t._v(" "),a("p",[t._v("Nuget安装")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/b43ed3ffe3e12a2e0219a9090c9c75a6/wps25.jpg",alt:"img"}}),t._v(" "),a("p",[t._v("2.1 Topshelf")]),t._v(" "),a("p",[t._v("​\tTopshelf 是一个用来部署基于.NET Framework 开发的服务的框架。简化服务创建于部署过程，并且支持控制台应用程序部署为服务。")]),t._v(" "),a("p",[t._v("​\t"),a("a",{attrs:{href:"#service-description"}},[t._v("http://docs.topshelf-project.com/en/latest/configuration/config_api.html#service-description")])]),t._v(" "),a("p",[t._v("2.2 Owin")]),t._v(" "),a("p",[t._v('​\tOWIN 的全称是 "Open Web Interface for .NET"， OWIN 在 .NET Web 服务器和 .NET Web 应用之间定义了一套标准的接口， 其目的是为了实现服务器与应用之间的解耦，使得便携式 .NET Web 应用以及跨平台的愿望成为现实， 标准的 OWIN 应用可以在任何 OWIN 兼容的服务器上运行， 不再依赖于Windows和IIS 。')]),t._v(" "),a("h1",{attrs:{id:"三、开发webapi服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、开发webapi服务"}},[t._v("#")]),t._v(" 三、开发webapi服务")]),t._v(" "),a("p",[t._v("3.1 新建WebApiConfig类定义默认路由")]),t._v(" "),a("p",[t._v("路由机制：https://www.cnblogs.com/landeanfen/p/5501490.html")]),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/3ccd69ad6b0c9a4a6f4ea73ce4cd3fce/wps26.jpg",alt:"img"}}),t._v(" "),a("p",[t._v("3.2 新建WebApiServiceHost类配置启动")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/9f07fb02525ca642b27e17392651a363/wps27.jpg",alt:"img"}}),t._v(" "),a("p",[t._v("​\t其中ip地址可以在app.config进行配置")]),t._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/6652725d1e972dbb74409dec525b4b04/wps28.jpg",alt:"img"}}),t._v(" "),a("p",[t._v("3.3 在Main函数中配置和运行宿主服务")]),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/085c500a91b84145b36c83d166ccedf1/wps29.jpg",alt:"img"}}),t._v(" "),a("p",[t._v("​\t其中服务描述、显示名称、名称等服务信息都可以在app.config进行配置。")]),t._v(" "),a("h1",{attrs:{id:"四、新增接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、新增接口"}},[t._v("#")]),t._v(" 四、新增接口")]),t._v(" "),a("p",[t._v("​\t新建API控制器，需要注意以下几点约定")]),t._v(" "),a("p",[t._v("​\t1、控制器放在文件夹Controllers下（没有新建一个）")]),t._v(" "),a("p",[t._v("2、控制器继承自ApiController")]),t._v(" "),a("p",[t._v("3、控制器名称符合“名称+Controller”规范")]),t._v(" "),a("p",[t._v("例如：")]),t._v(" "),a("p",[a("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/b644098c7d8d24237d517e17ce2be66e/wps30.jpg",alt:"img"}}),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/b644098c7d8d24237d517e17ce2be66e/wps30.jpg",alt:"img"}})]),t._v(" "),a("h1",{attrs:{id:"五、调试服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、调试服务"}},[t._v("#")]),t._v(" 五、调试服务")]),t._v(" "),a("p",[t._v("5.1 Postman调试")]),t._v(" "),a("p",[t._v("1）Postman安装")]),t._v(" "),a("p",[t._v("下载地址：https://www.postman.com/downloads/")]),t._v(" "),a("p",[t._v("安装设置参考：https://blog.csdn.net/weixin_43184774/article/details/100578557")]),t._v(" "),a("p",[t._v("Web API使用Postman进行调试。打开Postman后，会看到如下界面。postman主界面分为上中下三部分，调试时需要设置请求方式、服务器地址、请求参数。设置完成后点击Send，如果设置无误，界面最下方就会显示出返回结果。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/837bd0e18b9bc1fbfd1b3410556a895e/wps32.jpg",alt:"img"}}),t._v(" "),a("p",[t._v("​\t2）模拟请求")]),t._v(" "),a("p",[t._v("​\t选择请求方式à输入接口地址à设置接口请求参数àSend")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/c5153725955a3d2a956feef933d0e677/wps33.jpg",alt:"img"}}),t._v(" "),a("p",[t._v("​\t3）调试")]),t._v(" "),a("p",[t._v("​\t上面步骤设置好之后可以在代码中打断点进行调试，排查问题")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/3a9cbdb77df6505d22b7e4ef8f86f9ea/wps34.jpg",alt:"img"}}),t._v(" "),a("p",[t._v("5.2 Swagger调试")]),t._v(" "),a("p",[t._v("​\t1）Swagger—api接口文档化")]),t._v(" "),a("p",[t._v("​\thttps://www.cnblogs.com/miskis/p/7561249.html")]),t._v(" "),a("p",[t._v("​\tNuget安装Swashbuckle ，添加依赖")]),t._v(" "),a("p",[t._v("​\t在WebApiConfig类中新增Swagger配置，如下图")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/0d6e1ae21344b5ef8dfc7d80206c66ce/wps35.jpg",alt:"img"}}),t._v(" "),a("p",[t._v("​\t2）调试接口")]),t._v(" "),a("p",[t._v("​\t启动api服务，在浏览器中输入"),a("a",{attrs:{href:"http://localhost:8887/swagger/ui/index",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8887/swagger/ui/index#"),a("OutboundLink")],1),t._v("，可以看到api包含的接口，输入参数带点击"),a("img",{attrs:{src:"/C:%5CUsers%5Cfeeling%5CAppData%5CLocal%5CTemp%5Cksohtml22656%5Cwps36.jpg",alt:"img"}}),t._v("即可开始调试。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/168b176b7ec4fd2211d2aa76b50a8046/wps37.jpg",alt:"img"}})])}),[],!1,null,null,null);e.default=o.exports}}]);