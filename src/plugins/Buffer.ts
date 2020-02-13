import { SafeJsonPlugin, SafeJson } from '../interfaces'
import { Buffer } from 'buffer'

export class SafeJsonBuffer implements SafeJson {
    __type: 'Bytes'
    base64: string
}
/**
 * Buffer类 转换插件
 *
 * @author CaoMeiYouRen
 * @date 2020-02-13
 * @export
 * @class SafeJsonPluginBuffer
 * @implements {SafeJsonPlugin<Buffer>}
 */
export class SafeJsonPluginBuffer implements SafeJsonPlugin<SafeJsonBuffer, Buffer> {
    readonly type = 'Bytes'
    condition(obj: any): boolean {
        return obj instanceof Buffer
    }
    serialize(obj: Buffer): SafeJsonBuffer {
        return {
            __type: 'Bytes',
            base64: obj.toString('base64')
        }
    }
    deserialize(obj: SafeJsonBuffer): Buffer | SafeJsonBuffer {
        if (obj.base64) {
            return Buffer.from(obj.base64, 'base64')
        }
        return obj
    }
}