<p align="center">
  <img alt="logo" src="resource/weNjtech.png" width="200" style="margin-bottom: 10px;">
</p>
<h3 align="center">专属南工学子的校园查询程序</h3>

[TOC]

## 介绍

“微南工”微信小程序，非南京工业大学官方小程序，只致力于服务南京工业大学江浦校区的师生等，同时也是自我磨练的项目。目前主要实现了如下功能：

- 【班车查询】
  - 查询***象山线班车、亚青线班车***
  - 查询指定日期、时间班车
  - 查询指定车站之间的班车
  - ***订阅***以获得校车发车提醒（需观看10-15s不等的广告）
- 【空闲教室查询】
  - 查询当日空闲教室信息***厚学楼、浦江楼、仁智楼、同和楼***
  - 查询指定学区、时间、楼层的空闲教室
  - 对全天最长时间空闲教室进行排序
- 【校园问题查询】
  - 简单的罗列常见的校园问题
- 【课表查询】
  - 使用@Autokaka的校园课表查询APP
- 【个人资料管理】
  - 维护个人信息

## 快速体验

<p align="center">
  <img alt="logo" src="resource/promote.jpg" width="300" style="margin-bottom: 10px;">
</p>



## 开发工具

[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html )、[微信云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)、[微信小程序开发文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)、VS Code

## 使用之前

在使用本项目之前，请确保已经对微信官方的 [小程序简易教程](https://mp.weixin.qq.com/debug/wxadoc/dev/) 和[微信云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)有所了解。

本小程序分为前后端，前端采用**微信小程序**开发，后端采用微信小程序的**云开发**与自己部署的**服务器**相结合。自己部署的服务器主要用于爬取学校教务处的信息，如空教室信息等，并将这些数据全部存储在小程序云开发中。

## 主要设计

1. 查看[校车数据存储设计](resource/校车数据存储设计.md)文档
2. 查看[空教室信息爬取设计](resource/解析空教室请求.md)文档

## 版权信息

该项目签署了[MIT 授权许可](http://www.opensource.org/licenses/mit-license.php)，详情请参阅 [LICENSE](LICENSE)

## 版本

`v2.1.1`， `2020-06-05`

- `修复`  浦江楼教室无法查询问题

`v2.1.0`， `2020-06-03`

- `新增` 查询空闲教室功能
- `修改` 页面布局，简化逻辑

`v2.0.0`， `2020-04-14`

- `新增` 校车发车前提醒
- `新增` 太南课表支持
- `新增` 用户个人登陆
- `新增` 反馈功能
- `修改` 页面布局
- `修改`  项目结构，删除不必要的冗余功能

`v1.2.2`，`2019-09-23`

- `修改` 地点选择模态框动效
- `新增` 日历组件
- `新增` 版权信息
- `修改` 部分项目结构

`v1.2.1`，`2019-09-11`

- `修改` 部分显示样式
- `修改` 部分显示信息部署在数据库内
- `修改` 优化显示动画

`v1.2.0`，`2019-09-08`

- `新增` “亚青线”
- `修改` 路线存储结构
- `新增` 校车线路名称的显示

`v1.1.3`，`2019-08-30`

- `修改` 设置“前一天”在今天状态下不可选
- `修改` 部分样式
- `修改` 无车时显示bug

`v1.1.2`，`2019-08-27`

- 完善日期星期的显示
- 顶部标题栏动效
- 班车卡片备注信息可滑动
- 增加顶部日期选择栏，可以快速选择前一天/后一天
- 优化逻辑，减少重复代码
- 更改主题颜色

`v1.1.0`，`2019-08-26`

- 新增可选择日期、时间、地点查询
- 优化标题栏
- 完善查询逻辑

`v1.0.2`，`2019-08-26`

- 引入vant组件
- 优化班车信息逻辑

`v1.0.1`

- 引入colorui组件
- 完成基础的班车显示
