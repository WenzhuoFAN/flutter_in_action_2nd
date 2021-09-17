(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{411:function(t,a,e){t.exports=e.p+"assets/img/12-3.2326714a.png"},635:function(t,a,e){"use strict";e.r(a);var r=e(45),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"_12-2-插件开发-平台通道简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_12-2-插件开发-平台通道简介"}},[t._v("#")]),t._v(" 12.2 插件开发：平台通道简介")]),t._v(" "),r("p",[t._v("“平台特定”或“特定平台”中的平台指的就是Flutter应用程序运行的平台，如Android或IOS。我们知道一个完整的Flutter应用程序实际上包括原生代码和Flutter代码两部分。由于Flutter本身只是一个UI系统，它本身是无法提供一些系统能力，比如使用蓝牙、相机、GPS等，因此要在Flutter APP中调用这些能力就必须和原生平台进行通信。为此，Flutter中提供了一个平台通道（platform channel），用于Flutter和原生平台的通信。平台通道正是Flutter和原生之间通信的桥梁，它也是Flutter插件的底层基础设施。")]),t._v(" "),r("p",[t._v("Flutter使用了一个灵活的系统，允许您调用特定平台的API，无论在Android上的Java或Kotlin代码中，还是iOS上的ObjectiveC或Swift代码中均可用。")]),t._v(" "),r("p",[t._v("Flutter与原生之间的通信依赖灵活的消息传递方式：")]),t._v(" "),r("ul",[r("li",[t._v("应用的Flutter部分通过平台通道（platform channel）将消息发送到其应用程序的所在的宿主（iOS或Android）应用（原生应用）。")]),t._v(" "),r("li",[t._v("宿主监听平台通道，并接收该消息。然后它会调用该平台的API，并将响应发送回客户端，即应用程序的Flutter部分。")])]),t._v(" "),r("h3",{attrs:{id:"平台通道"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#平台通道"}},[t._v("#")]),t._v(" 平台通道")]),t._v(" "),r("p",[t._v("使用平台通道在Flutter(client)和原生(host)之间传递消息，如下图所示：")]),t._v(" "),r("p",[r("img",{attrs:{src:e(411),alt:"平台通道"}})]),t._v(" "),r("p",[t._v("当在Flutter中调用原生方法时，调用信息通过平台通道传递到原生，原生收到调用信息后方可执行指定的操作，如需返回数据，则原生会将数据再通过平台通道传递给Flutter。值得注意的是消息传递是异步的，这确保了用户界面在消息传递时不会被挂起。")]),t._v(" "),r("p",[t._v("在客户端，"),r("a",{attrs:{href:"https://docs.flutter.io/flutter/services/MethodChannel-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MethodChannel  API"),r("OutboundLink")],1),t._v(" 可以发送与方法调用相对应的消息。 在宿主平台上，"),r("code",[t._v("MethodChannel")]),t._v(" 在"),r("a",{attrs:{href:"https://docs.flutter.io/javadoc/io/flutter/plugin/common/MethodChannel.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android API"),r("OutboundLink")],1),t._v(" 和 "),r("a",{attrs:{href:"https://docs.flutter.io/objcdoc/Classes/FlutterMethodChannel.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("FlutterMethodChannel iOS API"),r("OutboundLink")],1),t._v("可以接收方法调用并返回结果。这些类可以帮助我们用很少的代码就能开发平台插件。")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("注意")]),t._v(": 如果需要，方法调用(消息传递)可以是反向的，即宿主作为客户端调用Dart中实现的API。 "),r("a",{attrs:{href:"https://pub.dartlang.org/packages/quick_actions",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("quick_actions")]),r("OutboundLink")],1),t._v("插件就是一个具体的例子。")])]),t._v(" "),r("h3",{attrs:{id:"平台通道数据类型支持"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#平台通道数据类型支持"}},[t._v("#")]),t._v(" 平台通道数据类型支持")]),t._v(" "),r("p",[t._v("平台通道使用标准消息编/解码器对消息进行编解码，它可以高效的对消息进行二进制序列化与反序列化。由于Dart与原生平台之间数据类型有所差异，下面我们列出数据类型之间的映射关系。")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Dart")]),t._v(" "),r("th",[t._v("Android")]),t._v(" "),r("th",[t._v("iOS")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("null")]),t._v(" "),r("td",[t._v("null")]),t._v(" "),r("td",[t._v("nil (NSNull when nested)")])]),t._v(" "),r("tr",[r("td",[t._v("bool")]),t._v(" "),r("td",[t._v("java.lang.Boolean")]),t._v(" "),r("td",[t._v("NSNumber numberWithBool:")])]),t._v(" "),r("tr",[r("td",[t._v("int")]),t._v(" "),r("td",[t._v("java.lang.Integer")]),t._v(" "),r("td",[t._v("NSNumber numberWithInt:")])]),t._v(" "),r("tr",[r("td",[t._v("int, 如果不足32位")]),t._v(" "),r("td",[t._v("java.lang.Long")]),t._v(" "),r("td",[t._v("NSNumber numberWithLong:")])]),t._v(" "),r("tr",[r("td",[t._v("int, 如果不足64位")]),t._v(" "),r("td",[t._v("java.math.BigInteger")]),t._v(" "),r("td",[t._v("FlutterStandardBigInteger")])]),t._v(" "),r("tr",[r("td",[t._v("double")]),t._v(" "),r("td",[t._v("java.lang.Double")]),t._v(" "),r("td",[t._v("NSNumber numberWithDouble:")])]),t._v(" "),r("tr",[r("td",[t._v("String")]),t._v(" "),r("td",[t._v("java.lang.String")]),t._v(" "),r("td",[t._v("NSString")])]),t._v(" "),r("tr",[r("td",[t._v("Uint8List")]),t._v(" "),r("td",[t._v("byte[]")]),t._v(" "),r("td",[t._v("FlutterStandardTypedData typedDataWithBytes:")])]),t._v(" "),r("tr",[r("td",[t._v("Int32List")]),t._v(" "),r("td",[t._v("int[]")]),t._v(" "),r("td",[t._v("FlutterStandardTypedData typedDataWithInt32:")])]),t._v(" "),r("tr",[r("td",[t._v("Int64List")]),t._v(" "),r("td",[t._v("long[]")]),t._v(" "),r("td",[t._v("FlutterStandardTypedData typedDataWithInt64:")])]),t._v(" "),r("tr",[r("td",[t._v("Float64List")]),t._v(" "),r("td",[t._v("double[]")]),t._v(" "),r("td",[t._v("FlutterStandardTypedData typedDataWithFloat64:")])]),t._v(" "),r("tr",[r("td",[t._v("List")]),t._v(" "),r("td",[t._v("java.util.ArrayList")]),t._v(" "),r("td",[t._v("NSArray")])]),t._v(" "),r("tr",[r("td",[t._v("Map")]),t._v(" "),r("td",[t._v("java.util.HashMap")]),t._v(" "),r("td",[t._v("NSDictionary")])])])]),t._v(" "),r("p",[t._v("当在发送和接收值时，这些值在消息中的序列化和反序列化会自动进行。")]),t._v(" "),r("h3",{attrs:{id:"自定义编解码器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#自定义编解码器"}},[t._v("#")]),t._v(" 自定义编解码器")]),t._v(" "),r("p",[t._v("除了上面提到的"),r("code",[t._v("MethodChannel")]),t._v("，还可以使用"),r("a",{attrs:{href:"https://docs.flutter.io/flutter/services/BasicMessageChannel-class.html",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("BasicMessageChannel")]),r("OutboundLink")],1),t._v("，它支持使用自定义消息编解码器进行基本的异步消息传递。 此外，可以使用专门的"),r("a",{attrs:{href:"https://docs.flutter.io/flutter/services/BinaryCodec-class.html",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("BinaryCodec")]),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://docs.flutter.io/flutter/services/StringCodec-class.html",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("StringCodec")]),r("OutboundLink")],1),t._v("和 "),r("a",{attrs:{href:"https://docs.flutter.io/flutter/services/JSONMessageCodec-class.html",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("JSONMessageCodec")]),r("OutboundLink")],1),t._v("类，或创建自己的编解码器。")]),t._v(" "),r("h3",{attrs:{id:"如何获取平台信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何获取平台信息"}},[t._v("#")]),t._v(" 如何获取平台信息")]),t._v(" "),r("p",[t._v("Flutter 中提供了一个全局变量"),r("code",[t._v("defaultTargetPlatform")]),t._v("来获取当前应用的平台信息，"),r("code",[t._v("defaultTargetPlatform")]),t._v('定义在"platform.dart"中，它的类型是'),r("code",[t._v("TargetPlatform")]),t._v("，这是一个枚举类，定义如下：")]),t._v(" "),r("div",{staticClass:"language-dart line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-dart"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TargetPlatform")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  android"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  fuchsia"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  iOS"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br")])]),r("p",[t._v("可以看到目前Flutter只支持这三个平台。我们可以通过如下代码判断平台：")]),t._v(" "),r("div",{staticClass:"language-dart line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-dart"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("defaultTargetPlatform"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TargetPlatform")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("android"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是安卓系统，do something")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br")])]),r("p",[t._v("由于不同平台有它们各自的交互规范，Flutter Material库中的一些组件都针对相应的平台做了一些适配，比如路由组件"),r("code",[t._v("MaterialPageRoute")]),t._v("，它在android和ios中会应用各自平台规范的切换动画。那如果我们想让我们的APP在所有平台都表现一致，比如希望在所有平台路由切换动画都按照ios平台一致的左右滑动切换风格该怎么做？Flutter中提供了一种覆盖默认平台的机制，我们可以通过显式指定"),r("code",[t._v("debugDefaultTargetPlatformOverride")]),t._v("全局变量的值来指定应用平台。比如：")]),t._v(" "),r("div",{staticClass:"language-dart line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-dart"}},[r("code",[t._v("debugDefaultTargetPlatformOverride"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TargetPlatform")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iOS"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("defaultTargetPlatform"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 会输出TargetPlatform.iOS")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br")])]),r("p",[t._v("上面代码即在Android中运行后，Flutter APP就会认为是当前系统是iOS，Material组件库中所有组件交互方式都会和iOS平台对齐，"),r("code",[t._v("defaultTargetPlatform")]),t._v("的值也会变为"),r("code",[t._v("TargetPlatform.iOS")]),t._v("。")])])}),[],!1,null,null,null);a.default=n.exports}}]);