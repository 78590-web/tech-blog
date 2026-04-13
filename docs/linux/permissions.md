# Linux 用户与权限

Linux 是多用户系统，权限管理是安全和协作的基础。

## 用户管理

```bash
# 查看当前用户
whoami

# 创建用户
sudo useradd -m -s /bin/bash newuser    # -m 创建主目录, -s 指定 shell

# 设置密码
sudo passwd newuser

# 删除用户
sudo userdel -r newuser                 # -r 同时删除主目录

# 切换用户
su - newuser                            # 切换到 newuser

# 临时提权
sudo command                            # 以 root 权限执行
```

## 用户组

```bash
# 创建组
sudo groupadd developers

# 将用户加入组
sudo usermod -aG developers newuser     # -aG 追加到组

# 查看用户所属组
groups newuser

# 查看组成员
getent group developers
```

## 文件权限

```
-rwxr-xr-- 1 owner group 4096 Jan 1 file.txt
│├──┤├──┤├──┤
│ │   │   └── 其他人 (Other): r-- (4)
│ │   └────── 组 (Group): r-x (5)
│ └────────── 所有者 (Owner): rwx (7)
└──────────── 类型: - 文件, d 目录, l 链接
```

### 权限值

| 权限 | 字符 | 数值 |
|------|------|------|
| 读 | r | 4 |
| 写 | w | 2 |
| 执行 | x | 1 |

### 修改权限

```bash
# 数字方式（推荐）
chmod 755 script.sh    # rwxr-xr-x
chmod 644 config.yaml  # rw-r--r--
chmod 600 .env         # rw-------

# 符号方式
chmod u+x script.sh    # 给所有者加执行权限
chmod g+w file.txt     # 给组加写权限
chmod o-r file.txt     # 移除其他人的读权限
```

### 修改所有者

```bash
chown user:group file.txt    # 改所有者和组
chown -R user:group dir/     # 递归修改
```

## 常见权限场景

| 文件类型 | 推荐权限 | 说明 |
|---------|---------|------|
| 脚本文件 | 755 | 所有者可执行，其他人可读 |
| 配置文件 | 644 | 所有者可写，其他人只读 |
| 私密文件 | 600 | 仅所有者可读写 |
| 目录 | 755 | 需要执行权限才能 cd 进入 |
| .env 等 | 600 | 含敏感信息，严格限制 |

## sudo 配置

```bash
# 编辑 sudoers 文件（必须用 visudo，不要直接编辑）
sudo visudo

# 允许用户免密执行特定命令
# newuser ALL=(ALL) NOPASSWD: /usr/bin/systemctl restart nginx
```
