"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fast_safe_stringify_1 = require("fast-safe-stringify");
const parseJson = require("parse-json");
const colors = require("colors");
const plugins_1 = require("./plugins");
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
        let keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
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
        let keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            if (key === '__type') {
                console.warn(colors.yellow('(safe-json-type) [warning] "__type" is a reserved field. Don\'t use it unless necessary'));
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
            return this.toObject(parseJson(str));
        }
        catch (error) {
            error.fileName = __filename;
            throw error;
        }
    }
    static stringify(obj, replacer, space) {
        return fast_safe_stringify_1.default(this.toSafeJson(obj), replacer, space);
    }
}
exports.SafeJsonType = SafeJsonType;
SafeJsonType.plugins = [];
SafeJsonType.use(new plugins_1.SafeJsonPluginDate());
SafeJsonType.use(new plugins_1.SafeJsonPluginBuffer());
