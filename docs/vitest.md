## Vitest单元测试

## 1.什么是单元测试

单元测试是软件开发中的一种测试方法，用于验证软件中的**最小可测试单元**（通常是函数、方法或类）**是否按预期工作**。单元测试旨在隔离和测试代码的各个部分，以**确保它们在不同条件下都能正确运行**。

## 2.为什么要使用单元测试

在单元测试中，**开发人员编写测试用例**，这些测试用例**对单个功能进行测试**，并检查其是否按照预期进行工作。这些测试用例通常**包括输入数据、期望的输出结果以及执行条件**。单元测试框架可以自动运行这些测试用例，并提供结果反馈，以便开发人员了解代码是否通过了测试。

通过单元测试，开发人员**可以及早发现代码中的错误和问题**，并**确保代码的稳定性和可靠性**。单元测试也有助于**提高代码的可维护性**，因为它们**可以充当文档**，并**帮助开发人员理解代码的预期行为**。

## 3.什么是vitest

Vitest 是由 Vite 驱动的下一代测试框架。

## 4.为什么用vitest

因为vue3是使用vite搭建的，所以使用vitest是最好的

- 充分利用了 Vite 在开发体验方面的改进，如即时的热模块重载。
- Vitest 非常注重性能，尽可能多地使用 Worker 线程进行并发运行。
- 监听模式默认启用，与 Vite 推动开发者优先体验的理念保持一致。

## 5.使用到的依赖

- **vitest：**npm install -D vitest

  - **jsdom：**npm i -D jsdom  用于模拟 DOM 和浏览器 API

  - **test-utils：**npm install @vue/test-utils --save-dev 用于挂载vue组件
  - **v8-coverage：**npm i -D @vitest/coverage-v8

## 6.主要功能

### 6.1 测试筛选

- 指定超时阈值
- **.skip：**避免运行某些测试套件或测试
- **.only：**运行某些测试套件或测试
- **.todo：** **留存**将要实施的测试套件和测试的待办事项

### 6.2 报告器（显示测试输出）（显示在输出文档或控制台中的）

```typescript
export default defineConfig({
  // 报告器
  reporters: ['junit', 'json', 'verbose'],
  // 输出文档
  outputFile: {
    junit: './junit-report.xml',
    json: './json-report.json',
  },
})
```

- **默认报告器：**default
- **基础报告器：**basic
- **详细报告器：**varbose
- **Dot 报告器：**dot
- **JUnit 报告器：**junit
- **JSON 报告器：**json
- **HTML 报告器：**html
- **TAP 报告器：**top
- **TAP 扁平报告器：**tap-flat
- **Hanging process 报告器：**hanging-process

### 6.3 测试覆盖率

Vitest 通过 [`v8`](https://v8.dev/blog/javascript-code-coverage) 支持原生代码覆盖率，通过 [`istanbul`](https://istanbul.js.org/) 支持检测代码覆盖率。

### 6.4 测试快照

当你希望确保函数的输出不会意外更改时，快照测试是一个非常有用的工具。





## 7. test-utils

