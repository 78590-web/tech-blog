import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // ⚠️ 重要：仓库名就是 base 路径，部署后访问 https://78590-web.github.io/tech-blog/
  base: '/tech-blog/',

  title: '78590_TechStack',
  description: '技术栈知识文档站',

  // 默认深色主题
  appearance: 'dark',

  themeConfig: {
    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: 'HTML', link: '/html/basics' },
      { text: 'CSS', link: '/css/basics' },
      { text: 'JavaScript', link: '/javascript/basics' },
      { text: 'Linux', link: '/linux/basics' },
    ],

    // 左侧可折叠侧边栏
    sidebar: [
      {
        text: 'HTML',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '基础语法', link: '/html/basics' },
          { text: '表单与输入', link: '/html/forms' },
          { text: '语义化标签', link: '/html/semantic' },
        ]
      },
      {
        text: 'CSS',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '基础语法', link: '/css/basics' },
          { text: '布局', link: '/css/layout' },
          { text: '响应式设计', link: '/css/responsive' },
        ]
      },
      {
        text: 'JavaScript',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '基础语法', link: '/javascript/basics' },
          { text: 'DOM 操作', link: '/javascript/dom' },
          { text: '异步编程', link: '/javascript/async' },
        ]
      },
      {
        text: 'Linux',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '基础命令', link: '/linux/basics' },
          { text: '文件系统管理', link: '/linux/file-system' },
          { text: 'Shell 脚本', link: '/linux/shell-script' },
          { text: '用户与权限', link: '/linux/permissions' },
          { text: 'Shell入门', link: '/linux/shell-01-intro' }
        ]
      },
    ],

    // 社交链接（可自定义）
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ],

    // 搜索
    search: {
      provider: 'local'
    },
  }
})
