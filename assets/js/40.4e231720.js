(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{429:function(e,s,t){"use strict";t.r(s);var a=t(6),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"k8s"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#k8s"}},[e._v("#")]),e._v(" K8S")]),e._v(" "),t("h2",{attrs:{id:"一、基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、基础"}},[e._v("#")]),e._v(" 一、基础")]),e._v(" "),t("p",[t("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/2e64dd08f6a39c7e3bfbe59558c04890/008eGmZEgy1gmm03afq0oj310f0u0tfp.jpg",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"_1-1-组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-组件"}},[e._v("#")]),e._v(" 1.1 组件")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("API Server")]),e._v("：")]),e._v(" "),t("p",[e._v("APIServer 负责对外提供 RESTful 的 Kubernetes API 服务，它是系统管理指令的统一入口，任何对资源进行增删改查的操作都要交给 APIServer 处理后再提交给 etcd。如架构图中所示，kubectl（Kubernetes 提供的客户端工具，该工具内部就是对 Kubernetes API 的调用）是直接和 APIServer 交互的")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Scheduler")]),e._v("：")]),e._v(" "),t("p",[e._v("scheduler 的职责很明确，就是负责调度 pod 到合适的 Node 上。如果把 scheduler 看成一个黑匣子，那么它的输入是 pod 和由多个 Node 组成的列表，输出是 Pod 和一个 Node 的绑定，即将这个 pod 部署到这个 Node 上。Kubernetes 目前提供了调度算法，但是同样也保留了接口，用户可以根据自己的需求定义自己的调度算法")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Controller Manager")])]),e._v(" "),t("p",[e._v("如果说 APIServer 做的是“前台”的工作的话，那 controller manager 就是负责“后台”的。每个资源一般都对应有一个控制器，而 controller manager 就是负责管理这些控制器的。比如我们通过 APIServer 创建一个 pod，当这个 pod 创建成功后，APIServer 的任务就算完成了。而后面保证 Pod 的状态始终和我们预期的一样的重任就由 controller manager 去保证了")]),e._v(" "),t("ul",[t("li",[e._v("Node Controller：报告节点健康状态")]),e._v(" "),t("li",[e._v("Replication Controller(RC)：维护 rc 的 pod 个数，pod 挂掉又控制重启")]),e._v(" "),t("li",[e._v("Endpoints Controller：填充 Endpoint 对象，主要是给 Service 和 Pod，监听 service")]),e._v(" "),t("li",[e._v("Service Account & Token Controller：创建帐号和 Token")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("ETCD")])]),e._v(" "),t("p",[e._v("etcd 是一个高可用的键值存储系统，Kubernetes 使用它来存储各个资源的状态，从而实现了 Restful 的 API")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("kubelet")])]),e._v(" "),t("p",[e._v("Kubelet 是 Master 在每个 Node 节点上面的 agent，是 Node 节点上面最重要的模块，它负责维护和管理该 Node 上面的所有容器，但是如果容器不是通过 Kubernetes 创建的，它并不会管理。本质上，它负责使 Pod 得运行状态与期望的状态一致")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("kube-proxy")])]),e._v(" "),t("p",[e._v("该模块实现了 Kubernetes 中的服务发现和反向代理功能。反向代理方面：kube-proxy 支持 TCP 和 UDP 连接转发，默认基于 Round Robin 算法将客户端流量转发到与 service 对应的一组后端 pod。服务发现方面，kube-proxy 使用 etcd 的 watch 机制，监控集群中 service 和 endpoint 对象数据的动态变化，并且维护一个 service 到 endpoint 的映射关系，从而保证了后端 pod 的 IP 变化不会对访问者造成影响。")])])]),e._v(" "),t("h3",{attrs:{id:"_1-2-pod（通过-deployment-创建）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-pod（通过-deployment-创建）"}},[e._v("#")]),e._v(" 1.2 Pod（通过 Deployment 创建）")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Pod 控制器：RC&RS、Deployment、DaemonSet、Job&CronJob、StatefulSet")])]),e._v(" "),t("li",[t("p",[e._v("Deployment 通过 RS 来管理 Pod")])]),e._v(" "),t("li",[t("p",[e._v("扩容")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("kubectl scale deployment myapp-deployment --replicas"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("更新镜像")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("kubectl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" image deployment/myapp-deployment "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("myapp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("Harbor的IP和端口/library/nginx:v2\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("回滚")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 查看历史版本")]),e._v("\nkubectl rollout "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("history")]),e._v(" deployment/myapp-deployment\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 回滚到指定版本")]),e._v("\nkubectl rollout undo deployment/myapp-deployment --to-revision"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])])])]),e._v(" "),t("h4",{attrs:{id:"_1-2-1-创建-pod-流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-创建-pod-流程"}},[e._v("#")]),e._v(" 1.2.1 创建 Pod 流程")]),e._v(" "),t("ol",[t("li",[e._v("通过 "),t("strong",[e._v("kubectl")]),e._v(" 提交一个创建 Pod 请求到 "),t("strong",[e._v("API Server")]),e._v("，API Server 存储该请求的数据（yaml）到 "),t("strong",[e._v("ETCD")])]),e._v(" "),t("li",[e._v("API Server 通知"),t("strong",[e._v("Controller Manager")]),e._v(" 执行校验任务，如果发现当前集群中还没用对应的 Pod 实例，根据 Pod 模板生成一个 Pod 对象，通过 API Server 将 Pod 对象写入 ETCD，此时的 Pod 处于 Pending 状态，nodeName 为空，主容器还没有启动。")]),e._v(" "),t("li",[t("strong",[e._v("Scheduler")]),e._v(" 监听到这个 Pod 生成的事件，发现它的 nodeName 为空，表示这个 Pod 还处于未调度状态。执行调度任务，通过各种算法，给 Pod 选择合适的节点，并将这结果通过 API Server 写入 ETCD 中。")]),e._v(" "),t("li",[e._v("节点上的 "),t("strong",[e._v("kubelet")]),e._v(" 通过 API Server 监听 ETCD，同步 Pod 列表，如果发现有新的 pod 绑定到本节点，Pod 内的容器启动，状态位 running。")])]),e._v(" "),t("h4",{attrs:{id:"_1-2-2-pause-容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-pause-容器"}},[e._v("#")]),e._v(" 1.2.2 pause 容器")]),e._v(" "),t("p",[e._v("初始化容器，给 Pod 内其他容器提供共享网络。")]),e._v(" "),t("h3",{attrs:{id:"_1-3-创建-service-流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-创建-service-流程"}},[e._v("#")]),e._v(" 1.3 创建 Service 流程")]),e._v(" "),t("ol",[t("li",[e._v("通过 Kubectl 提交一个新的映射到该 Pod 的 Service 的创建请求")]),e._v(" "),t("li",[e._v("ControllerManager 会通过 Label 标签查询到相关联的 Pod 实例，然后生成 Service 的 Endpoints 信息，并通过 APIServer 写入到 etcd 中")]),e._v(" "),t("li",[e._v("接下来，所有 Node 上运行的 Proxy 进程通过 APIServer 查询并监听 Service 对象与其对应的 Endpoints 信息，建立一个软件方式的负载均衡器来实现 Service 访问到后端 Pod 的流量转发功能")])]),e._v(" "),t("h3",{attrs:{id:"_1-4-pod-的调度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-pod-的调度"}},[e._v("#")]),e._v(" 1.4 Pod 的调度")]),e._v(" "),t("ul",[t("li",[e._v("调度策略\n"),t("ul",[t("li",[e._v("NodeSelector：根据 Node 节点的标签来选择")]),e._v(" "),t("li",[e._v("节点隔离：为了防止节点上的 kubelet 对标签进行修改，从而导致节点选择的失效，可以通过在标签前加上前缀 node-restriction.kubernetes.io/ 来表示隔离，防止修改")]),e._v(" "),t("li",[e._v("亲和与反亲和：软策略、硬策略")]),e._v(" "),t("li",[e._v("NodeName：NodeName 优先于上面的节点选择方法，只要 NodeName 不为空，调度器直接在它指定的节点上运行 kubelet 来运行 Pod")])])]),e._v(" "),t("li",[e._v("污点和容忍：如果某个 Pod 不能容忍某个污点，那么该 Pod 就不会被调度到有该污点的节点上；如果可以容忍，那么就"),t("strong",[e._v("有可能")]),e._v("被调度到该节点上。污点是 Node 节点上的，容忍是 Pod 上的")])]),e._v(" "),t("h3",{attrs:{id:"_1-5-存储"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-存储"}},[e._v("#")]),e._v(" 1.5 存储")]),e._v(" "),t("ul",[t("li",[e._v("configMap")]),e._v(" "),t("li",[e._v("Secret")]),e._v(" "),t("li",[e._v("volume")]),e._v(" "),t("li",[e._v("pv")])]),e._v(" "),t("h2",{attrs:{id:"二、应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、应用"}},[e._v("#")]),e._v(" 二、应用")]),e._v(" "),t("p",[e._v("使用 k8s 部署应用")]),e._v(" "),t("p",[e._v("中间件：zookeeper、redis")]),e._v(" "),t("p",[e._v("后端服务：test-service、test-web")]),e._v(" "),t("h2",{attrs:{id:"三、高可用集群方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、高可用集群方案"}},[e._v("#")]),e._v(" 三、高可用集群方案")]),e._v(" "),t("p",[e._v("k8s 集群主要是两种类型的节点：master 和 worker，主要是 master，worker 节点根据需要自行增减就行。")]),e._v(" "),t("p",[e._v("master 节点的高可用拓扑有两种方式：")]),e._v(" "),t("ul",[t("li",[e._v("内部堆叠 etcd，所有 k8s 节点都运行一个 etcd 组成一个集群")]),e._v(" "),t("li",[e._v("外部 etcd，额外搭建的 etcd 集群")])]),e._v(" "),t("p",[t("img",{attrs:{src:"F:/note/images/k8s9.png",alt:"内部堆叠etcd"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"F:/note/images/k8s10.png",alt:"外部etcd"}})]),e._v(" "),t("p",[e._v("至于其他组件：")]),e._v(" "),t("ul",[t("li",[e._v("apiserver：可以水平扩展，不影响")]),e._v(" "),t("li",[e._v("controllerManager：一个 master 集群中只会有一个节点处于激活状态")]),e._v(" "),t("li",[e._v("scheduler：一个 master 集群中只会有一个节点处于激活状态")])]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 进入etcd Pod，etcd也是一个pod，kube-system名称空间下")]),e._v("\nkubectl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exec")]),e._v(" -it -n kube-system name "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 设置版本，认证")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ETCDCTL_API")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ETCDCTL_CACERT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/kubernetes/pki/etcd/ca.crt\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ETCDCTL_CERT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/kubernetes/pki/etcd/peer.crt\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ETCDCTL_KEY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/kubernetes/pki/etcd/peer.key\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 查看etcd所有key")]),e._v("\netcdctl get / --prefix --keys-only\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 监控")]),e._v("\netcdctl "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("watch")]),e._v(" key\netcdctl "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("watch")]),e._v(" key --prefix\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 查看etcd详细值 值被base64编码")]),e._v("\netcdctl get /registry/pods/default --prefix --keys-only"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("false -w"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("json\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# base编码")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"xxx"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" base64 -d\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);