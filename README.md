# CavOS - 具身智能AaaS平台

> 智能机器人云边协同操作系统，连接现实与数字世界的桥梁

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CavaiLAB/cavos-website)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen)](https://nodejs.org/)

## 🌟 项目简介

CavOS是智昌科技集团开发的具身智能AaaS（Agent as a Service）平台官网，展示了智能机器人云边协同操作系统的核心功能和技术架构。该平台让每个机器人都拥有智慧大脑，让智能无处不在。

### 🎯 核心特色

- **🧠 智能大脑** - 先进的AI模型和算法
- **⚡ 实时响应** - 毫秒级的决策和执行
- **🌐 云边协同** - 云端智能与边缘计算完美结合
- **🔗 万物互联** - 连接现实与数字世界

## 🚀 技术栈

- **前端框架**: Vue 3.3.4
- **构建工具**: Vite 4.4.9
- **3D渲染**: Three.js 0.178.0 + Spline Runtime
- **样式方案**: 原生CSS3 + CSS Grid + Flexbox
- **部署平台**: Vercel / Docker
- **开发语言**: JavaScript (ES6+)

## 📦 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm >= 8.0.0

### 安装与运行

```bash
# 克隆项目
git clone https://github.com/CavaiLAB/cavos-website.git
cd cavos-website

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:5173
```

### 构建部署

```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 🐳 Docker 部署

### 快速启动

```bash
# 构建并运行
npm run docker:build
npm run docker:run

# 或使用 Docker Compose
npm run docker:prod
```

### Docker Compose 配置

```bash
# 开发环境
npm run docker:dev

# 生产环境
npm run docker:prod

# 停止服务
npm run docker:stop
```

## 🏗️ 项目架构

```
cavos-website/
├── src/
│   ├── App.vue              # 主应用组件（单页面应用）
│   ├── main.js              # Vue应用入口
│   ├── img/                 # 图片资源
│   │   └── 3d.png
│   └── styles/
│       └── global.css       # 全局样式和设计系统
├── public/                  # 静态资源
├── .claude/                 # Claude AI配置
├── index.html               # HTML模板
├── package.json             # 项目配置
├── vite.config.js           # Vite构建配置
├── Dockerfile               # Docker镜像配置
├── docker-compose.yml       # Docker Compose配置
├── vercel.json              # Vercel部署配置
└── README.md                # 项目文档
```

## 🎨 功能模块

### 核心功能展示

1. **模型接入模块** - 统一AI模型接入和管理
   - 大语言模型接入
   - 具身模型支持
   - 计算机视觉模型
   - 统一框架协同

2. **工作流引擎** - 可视化流程设计平台
   - 可视化流程设计
   - 智能体工作流
   - 软硬件混编
   - 实时调试部署

3. **智能体构建** - 低代码智能体开发
   - Prompt工程
   - 知识库集成
   - MCP/A2A/ACP协议
   - 低代码构建

4. **运营监控** - 实时监控和管理
   - 3D可视化监控
   - 性能实时监控
   - 异常智能检测
   - AgentOps运维

5. **模型训练** - 持续学习优化
   - 训练任务管理
   - 数据可视化分析
   - 数据集智能管理
   - 持续学习优化

6. **MCP市场** - 开放生态市场
   - MCP组件市场
   - 即插即用集成
   - 收益分成机制
   - 标准化API接入

### 技术架构层次

- **应用层**: 基础模型、数据分析、业务应用、智能体系统、多智能体协同
- **核心层**: 云端智能CavBrain、边缘智能CavVLA、任务规划、模型服务、共享记忆
- **通信层**: 智能体协议MCP/A2A/ACP、Cav Management Protocol设备管理
- **执行层**: API接口、数据系统、机器人、机械臂、无人机

## 🎯 解决方案

- **智能制造** - 工业机器人智能化升级
- **仓储物流** - 自动化仓储和配送系统
- **服务机器人** - 商用和家用服务机器人
- **无人系统** - 无人机、无人车等自主系统

## 🔧 开发指南

### 代码规范

- 使用ES6+现代JavaScript语法
- Vue 3 Composition API优先
- CSS变量统一管理设计系统
- 响应式设计适配多端设备

### 样式系统

项目采用CSS变量构建的设计系统：

```css
:root {
  /* 颜色系统 */
  --color-neural: #00d4ff;
  --gradient-neural: linear-gradient(135deg, #00d4ff, #0099cc);
  
  /* 间距系统 */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  /* ... */
  
  /* 字体系统 */
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  /* ... */
}
```

### 动画效果

- 神经网络可视化动画
- 粒子效果背景
- 卡片悬停交互
- 渐入渐出过渡

## 📱 响应式设计

- **桌面端**: >= 1024px
- **平板端**: 768px - 1023px
- **手机端**: < 768px
- **小屏手机**: < 480px

## 🚀 部署方案

### Vercel 部署（推荐）

1. Fork 本仓库
2. 在 [Vercel](https://vercel.com) 导入项目
3. 自动检测配置并部署
4. 获得生产环境URL

### 自定义部署

```bash
# 构建静态文件
npm run build

# 部署 dist/ 目录到任意静态服务器
```

## 🤝 贡献指南

1. Fork 项目仓库
2. 创建功能分支: `git checkout -b feature/amazing-feature`
3. 提交更改: `git commit -m 'Add amazing feature'`
4. 推送分支: `git push origin feature/amazing-feature`
5. 提交 Pull Request

### 提交规范

```bash
feat: 新功能
fix: 修复问题
style: 样式更新
docs: 文档更新
refactor: 代码重构
test: 测试相关
chore: 构建/工具相关
```

## 📄 许可证

本项目基于 [MIT License](LICENSE) 开源协议。

## 📞 联系我们

- **官网**: [https://www.zhichangtech.com](https://www.zhichangtech.com)
- **GitHub**: [https://github.com/CavaiLAB](https://github.com/CavaiLAB)
- **项目主页**: [https://cavos-website.vercel.app](https://cavos-website.vercel.app)
- **技术支持**: 400-1040-788

## 🏆 关于智昌科技

智昌科技集团是具身智能时代的先行者，专注于智能机器人技术的研发和产业化应用。我们致力于让每个机器人都拥有智慧大脑，推动智能制造和服务机器人产业的发展。

### 核心数据

- 🏢 **3年销售额**: 超11亿
- 🏆 **全国百强企业案例**: 100+
- 📋 **注册商标**: 59个
- 💡 **发明专利**: 190个

---

**让智能无处不在，连接现实与数字世界** 🚀

© 2024 智昌科技集团. 保留所有权利.