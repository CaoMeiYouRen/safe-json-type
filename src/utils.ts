export const __BROWSER__ = process.env.__BROWSER__ === 'true'
export const __NODE__ = process.env.__NODE__ === 'true'

let colors: any
let parseJson: (input: string | null, reviver?: (key: any, value: any) => any, filepath?: string) => any
let safeStringify: (
    value: any,
    replacer?: (key: string, value: any) => any,
    space?: string | number,
    options?: { depthLimit: number | undefined, edgesLimit: number | undefined }
) => string

if (__NODE__) {
    const init = async () => {
        colors = (await import('colors')).default
        parseJson = (await import('parse-json')).default
        safeStringify = (await import('fast-safe-stringify')).default
    }
    init()
}

export const Utils = {
    console: {
        warn(message: any) {
            if (__BROWSER__ || !colors) {
                console.warn(message)
                return
            }
            console.warn(colors.yellow(message))
        },
    },
    JSON: {
        parse(str: string) {
            if (__BROWSER__ || !parseJson) {
                return JSON.parse(str)
            }
            return parseJson(str)
        },
        stringify(obj: any, replacer?: (key: string, value: any) => any, space?: string | number) {
            if (__BROWSER__ || !safeStringify) {
                return JSON.stringify(obj, replacer, space)
            }
            return safeStringify(obj, replacer, space)
        },
    },
}
