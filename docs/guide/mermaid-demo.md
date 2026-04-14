# Mermaid 图表使用指南

你的 VitePress 博客现在已经支持 Mermaid 图表了！以下是各种图表的使用示例。

## 流程图 (Flowchart)

```mermaid
flowchart TD
    A[开始] --> B{判断条件}
    B -->|条件成立| C[执行操作1]
    B -->|条件不成立| D[执行操作2]
    C --> E[结束]
    D --> E
```

## 时序图 (Sequence Diagram)

```mermaid
sequenceDiagram
    participant 用户
    participant 浏览器
    participant 服务器
    
    用户->>浏览器: 输入网址
    浏览器->>服务器: 发送 HTTP 请求
    服务器-->>浏览器: 返回 HTML 内容
    浏览器-->>用户: 渲染页面
```

## 类图 (Class Diagram)

```mermaid
classDiagram
    class Animal {
        +String name
        +int age
        +makeSound()
    }
    class Dog {
        +fetch()
    }
    class Cat {
        +climb()
    }
    Animal <|-- Dog
    Animal <|-- Cat
```

## Git 分支图 (Git Graph)

```mermaid
gitGraph
    commit
    commit
    branch develop
    checkout develop
    commit
    commit
    checkout main
    merge develop
    commit
    branch feature
    checkout feature
    commit
    checkout main
    merge feature
```

## 思维导图 (Mindmap)

```mermaid
mindmap
  root((Linux))
    文件系统
      目录结构
      文件权限
      磁盘管理
    进程管理
      进程查看
      进程控制
      后台任务
    网络配置
      IP配置
      防火墙
      SSH服务
    Shell脚本
      变量
      条件判断
      循环
```

## 如何在笔记中使用

在 Markdown 文件中，使用代码块并标注 `mermaid` 即可：

````markdown
```mermaid
flowchart TD
    A[开始] --> B[结束]
```
````

常用图表类型：
- `flowchart` - 流程图
- `sequenceDiagram` - 时序图
- `classDiagram` - 类图
- `stateDiagram` - 状态图
- `erDiagram` - ER 图（实体关系图）
- `gitGraph` - Git 分支图
- `mindmap` - 思维导图
- `gantt` - 甘特图
- `pie` - 饼图

更多语法参考：[Mermaid 官方文档](https://mermaid.js.org/intro/)
