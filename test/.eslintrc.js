const IS_PROD = process.env.NODE_ENV === 'production' ? 2 : 0
module.exports = {
    root: true,
    extends: [
        'cmyr',
    ],
    rules: {
        'no-console': 0, // 禁止console
        'no-new-wrappers': 0,
    },
}
