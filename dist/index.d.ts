export declare class SafeJsonType {
    static parse(str: string): any;
    static toObject(obj: any): any;
    static stringify(obj: any, replacer?: (key: string, value: any) => any, space?: string | number): string;
    static toSafeJson(obj: any): any;
}
