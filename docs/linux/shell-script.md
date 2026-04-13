# Linux Shell 脚本

Shell 脚本将多条命令组合成可复用的自动化脚本。

## 基本结构

```bash
#!/bin/bash
# 第一行指定解释器

echo "Hello, Shell!"
```

> 运行前需要赋予执行权限：`chmod +x script.sh`，然后 `./script.sh`

## 变量

```bash
# 定义变量（等号两边不能有空格！）
NAME="TechStack"
VERSION=3

# 使用变量
echo "项目: $NAME, 版本: $VERSION"
echo "项目: ${NAME}"       # 推荐用花括号

# 命令替换
CURRENT_DIR=$(pwd)
FILE_COUNT=$(ls | wc -l)
echo "当前目录: $CURRENT_DIR, 文件数: $FILE_COUNT"
```

## 条件判断

```bash
if [ -f "package.json" ]; then
  echo "找到 package.json"
elif [ -d "src" ]; then
  echo "找到 src 目录"
else
  echo "未找到"
fi

# 常用判断
# -f 文件存在  -d 目录存在  -r 可读  -w 可写  -x 可执行
# = 字符串相等  != 不相等  -eq 数字相等  -ne 不等
```

## 循环

```bash
# 遍历文件
for file in *.md; do
  echo "处理: $file"
done

# 计数循环
for i in $(seq 1 5); do
  echo "第 $i 次"
done

# while 循环
count=0
while [ $count -lt 10 ]; do
  echo $count
  count=$((count + 1))
done
```

## 函数

```bash
greet() {
  local name=$1      # local 限制作用域
  echo "Hello, $name"
}

greet "Shell"
```

## 实用脚本示例

### 批量重命名

```bash
#!/bin/bash
for file in *.jpeg; do
  mv "$file" "${file%.jpeg}.jpg"
done
echo "重命名完成"
```

### 自动备份

```bash
#!/bin/bash
BACKUP_DIR="/backup/$(date +%Y%m%d)"
mkdir -p "$BACKUP_DIR"
cp -r /home/user/project "$BACKUP_DIR/"
echo "备份完成: $BACKUP_DIR"
```

## 下一步

→ [用户与权限](/linux/permissions)
