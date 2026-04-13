# CSS 响应式设计

让页面在不同屏幕尺寸下都能良好展示。

## Viewport 设置

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

> 这行必须加，否则移动端会以桌面宽度渲染后缩放。

## 媒体查询

```css
/* 默认：移动端样式 */
.container {
  padding: 12px;
  grid-template-columns: 1fr;
}

/* 平板及以上 */
@media (min-width: 768px) {
  .container {
    padding: 24px;
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 桌面端 */
@media (min-width: 1024px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

> 💡 推荐使用 **移动优先**（min-width），从小屏开始写，逐步增强。

## 响应式单位

| 单位 | 说明 | 使用场景 |
|------|------|---------|
| `rem` | 相对根字号 | 字体、间距 |
| `em` | 相对父元素字号 | 组件内间距 |
| `vw` | 视口宽度的 1% | 全屏宽度 |
| `vh` | 视口高度的 1% | 全屏高度 |
| `%` | 相对父元素 | 宽度、高度 |

## 弹性图片

```css
img {
  max-width: 100%;
  height: auto;
}
```

## Container Queries（新特性）

根据容器而非视口来适配：

```css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: flex;
    gap: 16px;
  }
}
```

## 常用断点参考

| 名称 | 宽度 | 设备 |
|------|------|------|
| sm | ≥640px | 大手机 |
| md | ≥768px | 平板 |
| lg | ≥1024px | 笔记本 |
| xl | ≥1280px | 桌面 |
