import { SafeJsonPlugin, SafeJson } from '../interfaces'

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