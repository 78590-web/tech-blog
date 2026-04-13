# HTML 表单与输入

表单是用户与网页交互的核心方式，用于收集用户输入。

## 基本结构

```html
<form action="/submit" method="POST">
  <!-- 表单控件放在这里 -->
</form>
```

- `action` — 数据提交的目标 URL
- `method` — 提交方式：`GET`（查询）或 `POST`（提交数据）

## 常用输入类型

```html
<!-- 文本输入 -->
<input type="text" name="username" placeholder="请输入用户名">

<!-- 密码输入 -->
<input type="password" name="password" placeholder="请输入密码">

<!-- 邮箱 -->
<input type="email" name="email" placeholder="example@mail.com">

<!-- 数字 -->
<input type="number" name="age" min="0" max="150">

<!-- 复选框 -->
<input type="checkbox" name="agree" id="agree">
<label for="agree">我同意服务条款</label>

<!-- 单选按钮 -->
<input type="radio" name="gender" value="male" id="male">
<label for="male">男</label>
<input type="radio" name="gender" value="female" id="female">
<label for="female">女</label>
```

## 下拉选择

```html
<select name="city">
  <option value="">请选择城市</option>
  <option value="beijing">北京</option>
  <option value="shanghai">上海</option>
  <option value="guangzhou">广州</option>
</select>
```

## 文本域

```html
<textarea name="message" rows="5" cols="30" placeholder="请输入留言内容"></textarea>
```

## 提交按钮

```html
<button type="submit">提交</button>
<button type="reset">重置</button>
```

## 下一步

→ [语义化标签](/html/semantic)
