一个基于vue3搭建的项目。使用Vite做为项目框架，使用TypeScript做为开发语言，项目管理工具VueRouter、Pinia，项目测试工具Vitest、cypress，代码风格工具F2ELint、ESLint，项目状态监测工具Sentry，其他工具element-plus、axios、crypto-js、dayjs、echarts

## 1 创建一个 Vue 应用

### 1.0 环境准备

- 18.0 或更高版本的 [Node.js](https://nodejs.org/) （推荐使用 [nvm](https://github.com/coreybutler/nvm-windows) 做node版本管理，可以快速切换 node 版本，因为vue2的开发环境适合的版本在8~14，方便v2和v3快速切换开发）
- vs code

### 1.1 命令行

```bash
npm create vue@latest
```

### 1.2 需要掌握的技术和工具

- Vite
- TypeScript
- JSX  (目前用不到)
- VueRouter
- Pinia
- Vitest
- 端到端测试工具：
  - cypress
  - Nightwatch  (目前用不到)
  - Playwright  (目前用不到)
- ESLint
- F2ELint
- Prettier  (目前用不到，[Volar](https://github.com/johnsoncodehk/volar) VSCode 插件为 Vue SFC 提供了开箱即用的格式化功能)

### 1.3 安装必要依赖

Vue - Official 对less和scss格式化有支持，但需要安装依赖

```bash
npm install -D sass
```

```bash
npm install -D less
```

## 2 学习路线

开发语言：html、typescript、less、scss、yml、md、json

### 2.1 TypeScript

[TypeScript 入门教程](https://ts.xcatliu.com/)

### 2.2 Vite

[指导](https://www.vitejs.net/guide/)

### 2.3 VueRouter

### 2.4 Pinia

### 2.5 Vitest

[指南](https://cn.vitest.dev/guide/)

### 2.6 cypress

[指南](https://docs.cypress.io/guides/overview/why-cypress/)

### 2.7 Sentry

[vue sentry](https://docs.sentry.io/platforms/javascript/guides/vue/)

### 2.8 F2ELint

[规约使用](https://blog.csdn.net/qq_33433029/article/details/131306683)

### 2.9 ESLint

### 2.10 element-plus

### 2.11 axios

### 2.12 crypto-js

[加密解密之crypto-js](https://mp.weixin.qq.com/s/cKl3XUZtuA3syDh6WrPZGA)

[从 crypto-js 了解加密-解密知识点](https://zhuanlan.zhihu.com/p/670831453)

### 3 项目结构

#### 3.1 使用到的 vs code 依赖

- TypeScript Vue Plugin (Volar)
  - ![image-20240408092109152](.\docs\img\image-20240408092109152.png)
  
- Vue Language Features (Volar)
  - 目前已升级为2.0.8，更名为 Vue - Official
  - [插件不稳定会报错](https://github.com/vuejs/language-tools/issues/3953)，也经常初始化失败
  - ![image-20240410090642458](.\docs\img\image-20240410090642458.png)
  
- Vitest

- 使用的 vs code 设置

  ```json
  {
      // 控制具有未保存更改的编辑器的 自动保存。
      "files.autoSave": "onFocusChange",
      // 在保存时格式化文件。格式化程序必须可用，延迟后文件不能保存，并且编辑器不能关闭。
      "editor.formatOnSave": true,
      // 保存时为编辑器运行 CodeActions。必须指定 CodeActions，并且编辑器不能关闭.
      "editor.codeActionsOnSave": {
          // 控制是否应在文件保存时运行自动修复操作
          "source.fixAll": true
      },
      // 控制键入时是否应自动显示建议。这可以用于在注释、字符串和其他代码中键入时进行控制。可配置快速建议以显示为虚影文本或建议小组件。
      "editor.quickSuggestions": {
          "strings": true
      },
      // 控制是应打开工作区父文件夹中的存储库还是打开的文件。
      "git.openRepositoryInParentFolders": "never",
      // 启用或禁用在 VS Code 中重命名或移动文件时自动更新导入路径的功能。
      "typescript.updateImportsOnFileMove.enabled": "always",
  }
  ```

#### 3.2 必要的依赖库

- **less：** npm install -D sass
- **scss：** npm install -D less
- **dayjs：** npm install dayjs
- **crypto-js：** npm install crypto-js
- **Element Plus：** npm install element-plus --save
  - **Vue 的按需组件自动导入：** npm install -D unplugin-vue-components  [github](https://github.com/antfu/unplugin-vue-components#installation)
  - **按需自动导入 Vite的 API：** npm install -D unplugin-auto-import  [github](https://github.com/antfu/unplugin-auto-import#install)
  - **用于与 element-plus 相关的[unplugin](https://github.com/unjs/unplugin)：** npm install -D unplugin-element-plus  [github](https://github.com/element-plus/unplugin-element-plus)
  - **element-plus Icon 图标：** npm install @element-plus/icons-vue
  - **图标组件：** npm i -D unplugin-icons
- **Axios：** npm install axios
  - 如果项目中存在`start-server-and-test`依赖，axios可以不引用
  - **axios-mock-adapter：** npm install axios-mock-adapter --save-dev （暂不使用）
  - **mockjs：** npm i  mockjs -S
  - **@types/mockjs：** npm install @types/mockjs -D
  - **vite-plugin-mock：** npm i vite-plugin-mock -D  [github](https://github.com/vbenjs/vite-plugin-mock)
  - **axios-retry：** npm install axios-retry [github](https://github.com/softonic/axios-retry) （暂不使用）
- **echarts：** npm install echarts
  - **echarts-wordcloud：** npm install echarts-wordcloud （暂不使用）
  - **echarts-liquidfill：** npm install echarts-liquidfill （暂不使用）
- **vitest：** npm install -D vitest
  - **jsdom：** npm i -D jsdom
  - **test-utils：** npm install @vue/test-utils --save-dev
  - **v8-coverage：** npm i -D @vitest/coverage-v8
- **cypress：** npm install cypress --save-dev
- **Sentry：** npm install --save @sentry/vue
  - **sourcemaps：** npx @sentry/wizard@latest -i sourcemaps
  - **Sentry Vite 插件：** npm install @sentry/vite-plugin --save-dev

#### 3.3 项目内容

- **网络请求**

  - **网络请求库**
    - 使用Axios网络请求库，构建网络请求框架
    - AxiosClient  用于创建axios客户端
    - AxiosHolder 用于管理axios
    - RealInterceptorChain 拦截器链
    - CompositeDisposable 服务控制器
    - 页面关闭，自动取消正在进行的请求
  - **接口（api）**
    - **按页面分类：** 每个页面一个单独的api文件，描述指定页面所有的接口和请求方式
      - 更加灵活，项目页面迁移迅速，不用担心缺少接口
      - 接口重复导致代码冗余
    - **按后台服务分类：** 将同一服务下的接口放在同一文件下
    - **httpEnum：** 制定`Request method`、`Request header`、`Content type`、`Request result set`标准
  - 重试失败的请求
    - 使用插件[axios-retry](http://www.axios-js.com/zh-cn/docs/axios-retry.html)
    - 自定义重试 RetryAndFollowUpInterceptor
  - **mock：** 按照接口文档模拟后端人员提供的数据
    - 使用mockjs，vite-plugin-mock实现
- 组件

  - **AlertDialog：** 用于状态提示和二次确认使用 （后续统一规范后执行）
  - **UploadLayout：** 用于文件上传，利用插槽可以自定义展示文件的样式 [uploadLayout.md](..\..\uniapp\文件\components\uploadLayout\uploadLayout.md)  （后续统一规范后执行）

  - **VirtualList：** 虚拟列表组件，用于渲染超量列表数据 （后续统一规范后执行）

  - 文件下载组件 （后续统一规范后执行）

  - 组件规范 （后续统一规范后执行）

  - 第三方库组件库
    - Element Plus 和 Ant Design Vue（目前推荐Element Plus）
- 页面与样式规范 （暂未开始）

  - 页面
    - 菜单：一级菜单、二级菜单、三级菜单

  - 样式规范
    - echarts规范
    - 表格规范
    - 搜索框规范
    - 布局规范
      - 一级背景
      - 二级背景
      - 三级背景
    - 文字规范
      - 小字，中字，大字
      - 浅色，正常，深色
  - 资源类型管理

    - 动画资源

    - 颜色状态列表资源
    - 菜单资源
    - 字符串资源
    - 样式资源
    - 主题资源
    - 字体资源
    - 其他资源类型
      - Bool
      - 颜色
      - 尺寸
      - ID
      - 整数
      - 整数数组
      - 类型化数组
- 路由

  - 基本静态路由
    - 登录路由
      - 普通登录路由
      - OAuth登录路由
      - token静默登录路由

    - 根路由
    - 404路由
    - 重定向路由
    - 错误日志路由
    - 主框架外的路由（测试页面）
  - 业务路由
    - 页面一般分割为三部分，head、menu和content。
  - 路由守卫（创建处理路由的挂钩）（暂不使用）
    - 页面状态
    - 页面加载状态
  - 逻辑
    - 首次渲染页面时，获取所有基本静态路由，添加至白名单，后创建路由(router)
    - 添加路由守卫后，配置路由到vue
  - 路由管理
    - 路由应该是针对项目的
    - 配合权限路由做路由时
    - 项目包含基本静态路由和
- 工具
  - 树结构数据处理工具
    - 正向遍历
    - 反向遍历
    - tree & list 转换
    - 结构类型转换
  - 加解密管理工具

    - AES加解密工具
    - DES加解密工具
    - TripleDES加解密工具
    - base64和MD5
  - 缓存管理工具

    - 选择LocalStorage或SessionStorage进行数据存储
    - key管理（CacheEnum）

    - **数据加密：** 对开发环境的缓存加密（防止敏感数据被窃取）
    - **过期清除：** 设置数据的保存时长(防止部分数据失效导致功能异常)
    - 配合Pinia做二级缓存
  - 属性动画
    - 一个动画工具，不会直接操作数据实现动画，而是将给定的数据随着时间做动画变换
  - 文件下载服务工具
- 项目环境和模式 （暂未开始）

  - 环境分为开发环境（development）、测试环境（test）、线上环境（production）
  - 模式分为开发模式（development）和发布模式（production）两种
- 创建一个 `types` 目录，专门用来管理自己写的声明文件
  - **components.d.ts：** Vue 的按需组件自动导入
  - **auto-imports.d.ts：** 按需自动导入 Vite的 API


目录结构：

```tex
vue3demo
├── src
|  └── index.ts
├── types
|  └── foo
|     └── index.d.ts
└── tsconfig.json
```

`tsconfig.json` 内容：

```json
{
    "compilerOptions": {
        "module": "commonjs",
        "baseUrl": "./",
        "paths": {
            "*": ["types/*"]
        }
    }
}
```

项目开发流程



- 开发人员编写测试用例

### 自动化工具

- 接口自动生成工具

  - 根据接口文档中的描述自动生成符合规范的代码
  - 是否使用bean传参

- echarts自动生成工具

  - 设置：在设置中设置通用样式，即所有图形的通用样式
  - 管理设置：一个设置即为一个描述数据，可以通过新增、编辑来管理不通样式的echarts。可针对项目设置。

  - 详细设置：根据UI绘制的图形设置具体内容，像是文字，颜色，图形大小等
  - 自动生成符合规范的代码或组件
  - 管理图形库：设置好的图形可保存到图形库中，后可继续编辑、删除、复制、移动等操作。
  - 以项目为分类（可能的想法）：在一个项目中设置通用样式，管理项目下的图形库


### 分支管理

分支分为master分支、test分支和其他分支，master分支管理稳定的线上版本，test分支管理较为不稳定的测试环境版本，其他分支多为进行中或即将开始的任务。

- 开始编写项目的第一步：新建议题
  - 新增一个议题，可以是新增需求，可以是修复bug




### 其他

[依赖查询网站](https://www.npmjs.com/)

[types](https://www.npmjs.com/~types)

指定echart样式标准，UI根据这个标准绘制图形，前端根据图形一键生成代码，缩短开始调试时间。保证还原度和错误率（可能配合后端制定接口请求和响应标准，连同接口一起生成）



