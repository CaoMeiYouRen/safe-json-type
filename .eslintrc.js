const IS_PROD = process.env.NODE_ENV === 'production' ? 2 : 0
module.exports = {
    root: true,
    globals: {
        globalThis: true,
    },
    env: {
    },
    extends: [
        'cmyr',
    ],
    plugins: [
    ],
    rules: {
        'no-console': 0, // 禁止console
        'max-len': 0,
    },
}
