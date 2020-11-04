"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SafeJsonType = void 0;
const browser_1 = require("safe-json-type-plugins/dist/browser");
class SafeJsonType {
    static use(plugin) {
        this.plugins.push(plugin);
    }
    static toObject(obj) {
        if (typeof obj !== 'object' || obj === null) {
            return obj;
        }
        if (obj.__type) {
            for (let i = 0; i < this.plugins.length; i++) {
                const plugin = this.plugins[i];
                if (plugin.type === obj.__type) {
                    return plugin.deserialize(obj);
                }
            }
        }
        const keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            obj[key] = this.toObject(obj[key]);
        }
        return obj;
    }
    static toSafeJson(obj) {
        if (typeof obj !== 'object' || obj === null) {
            return obj;
        }
        if (obj instanceof String || obj instanceof Number || obj instanceof Boolean) {
            return obj;
        }
        for (let i = 0; i < this.plugins.length; i++) {
            const plugin = this.plugins[i];
            if (plugin.condition(obj)) {
                return plugin.serialize(obj);
            }
        }
        const keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if (key === '__type') {
                console.warn('(safe-json-type) [warning] "__type" is a reserved field. Don\'t use it unless necessary');
            }
            obj[key] = this.toSafeJson(obj[key]);
        }
        return obj;
    }
    static parse(str) {
        if (typeof str !== 'string') {
            throw new Error('Argument must be a string');
        }
        try {
            return this.toObject(JSON.parse(str));
        }
        catch (error) {
            error.fileName = __filename;
            throw error;
        }
    }
    static stringify(obj, replacer, space) {
        return JSON.stringify(this.toSafeJson(obj), replacer, space);
    }
}
exports.SafeJsonType = SafeJsonType;
SafeJsonType.plugins = [];
SafeJsonType.use(new browser_1.SafeJsonPluginDate());
