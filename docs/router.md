# [router](https://router.vuejs.org/)

使用 router-link 组件进行导航，通过传递 `to` 来指定链接，使得 Vue Router 可以在不重新加载页面的情况下更改 URL，处理 URL 的生成以及编码。

`router-view` 将显示与 URL 对应的组件，路由匹配到的组件将渲染在router-view

定义路由组件，编写路由数组（每个路由都需要映射到一个组件），创建路由实例并传递 `routes` 配置，创建并挂载根实例。

## 动态路由匹配

*路径参数* 用冒号 `:` 表示：`{ path: '/users/:id', component: User }`

自定义的 *路径参数* ：`{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }`

- **在参数中自定义正则：** 在右括号里指定一个自定义的正则，限制参数类型
- **可重复的参数：** 在末尾添加 `+` 或 `*`
- **可选参数：** 在末尾添加 `?`

## 匹配带有或不带有尾部斜线的路由

- /users/posva/ 当 strict: true

- /Users/posva 当 sensitive: true

## 嵌套路由

一些应用程序的 UI 由多层嵌套的组件组成。要将组件渲染到这个嵌套的 `router-view` 中，我们需要在路由中配置 `children`。`children` 配置只是另一个路由数组，就像 `routes` 本身一样。

## 编程式导航

想要导航到不同的 URL，可以使用 `router.push` 方法。这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，会回到之前的 URL。

**注意**：`params` 不能与 `path` 一起使用，如果提供了 `path`，`params` 会被忽略

```javascript
// 字符串路径
router.push('/users/eduardo')

// 带有路径的对象
router.push({ path: '/users/eduardo' })

// 命名的路由，并加上参数，让路由建立 url
router.push({ name: 'user', params: { username: 'eduardo' } })

// 带查询参数，结果是 /register?plan=private
router.push({ path: '/register', query: { plan: 'private' } })

// 带 hash，结果是 /about#team
router.push({ path: '/about', hash: '#team' })
```



`router.replace`它的作用类似于 `router.push`，唯一不同的是，它在导航时不会向 history 添加新记录，而是取代当前的条目

```javascript
router.push({ path: '/home', replace: true })
// 相当于
router.replace({ path: '/home' })
```

```javascript
router.go(1) ==> router.forward()
router.go(-1) ==> router.back()
```

## 命名路由

除了 `path` 之外，你还可以为任何路由提供 `name`。这有以下优点：

- 没有硬编码的 URL
- `params` 的自动编码/解码。
- 防止你在 url 中出现打字错误。
- 绕过路径排序（如显示一个）

```js
const routes = [
  {
    path: '/user/:username',
    name: 'user',
    component: User,
  },
]
```

要链接到一个命名的路由，可以向 `router-link` 组件的 `to` 属性传递一个对象，这跟代码调用 `router.push()` 是一回事

```html
<router-link :to="{ name: 'user', params: { username: 'erina' }}">
  User
</router-link>
```

```js
router.push({ name: 'user', params: { username: 'erina' } })
```

## 命名视图

有时候想同时 (同级) 展示多个视图，而不是嵌套展示。你可以在界面中设置多个单独命名的视图

```html
<router-view class="view left-sidebar" name="LeftSidebar"></router-view>
// 如果 router-view 没有设置名字，那么默认为 default
<router-view class="view main-content"></router-view> 
<router-view class="view right-sidebar" name="RightSidebar"></router-view>
```

```js
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      components: {
        default: Home,
        // LeftSidebar: LeftSidebar 的缩写
        LeftSidebar,
        // 它们与 `<router-view>` 上的 `name` 属性匹配
        RightSidebar,
      },
    },
  ],
})
```

## 重定向和别名



