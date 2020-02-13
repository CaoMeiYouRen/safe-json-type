/// <reference types="node" />
import { SafeJsonPlugin, SafeJson } from '../interfaces';
export declare class SafeJsonBuffer implements SafeJson {
    __type: 'Bytes';
    base64: string;
}
export declare class SafeJsonPluginBuffer implements SafeJsonPlugin<SafeJsonBuffer, Buffer> {
    readonly type = "Bytes";
    condition(obj: any): boolean;
    serialize(obj: Buffer): SafeJsonBuffer;
    deserialize(obj: SafeJsonBuffer): Buffer | SafeJsonBuffer;
}
