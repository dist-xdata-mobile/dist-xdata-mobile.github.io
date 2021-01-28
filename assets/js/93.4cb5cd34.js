(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{484:function(a,t,s){"use strict";s.r(t);var e=s(6),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"maven-创建项目及常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maven-创建项目及常用命令"}},[a._v("#")]),a._v(" maven 创建项目及常用命令")]),a._v(" "),s("h2",{attrs:{id:"maven-介绍："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maven-介绍："}},[a._v("#")]),a._v(" "),s("strong",[a._v("maven 介绍：")])]),a._v(" "),s("p",[a._v("主要功能主要分为 5 点，分别是依赖管理系统、多模块构建、一致的项目结构、一致的构建模型和插件机制")]),a._v(" "),s("p",[s("strong",[a._v("maven 创建项目及常用命令")])]),a._v(" "),s("p",[a._v("前提：配置 windows 环境变量,JAVA_HOME 和 M2_HOME")]),a._v(" "),s("h2",{attrs:{id:"验证-maven-是否安装好："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#验证-maven-是否安装好："}},[a._v("#")]),a._v(" 验证 maven 是否安装好：")]),a._v(" "),s("p",[a._v("进入 cmd 命令行:输入：mvn -v //进行验证 maven 是否安装好")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("C:\\Users\\Administrator>mvn -v\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("查看 mvn 的帮助")]),a._v(" "),s("p",[a._v("C:\\Users\\Administrator> mvn -help")]),a._v(" "),s("h2",{attrs:{id:"maven-最主要的命令："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maven-最主要的命令："}},[a._v("#")]),a._v(" Maven 最主要的命令：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mvn clean compile、mvn clean test、mvn clean package、mvn clean install。\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("strong",[a._v("执行 test 之前是会先执行 compile 的，执行 package 之前是会先执行 test 的，而类似地，install 之前会执行 package。")])]),a._v(" "),s("p",[a._v("maven 项目的目录结构图：")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/7c1cd6556486055351dec526db5fd135/20201020091250.png",alt:"maven设计结构"}})]),a._v(" "),s("p",[a._v("一、maven 命令创建项目的两种方式：")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("archetype:generate 按照提示进行选择")])]),a._v(" "),s("li",[s("p",[a._v("archetype:gennerate -DgroupId=组织名，公司网址的反写+项目名")]),a._v(" "),s("p",[a._v("​ -DartifactId=项目名-模块名")]),a._v(" "),s("p",[a._v("​ -Dversion=版本号")]),a._v(" "),s("p",[a._v("​ -Dpackage=代码所存在的包名")])])]),a._v(" "),s("p",[a._v("3.Maven 创建普通 java 项目")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mvn archetype:create     -DgroupId=packageName     -DartifactId=projectName\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("4.Maven 创建 web 项目")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mvn archetype:create    -DgroupId=packageName    -DartifactId=webappName    -DarchetypeArtifactId=maven-archetype-webapp\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("5.简化版生成 web 项目")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mvn archetype:generate -DgroupId=otowa.user.dao -DartifactId=user-dao -Dversion=0.0.1-SNAPSHOT -DarchetypeArtifactId=maven-archetype-webapp\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"例如：构建一个-maven-的-web-项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#例如：构建一个-maven-的-web-项目"}},[a._v("#")]),a._v(" 例如：构建一个 maven 的 web 项目")]),a._v(" "),s("p",[a._v("web 项目是需要服务器去触发的")]),a._v(" "),s("p",[a._v("cmd 命令行下")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("C:\\Users\\Administrator>mvn archetype:generate -DgroupId=com.mycompany.app -DartifactId=my-WebApp -DarchetypeArtifactId=maven-archetype-webapp -DinteractiveMode=false\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("创建好的 JavaWeb 项目中目前只有 src/main/resources 目录，")]),a._v(" "),s("p",[a._v("因此还需要手动添加 src/main/java、src/test/java、src/test/resources")]),a._v(" "),s("p",[a._v("编辑 pom.xml 加入 jetty 插件(用于运行本地应用服务器)：")]),a._v(" "),s("p",[a._v("​ 在 pom.xml 中")]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("finalName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("my-WebApp"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("finalName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("下添加\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("pluginManagement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!--配置Jetty--\x3e")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("plugins")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("plugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("org.mortbay.jetty"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("maven-jetty-plugin"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("plugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("plugins")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("pluginManagement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("p",[a._v("1.在 tomcat 容器中运行 web 应用，需要在 pom 文件中配置 tomcat 插件 mvn tomcat:run2.在 jetty 容器中运行 web 应用，需要在 pom 文件中配置 jetty 插件 mvn")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("jetty:run\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("进入项目")]),a._v(" "),s("p",[a._v("C:\\Users\\Administrator\\ cd my-WebApp")]),a._v(" "),s("p",[a._v("使用 Maven 打包发布 Web 项目：")]),a._v(" "),s("p",[a._v("C:\\Users\\Administrator\\my-WebApp>mvn package")]),a._v(" "),s("p",[a._v("运行 jetty，监听本地的 8080 端口")]),a._v(" "),s("p",[a._v("C:\\Users\\Administrator\\my-WebApp>mvn jetty:run")]),a._v(" "),s("p",[a._v("浏览器访问:")]),a._v(" "),s("p",[a._v("http://127.0.0.1:8080/my-WebApp")]),a._v(" "),s("h2",{attrs:{id:"例如：构建一个普通的-java-项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#例如：构建一个普通的-java-项目"}},[a._v("#")]),a._v(" 例如：构建一个普通的 java 项目")]),a._v(" "),s("p",[a._v("mvn archetype:generate -DgroupId=otowa.user.dao -DartifactId=user-dao -Dversion=0.0.1-SNAPSHOT")]),a._v(" "),s("h2",{attrs:{id:"常用用命令演示："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用用命令演示："}},[a._v("#")]),a._v(" 常用用命令演示：")]),a._v(" "),s("ol",{attrs:{start:"8"}},[s("li",[a._v("编译源代码：")])]),a._v(" "),s("p",[a._v("mvn compile")]),a._v(" "),s("ol",{attrs:{start:"9"}},[s("li",[a._v("编译测试代码：")])]),a._v(" "),s("p",[a._v("mvn test-compile")]),a._v(" "),s("ol",{attrs:{start:"10"}},[s("li",[a._v("运行测试:")])]),a._v(" "),s("p",[a._v("mvn test")]),a._v(" "),s("ol",{attrs:{start:"11"}},[s("li",[a._v("产生 site：生成项目相关信息的网站")])]),a._v(" "),s("p",[a._v("mvn site")]),a._v(" "),s("ol",{attrs:{start:"12"}},[s("li",[a._v("打包：")])]),a._v(" "),s("p",[a._v("mvn package 或 mvn clean package")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("pom.xml文件可以更改打包类型jar或war包\n\n直接更改打包是会报错：Failed to execute goal org.apache.maven.plugins:maven-war-plugin:2.2:war (default-war) on project user-dao: Error assembling WAR: webxml attribute is required (or pre-existing WEB-INF/web.xml if executing in update mode)\n\n在项目用户dao:ErrorAssemblingWAR:web xml属性上执行目标org.apache.maven.plugins:maven-war-plugin:2.2:war(default-war)失败（如果在更新模式下执行，则需要预先存在的WEB-INF/web.xml）\n\n需添加：webapp-WEB-INF-web.xml文件mvn clean package\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("p",[a._v("跳过测试进行打包")]),a._v(" "),s("p",[a._v("mvn clean package -DskipTests -Prelease")]),a._v(" "),s("ol",{attrs:{start:"13"}},[s("li",[a._v("在本地 Repository 中安装 jar：")])]),a._v(" "),s("p",[a._v("mvn install //执行测试同时到 maven 本地仓库")]),a._v(" "),s("p",[a._v("只打 jar 包:（不打进本地仓库）")]),a._v(" "),s("p",[a._v("mvn jar:jar 就是一堆.class 文件, 源代码编译出来的包, 可以直接运行的")]),a._v(" "),s("p",[a._v("打包项目到本地仓库（不执行测试）")]),a._v(" "),s("p",[a._v("mvn clean install -DskipTests")]),a._v(" "),s("ol",{attrs:{start:"14"}},[s("li",[a._v("清除产生的项目：")])]),a._v(" "),s("p",[a._v("mvn clean")]),a._v(" "),s("ol",{attrs:{start:"15"}},[s("li",[a._v("生成 eclipse 项目：")])]),a._v(" "),s("p",[a._v("mvn eclipse:eclipse")]),a._v(" "),s("ol",{attrs:{start:"16"}},[s("li",[a._v("生成 idea 项目：")])]),a._v(" "),s("p",[a._v("mvn idea:idea")]),a._v(" "),s("ol",{attrs:{start:"17"}},[s("li",[a._v("编译测试的内容：")])]),a._v(" "),s("p",[a._v("mvn test-compile")]),a._v(" "),s("ol",{attrs:{start:"18"}},[s("li",[a._v("清除 eclipse 的一些系统设置:")])]),a._v(" "),s("p",[a._v("mvn eclipse:clean")]),a._v(" "),s("p",[a._v("19.查看当前项目已被解析的依赖：")]),a._v(" "),s("p",[a._v("mvn dependency:list")]),a._v(" "),s("p",[a._v("20.上传到私服：")]),a._v(" "),s("p",[a._v("mvn deploy")]),a._v(" "),s("ol",{attrs:{start:"21"}},[s("li",[a._v("看这个“有效的 (effective)”POM，它暴露了 Maven 的默认设置 :")])]),a._v(" "),s("p",[a._v("mvn help:effective-pom")]),a._v(" "),s("ol",{attrs:{start:"22"}},[s("li",[a._v("强制检查更新，由于快照版本的更新策略(一天更新几次、隔段时间更新一次)存在，如果想强制更新就会用到此命令:")])]),a._v(" "),s("p",[a._v("mvn clean install-U")]),a._v(" "),s("ol",{attrs:{start:"23"}},[s("li",[a._v("源码打包：")])]),a._v(" "),s("p",[a._v("mvn source:jar")]),a._v(" "),s("p",[a._v("或")]),a._v(" "),s("p",[a._v("mvn source:jar-no-fork")]),a._v(" "),s("p",[a._v("mvn compile 与 mvn install、mvn deploy 的区别 mvn compile，编译类文件 mvn install，包含 mvn compile，mvn package，然后上传到本地仓库 mvn deploy,包含 mvn install,然后，上传到私服")]),a._v(" "),s("p",[a._v("mvn compile，编译类文件")]),a._v(" "),s("ol",{attrs:{start:"24"}},[s("li",[a._v("打印出已解决依赖的列表 :")])]),a._v(" "),s("p",[a._v("mvn dependency:resolve")]),a._v(" "),s("ol",{attrs:{start:"25"}},[s("li",[a._v("打印整个依赖树 :（打印出项目的整个依赖关系树）")])]),a._v(" "),s("p",[a._v("mvn dependency:tree")]),a._v(" "),s("p",[a._v("26.下载项目里所依赖的 jar 包的源码")]),a._v(" "),s("p",[a._v("mvn dependency:sources")]),a._v(" "),s("p",[a._v("27.查看错误的详细信息")]),a._v(" "),s("p",[a._v("mvn -e")]),a._v(" "),s("p",[a._v("28.发生 jar 的冲突显示冲突的原因（想要查看完整的依赖踪迹，包含那些因为冲突或者其它原因而被拒绝引入的构件）")]),a._v(" "),s("p",[a._v("mvn install -x")]),a._v(" "),s("ol",{attrs:{start:"29"}},[s("li",[a._v("验证工程是否正确，所有需要的资源是否可用:")])]),a._v(" "),s("p",[a._v("mvn validate")]),a._v(" "),s("p",[a._v("30.运行任何检查，验证包是否有效且达到质量标准:")]),a._v(" "),s("p",[a._v("mvn verify")]),a._v(" "),s("ol",{attrs:{start:"31"}},[s("li",[a._v("给任何目标添加 maven.test.skip 属性就能跳过测试 :")])]),a._v(" "),s("p",[a._v("mvn install -Dmaven.test.skip=true")]),a._v(" "),s("p",[a._v("mvn package -Dmaven.test.skip=true")]),a._v(" "),s("ol",{attrs:{start:"32"}},[s("li",[a._v("生成 Wtp 插件的 Web 项目 :")])]),a._v(" "),s("p",[a._v("mvn -Dwtpversion=1.0 eclipse:eclipse")]),a._v(" "),s("ol",{attrs:{start:"33"}},[s("li",[a._v("清除 Eclipse 项目的配置信息(Web 项目) :")])]),a._v(" "),s("p",[a._v("mvn -Dwtpversion=1.0 eclipse:clean")]),a._v(" "),s("p",[a._v("34.将下载的 jar 打到本地仓库")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mvn install:install-file -Dfile=ant-1.6.5.jar -DgroupId=ant -DartifactId=as -Dversion=1.6.5 -Dpackaging=jar\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("35.项目打成了 jar 文件可以供其他项目使用， 复制这个 jar 文件到其他项目的 Classpath 中从而使用这个项目中的类，如何才能让其他的 Maven 项目直接引用这个 jar 呢？")]),a._v(" "),s("p",[a._v("需要一个安装的步骤，执行 mvn clean install 命令。")]),a._v(" "),s("p",[a._v("35.打包指定环境配置文件: dgp-ars-server-service prod.yml 文件")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mvn clean package -Pprod -pl com.dist:dgp-ars-server-service -am\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("说明： -P 打包环境文件、 -pl 模块、 -am 同时打包所有依赖")])])}),[],!1,null,null,null);t.default=n.exports}}]);