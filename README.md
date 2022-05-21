![](./docs/logo-banner.png)

本应用 OCR 的能力基于微信开发平台接口提供，超出调用次数（100 次/天）时则改用 tesseract 进行解析。代码完全开源，且由微信云开发（云函数）托管，不保留任何用户数据。

## Previews

|  ![](./docs/pages-scene.png)  | ![](./docs/pages-common.png) | ![](./docs/pages-archive.png) | ![](./docs/pages-archive.png) |
| :---------------------------: | :--------------------------: | :---------------------------: | :---------------------------: |
| ![](./docs/pages-archive.png) |                              |                               |                               |

## Features

- 证件识别（身份证、银行卡、驾驶证、行驶证、营业执照）
- 通用场景图文识别（印刷体字体识别）
- 客户端缓存，支持主动开启云端缓存（仅保存 7 天）
- 数据导出（cvs\xlsx\json\txt）

## Todos

- 增加自定义相机拍摄模块（预置框，压缩图片尺寸，减少带宽和识别时间）

## Contributes

```txt
step1: fork
step2: update README.md#Features, add items
step3: write your code, and commit & push
step4: open PR
```
