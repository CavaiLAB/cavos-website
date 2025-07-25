<template>
  <div class="mobile-nav" :class="{ 'nav-open': isNavOpen }">
    <!-- 顶部导航栏 -->
    <div class="nav-header">
      <div class="nav-brand">
        <div class="brand-icon">智昌</div>
        <div class="brand-text">智昌具身智能</div>
      </div>
      <div class="nav-toggle" @click="toggleNav">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    
    <!-- 侧滑导航菜单 -->
    <nav class="nav-menu" :class="{ 'active': isNavOpen }">
      <div class="menu-header">
        <h3>智昌具身智能平台</h3>
        <p class="nav-subtitle">连接现实与数字世界</p>
        <button class="close-btn" @click="closeNav">&times;</button>
      </div>
      <ul class="nav-list">
        <li class="nav-item" @click="navigateTo('home')">
          <i class="icon-home"></i>
          <span>首页</span>
        </li>
        <li class="nav-item" @click="navigateTo('cavos')">
          <i class="icon-system"></i>
          <span>CavOS系统</span>
        </li>
        <li class="nav-item" @click="navigateTo('cavscada')">
          <i class="icon-monitor"></i>
          <span>CavScada监控</span>
        </li>
        <li class="nav-item" @click="navigateTo('cavdata')">
          <i class="icon-data"></i>
          <span>CavData服务</span>
        </li>
        <li class="nav-item" @click="navigateTo('about')">
          <i class="icon-about"></i>
          <span>关于智昌</span>
        </li>
        <li class="nav-item" @click="navigateTo('contact')">
          <i class="icon-contact"></i>
          <span>联系我们</span>
        </li>
      </ul>
    </nav>
    
    <!-- 遮罩层 -->
    <div class="nav-overlay" :class="{ 'active': isNavOpen }" @click="closeNav"></div>
  </div>
</template>

<script>
export default {
  name: 'MobileNav',
  data() {
    return {
      isNavOpen: false
    }
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
      // 防止背景滚动
      if (this.isNavOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    },
    closeNav() {
      this.isNavOpen = false;
      document.body.style.overflow = 'auto';
    },
    navigateTo(section) {
      // 处理特殊导航项
      if (section === 'about') {
        // 滚动到关于我们部分
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (section === 'contact') {
        // 滚动到联系我们部分
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // 发送导航事件给父组件
        this.$emit('navigate', section);
      }
      this.closeNav();
    }
  },
  beforeUnmount() {
    // 组件销毁时恢复滚动
    document.body.style.overflow = 'auto';
  }
}
</script>

<style scoped>
.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10, 14, 26, 0.95);
  backdrop-filter: blur(20px);
  padding: 12px 20px;
  display: none;
  border-bottom: 1px solid rgba(0, 212, 255, 0.2);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-icon {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #00d4ff 0%, #667eea 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 14px;
  box-shadow: 0 4px 12px rgba(0, 212, 255, 0.3);
}

