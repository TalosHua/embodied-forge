# Embodied Forge

TalosHua 的具身智能、机器人学习与真实世界工程知识站。

## 添加一篇内容

1. 在 `content/projects`、`content/papers`、`content/tutorials`、`content/notes` 或 `content/topics` 下新建 Markdown。
2. 在文件顶部填写标题、简介、类型、状态、日期和标签。
3. 推送到 `main`，GitHub Pages 会自动构建和发布。

```md
---
title: 文章标题
description: 一句话简介
type: ENGINEERING TUTORIAL
status: DRAFT
date: 2026-09-07
tags: CAN · Actuator
---

## 第一节

正文内容。
```

本地预览构建：

```bash
node scripts/build.mjs
```

生成结果位于 `_site/`。
