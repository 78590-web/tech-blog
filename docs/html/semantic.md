# HTML 语义化标签

语义化标签让代码更易读、对搜索引擎和辅助工具更友好。

## 为什么用语义化标签？

- **可读性**：代码结构一目了然
- **SEO**：搜索引擎更容易理解页面内容
- **无障碍**：屏幕阅读器能正确导航

## 常用语义化标签

```html
<header>   <!-- 页头：logo、导航 -->
<nav>      <!-- 导航链接 -->
<main>     <!-- 主要内容（每页只能有一个） -->
<article>  <!-- 独立文章 -->
<section>  <!-- 内容分区 -->
<aside>    <!-- 侧边栏 / 附加内容 -->
<footer>   <!-- 页脚：版权、联系方式 -->
<figure>   <!-- 图片/图表 + 说明 -->
<time>     <!-- 时间日期 -->
```

## 实际示例

```html
<article>
  <header>
    <h2>文章标题</h2>
    <time datetime="2025-01-01">2025年1月1日</time>
  </header>
  
  <section>
    <h3>第一节</h3>
    <p>内容...</p>
  </section>
  
  <section>
    <h3>第二节</h3>
    <figure>
      <img src="diagram.png" alt="流程图">
      <figcaption>图1：流程示意图</figcaption>
    </figure>
  </section>
  
  <footer>
    <p>作者：张三 · 标签：HTML, 语义化</p>
  </footer>
</article>
```

## `<div>` vs 语义化标签

| 场景 | 用 `<div>` | 用语义标签 |
|------|:---:|:---:|
| 页头 | ❌ | ✅ `<header>` |
| 导航 | ❌ | ✅ `<nav>` |
| 主要内容 | ❌ | ✅ `<main>` |
| 纯装饰容器 | ✅ | ❌ |

经验法则：**有对应语义标签就用语义标签，没有才用 `<div>`。**
