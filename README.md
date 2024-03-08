# vue3demo
这个模板应该可以帮助您开始在Vite中使用 Vue3 进行开发。

## 建议的IDE和设置
- vs code
- ESLint
- TypeScript Vue Plugin (Volar)
- Vue Language Features (Volar)
  - 目前已升级为2.0.0，更名为 Vue - Official
  - [插件不稳定会报错](https://github.com/vuejs/language-tools/issues/3953)
  
- TypeScript Vue Plugin (Volar)对less和scss格式化有支持，但需要安装依赖

  ```bash
  npm install -D sass
  npm install -D less
  ```
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

## 项目设置

```sh
npm install
```

### 编译和热重新加载以进行开发
```sh
npm run dev
```
### 类型检查、编译和最小化生产

```sh
npm run build
```

### 使用[Vitest](https://vitest.dev/)运行单元测试

```sh
npm run test:unit
```

### 使用[Cypress](https://www.cypress.io/)运行端对端测试 

```sh
npm run test:e2e:dev
```

### 使用[ESLint](https://eslint.org/)格式化代码

```sh
npm run lint
```
