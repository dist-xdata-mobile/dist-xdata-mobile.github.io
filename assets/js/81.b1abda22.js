(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{472:function(s,a,t){"use strict";t.r(a);var r=t(6),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"ubuntu-下-java-组件入门环境部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-下-java-组件入门环境部署"}},[s._v("#")]),s._v(" Ubuntu 下 Java 组件入门环境部署")]),s._v(" "),t("blockquote",[t("p",[s._v("作者:网络 时间： 2020-10-16")])]),s._v(" "),t("h2",{attrs:{id:"_1-系统及软件版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-系统及软件版本"}},[s._v("#")]),s._v(" 1. 系统及软件版本")]),s._v(" "),t("ul",[t("li",[s._v("Ubuntu 14.04.LTS")]),s._v(" "),t("li",[t("a",{attrs:{href:"http://pan.baidu.com/s/1gfl5QFL",target:"_blank",rel:"noopener noreferrer"}},[s._v("jdk-7u80-linux-x64.tar.gz"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"http://pan.baidu.com/s/1bSdleQ",target:"_blank",rel:"noopener noreferrer"}},[s._v("eclipse-SDK-4.2.2-linux-gtk-x86_64.tar.gz"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"http://pan.baidu.com/s/1eSuvxQE",target:"_blank",rel:"noopener noreferrer"}},[s._v("SMO_Java_811_14428_59859_64_x64_linux_gcc_CHS.tar.gz"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"_2-jdk-运行环境部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-jdk-运行环境部署"}},[s._v("#")]),s._v(" 2. JDK 运行环境部署")]),s._v(" "),t("ul",[t("li",[s._v("解压"),t("strong",[s._v("jdk-7u80-linux-x64.tar.gz")])])]),s._v(" "),t("div",{staticClass:"language-perl line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-perl"}},[t("code",[s._v("sudo tar "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("zxvf jdk"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("7u80"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("linux"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("x64"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("tar"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("gz\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("设置环境变量，在**/etc/profile**中添加 JDK 配置路径：")])]),s._v(" "),t("div",{staticClass:"language-perl line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-perl"}},[t("code",[s._v("执行命令：\nsudo gedit "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("profile\n在文档最后添加如下内容：\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# jdk environment")]),s._v("\nexport JAVA_HOME"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("opt"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("jdk"),t("span",{pre:!0,attrs:{class:"token vstring string"}},[s._v("1.7.0")]),s._v("_80\nexport JRE_HOME"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("opt"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("jdk"),t("span",{pre:!0,attrs:{class:"token vstring string"}},[s._v("1.7.0")]),s._v("_80"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("jre\nexport CLASSPATH"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CLASSPATH")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JRE_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lib\nexport PATH"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PATH")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JRE_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin\n保存文档并关闭。\n执行命令"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("让配置的环境变量生效"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("：\nsource "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("profile\n执行命令"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("验证JDK是否安装好"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("：\njava "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("version\n如果显示如下即正确：\njava version "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.7.0_80"')]),s._v("\nJava"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TM"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SE Runtime Environment "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("build "),t("span",{pre:!0,attrs:{class:"token vstring string"}},[s._v("1.7.0")]),s._v("_80"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("b15"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nJava HotSpot"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TM"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Bit Server VM "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("build "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24.80")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("b11"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" mixed mode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1234567891011121314151617")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("h2",{attrs:{id:"_3-smo-java-组件环境部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-smo-java-组件环境部署"}},[s._v("#")]),s._v(" 3. SMO_Java 组件环境部署")]),s._v(" "),t("ul",[t("li",[s._v("解压"),t("strong",[s._v("SMO_Java_811_14428_59859_64_x64_linux_gcc_CHS.tar.gz")]),s._v("到**/opt/smo_java_811**目录下")])]),s._v(" "),t("div",{staticClass:"language-perl line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-perl"}},[t("code",[s._v("sudo tar "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("zxvf SMO_Java_811_14428_59859_64_x64_linux_gcc_CHS"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("tar"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("gz "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-C")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("opt"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("smo_java_811\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("配置环境变量：")])]),s._v(" "),t("div",{staticClass:"language-perl line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-perl"}},[t("code",[s._v("进入Tools目录\ncd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("opt"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("smo_java_811"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Tools\n执行命令\nsudo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("SetEnv"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("sh\n部署生效\nsource "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("profile\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("ul",[t("li",[s._v("安装许可驱动：")])]),s._v(" "),t("div",{staticClass:"language-perl line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-perl"}},[t("code",[s._v("进入Support目录\ncd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("opt"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("smo_java_811"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Support\n解压驱动程序\nsudo tar "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("xvf aksusbd"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token vstring string"}},[s._v("2.0.1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("i386"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("tar\n进入目录安装驱动\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("dinst\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v("如果报错The 32bitsupport is missing…错误，因为该Linux "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v("位操作系统缺少32bit支持库，手动安装如下库后再安装驱动：\nsudo apt"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("get install libc6"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("i386 ia32"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("libs\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v("如果驱动安装后，显示install "),t("span",{pre:!0,attrs:{class:"token vstring string"}},[s._v("v2")]),s._v("c"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("  Done"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("即安装成功，默认有"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("90")]),s._v("天的试用许可。\n查询许可状态\njava "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("jar com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("supermap"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("license"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("jar "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-s")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1234567891011")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("ul",[t("li",[s._v("许可更新配置")])]),s._v(" "),t("blockquote",[t("ul",[t("li",[s._v("试用许可 lic 文件，将 lic 文件放入/smo_java_811/License/目录下，将该目录赋予读写权限即可。")]),s._v(" "),t("li",[s._v("正式许可 v2c 文件，将 v2c 文件放入目录下，执行命令\njava -jar com.supermap.license.jar -update /路径名/*.v2c")]),s._v(" "),t("li",[s._v("硬件锁许可，如果在同一网段内已经配置了许可服务器，则许可会自动配置，不需要再进行手工配置；如果当前网络环境中（其他网段）存在可用的硬件锁许可，按下面步骤配置： 1.打开浏览器,访问 "),t("a",{attrs:{href:"http://localhost:1947/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:1947"),t("OutboundLink")],1),s._v(" 。 2.在左侧 Options 中选择 Configuration。 3.在右侧选择 Access to Remote License Managers 选项卡。 4.在 Specify Search Parameters 填入其他网段的许可服务器 IP,点击 Submit。 5.稍等几分钟就可以在左侧 Options 中的 Sentinel Keys 选项下看到该服务器的加密锁了。")])])]),s._v(" "),t("ul",[t("li",[s._v("安装中文字体")])]),s._v(" "),t("div",{staticClass:"language-perl line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-perl"}},[t("code",[s._v("在JDK的字体文件夹下新建fallback目录，名称不能改\ncd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("opt"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("jdk"),t("span",{pre:!0,attrs:{class:"token vstring string"}},[s._v("1.6.0")]),s._v("_14"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("jre"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lib"),t("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/fonts/")]),s._v("\nsudo mkdir fallback\n复制微软雅黑字体库文件\nsudo cp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("opt"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("smo_java_811"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Support"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("fonts"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("MSYH"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("TTF "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("opt"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("jdk"),t("span",{pre:!0,attrs:{class:"token vstring string"}},[s._v("1.7.0")]),s._v("_80"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("jre"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lib"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("fonts"),t("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/fallback/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12345")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"_4-eclipse-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-eclipse-安装"}},[s._v("#")]),s._v(" 4. Eclipse 安装")]),s._v(" "),t("div",{staticClass:"language-perl line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-perl"}},[t("code",[s._v("解压eclipse包\nsudo tar "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("zxvf eclipse"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("SDK"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token vstring string"}},[s._v("4.2.2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("linux"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("gtk"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("x86_64"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("tar"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("gz\n启动eclipse\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("eclipse\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1234")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"_5-smo-java-组件程序入门"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-smo-java-组件程序入门"}},[s._v("#")]),s._v(" 5. SMO_Java 组件程序入门")]),s._v(" "),t("div",{staticClass:"language-perl line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-perl"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("新建java项目，引用java组件架包，如图：\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://img-blog.csdn.net/20170331100430992?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvc3VwZXJtYXBzdXBwb3J0/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast",alt:"引用包"}})]),s._v(" "),t("div",{staticClass:"language-perl line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-perl"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("新建主类文件，如图：\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://img-blog.csdn.net/20170331100511914?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvc3VwZXJtYXBzdXBwb3J0/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast",alt:"代码"}})]),s._v(" "),t("div",{staticClass:"language-perl line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-perl"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("运行结果，如图：\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://img-blog.csdn.net/20170331100535024?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvc3VwZXJtYXBzdXBwb3J0/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast",alt:"结果"}})]),s._v(" "),t("p",[s._v("现在即可进行 supermap java 组件的二次开发了哟。")])])}),[],!1,null,null,null);a.default=e.exports}}]);