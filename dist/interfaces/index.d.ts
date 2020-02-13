export interface SafeJson {
    __type: string;
    [key: string]: any;
}
export interface SafeJsonPlugin<T extends SafeJson, U> {
    readonly type: T['__type'];
    condition(obj: any): boolean;
    serialize(obj: U): T;
    deserialize(obj: T): U | T;
}
