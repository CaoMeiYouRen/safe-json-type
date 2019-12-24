import { SafeJsonType } from '../src'
import 'should'
describe('SafeJsonType', () => {
    it('序列化对象', () => {
        let obj = {
            num: 1024,
            str: 'hello world 你好世界',
            bool: true,
            // big: BigInt(999999999999999999999999999999),
            undef: undefined,
            nil: null,
            Num: new Number(-2048),
            Str: new String('ok'),
            Bool: new Boolean(false),
            date: new Date('2019-01-01T00:00:00Z'),
            buff: new Buffer('123456'),
            arr: [
                new Date('2019-01-01T00:00:00Z'),
            ],
            obj: {
                num: 1024,
                str: 'hello world 你好世界',
                bool: true,
                date: new Date('2019-01-01T00:00:00Z'),
                buff: new Buffer('123456'),
            }
        }
        console.log(SafeJsonType.stringify(obj));
        (SafeJsonType.stringify(obj)).should.equal('string')
        /**
         * {
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
    "iso": "MTIzNDU2"
  },
  "arr": [
    {
      "__type": "Date",
      "iso": "2019-01-01T00:00:00.000Z"
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
      "iso": "MTIzNDU2"
    }
  }
}
    */ })
    it('反序列化对象', () => {
        let str = '{"num":1024,"str":"hello world 你好世界","bool":true,"nil":null,"Num":-2048,"Str":"ok","Bool":false,"date":{"__type":"Date","iso":"2019-01-01T00:00:00.000Z"},"buff":{"__type":"Bytes","iso":"MTIzNDU2"},"arr":[{"__type":"Date","iso":"2019-01-01T00:00:00.000Z"}],"obj":{"num":1024,"str":"hello world 你好世界","bool":true,"date":{"__type":"Date","iso":"2019-01-01T00:00:00.000Z"},"buff":{"__type":"Bytes","iso":"MTIzNDU2"}}}'
        //console.log(SafeJsonType.parse(str));
    })
})