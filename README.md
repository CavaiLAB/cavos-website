# 智昌科技官网

基于 Vue 3 + Vite 构建的现代化企业官网，展示智昌科技在智能机器人领域的核心技术和解决方案。

## 🚀 特性

- **现代化技术栈**: Vue 3 + Vite + CSS3
- **响应式设计**: 适配各种设备屏幕
- **动画效果**: 流畅的交互动画和视觉效果
- **模块化架构**: 清晰的代码结构和组件化设计
- **快速部署**: 支持多种部署方式

## 📦 技术栈

- **前端框架**: Vue 3
- **构建工具**: Vite
- **样式**: CSS3 + Flexbox + Grid
- **部署**: Vercel / Docker

## 🛠️ 开发环境设置

### 前置要求

- Node.js >= 16.0.0
- npm 或 pnpm

### 安装依赖

```bash
# 使用 npm
npm install

# 或使用 pnpm
pnpm install
```

### 启动开发服务器

```bash
# 使用 npm
npm run dev

# 或使用 pnpm
pnpm dev
```

访问 [http://localhost:5173](http://localhost:5173) 查看网站。

### 构建生产版本

```bash
# 使用 npm
npm run build

# 或使用 pnpm
pnpm build
```

## 🐳 Docker 部署

### 使用 Docker

```bash
# 构建镜像
docker build -t cavos-website .

# 运行容器
docker run -p 3000:3000 cavos-website
```

### 使用 Docker Compose

```bash
# 启动服务
docker-compose up -d

# 停止服务
docker-compose down
```

## ☁️ Vercel 部署

### 一键部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CavaiLAB/cavos-website)

### 手动部署

1. Fork 此仓库
2. 在 [Vercel](https://vercel.com) 中导入项目
3. 配置构建设置（通常自动检测）
4. 部署完成

### 环境变量

如需配置环境变量，请在 Vercel 项目设置中添加：

```
# 示例环境变量
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=智昌科技
```

## 📁 项目结构

```
cavos-website/
├── src/
│   ├── App.vue          # 主应用组件
│   ├── main.js          # 应用入口
│   └── styles/
│       └── global.css   # 全局样式
├── public/              # 静态资源
├── index.html           # HTML 模板
├── package.json         # 项目配置
├── vite.config.js       # Vite 配置
├── Dockerfile           # Docker 配置
├── docker-compose.yml   # Docker Compose 配置
└── vercel.json          # Vercel 配置
```

## 🎨 主要功能模块

- **首页展示**: 企业形象和核心价值展示
- **解决方案**: 智能制造、仓储物流、服务机器人
- **核心优势**: 技术优势和性能指标
- **技术规格**: 详细的技术参数
- **公司介绍**: 企业愿景和发展历程

## 🔧 自定义配置

### 修改主题色彩

在 `src/styles/global.css` 中修改 CSS 变量：

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  /* 其他颜色变量 */
}
```

### 添加新页面

1. 在 `src/` 目录下创建新的 Vue 组件
2. 在 `App.vue` 中引入并注册
3. 添加相应的路由和导航

## 📝 开发指南

### 代码规范

- 使用 ES6+ 语法
- 组件名使用 PascalCase
- CSS 类名使用 kebab-case
- 保持代码简洁和可读性

### 提交规范

```bash
# 功能添加
git commit -m "feat: 添加新功能"

# 问题修复
git commit -m "fix: 修复某个问题"

# 样式更新
git commit -m "style: 更新样式"
```

## 🤝 贡献

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系我们

- **官网**: [https://www.zhichangtech.com](https://www.zhichangtech.com)
- **邮箱**: contact@zhichangtech.com
- **GitHub**: [https://github.com/CavaiLAB](https://github.com/CavaiLAB)

---

© 2024 智昌科技集团. 保留所有权利。