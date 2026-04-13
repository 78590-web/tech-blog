# Linux 基础命令

Linux 是服务器领域最主流的操作系统，掌握命令行是必备技能。

## 文件与目录

```bash
pwd                    # 查看当前目录
ls -la                 # 列出所有文件（含隐藏）
cd /home/user          # 切换目录
mkdir -p project/src   # 递归创建目录
cp file.txt backup/    # 复制文件
mv old.txt new.txt     # 移动/重命名
rm -r directory/       # 递归删除目录（⚠️ 谨慎使用）
```

## 文件查看

```bash
cat file.txt           # 查看完整内容
less file.txt          # 分页查看（q 退出）
head -n 20 file.txt    # 查看前 20 行
tail -n 20 file.txt    # 查看后 20 行
tail -f log.txt        # 实时追踪日志（Ctrl+C 退出）
```

## 搜索

```bash
grep "error" log.txt            # 在文件中搜索关键词
grep -r "TODO" src/             # 递归搜索目录
grep -i "warning" log.txt       # 忽略大小写
find / -name "*.conf" 2>/dev/null  # 按文件名查找
```

## 系统信息

```bash
uname -a               # 系统信息
df -h                  # 磁盘使用
free -h                # 内存使用
top                    # 实时进程（q 退出）
ps aux                 # 所有进程
whoami                 # 当前用户
```

## 网络命令

```bash
ping google.com        # 测试连通性
curl https://api.example.com   # HTTP 请求
wget https://example.com/file.zip  # 下载文件
netstat -tlnp          # 查看端口占用
ss -tlnp               # 同上（更新替代）
```

## 压缩与解压

```bash
tar -czf archive.tar.gz folder/    # 压缩
tar -xzf archive.tar.gz            # 解压 .tar.gz
unzip file.zip                     # 解压 .zip
```

## 快捷键

| 快捷键 | 功能 |
|--------|------|
| `Ctrl+C` | 中断当前命令 |
| `Ctrl+Z` | 挂起当前命令 |
| `Ctrl+R` | 搜索历史命令 |
| `Tab` | 自动补全 |
| `↑` / `↓` | 翻阅历史命令 |

## 下一步

→ [文件系统管理](/linux/file-system) · [Shell 脚本](/linux/shell-script) · [用户与权限](/linux/permissions)
