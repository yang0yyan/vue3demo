# pinia

Pinia 是 Vue 的存储库，它允许您跨组件/页面共享状态。

Pinia 提供了一个更简单的 API，具有更少的规范，提供了 Composition-API 风格的 API，最重要的是，在与 TypeScript 一起使用时具有可靠的类型推断支持。

您可以从使用 Pinia 中获得很多好处：

- dev-tools 支持
  - 跟踪动作、突变的时间线
  - Store 出现在使用它们的组件中
  - time travel 和 更容易的调试
- 热模块更换
  - 在不重新加载页面的情况下修改您的 Store
  - 在开发时保持任何现有状态
- 插件：使用插件扩展 Pinia 功能
- 为 JS 用户提供适当的 TypeScript 支持或 **autocompletion**
- 服务器端渲染支持

## 基本示例

**创建**

```js
// stores/counter.js
import { defineStore } from 'pinia';
// 方式1
export const todos = defineStore('todos', {
  state: () => ({
    /** @type {{ text: string, id: number, isFinished: boolean }[]} */
    todos: [],
    /** @type {'all' | 'finished' | 'unfinished'} */
    filter: 'all',
    // type 会自动推断为 number
    nextId: 0,
  }),
  getters: {
    finishedTodos(state) {
      // 自动完成! ✨
      return state.todos.filter((todo) => todo.isFinished);
    },
    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.isFinished);
    },
    /**
     * @returns {{ text: string, id: number, isFinished: boolean }[]}
     */
    filteredTodos(state) {
      if (this.filter === 'finished') {
        // 自动调用其他 getter ✨
        return this.finishedTodos;
      } else if (this.filter === 'unfinished') {
        return this.unfinishedTodos;
      }
      return this.todos;
    },
  },
  actions: {
    // 任何数量的参数，返回一个 Promise 或者不返回
    addTodo(text) {
      // 你可以直接改变状态
      this.todos.push({ text, id: this.nextId++, isFinished: false });
    },
  },
});
// 方式2
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  function increment() {
    count.value++;
  }

  return { count, increment };
});
```

**使用**

```js
import { useCounterStore } from '@/stores/counter';

export default {
  setup() {
    const counter = useCounterStore();

    counter.count++;
    // 带自动补全 ✨
    counter.$patch({ count: counter.count + 1 });
    // 或使用 action 代替
    counter.increment();
  },
};
```

## 开始使用

**安装**

```bash
npm install pinia
```

**配置**

```js
import { createPinia } from 'pinia';

app.use(createPinia());
```

**使用**

它持有未绑定到您的组件树的状态和业务逻辑。换句话说，**它托管全局状态**。

它有点像一个始终存在并且每个人都可以读取和写入的组件。

