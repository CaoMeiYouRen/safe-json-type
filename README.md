# safe-json-type

安全的json类型

将json中不支持的Date和Bytes(Buffer)用安全的方法序列化，并在反序列化后找回对应的类型（而不是字符串）

json字段支持以下类型：

-   `String` 字符串
-   `Number` 数字
-   `Boolean` 布尔类型
-   `Array` 数组
-   `Object` 对象
-   `Date` 日期
-   `Bytes` (Buffer)base64 编码的二进制数据
-   `Null` 空值

## 安装

```bash
npm i safe-json-type -S
```

## 使用

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
    "__value": "2019-01-01T00:00:00.000Z"
  },
  "buff": {
    "__type": "Bytes",
    "__value": "MTIzNDU2"
  },
  "arr": [
    {
      "__type": "Date",
      "__value": "2019-01-01T00:00:00.000Z"
    },
    {
      "__type": "Bytes",
      "__value": "MTIzNDU2"
    }
  ],
  "obj": {
    "num": 1024,
    "str": "hello world 你好世界",
    "bool": true,
    "date": {
      "__type": "Date",
      "__value": "2019-01-01T00:00:00.000Z"
    },
    "buff": {
      "__type": "Bytes",
      "__value": "MTIzNDU2"
    }
  }
}
 
 */
```

反序列化为对象**SafeJsonType.parse(str)**

```typescript
let str = '{"num":1024,"str":"hello world 你好世界","bool":true,"nil":null,"Num":-2048,"Str":"ok","Bool":false,"date":{"__type":"Date","__value":"2019-01-01T00:00:00.000Z"},"buff":{"__type":"Bytes","__value":"MTIzNDU2"},"arr":[{"__type":"Date","__value":"2019-01-01T00:00:00.000Z"},{"__type":"Bytes","__value":"MTIzNDU2"}],"obj":{"num":1024,"str":"hello world 你好世界","bool":true,"date":{"__type":"Date","__value":"2019-01-01T00:00:00.000Z"},"buff":{"__type":"Bytes","__value":"MTIzNDU2"}}}';
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



## 后记

本项目参考了[https://leancloud.cn](https://leancloud.cn)的序列化和反序列化方案，在此表示感谢。

关于本项目的开发原因。因为在日常开发中经常会遇到Date格式的数据传输，而json中又不可能直接传输Date，因此会被格式化成字符串。无论前端还是后端，拿到这个数据都需要对Date的字段再做一次转换才行。而本项目则是省去了这一步。

在开写之前，因为已经有leancloud这样的项目在前了，所以估计npm上也有类似的包，但暂时没找到，就干脆自己写了。

另外，也是搜索过其他关于json传输相关的包，例如serialize-javascript。但这玩意儿有个问题，那就是序列化出来的东西都不符合json规范了，若后端采用其他语言编写，例如java，那么对这个数据处理显然是很麻烦的。而本人这个包，序列化后依旧符合json规范，后端采用其他语言编写也可以用同样的方法解析。

对于其他数据类型，例如Map、Set、RegExp也在考虑中，不过必要性没那么大，以后有空会考虑在之后的版本中加入支持。