.brand-text {
  color: #f8fafc;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

/* 汉堡菜单按钮 */
.nav-toggle {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 32px;
  height: 28px;
  justify-content: space-between;
  padding: 4px;
  border-radius: 6px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-toggle:hover {
  background: rgba(0, 212, 255, 0.1);
}

.nav-toggle span {
  display: block;
  height: 2px;
  width: 100%;
  background: linear-gradient(90deg, #00d4ff, #667eea);
  border-radius: 2px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

.nav-open .nav-toggle span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.nav-open .nav-toggle span:nth-child(2) {
  opacity: 0;
  transform: scale(0);
}

.nav-open .nav-toggle span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* 导航菜单 */
.nav-menu {
  position: fixed;
  top: 0;
  left: -100%;
  width: 320px;
  height: 100vh;
  background: linear-gradient(180deg, 
    rgba(10, 14, 26, 0.98) 0%,
    rgba(26, 31, 46, 0.98) 50%,
    rgba(45, 55, 72, 0.98) 100%
  );
  backdrop-filter: blur(20px);
  transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 4px 0 30px rgba(0, 0, 0, 0.5);
  border-right: 1px solid rgba(0, 212, 255, 0.2);
}

.nav-menu.active {
  left: 0;
}

.menu-header {
  padding: 30px 25px 25px;
  border-bottom: 1px solid rgba(0, 212, 255, 0.2);
  background: rgba(0, 212, 255, 0.05);
  position: relative;
}

.menu-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #00d4ff, #667eea);
}

.menu-header h3 {
  color: #f8fafc;
  margin: 0 0 8px 0;
  font-size: 20px;
  font-weight: 700;
  background: linear-gradient(135deg, #00d4ff, #667eea);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-subtitle {
  color: #94a3b8;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.5px;
  margin: 0;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.3);
  color: #00d4ff;
  font-size: 20px;
  cursor: pointer;
  padding: 0;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: rgba(0, 212, 255, 0.2);
  transform: scale(1.05);
}

.nav-list {
  list-style: none;
  padding: 20px 0;
  margin: 0;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 16px 25px;
  color: #cbd5e1;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 1px solid rgba(203, 213, 225, 0.1);
  position: relative;
  margin: 0 10px;
  border-radius: 12px;
  margin-bottom: 4px;
}

.nav-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, #00d4ff, #667eea);
  border-radius: 0 4px 4px 0;
  transform: scaleY(0);
  transition: transform 0.3s ease;
}

.nav-item:hover {
  background: rgba(0, 212, 255, 0.1);
  color: #f8fafc;
  transform: translateX(8px);
  border-color: rgba(0, 212, 255, 0.3);
}

.nav-item:hover::before {
  transform: scaleY(1);
}

.nav-item:active {
  transform: translateX(4px) scale(0.98);
}

.nav-item i {
  margin-right: 16px;
  font-size: 20px;
  width: 24px;
  text-align: center;
  background: rgba(0, 212, 255, 0.1);
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.nav-item:hover i {
  background: rgba(0, 212, 255, 0.2);
  transform: scale(1.1);
}

.nav-item span {
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.3px;
}

/* 图标样式 */
.icon-home::before { content: '🏠'; }
.icon-system::before { content: '⚙️'; }
.icon-monitor::before { content: '📊'; }
.icon-data::before { content: '💾'; }
.icon-about::before { content: '🏢'; }
.icon-contact::before { content: '📞'; }

/* 遮罩层 */
.nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(2px);
}

.nav-overlay.active {
  opacity: 1;
  visibility: visible;
}

/* 移动端显示 */
@media (max-width: 768px) {
  .mobile-nav {
    display: block;
  }
}

/* 超小屏幕适配 */
@media (max-width: 480px) {
  .nav-menu {
    width: 100%;
    left: -100%;
  }
  
  .nav-item {
    margin: 0 15px;
    padding: 18px 20px;
  }
  
  .menu-header {
    padding: 25px 20px 20px;
  }
}

/* 添加进入动画 */
.nav-menu.active .nav-item {
  animation: slideInLeft 0.4s ease forwards;
  opacity: 0;
}

.nav-menu.active .nav-item:nth-child(1) { animation-delay: 0.1s; }
.nav-menu.active .nav-item:nth-child(2) { animation-delay: 0.15s; }
.nav-menu.active .nav-item:nth-child(3) { animation-delay: 0.2s; }
.nav-menu.active .nav-item:nth-child(4) { animation-delay: 0.25s; }
.nav-menu.active .nav-item:nth-child(5) { animation-delay: 0.3s; }
.nav-menu.active .nav-item:nth-child(6) { animation-delay: 0.35s; }

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* 添加脉冲动画给品牌图标 */
.brand-icon {
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 4px 12px rgba(0, 212, 255, 0.3);
  }
  50% {
    box-shadow: 0 4px 20px rgba(0, 212, 255, 0.5);
  }
}
</style>