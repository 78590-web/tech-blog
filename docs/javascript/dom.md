# JavaScript DOM 操作

DOM（Document Object Model）是浏览器提供的操作网页的接口。

## 获取元素

```js
// 单个元素
document.getElementById('app')
document.querySelector('.card')        // CSS 选择器

// 多个元素
document.querySelectorAll('.item')     // 返回 NodeList
```

> 💡 优先用 `querySelector` / `querySelectorAll`，统一用 CSS 选择器语法。

## 修改内容

```js
const el = document.querySelector('#title')

el.textContent = '新标题'        // 纯文本
el.innerHTML = '<em>新标题</em>'  // HTML 内容
```

## 修改样式

```js
// 行内样式
el.style.color = 'red'
el.style.fontSize = '24px'

// 操作 class（推荐）
el.classList.add('active')
el.classList.remove('hidden')
el.classList.toggle('dark-mode')
el.classList.contains('active')  // true/false
```

## 修改属性

```js
const img = document.querySelector('img')

img.setAttribute('src', 'new.png')
img.getAttribute('alt')
img.removeAttribute('title')

// 数据属性
el.dataset.userId = '42'
console.log(el.dataset.userId)  // "42"
```

## 事件监听

```js
const btn = document.querySelector('#submit-btn')

btn.addEventListener('click', (event) => {
  event.preventDefault()  // 阻止默认行为
  console.log('按钮被点击了')
})

// 常用事件：click, input, change, submit, keydown, scroll, resize
```

## 创建和插入元素

```js
// 创建
const div = document.createElement('div')
div.textContent = '新元素'
div.classList.add('card')

// 插入
document.querySelector('.container').appendChild(div)

// 删除
div.remove()
```

## 下一步

→ [异步编程](/javascript/async)
