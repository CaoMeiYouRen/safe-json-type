import { SafeJsonPlugin, SafeJson } from '../interfaces';
export declare class SafeJsonDate implements SafeJson {
    __type: 'Date';
    iso: string;
}
export declare class SafeJsonPluginDate implements SafeJsonPlugin<SafeJsonDate, Date> {
    readonly type = "Date";
    condition(obj: any): boolean;
    serialize(obj: Date): SafeJsonDate;
    deserialize(obj: SafeJsonDate): Date | SafeJsonDate;
}
