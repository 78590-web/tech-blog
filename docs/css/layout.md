# CSS 布局

现代 CSS 布局主要使用 Flexbox 和 Grid 两种方案。

## Flexbox — 一维布局

适合一行或一列的排列。

```css
.container {
  display: flex;
  justify-content: center;   /* 主轴对齐 */
  align-items: center;       /* 交叉轴对齐 */
  gap: 16px;                 /* 子元素间距 */
}
```

### 常用属性

| 容器属性 | 值 | 效果 |
|---------|-----|------|
| `flex-direction` | `row` / `column` | 主轴方向 |
| `justify-content` | `flex-start` / `center` / `space-between` | 主轴分布 |
| `align-items` | `stretch` / `center` / `flex-end` | 交叉轴对齐 |
| `flex-wrap` | `nowrap` / `wrap` | 是否换行 |

| 子项属性 | 效果 |
|---------|------|
| `flex: 1` | 占满剩余空间 |
| `flex: 0 0 200px` | 固定宽度 200px |

### 经典居中

```css
.center-me {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

## Grid — 二维布局

适合行和列同时控制的复杂布局。

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* 三等分列 */
  gap: 20px;
}
```

### 常用属性

| 属性 | 示例 | 效果 |
|------|------|------|
| `grid-template-columns` | `200px 1fr 1fr` | 列定义 |
| `grid-template-rows` | `auto 1fr auto` | 行定义 |
| `gap` | `16px` | 网格间距 |
| `grid-column` | `1 / 3` | 跨列 |
| `grid-row` | `1 / 3` | 跨行 |

### 经典圣杯布局

```css
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.aside   { grid-area: aside; }
.footer  { grid-area: footer; }
```

## 选择建议

- **一行/一列排列** → Flexbox
- **行列混合布局** → Grid
- **可以混用**：Grid 控制大框架，Flexbox 控制内部排列

## 下一步

→ [响应式设计](/css/responsive)
