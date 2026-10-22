# 我的待办清单

一个用纯 HTML / CSS / JavaScript 写的待办清单网页，也是我学习 Git 与 GitHub 的练习项目。

## 功能

- **添加任务**：输入内容后按回车或点「添加」
- **标记完成**：点击任务文字，切换完成 / 未完成（显示删除线）
- **删除任务**：点击任务右侧的 ×
- **自动保存**：数据保存在浏览器 localStorage，刷新页面不会丢失

## 技术栈

- **HTML5**：语义化页面结构
- **CSS3**：Flexbox、Grid、CSS 变量、过渡动画
- **原生 JavaScript**：DOM 操作、事件监听、localStorage
- 无框架、无构建步骤，打开即可运行

## 本地运行

```bash
git clone https://github.com/shangguannihuan/my-first-test.git
```

用 VS Code 打开文件夹，安装 **Live Server** 扩展后右键 `index.html` → **Open with Live Server**。

也可以直接双击 `index.html` 用浏览器打开；但建议用 Live Server（`file://` 和本地服务器的存储位置不同，直接用文件打开时数据可能看起来“丢了”）。

## 项目结构

```
my-first-test/
├── index.html    # 页面结构
├── style.css     # 样式
├── app.js        # 交互逻辑与 localStorage
└── README.md     # 项目说明（本文件）
```

## 学习记录

这个仓库同时记录了我学习 GitHub 的过程：

- 第一次创建仓库、网页编辑与 commit
- 用分支 + Pull Request 完成一次合并
- 在 VS Code 本地完成编辑、提交、推送
- 用“小步提交”的方式，把待办清单从一个静态页面做成了一个能用的应用
