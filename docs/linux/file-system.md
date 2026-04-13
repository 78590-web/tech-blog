# Linux 文件系统管理

理解 Linux 文件系统结构，是高效使用 Linux 的基础。

## 目录结构

```
/           根目录
├── bin/    基本命令（ls, cp, mv 等）
├── etc/    系统配置文件
├── home/   用户主目录
│   ├── user1/
│   └── user2/
├── var/    可变数据（日志、缓存）
│   └── log/   系统日志
├── tmp/    临时文件
├── usr/    用户程序
│   ├── bin/   用户命令
│   └── local/ 本地编译安装
├── opt/    第三方软件
├── dev/    设备文件
├── proc/   进程信息（虚拟文件系统）
└── root/   root 用户主目录
```

## 磁盘管理

```bash
# 查看磁盘使用
df -h                    # 各分区使用情况
du -sh /home/user       # 某目录总大小
du -sh * | sort -rh     # 当前目录下各子目录大小排序

# 挂载与卸载
mount /dev/sdb1 /mnt     # 挂载设备
umount /mnt              # 卸载
```

## 软链接与硬链接

```bash
# 软链接（类似快捷方式，最常用）
ln -s /path/to/target link_name

# 硬链接（指向相同数据块）
ln /path/to/target link_name

# 查看链接指向
ls -la link_name
readlink link_name
```

## 文件查找

```bash
# 按名称查找
find / -name "nginx.conf" 2>/dev/null

# 按类型查找
find . -type d            # 只找目录
find . -type f -name "*.js"  # 只找 JS 文件

# 按时间查找
find . -mtime -7          # 7天内修改的文件
find . -mmin -60          # 60分钟内修改的文件

# 按大小查找
find . -size +100M        # 大于 100MB 的文件
```

## 下一步

→ [Shell 脚本](/linux/shell-script) · [用户与权限](/linux/permissions)
