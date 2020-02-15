import { SafeJsonPlugin, SafeJson } from './interfaces';
export declare class SafeJsonType {
    private static plugins;
    /**
     *使用插件，只要初始化一次即可，插件不会去重，所以请勿重复初始化
     *
     * @author CaoMeiYouRen
     * @date 2020-02-13
     * @static
     * @param {SafeJsonPlugin<SafeJson, any>} plugin
     */
    static use(plugin: SafeJsonPlugin<SafeJson, any>): void;
    /**
     *转换SafeJson到普通对象
     *
     * @author CaoMeiYouRen
     * @date 2019-12-25
     * @static
     * @param {*} obj
     * @returns
     */
    static toObject(obj: any): any;
    /**
     *转换普通对象到SafeJson
     *
     * @author CaoMeiYouRen
     * @date 2019-12-24
     * @static
     * @param {*} obj
     * @returns
     */
    static toSafeJson(obj: any): any;
    /**
     *解析json对象
     *
     * @author CaoMeiYouRen
     * @date 2019-12-24
     * @param {string} str
     * @returns
     */
    static parse(str: string): any;
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
    static stringify(obj: any, replacer?: (key: string, value: any) => any, space?: string | number): string;
}
export * from './interfaces';
export * from './plugins';
