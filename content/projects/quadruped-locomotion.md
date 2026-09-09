---
title: Locomotion
description: 基于 MJLab 训练与评估运动策略，并部署到 Unitree Go2 展示真实世界效果。
type: PROJECT
status: IN PROGRESS
date: 2026-09-07
tags: Quadruped · RL · Sim2Real
---
## 项目目标
以 Unitree Go2 为实机平台，目标不是只让四足机器人“能走”，而是得到能够连续响应速度和转向指令、在不同速度段切换步态，并保留自然运动风格的统一策略。每个阶段模型都会记录训练设定，并展示对应的仿真与实机视频效果。

## 当前技术路线
- Stage 1：使用 ADD 或高精度模仿方法训练单技能专家。
- Stage 2：通过 DAgger 与 Flow Matching 蒸馏统一基础策略。
- Stage 3：使用 Residual PPO 完成连续指令、鲁棒性和 Sim2Real 微调。

## 正在解决的问题
目前重点关注低速 Walk 的半周期速度不对称、多个动作片段混合时的模式崩塌，以及仿真到实机后的动作僵硬问题。

> 这里会保留成功结果，也记录失败尝试和能够复用的诊断过程。

## 计划公开内容
- 训练配置与奖励设计
- 动作数据组织方式
- 评估指标与可视化脚本
- 实机部署架构和问题记录
