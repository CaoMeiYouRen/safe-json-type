import safeStringify from 'fast-safe-stringify'
import parseJson = require('parse-json')
export class SafeJsonType {
    /**
     *解析json对象
     *
     * @author CaoMeiYouRen
     * @date 2019-12-24
     * @param {string} str
     * @returns
     */
    static parse(str: string) {
        if (typeof str !== 'string') {
            throw new Error('Argument must be a string') //参数必须为字符串
        }
        try {
            let obj = parseJson(str)
            return this.__parse(obj)
        } catch (error) {
            error.fileName = __filename
            throw error
        }
    }
    private static __parse(obj: any) {
        switch (typeof obj) {//基本数据类型直接返回本身
            case 'string':
            case 'number':
            case 'boolean':
            case 'undefined':
            case 'bigint':
                return obj
        }
        if (obj === null) {//null也返回本身
            return obj
        }
        if (obj.__type) {//obj存在__type属性，认为是safe-json（上面已经排除了null和undefined）
            switch (obj.__type) {
                case 'Date':
                    return new Date(obj.iso)
                case 'Bytes':
                    return new Buffer(obj.iso, 'base64')
            }
        }
        let keys = Object.keys(obj) //数组或对象
        for (let i = 0; i < keys.length; i++) {//遍历所有key
            let key = keys[i]
            let value = obj[key]
            obj[key] = this.__parse(value)//递归
        }
        return obj
    }
    /**
     *序列化json对象
     *
     * @author CaoMeiYouRen
     * @date 2019-12-24
     * @param {*} obj
     * @param {(key: string, value: any) => any} [replacer]
     * @param {(string | number)} [space]
     * @returns
     */
    static stringify(obj: any, replacer?: (key: string, value: any) => any, space?: string | number) {
        return safeStringify(this.__stringify(obj), replacer, space)
    }
    private static __stringify(obj: any) {
        switch (typeof obj) {//基本数据类型直接返回本身
            case 'string':
            case 'number':
            case 'boolean':
            case 'undefined':
            case 'bigint':
                return obj
        }
        if (obj === null) {//null也返回本身
            return obj
        }
        //基本数据类型的封装类也返回本身
        if (obj instanceof String || obj instanceof Number || obj instanceof Boolean) {
            return obj
        }
        if (obj instanceof Date) {//序列化Date类型
            return {
                __type: 'Date',
                iso: obj.toISOString()
            }
        }
        if (obj instanceof Buffer) { //序列化Buffer类型
            return {
                __type: 'Bytes',
                iso: obj.toString('base64')
            }
        }
        let keys = Object.keys(obj) //数组或对象
        for (let i = 0; i < keys.length; i++) {//遍历所有key
            let key = keys[i]
            let value = obj[key]
            obj[key] = this.__stringify(value)//递归
        }
        return obj
    }
}
