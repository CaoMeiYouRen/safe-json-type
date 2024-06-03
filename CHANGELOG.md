# safe-json-type-plugins

## [1.3.5](https://github.com/CaoMeiYouRen/safe-json-type/compare/v1.3.4...v1.3.5) (2024-06-03)


### 🐛 Bug Fixes

* 更新测试用例；修复 浏览器环境不存在 __filename 的问题 ([5bbf569](https://github.com/CaoMeiYouRen/safe-json-type/commit/5bbf569))

## [1.3.4](https://github.com/CaoMeiYouRen/safe-json-type/compare/v1.3.3...v1.3.4) (2024-06-02)


### 🐛 Bug Fixes

* 修复 测试用例的环境变量设置问题；修复 node 运行时的环境变量判断问题 ([c573fa8](https://github.com/CaoMeiYouRen/safe-json-type/commit/c573fa8))

## [1.3.3](https://github.com/CaoMeiYouRen/safe-json-type/compare/v1.3.2...v1.3.3) (2022-03-15)


### 🐛 Bug Fixes

* 修复 peerDependencies 被打包问题 ([147757e](https://github.com/CaoMeiYouRen/safe-json-type/commit/147757e))

## [1.3.2](https://github.com/CaoMeiYouRen/safe-json-type/compare/v1.3.1...v1.3.2) (2022-03-15)


### 🐛 Bug Fixes

* 移动 safe-json-type-plugins 为 peerDependencies ([e0d61e7](https://github.com/CaoMeiYouRen/safe-json-type/commit/e0d61e7))

## [1.3.1](https://github.com/CaoMeiYouRen/safe-json-type/compare/v1.3.0...v1.3.1) (2022-01-25)


### 🐛 Bug Fixes

* 优化 对运行环境的判断 ([c575d45](https://github.com/CaoMeiYouRen/safe-json-type/commit/c575d45))

# [1.3.0](https://github.com/CaoMeiYouRen/safe-json-type/compare/v1.2.1...v1.3.0) (2022-01-25)


### ✨ Features

* 优化跨端性能；优化代码在 Node 和 Web 端的运行 ([6cd3b34](https://github.com/CaoMeiYouRen/safe-json-type/commit/6cd3b34))

## [1.2.1](https://github.com/CaoMeiYouRen/safe-json-type/compare/v1.2.0...v1.2.1) (2021-11-28)


### 🐛 Bug Fixes

* 优化 rollup 配置 ([7682b2f](https://github.com/CaoMeiYouRen/safe-json-type/commit/7682b2f))

# [1.2.0](https://github.com/CaoMeiYouRen/safe-json-type/compare/v1.1.0...v1.2.0) (2020-11-27)


### ♻ Code Refactoring

* 新增 插件重复载入警告 ([7f90473](https://github.com/CaoMeiYouRen/safe-json-type/commit/7f90473))


### ✨ Features

* 使用 rollup 重构项目，支持 esm ([6349cca](https://github.com/CaoMeiYouRen/safe-json-type/commit/6349cca)), closes [#12](https://github.com/CaoMeiYouRen/safe-json-type/issues/12)


### 🐛 Bug Fixes

* 修复 colors 导入问题 ([6cb1f73](https://github.com/CaoMeiYouRen/safe-json-type/commit/6cb1f73))

# [1.1.0](https://github.com/CaoMeiYouRen/safe-json-type/compare/v1.0.5...v1.1.0) (2020-11-19)


### ✨ Features

* 优化插件去重，相同 type 的插件仅载入一次 ([8da7a7b](https://github.com/CaoMeiYouRen/safe-json-type/commit/8da7a7b))

## [1.0.5](https://github.com/CaoMeiYouRen/safe-json-type/compare/v1.0.4...v1.0.5) (2020-11-04)


### 🐛 Bug Fixes

* 更新依赖和CI；修复代码风格 ([c085b6b](https://github.com/CaoMeiYouRen/safe-json-type/commit/c085b6b))

## [1.0.4](https://github.com/CaoMeiYouRen/safe-json-type/compare/v1.0.3...v1.0.4) (2020-02-17)


### 🐛 Bug Fixes | Bug 修复

* 修复safe-json-type-plugins为1.0.2 ([9e14e01](https://github.com/CaoMeiYouRen/safe-json-type/commit/9e14e01))



## [1.0.3](https://github.com/CaoMeiYouRen/safe-json-type/compare/v1.0.2...v1.0.3) (2020-02-17)


### 🎫 Chores | 其他更新

* 修改safe-json-type-plugins为latest ([390eefc](https://github.com/CaoMeiYouRen/safe-json-type/commit/390eefc))



## [1.0.2](https://github.com/CaoMeiYouRen/safe-json-type/compare/v1.0.1...v1.0.2) (2020-02-17)


### ✅ Tests | 测试

* 更新测试用例 ([d40968c](https://github.com/CaoMeiYouRen/safe-json-type/commit/d40968c))



## [1.0.1](https://github.com/CaoMeiYouRen/safe-json-type/compare/v1.0.0...v1.0.1) (2020-02-16)


### 🎫 Chores | 其他更新

* 更新safe-json-type-plugins到最新 ([848d311](https://github.com/CaoMeiYouRen/safe-json-type/commit/848d311))



# [1.0.0](https://github.com/CaoMeiYouRen/safe-json-type/compare/v0.3.0-beta...v1.0.0) (2020-02-15)


### 🎫 Chores | 其他更新

* 更新safe-json-type-plugins到最新 ([dbb8332](https://github.com/CaoMeiYouRen/safe-json-type/commit/dbb8332))



# [0.3.0-beta](https://github.com/CaoMeiYouRen/safe-json-type/compare/v0.2.6-beta...v0.3.0-beta) (2020-02-15)


### ♻ Code Refactoring | 代码重构

* 移除了内置的插件，改为了safe-json-type-plugins依赖，更加灵活。同时修复了引用browser出错的问题 ([39febbe](https://github.com/CaoMeiYouRen/safe-json-type/commit/39febbe))



## [0.2.6-beta](https://github.com/CaoMeiYouRen/safe-json-type/compare/v0.2.5-beta...v0.2.6-beta) (2020-02-15)



## [0.2.5-beta](https://github.com/CaoMeiYouRen/safe-json-type/compare/v0.2.4-beta...v0.2.5-beta) (2020-02-15)


### 🐛 Bug Fixes | Bug 修复

* 修复 interfaces 、plugins中类型定义未导出的bug ([2d001f3](https://github.com/CaoMeiYouRen/safe-json-type/commit/2d001f3))



## [0.2.4-beta](https://github.com/CaoMeiYouRen/safe-json-type/compare/v0.2.3-beta.0...v0.2.4-beta) (2020-02-14)


### 🎫 Chores | 其他更新

* 优化了package.json ([e5dccca](https://github.com/CaoMeiYouRen/safe-json-type/commit/e5dccca))
* 尝试修改发布方式 ([72480fb](https://github.com/CaoMeiYouRen/safe-json-type/commit/72480fb))



## [0.2.3-beta.0](https://github.com/CaoMeiYouRen/safe-json-type/compare/v0.2.3-beta...v0.2.3-beta.0) (2020-02-14)


### 🎫 Chores | 其他更新

* **release:** 0.2.3-beta.0 ([f750c10](https://github.com/CaoMeiYouRen/safe-json-type/commit/f750c10))



## [0.2.3-beta](https://github.com/CaoMeiYouRen/safe-json-type/compare/v0.2.2-beta...v0.2.3-beta) (2020-02-14)


### 👷‍ Build System | 构建

* 修改了webpack配置 ([45c14b8](https://github.com/CaoMeiYouRen/safe-json-type/commit/45c14b8))



## [0.2.2-beta](https://github.com/CaoMeiYouRen/safe-json-type/compare/v0.2.1-beta...v0.2.2-beta) (2020-02-13)


### ♻ Code Refactoring | 代码重构

* 修改了SafeJsonType类的导出方式 ([c6b3034](https://github.com/CaoMeiYouRen/safe-json-type/commit/c6b3034))



## [0.2.1-beta](https://github.com/CaoMeiYouRen/safe-json-type/compare/v0.2.0-beta...v0.2.1-beta) (2020-02-13)


### ♻ Code Refactoring | 代码重构

* 优化了类导出方式、文档、webpack配置等 ([4a65fc8](https://github.com/CaoMeiYouRen/safe-json-type/commit/4a65fc8))



# [0.2.0-beta](https://github.com/CaoMeiYouRen/safe-json-type/compare/v0.1.0-beta...v0.2.0-beta) (2020-02-13)


### ♻ Code Refactoring | 代码重构

* 重构代码，推出浏览器压缩版 ([111dcef](https://github.com/CaoMeiYouRen/safe-json-type/commit/111dcef))



# [0.1.0-beta](https://github.com/CaoMeiYouRen/safe-json-type/compare/v0.0.6...v0.1.0-beta) (2020-02-13)


### 🎫 Chores | 其他更新

* 修改了依赖 ([685a7fa](https://github.com/CaoMeiYouRen/safe-json-type/commit/685a7fa))



## [0.0.6](https://github.com/CaoMeiYouRen/safe-json-type/compare/v0.0.6-beta...v0.0.6) (2020-02-13)


### ✨ Features | 新功能

* 重构为插件化，实现了自定义序列化和反序列化机制 ([ae9b596](https://github.com/CaoMeiYouRen/safe-json-type/commit/ae9b596))


### 🎫 Chores | 其他更新

* **release:** 0.0.6 ([599289a](https://github.com/CaoMeiYouRen/safe-json-type/commit/599289a))



## [0.0.6-beta](https://github.com/CaoMeiYouRen/safe-json-type/compare/v0.0.5-beta...v0.0.6-beta) (2019-12-27)


### ✨ Features | 新功能

* 新增 toObject 方法，用于转换SafeJson到普通对象；优化了部分细节 ([fc58855](https://github.com/CaoMeiYouRen/safe-json-type/commit/fc58855))



## [0.0.5-beta](https://github.com/CaoMeiYouRen/safe-json-type/compare/v0.0.4-beta...v0.0.5-beta) (2019-12-24)


### 🎫 Chores | 其他更新

* 新增 git commit 格式化 ([8b4cc16](https://github.com/CaoMeiYouRen/safe-json-type/commit/8b4cc16))



## [0.0.4-beta](https://github.com/CaoMeiYouRen/safe-json-type/compare/v0.0.3...v0.0.4-beta) (2019-12-24)



## [0.0.3](https://github.com/CaoMeiYouRen/safe-json-type/compare/v0.0.2-beta...v0.0.3) (2019-12-24)



## [0.0.2-beta](https://github.com/CaoMeiYouRen/safe-json-type/compare/v0.0.1-beta...v0.0.2-beta) (2019-12-24)



## 0.0.1-beta (2019-12-24)
