import { SafeJsonPlugin, SafeJson } from './interfaces';
export declare class SafeJsonType {
    private static plugins;
    static use(plugin: SafeJsonPlugin<SafeJson, any>): void;
    static toObject(obj: any): any;
    static toSafeJson(obj: any): any;
    static parse(str: string): any;
    static stringify(obj: any, replacer?: (key: string, value: any) => any, space?: string | number): string;
}
