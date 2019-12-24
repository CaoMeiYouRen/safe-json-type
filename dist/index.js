"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fast_safe_stringify_1 = require("fast-safe-stringify");
const parseJson = require("parse-json");
class safeJsonType {
    parse(str) {
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
    __parse(obj) {
        switch (typeof obj) {
            case 'string':
            case 'number':
            case 'boolean':
            case 'undefined':
            case 'bigint':
                return obj;
        }
        if (obj === null) {
            return obj;
        }
        if (obj.__type) {
            switch (obj.__type) {
                case 'Date':
                    return new Date(obj.iso);
                case 'Bytes':
                    return new Buffer(obj.iso, 'base64');
            }
        }
        let keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            let value = obj[key];
            obj[key] = this.__parse(value);
        }
        return obj;
    }
    stringify(obj, replacer, space) {
        return fast_safe_stringify_1.default(this.__stringify(obj), replacer, space);
    }
    __stringify(obj) {
        switch (typeof obj) {
            case 'string':
            case 'number':
            case 'boolean':
            case 'undefined':
            case 'bigint':
                return obj;
        }
        if (obj === null) {
            return obj;
        }
        if (obj instanceof String || obj instanceof Number || obj instanceof Boolean) {
            return obj;
        }
        if (obj instanceof Date) {
            return {
                __type: 'Date',
                iso: obj.toISOString()
            };
        }
        if (obj instanceof Buffer) {
            return {
                __type: 'Bytes',
                iso: obj.toString('base64')
            };
        }
        let keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            let value = obj[key];
            obj[key] = this.__stringify(value);
        }
        return obj;
    }
}
exports.safeJsonType = safeJsonType;
