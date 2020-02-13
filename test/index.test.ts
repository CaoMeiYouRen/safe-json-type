import { SafeJsonType } from '../src'
import 'should'
describe('SafeJsonType', () => {
    it('序列化对象', () => {
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
        // console.log(str);
        let str2 = '{"num":1024,"str":"hello world 你好世界","bool":true,"nil":null,"Num":-2048,"Str":"ok","Bool":false,"date":{"__type":"Date","iso":"2019-01-01T00:00:00.000Z"},"buff":{"__type":"Bytes","base64":"MTIzNDU2"},"arr":[{"__type":"Date","iso":"2019-01-01T00:00:00.000Z"},{"__type":"Bytes","base64":"MTIzNDU2"}],"obj":{"num":1024,"str":"hello world 你好世界","bool":true,"date":{"__type":"Date","iso":"2019-01-01T00:00:00.000Z"},"buff":{"__type":"Bytes","base64":"MTIzNDU2"}}}';
        (typeof str2).should.equal('string');
        str2.should.equal(str)
    })
    it('反序列化对象', () => {
        let str = '{"num":1024,"str":"hello world 你好世界","bool":true,"nil":null,"Num":-2048,"Str":"ok","Bool":false,"date":{"__type":"Date","iso":"2019-01-01T00:00:00.000Z"},"buff":{"__type":"Bytes","base64":"MTIzNDU2"},"arr":[{"__type":"Date","iso":"2019-01-01T00:00:00.000Z"},{"__type":"Bytes","base64":"MTIzNDU2"}],"obj":{"num":1024,"str":"hello world 你好世界","bool":true,"date":{"__type":"Date","iso":"2019-01-01T00:00:00.000Z"},"buff":{"__type":"Bytes","base64":"MTIzNDU2"}}}';
        let obj = SafeJsonType.parse(str);
        // console.log(obj.date);
        (obj.date instanceof Date).should.equal(true);
        (obj.buff instanceof Buffer).should.equal(true);
        (obj.obj.date instanceof Date).should.equal(true);
        (obj.obj.buff instanceof Buffer).should.equal(true);
        //console.log(SafeJsonType.parse(str));
    })
    it('测试__type保留字段', () => {
        let obj = {
            __type: 'MyType',
            value: 'my_value'
        }
        let str = SafeJsonType.stringify(obj);
        (typeof str).should.equal('string');
        //str.should.equal('')
        let obj2 = SafeJsonType.parse(str);
        (typeof obj2.__type).should.equal('string');
        (typeof obj2.value).should.equal('string');
    })
    it('测试缺失__value字段', () => {
        let obj = {
            __type: 'Date',
        }
        let str = SafeJsonType.stringify(obj);
        (typeof str).should.equal('string');
        let obj2 = SafeJsonType.parse(str);
        (typeof obj2.__type).should.equal('string');
    })
})
