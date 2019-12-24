"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fast_safe_stringify_1 = require("fast-safe-stringify");
const parseJson = require("parse-json");
const buffer = require("buffer");
const Buffer = buffer.Buffer;
const colors = require("colors");
class SafeJsonType {
    static parse(str) {
        if (typeof str !== 'string') {
            throw new Error('Argument must be a string');
        }
        try {
            let obj = parseJson(str);
            return this.__parse(obj);
        }
        catch (error) {
            error.fileName = __filename;
            throw error;
        }
    }
    static __parse(obj) {
        if (typeof obj !== 'object' || obj === null) {
            return obj;
        }
        switch (obj.__type) {
            case 'Date':
                return new Date(obj.__value);
            case 'Bytes':
                return Buffer.from(obj.__value, 'base64');
        }
        let keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            let value = obj[key];
            obj[key] = this.__parse(value);
        }
        return obj;
    }
    static stringify(obj, replacer, space) {
        return fast_safe_stringify_1.default(this.__stringify(obj), replacer, space);
    }
    static __stringify(obj) {
        if (typeof obj !== 'object' || obj === null) {
            return obj;
        }
        if (obj instanceof String || obj instanceof Number || obj instanceof Boolean) {
            return obj;
        }
        if (obj instanceof Date) {
            return {
                __type: 'Date',
                __value: obj.toISOString()
            };
        }
        if (obj instanceof Buffer) {
            return {
                __type: 'Bytes',
                __value: obj.toString('base64')
            };
        }
        let keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            if (key === '__type') {
                console.warn(colors.yellow('(safe-json-type) [warning] "__type" is a reserved field. Do not use it unless necessary'));
            }
            let value = obj[key];
            obj[key] = this.__stringify(value);
        }
        return obj;
    }
}
exports.SafeJsonType = SafeJsonType;
