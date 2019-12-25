import safeStringify from 'fast-safe-stringify'
import parseJson = require('parse-json')
import buffer = require('buffer')
const Buffer = buffer.Buffer
import colors = require('colors')
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
            return this.toObject(parseJson(str))
        } catch (error) {
            error.fileName = __filename
            throw error
        }
    }
    /**
     *转换SafeJson到普通对象
     *
     * @author CaoMeiYouRen
     * @date 2019-12-25
     * @static
     * @param {*} obj
     * @returns
     */
    static toObject(obj: any) {
        if (typeof obj !== 'object' || obj === null) {//类型不为object的或类型为null的都直接返回
            return obj
        }
        if (obj.__type && obj.__value) {
            switch (obj.__type) {//obj存在__type属性，认为是safe-json（上面已经排除了null和undefined）
                case 'Date':
                    return new Date(obj.__value)
                case 'Bytes':
                    return Buffer.from(obj.__value, 'base64')
            }
        }
        let keys = Object.keys(obj) //数组或对象
        for (let i = 0; i < keys.length; i++) {//遍历所有key
            let key = keys[i]
            obj[key] = this.toObject(obj[key])//递归
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
        return safeStringify(this.toSafeJson(obj), replacer, space)
    }

    /**
 * , plugin?: (condition: boolean, obj: any) => {
        __type: string,
        __value: any
    }
 *
 *
*/
    /**
     *转换普通对象到SafeJson
     *
     * @author CaoMeiYouRen
     * @date 2019-12-24
     * @static
     * @param {*} obj
     * @returns
     */
    static toSafeJson(obj: any) {
        if (typeof obj !== 'object' || obj === null) {//类型不为object的或类型为null的都直接返回
            return obj
        }
        //基本数据类型的封装类也返回本身
        if (obj instanceof String || obj instanceof Number || obj instanceof Boolean) {
            return obj
        }
        if (obj instanceof Date) {//序列化Date类型
            return {
                __type: 'Date',
                __value: obj.toISOString()
            }
        }
        if (obj instanceof Buffer) { //序列化Buffer类型
            return {
                __type: 'Bytes',
                __value: obj.toString('base64')
            }
        }
        let keys = Object.keys(obj) //数组或对象
        for (let i = 0; i < keys.length; i++) {//遍历所有key
            let key = keys[i]
            if (key === '__type') {//对使用了保留字段的进行提示
                console.warn(colors.yellow('(safe-json-type) [warning] "__type" is a reserved field. Do not use it unless necessary'))
            }
            obj[key] = this.toSafeJson(obj[key])//递归
        }
        return obj
    }
}
