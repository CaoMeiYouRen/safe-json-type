"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SafeJsonDate {
}
exports.SafeJsonDate = SafeJsonDate;
class SafeJsonPluginDate {
    constructor() {
        this.type = 'Date';
    }
    condition(obj) {
        return obj instanceof Date;
    }
    serialize(obj) {
        return {
            __type: 'Date',
            iso: obj.toISOString()
        };
    }
    deserialize(obj) {
        if (obj.iso) {
            return new Date(obj.iso);
        }
        return obj;
    }
}
exports.SafeJsonPluginDate = SafeJsonPluginDate;
