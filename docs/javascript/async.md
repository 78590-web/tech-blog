# JavaScript 异步编程

异步是 JavaScript 的核心特性，处理网络请求、定时器、文件读取等非阻塞操作。

## 回调函数（传统方式）

```js
setTimeout(() => {
  console.log('1秒后执行')
}, 1000)
```

回调地狱问题：多层嵌套难以维护。

## Promise

```js
// 创建 Promise
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // 模拟异步操作
    setTimeout(() => {
      resolve({ name: 'TechStack' })
    }, 1000)
  })
}

// 使用 Promise
fetchData()
  .then(data => console.log(data))
  .catch(err => console.error(err))
```

## async / await（推荐）

让异步代码看起来像同步代码：

```js
async function loadUser() {
  try {
    const response = await fetch('https://api.example.com/user')
    const user = await response.json()
    console.log(user)
  } catch (error) {
    console.error('请求失败:', error)
  }
}

loadUser()
```

## 并行执行

```js
// 同时发起多个请求，等全部完成
const [users, posts] = await Promise.all([
  fetch('/api/users').then(r => r.json()),
  fetch('/api/posts').then(r => r.json()),
])

// 竞速：取最快返回的
const fastest = await Promise.race([
  fetch('/cdn1/data.json'),
  fetch('/cdn2/data.json'),
])
```

## 常用异步 API

| API | 用途 |
|-----|------|
| `fetch()` | 网络请求 |
| `setTimeout()` | 延时执行 |
| `setInterval()` | 定时执行 |
| `Promise.all()` | 全部完成 |
| `Promise.race()` | 最快返回 |

## 下一步

→ [Linux 基础命令](/linux/basics)
