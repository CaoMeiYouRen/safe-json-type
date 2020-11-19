import { SafeJsonPluginDate, SafeJsonPlugin, SafeJson } from 'safe-json-type-plugins/dist/browser'
export class SafeJsonType {
    private static plugins: SafeJsonPlugin<SafeJson, any>[] = []
    /**
     *使用插件，只要初始化一次即可，相同 type 的插件只会载入一个
     *
     * @author CaoMeiYouRen
     * @date 2020-02-13
     * @static
     * @param {SafeJsonPlugin<SafeJson, any>} plugin
     */
    static use(plugin: SafeJsonPlugin<SafeJson, any>) {
        if (this.plugins.find(e => e.type === plugin.type)) {
            return this
        }
        this.plugins.push(plugin)
        return this
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
        // const obj = { ...$obj }//复制一份
        if (typeof obj !== 'object' || obj === null) { // 类型不为object的或类型为null的都直接返回
            return obj
        }
        if (obj.__type) { // obj存在__type属性，认为是safe-json（上面已经排除了null和undefined）
            for (let i = 0; i < this.plugins.length; i++) {
                const plugin = this.plugins[i]
                if (plugin.type === obj.__type) { // 匹配到对应类，反序列化
                    return plugin.deserialize(obj)
                }
            }
        }
        const keys = Object.keys(obj) // 数组或对象
        for (let i = 0; i < keys.length; i++) { // 遍历所有key
            const key = keys[i]
            obj[key] = this.toObject(obj[key])// 递归
        }
        return obj
    }

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
        // const obj = { ...$obj }//复制一份
        if (typeof obj !== 'object' || obj === null) { // 类型不为object的或类型为null的都直接返回
            return obj
        }
        // 基本数据类型的封装类也返回本身
        if (obj instanceof String || obj instanceof Number || obj instanceof Boolean) {
            return obj
        }
        for (let i = 0; i < this.plugins.length; i++) {
            const plugin = this.plugins[i]
            if (plugin.condition(obj)) { // 匹配到对应类，序列化
                return plugin.serialize(obj)
            }
        }
        const keys = Object.keys(obj) // 数组或对象
        for (let i = 0; i < keys.length; i++) { // 遍历所有key
            const key = keys[i]
            if (key === '__type') { // 对使用了保留字段的进行提示
                console.warn('(safe-json-type) [warning] "__type" is a reserved field. Don\'t use it unless necessary')
            }
            obj[key] = this.toSafeJson(obj[key])// 递归
        }
        return obj
    }
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
            throw new Error('Argument must be a string') // 参数必须为字符串
        }
        try {
            return this.toObject(JSON.parse(str))
        } catch (error) {
            error.fileName = __filename
            throw error
        }
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
        return JSON.stringify(this.toSafeJson(obj), replacer, space)
    }
}

SafeJsonType.use(new SafeJsonPluginDate())