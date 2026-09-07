---
title: 使用 CAN 控制多关节电机：主站与从站架构
description: 一套从关节驱动板、通信协议到机器人主控的完整实现思路。
type: ENGINEERING TUTORIAL
status: PRACTICAL GUIDE
date: 2026-09-07
tags: CAN · CANopen · CiA 402
---
## 系统边界
每个关节驱动板负责 FOC、电流环、速度环、位置环和本地保护；机器人主控负责多关节同步、运动命令、安全管理和上层算法接口。

## 从站应该包含什么
- FOC 与传感器采样
- CiA 402 风格的设备状态机
- PDO 周期数据和 SDO 参数访问
- 看门狗、过流、过温和编码器故障处理

## 主站应该包含什么
主站维护每个电机的在线状态、控制模式和错误码，在固定周期内批量发送命令并收集反馈。上层控制器不应该直接拼 CAN 报文，而应操作统一的关节接口。

## 推荐代码结构
```text
drivers/can
devices/actuator
protocol/cia402
control/joint_manager
safety/supervisor
ros2/hardware_interface
```

## 控制周期
总线能达到的频率取决于波特率、每周期报文数量、帧格式和总线利用率。设计时应先计算最坏情况带宽，再决定反馈字段和发送周期。
