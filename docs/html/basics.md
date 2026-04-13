# HTML 基础语法

HTML（HyperText Markup Language）是构建网页的骨架语言。

## 文档结构

每个 HTML 文件都有一个基本结构：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>页面标题</title>
</head>
<body>
  <!-- 页面内容写在这里 -->
  <h1>Hello, World!</h1>
</body>
</html>
```

## 常用标签

| 标签 | 用途 | 示例 |
|------|------|------|
| `<h1>` ~ `<h6>` | 标题 | `<h1>主标题</h1>` |
| `<p>` | 段落 | `<p>这是一段文字</p>` |
| `<a>` | 超链接 | `<a href="url">链接文字</a>` |
| `<img>` | 图片 | `<img src="url" alt="描述">` |
| `<ul>` / `<ol>` | 列表 | 无序/有序列表 |
| `<div>` | 容器 | 通用分组块 |

## 属性

标签可以携带属性，提供额外信息：

```html
<a href="https://example.com" target="_blank" title="示例网站">
  点击访问
</a>
```

- `href` — 链接地址
- `target="_blank"` — 新标签页打开
- `title` — 鼠标悬停提示文字

## 下一步

→ [表单与输入](/html/forms) · [语义化标签](/html/semantic)
