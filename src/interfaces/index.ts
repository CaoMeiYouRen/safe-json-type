export interface SafeJson {
    __type: string
    [key: string]: any;
}
export interface SafeJsonPlugin<T extends SafeJson, U> {
    /**
     *类名称，请注意此处需初始化type值，建议写成 type = 'TestClass'
     *
     * @type {T['__type']}
     */
    readonly type: T['__type']
    /**
     *条件函数，用于判断是否调用该插件
     *
     * @author CaoMeiYouRen
     * @date 2020-02-13
     * @param {*} obj
     * @returns {boolean}
     */
    condition(obj: any): boolean
    /**
     * 序列化，用于转换该类对象到SafeJson对象
     *
     * @author CaoMeiYouRen
     * @date 2020-02-13
     * @param {U} obj
     * @returns {T}
     */
    serialize(obj: U): T
    /**
     *反序列化，用于转换SafeJson对象到该类对象
     *转换失败时请直接返回原对象
     * @author CaoMeiYouRen
     * @date 2020-02-13
     * @param {T} obj
     * @returns {U}
     */
    deserialize(obj: T): U | T
}