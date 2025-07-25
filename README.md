# 智昌具身智能官网

> 连接现实与数字世界的桥梁 - 智能机器人云边协同操作系统

## 🌟 项目简介

智昌具身智能官网是展示智昌科技集团核心产品和技术能力的现代化网站，包含CavOS系统、CavScada监控、CavData服务等核心产品展示。网站采用Vue 3 + Vite构建，具有完整的H5移动端适配和现代化UI设计。

## 🚀 核心特性

### 📱 完整H5移动端适配
- ✅ 响应式导航系统
- ✅ 触摸友好的交互设计
- ✅ 汉堡菜单和侧滑导航
- ✅ 完美适配各种移动设备

### 🎨 现代化设计
- ✅ 渐变色彩和动画效果
- ✅ 3D视觉元素和交互
- ✅ 神经网络风格UI
- ✅ 暗色主题设计

### 🛠 技术栈
- **前端框架**: Vue 3 + Composition API
- **构建工具**: Vite 4
- **3D渲染**: Three.js + Spline
- **样式**: CSS3 + 自定义变量
- **部署**: Netlify + GitHub Actions

## 📦 快速开始

### 环境要求
- Node.js >= 16.0.0
- npm >= 8.0.0

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```
访问 http://localhost:5173

### 构建生产版本
```bash
npm run build
```

### 预览构建结果
```bash
npm run preview
```

## 🌐 部署方式

### 1. 自动部署到Netlify（推荐）

#### GitHub Actions自动部署
1. 配置GitHub Secrets：
   - `NETLIFY_AUTH_TOKEN`: Netlify访问令牌
   - `NETLIFY_SITE_ID`: Netlify站点ID

2. 推送代码到main分支，自动触发部署

#### 手动部署
```bash
# 使用部署脚本
npm run netlify:deploy

# 或者直接部署
npm run netlify:build
```

### 2. CloudStudio部署
项目已部署到CloudStudio：
- 预览地址: http://45f8f9de730c4b378c99e5131a92e0e1.ap-singapore.myide.io

### 3. Docker部署
```bash
# 构建镜像
npm run docker:build

# 运行容器
npm run docker:run

# 使用docker-compose
npm run docker:prod
```

## 📱 移动端功能

### 导航系统
- **汉堡菜单**: 三条横线按钮，点击展开导航
- **侧滑菜单**: 从左侧滑出的全屏导航菜单
- **触摸优化**: 大尺寸按钮，适合手指操作
- **动画效果**: 流畅的CSS3动画和过渡

### 响应式布局
- **桌面端**: 保持原有导航栏设计
- **平板端**: 自适应布局调整
- **手机端**: 完全重新设计的移动界面
- **超小屏**: 全屏菜单和优化布局

## 🏗 项目结构

```
cavos-website/
├── src/
│   ├── components/          # Vue组件
│   │   ├── MobileNav.vue   # 移动端导航组件
│   │   ├── HomeContent.vue # 首页内容
│   │   ├── CavOSContent.vue # CavOS系统页面
│   │   ├── CavScadaContent.vue # CavScada监控页面
│   │   └── CavDataContent.vue # CavData服务页面
│   ├── styles/             # 样式文件
│   │   ├── global.css      # 全局样式
│   │   └── variables.css   # CSS变量
│   ├── App.vue            # 主应用组件
│   └── main.js            # 应用入口
├── public/                # 静态资源
├── .github/workflows/     # GitHub Actions
├── scripts/               # 部署脚本
├── netlify.toml          # Netlify配置
├── DEPLOYMENT.md         # 部署指南
└── README.md            # 项目说明
```

## 🎯 核心产品

### CavOS系统
- 智能机器人云边协同操作系统
- 多智能体协同架构
- 双协议设计（智能体协议 + 设备管理协议）
- 六层智能分级体系

### CavScada监控
- 实时数据监控和可视化
- 工业级SCADA系统
- 多维度数据分析
- 智能告警和预警

### CavData服务
- 大数据处理和分析
- 机器学习模型训练
- 数据可视化展示
- API服务接口

## 🔧 开发指南

### 添加新页面
1. 在`src/components/`创建新的Vue组件
2. 在`App.vue`中注册组件
3. 更新导航菜单项
4. 添加路由逻辑

### 移动端适配
- 使用`@media (max-width: 768px)`媒体查询
- 确保触摸目标至少48px
- 测试各种屏幕尺寸
- 优化加载性能

### 样式规范
- 使用CSS变量定义颜色和尺寸
- 遵循BEM命名规范
- 保持响应式设计
- 使用现代CSS特性

## 📊 性能优化

- ✅ 代码分割和懒加载
- ✅ 图片压缩和优化
- ✅ CSS和JS压缩
- ✅ Gzip压缩
- ✅ CDN加速
- ✅ 缓存策略

## 🔒 安全配置

- ✅ HTTPS强制重定向
- ✅ 安全头部设置
- ✅ XSS防护
- ✅ 内容安全策略
- ✅ 防点击劫持

## 🤝 贡献指南

1. Fork项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建Pull Request

## 📄 许可证

本项目采用MIT许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 📞 联系我们

- **官网**: https://cavos-website.vercel.app
- **GitHub**: https://github.com/CavaiLAB/cavos-website
- **邮箱**: contact@cavai.com

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者和设计师！

---

**智昌科技集团** - 具身智能时代的先行者