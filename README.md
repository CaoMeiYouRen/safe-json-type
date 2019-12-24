# safe-json-type

安全的json类型

将json中不支持的Date和Bytes用安全的方法序列化，并在反序列化后找回对应的类型（而不是字符串）

【本项目还在开发中，请勿使用】

json字段支持以下类型：

-   `String` 字符串
-   `Number` 数字
-   `Boolean` 布尔类型
-   `Array` 数组
-   `Object` 对象
-   `Date` 日期
-   `Bytes` base64 编码的二进制数据
-   `Null` 空值

本项目参考了[https://leancloud.cn](https://leancloud.cn)的序列化和反序列化方案，在此表示感谢