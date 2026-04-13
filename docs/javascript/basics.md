# JavaScript 基础语法

JavaScript 是网页的编程语言，负责交互和逻辑。

## 变量声明

```js
const name = 'TechStack'   // 常量，不可重新赋值（推荐）
let count = 0              // 变量，可重新赋值
// var age = 18            // 旧语法，不推荐使用
```

> 💡 默认用 `const`，需要修改时才用 `let`。

## 数据类型

```js
// 基本类型
const str = 'hello'        // 字符串
const num = 42             // 数字
const bool = true          // 布尔
const nil = null           // 空值
const undef = undefined    // 未定义

// 引用类型
const arr = [1, 2, 3]      // 数组
const obj = { name: 'JS' } // 对象
```

## 函数

```js
// 函数声明
function greet(name) {
  return `Hello, ${name}!`
}

// 箭头函数（推荐）
const add = (a, b) => a + b
const square = n => n * n
```

## 条件与循环

```js
// 条件
if (score >= 90) {
  console.log('优秀')
} else if (score >= 60) {
  console.log('及格')
} else {
  console.log('不及格')
}

// 循环
const fruits = ['苹果', '香蕉', '橙子']
for (const fruit of fruits) {
  console.log(fruit)
}
```

## 数组常用方法

```js
const nums = [1, 2, 3, 4, 5]

nums.map(n => n * 2)           // [2, 4, 6, 8, 10]
nums.filter(n => n > 3)        // [4, 5]
nums.find(n => n === 3)        // 3
nums.reduce((sum, n) => sum + n, 0)  // 15
nums.includes(3)                // true
```

## 模板字符串

```js
const lang = 'JavaScript'
const year = 2025
console.log(`${lang} 在 ${year} 年依然流行`)
```

## 下一步

→ [DOM 操作](/javascript/dom) · [异步编程](/javascript/async)
