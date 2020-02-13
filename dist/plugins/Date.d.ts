import { SafeJsonPlugin, SafeJson } from '../interfaces';
export declare class SafeJsonDate implements SafeJson {
    __type: 'Date';
    iso: string;
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
export declare class SafeJsonPluginDate implements SafeJsonPlugin<SafeJsonDate, Date> {
    readonly type = "Date";
    condition(obj: any): boolean;
    serialize(obj: Date): SafeJsonDate;
    deserialize(obj: SafeJsonDate): Date | SafeJsonDate;
}
