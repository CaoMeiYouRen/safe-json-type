"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buffer_1 = require("buffer");
class SafeJsonBuffer {
}
exports.SafeJsonBuffer = SafeJsonBuffer;
class SafeJsonPluginBuffer {
    constructor() {
        this.type = 'Bytes';
    }
    condition(obj) {
        return obj instanceof buffer_1.Buffer;
    }
    serialize(obj) {
        return {
            __type: 'Bytes',
            base64: obj.toString('base64')
        };
    }
    deserialize(obj) {
        if (obj.base64) {
            return buffer_1.Buffer.from(obj.base64, 'base64');
        }
        return obj;
    }
}
exports.SafeJsonPluginBuffer = SafeJsonPluginBuffer;
