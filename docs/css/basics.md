# CSS 基础语法

CSS（Cascading Style Sheets）控制网页的视觉呈现。

## 三种引入方式

```css
/* 1. 行内样式（不推荐） */
<p style="color: red;">红色文字</p>

/* 2. 内部样式表 */
<style>
  p { color: red; }
</style>

/* 3. 外部样式表（推荐） */
<link rel="stylesheet" href="style.css">
```

## 选择器

```css
/* 元素选择器 */
p { color: #333; }

/* 类选择器 */
.highlight { background: yellow; }

/* ID 选择器 */
#header { font-size: 24px; }

/* 组合选择器 */
nav a { text-decoration: none; }       /* 后代 */
nav > a { padding: 8px; }              /* 直接子代 */
h1, h2, h3 { font-weight: 600; }      /* 分组 */
```

## 盒模型

每个元素都是一个「盒子」：

```
┌─────────── margin ───────────┐
│  ┌──────── border ────────┐  │
│  │  ┌─── padding ─────┐  │  │
│  │  │    content       │  │  │
│  │  └─────────────────┘  │  │
│  └───────────────────────┘  │
└─────────────────────────────┘
```

```css
.box {
  width: 200px;         /* 内容宽度 */
  padding: 16px;        /* 内边距 */
  border: 1px solid;    /* 边框 */
  margin: 8px;          /* 外边距 */
  box-sizing: border-box; /* 推荐：width 包含 padding+border */
}
```

> 💡 建议：全局设置 `*, *::before, *::after { box-sizing: border-box; }`

## 常用属性速查

| 属性 | 作用 | 示例 |
|------|------|------|
| `color` | 文字颜色 | `color: #333;` |
| `background` | 背景 | `background: #f5f5f5;` |
| `font-size` | 字号 | `font-size: 16px;` |
| `margin` | 外边距 | `margin: 0 auto;` |
| `padding` | 内边距 | `padding: 12px;` |
| `border` | 边框 | `border: 1px solid #ddd;` |
| `border-radius` | 圆角 | `border-radius: 8px;` |

## 下一步

→ [布局](/css/layout) · [响应式设计](/css/responsive)
