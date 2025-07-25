#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 开始部署到Netlify...');

try {
  // 检查是否安装了Netlify CLI
  try {
    execSync('netlify --version', { stdio: 'ignore' });
  } catch (error) {
    console.log('📦 安装Netlify CLI...');
    execSync('npm install -g netlify-cli', { stdio: 'inherit' });
  }

  // 构建项目
  console.log('🔨 构建项目...');
  execSync('npm run build', { stdio: 'inherit' });

  // 检查dist目录是否存在
  const distPath = path.join(process.cwd(), 'dist');
  if (!fs.existsSync(distPath)) {
    throw new Error('构建失败：dist目录不存在');
  }

  // 部署到Netlify
  console.log('🌐 部署到Netlify...');
  
  // 如果是第一次部署，需要先创建站点
  try {
    execSync('netlify deploy --prod --dir=dist', { stdio: 'inherit' });
  } catch (error) {
    console.log('🆕 首次部署，创建新站点...');
    execSync('netlify deploy --prod --dir=dist --open', { stdio: 'inherit' });
  }

  console.log('✅ 部署成功！');
  
} catch (error) {
  console.error('❌ 部署失败:', error.message);
  process.exit(1);
}