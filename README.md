# safe-json-type

<p>
  <a href="https://www.npmjs.com/package/safe-json-type" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/safe-json-type.svg">
  </a>
  <img src="https://img.shields.io/badge/node-%3E%3D12-blue.svg" >
  <a href="https://github.com/CaoMeiYouRen/safe-json-type/actions?query=workflow%3ARelease" target="_blank">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/CaoMeiYouRen/safe-json-type/release.yml?branch=master">
  </a>
  <a href="https://app.codecov.io/gh/CaoMeiYouRen/safe-json-type" target="_blank">
     <img alt="Codecov" src="https://img.shields.io/codecov/c/github/CaoMeiYouRen/safe-json-type">
  </a>
  <a href="https://github.com/CaoMeiYouRen/safe-json-type#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/CaoMeiYouRen/safe-json-type/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/CaoMeiYouRen/safe-json-type/blob/master/License" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/CaoMeiYouRen/safe-json-type?color=yellow" />
  </a>
</p>
>
> 安全的json类型
>


## 🏠 主页

[https://github.com/CaoMeiYouRen/safe-json-type#readme](https://github.com/CaoMeiYouRen/safe-json-type#readme)

将 json 中不支持的 Date 和 Bytes(Buffer)用安全的方法序列化，并在反序列化后找回对应的类型（而不是字符串）

json 字段支持以下类型：

-   `String` 字符串
-   `Number` 数字
-   `Boolean` 布尔类型
-   `Array` 数组
-   `Object` 对象
-   `Date` 日期
-   `Bytes` (Buffer)base64 编码的二进制数据【浏览器端默认不支持，但在模块化构建中支持】
-   `Null` 空值

## 📦 依赖要求


- node >=16

## 🚀 安装

```bash
npm i safe-json-type -S
```

## 👨‍💻 使用

序列化为字符串： **SafeJsonType.stringify(obj)**

```typescript
 let obj = {
     num: 1024,
     str: 'hello world 你好世界',
     bool: true,
     undef: undefined,
     nil: null,
     Num: new Number(-2048),
     Str: new String('ok'),
     Bool: new Boolean(false),
     date: new Date('2019-01-01T00:00:00Z'),
     buff: Buffer.from('123456'),
     arr: [
         new Date('2019-01-01T00:00:00Z'),
         Buffer.from('123456'),
     ],
     obj: {
         num: 1024,
         str: 'hello world 你好世界',
         bool: true,
         date: new Date('2019-01-01T00:00:00Z'),
         buff: Buffer.from('123456'),
     }
 }
 let str = SafeJsonType.stringify(obj)
 console.log(str);
 /*
{
    "num": 1024,
    "str": "hello world 你好世界",
    "bool": true,
    "nil": null,
    "Num": -2048,
    "Str": "ok",
    "Bool": false,
    "date": {
        "__type": "Date",
        "iso": "2019-01-01T00:00:00.000Z"
    },
    "buff": {
        "__type": "Bytes",
        "base64": "MTIzNDU2"
    },
    "arr": [
        {
            "__type": "Date",
            "iso": "2019-01-01T00:00:00.000Z"
        },
        {
            "__type": "Bytes",
            "base64": "MTIzNDU2"
        }
    ],
    "obj": {
        "num": 1024,
        "str": "hello world 你好世界",
        "bool": true,
        "date": {
            "__type": "Date",
            "iso": "2019-01-01T00:00:00.000Z"
        },
        "buff": {
            "__type": "Bytes",
            "base64": "MTIzNDU2"
        }
    }
}
 
 */
```

反序列化为对象**SafeJsonType.parse(str)**

```typescript
let str = '{"num":1024,"str":"hello world 你好世界","bool":true,"nil":null,"Num":-2048,"Str":"ok","Bool":false,"date":{"__type":"Date","iso":"2019-01-01T00:00:00.000Z"},"buff":{"__type":"Bytes","base64":"MTIzNDU2"},"arr":[{"__type":"Date","iso":"2019-01-01T00:00:00.000Z"},{"__type":"Bytes","base64":"MTIzNDU2"}],"obj":{"num":1024,"str":"hello world 你好世界","bool":true,"date":{"__type":"Date","iso":"2019-01-01T00:00:00.000Z"},"buff":{"__type":"Bytes","base64":"MTIzNDU2"}}}';
let obj = SafeJsonType.parse(str);
console.log(obj);
/*
{ num: 1024,
  str: 'hello world 你好世界',
  bool: true,
  nil: null,
  Num: -2048,
  Str: 'ok',
  Bool: false,
  date: 2019-01-01T00:00:00.000Z,
  buff: <Buffer 31 32 33 34 35 36>,
  arr: [ 2019-01-01T00:00:00.000Z, <Buffer 31 32 33 34 35 36> ],
  obj:
   { num: 1024,
     str: 'hello world 你好世界',
     bool: true,
     date: 2019-01-01T00:00:00.000Z,
     buff: <Buffer 31 32 33 34 35 36> 
   }
 }
*/
```

## 插件化

目前自带依赖的插件[safe-json-type-plugins](https://github.com/CaoMeiYouRen/safe-json-type-plugins)

如果后续有其他人想要开发新的插件，可以参考一下。命名上建议以 safe-json-type-plugin-xxxx 的格式，其中 xxxx 就是指定的格式。

新版本中支持通过插件来对 Date、Buffer 之外的数据类型进行序列化和反序列化

例如 Date 的插件如下，只需要实现 SafeJsonPlugin 接口即可，最后再调用 ```SafeJsonType.use(new SafeJsonPluginDate())```即可

```typescript
import { SafeJsonPlugin, SafeJson } from 'safe-json-type-plugins'

export class SafeJsonDate implements SafeJson {
    __type: 'Date'
    iso: string
}
/**
 * Date类 转换插件
 *
 * @author CaoMeiYouRen
 * @date 2020-02-13
 * @export
 * @class SafeJsonPluginDate
 * @implements {SafeJsonPlugin<Date>}
 */
export class SafeJsonPluginDate implements SafeJsonPlugin<SafeJsonDate, Date> {
    readonly type = 'Date'
    condition(obj: any): boolean {
        return obj instanceof Date
    }
    serialize(obj: Date): SafeJsonDate {
        return {
            __type: 'Date',
            iso: obj.toISOString()
        }
    }
    deserialize(obj: SafeJsonDate): Date | SafeJsonDate {
        if (obj.iso) {
            return new Date(obj.iso)
        }
        return obj
    }
}
```

## 注意事项

1.  由于在序列化时使用了`__type`作为关键字来标记类型，因此不建议在对象中使用`__type`字段。如果有使用将会有警告【但不会报错】。

```typescript
let obj = {
    __type: 'MyType',
    value: 'my_value'
}
let str = SafeJsonType.stringify(obj);
//(safe-json-type) [warning] "__type" is a reserved field. Do not use it unless necessary
```

2.  本项目没有使用 node 专属模块，所以也可以在浏览器运行。压缩后的文件见 dist/browser.min.js。出于包大小考虑移除了所有非原生依赖，因此当直接通过 script 引用 browser.min.js 时不支持 buffer 对象，如有需要可在模块化构建中使用。

    直接通过引用 browser.min.js 时使用```SafeJsonType.SafeJsonType.stringify(obj)```来调用【前一个 SafeJsonType 是命名空间，后一个是类名，日后可能会在同一个命名空间下导出多个类】
    
    如果是现代浏览器也可以使用 browser.esm.min.js 版本，更为友好

## 🛠️ 开发

```sh
npm run dev
```

## 🔧 编译

```sh
npm run build
```

## 🔍 Lint

```sh
npm run lint
```

## 💾 Commit

```sh
npm run commit
```

## 👤 作者


**CaoMeiYouRen**

* Website: [https://blog.cmyr.ltd/](https://blog.cmyr.ltd/)

* GitHub: [@CaoMeiYouRen](https://github.com/CaoMeiYouRen)


## 🤝 贡献

欢迎 贡献、提问或提出新功能！<br />如有问题请查看 [issues page](https://github.com/CaoMeiYouRen/safe-json-type/issues). <br/>贡献或提出新功能可以查看[contributing guide](https://github.com/CaoMeiYouRen/safe-json-type/blob/master/CONTRIBUTING.md).

## 💰 支持

如果觉得这个项目有用的话请给一颗⭐️，非常感谢

## 后记

本项目参考了[https://leancloud.cn](https://leancloud.cn)的序列化和反序列化方案，在此表示感谢。

关于本项目的开发原因。因为在日常开发中经常会遇到 Date 格式的数据传输，而 json 中又不可能直接传输 Date，因此会被格式化成字符串。无论前端还是后端，拿到这个数据都需要对 Date 的字段再做一次转换才行。而本项目则是省去了这一步。

在开写之前，因为已经有 leancloud 这样的项目在前了，所以估计 npm 上也有类似的包，但暂时没找到，就干脆自己写了。

另外，也是搜索过其他关于 json 传输相关的包，例如 serialize-javascript。但这玩意儿有个问题，那就是序列化出来的东西都不符合 json 规范了，若后端采用其他语言编写，例如 java，那么对这个数据处理显然是很麻烦的。而本人这个包，序列化后依旧符合 json 规范，后端采用其他语言编写也可以用同样的方法解析。

对于其他数据类型，例如 Map、Set、RegExp 也在考虑中，不过必要性没那么大，以后有空会考虑在之后的版本中加入支持。【目前建议通过编写插件的方式来实现】

## 📝 License

Copyright © 2024 [CaoMeiYouRen](https://github.com/CaoMeiYouRen).<br />
This project is [MIT](https://github.com/CaoMeiYouRen/safe-json-type/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [cmyr-template-cli](https://github.com/CaoMeiYouRen/cmyr-template-cli)_