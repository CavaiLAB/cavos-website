# 部署指南

## 自动部署到Netlify

### 方法一：GitHub Actions自动部署（推荐）

1. **设置Netlify账户**
   - 登录 [Netlify](https://netlify.com)
   - 创建新站点或获取现有站点ID

2. **配置GitHub Secrets**
   在GitHub仓库设置中添加以下Secrets：
   ```
   NETLIFY_AUTH_TOKEN: 你的Netlify访问令牌
   NETLIFY_SITE_ID: 你的Netlify站点ID
   ```

3. **获取Netlify访问令牌**
   - 访问 [Netlify用户设置](https://app.netlify.com/user/applications#personal-access-tokens)
   - 点击"New access token"
   - 复制生成的令牌

4. **获取站点ID**
   - 在Netlify控制台选择你的站点
   - 进入Site settings > General
   - 复制Site ID

5. **自动部署**
   - 推送代码到main分支
   - GitHub Actions会自动构建并部署到Netlify

### 方法二：手动部署

1. **安装Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **登录Netlify**
   ```bash
   netlify login
   ```

3. **使用脚本部署**
   ```bash
   npm run netlify:deploy
   ```

4. **或者手动部署**
   ```bash
   # 构建项目
   npm run build
   
   # 部署到生产环境
   netlify deploy --prod --dir=dist
   
   # 或者先预览部署
   netlify deploy --dir=dist
   ```

### 方法三：直接从Git部署

1. 在Netlify控制台点击"New site from Git"
2. 选择你的GitHub仓库
3. 设置构建配置：
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18`

## 配置说明

### netlify.toml
项目根目录的`netlify.toml`文件包含了：
- 构建设置
- 重定向规则（SPA支持）
- 缓存优化
- 安全头部设置

### GitHub Actions
`.github/workflows/deploy.yml`文件配置了：
- 自动构建流程
- Node.js环境设置
- 依赖安装和构建
- 自动部署到Netlify

## 环境变量

如果项目需要环境变量，可以在以下位置设置：

1. **Netlify控制台**
   - Site settings > Environment variables

2. **本地开发**
   - 创建`.env.local`文件
   - 添加环境变量

3. **GitHub Actions**
   - 在仓库Secrets中添加

## 域名配置

1. **自定义域名**
   - 在Netlify控制台：Site settings > Domain management
   - 添加自定义域名
   - 配置DNS记录

2. **HTTPS**
   - Netlify自动提供Let's Encrypt SSL证书
   - 强制HTTPS重定向

## 性能优化

项目已配置：
- 静态资源缓存（1年）
- Gzip压缩
- 图片优化
- 代码分割

## 监控和分析

可以在Netlify控制台查看：
- 部署历史
- 访问统计
- 性能指标
- 错误日志

## 故障排除

### 常见问题

1. **构建失败**
   - 检查Node.js版本
   - 确认依赖安装正确
   - 查看构建日志

2. **路由404错误**
   - 确认`netlify.toml`中的重定向规则
   - 检查SPA路由配置

3. **静态资源加载失败**
   - 检查资源路径
   - 确认构建输出正确

### 调试命令

```bash
# 本地预览构建结果
npm run preview

# 检查构建输出
ls -la dist/

# 测试Netlify配置
netlify dev