它有**三个概念**，[state](https://pinia.web3doc.top/core-concepts/state.html)、[getters](https://pinia.web3doc.top/core-concepts/getters.html) 和 [actions](https://pinia.web3doc.top/core-concepts/actions.html) 并且可以安全地假设这些概念等同于组件中的“数据”、“计算”和“方法”。

- 它需要一个唯一名称
- 您可以根据需要定义任意数量的 store
- 一旦 store 被实例化，你就可以直接在 store 上访问 `state`、`getters` 和 `actions` 中定义的任何属性。
- `store` 是一个用`reactive` 包裹的对象
- 我们不能对其进行解构
- 为了从 Store 中提取属性同时保持其响应式，您需要使用`storeToRefs()`

## State

```js
const useStore = defineStore('storeId', {
  // 推荐使用 完整类型推断的箭头函数
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      counter: 0,
      name: 'Eduardo',
      isAdmin: true,
    };
  },
});

store.$patch; // 改变状态
store.$state; // 替换state
store.$subscribe; // 订阅状态
```

**访问 “state”**

您可以通过 `store` 实例访问状态来直接读取和写入状态

```js
const store = useStore();
store.counter++;
```

**重置状态**

您可以通过调用 store 上的 `$reset()` 方法将状态 _重置_ 到其初始值

```js
const store = useStore();
store.$reset();
```

**改变状态**

除了直接用 `store.counter++` 修改 store，你还可以调用 `$patch` 方法。 它允许您使用部分“state”对象同时应用多个更改

```js
store.$patch({
  counter: store.counter + 1,
  name: 'Abalam',
});
```

```js
cartStore.$patch((state) => {
  state.items.push({ name: 'shoes', quantity: 1 });
  state.hasChanged = true;
});
```

**替换state**

您可以通过将其 `$state` 属性设置为新对象来替换 Store 的整个状态

```js
store.$state = { counter: 666, name: 'Paimon' };
```

**订阅状态**

使用 $subscribe() 的优点是 _subscriptions_ 只会在 _patches_ 之后触发一次

默认情况下，_state subscriptions_ 绑定到添加它们的组件，当组件被卸载时，它们将被自动删除。如果要在卸载组件后保留它们，请将 `{ detached: true }`

```js
cartStore.$subscribe(
  (mutation, state) => {
    // import { MutationType } from 'pinia'
    mutation.type; // 'direct' | 'patch object' | 'patch function'
    // 与 cartStore.$id 相同
    mutation.storeId; // 'cart'
    // 仅适用于 mutation.type === 'patch object'
    mutation.payload; // 补丁对象传递给 to cartStore.$patch()

    // 每当它发生变化时，将整个状态持久化到本地存储
    localStorage.setItem('cart', JSON.stringify(state));
  },
  { detached: true },
);
```

## Getters

Getter 完全等同于 Store 状态的 [计算值](https://v3.vuejs.org/guide/reactivity-computed-watchers.html#computed-values)。

**`getters` 是同步的**

```js
export const useStore = defineStore('main', {
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    // 自动将返回类型推断为数字
    doubleCount(state) {
      return state.counter * 2
    },
    // 返回类型必须明确设置
    doublePlusOne(): number {
      return this.counter * 2 + 1 // 访问其他 state
      return this.doubleCount * 2 + 1 // 访问其他 getter
    },
  },
})
```

他们接收`state`作为第一个参数，鼓励箭头函数的使用

我们可以在定义常规函数时通过 `this` 访问到整个 store 的实例

你可以直接在 store 实例上访问 getter

**访问其他 getter**

**将参数传递给 getter**

_Getters_ 只是幕后的 _computed_ 属性，因此无法向它们传递任何参数。 但是，您可以从 _getter_ 返回一个函数以接受任何参数

```js
export const useStore = defineStore('main', {
  getters: {
    getUserById: (state) => {
      const activeUsers = state.users.filter((user) => user.active);
      return (userId) => state.users.find((user) => user.id === userId);
    },
  },
});
```

```vue
<script>
export default {
  setup() {
    const store = useStore();

    return { getUserById: store.getUserById };
  },
};
</script>

<template>
  <p>User 2: {{ getUserById(2) }}</p>
</template>
```

**访问其他 Store 的getter**

要使用其他存储 getter，您可以直接在 _getter_ 内部使用它

```ts
import { useOtherStore } from './other-store';

export const useStore = defineStore('main', {
  state: () => ({
    // ...
  }),
  getters: {
    otherGetter(state) {
      const otherStore = useOtherStore();
      return state.localData + otherStore.data;
    },
  },
});
```

## Actions

Actions 相当于组件中的 [methods

`actions` 可以是异步的，您可以在其中`await` 任何 API 调用甚至其他操作

**访问其他 store 操作**

**订阅 Actions**

可以使用 `store.$onAction()` 订阅 action 及其结果

```ts
const unsubscribe = someStore.$onAction(
  ({
    name, // action 的名字 {params}
    store, // store 实例 {params}
    args, // 调用这个 action 的参数 {params}
    after, // 在这个 action 执行完毕之后，执行这个函数 {function}
    onError, // 在这个 action 抛出异常的时候，执行这个函数 {function}
  }) => {
    // 记录开始的时间变量
    const startTime = Date.now();
    // 这将在 `store` 上的操作执行之前触发
    console.log(`Start "${name}" with params [${args.join(', ')}].`);

    // 如果 action 成功并且完全运行后，after 将触发。
    // 它将等待任何返回的 promise
    after((result) => {
      console.log(`Finished "${name}" after ${Date.now() - startTime}ms.\nResult: ${result}.`);
    });

    // 如果 action 抛出或返回 Promise.reject ，onError 将触发
    onError((error) => {
      console.warn(`Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`);
    });
  },
);

// 手动移除订阅
unsubscribe();
```
