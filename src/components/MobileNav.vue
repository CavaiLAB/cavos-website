<template>
  <div class="mobile-nav">
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
        <h3>导航菜单</h3>
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
        <li class="nav-item" @click="navigateToSection('about')">
          <i class="icon-about"></i>
          <span>关于智昌</span>
        </li>
        <li class="nav-item" @click="navigateToSection('contact')">
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
    },
    closeNav() {
      this.isNavOpen = false;
    },
    navigateTo(section) {
      this.$emit('navigate', section);
      this.closeNav();
    },
    navigateToSection(sectionId) {
      // 滚动到指定的页面锚点
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
      this.closeNav();
    }
  }
}
</script>

<style scoped>
.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: var(--bg-overlay, rgba(10, 14, 26, 0.95));
  backdrop-filter: blur(20px);
  padding: var(--space-4, 1rem) var(--space-5, 1.25rem);
  display: none;
  border-bottom: 1px solid var(--border-neural, rgba(0, 212, 255, 0.2));
  box-shadow: var(--shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1));
  
  /* 修复iOS Safari固定定位问题 */
  -webkit-transform: translate3d(0, 0, 0);
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  
  /* 支持安全区域（刘海屏等） */
  padding-left: max(var(--space-5, 1.25rem), env(safe-area-inset-left));
  padding-right: max(var(--space-5, 1.25rem), env(safe-area-inset-right));
  padding-top: max(var(--space-4, 1rem), env(safe-area-inset-top));
  
  /* 确保宽度不溢出 */
  width: 100%;
  box-sizing: border-box;
}

.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: var(--space-3, 0.75rem);
}

.brand-icon {
  width: 40px;
  height: 40px;
  background: var(--gradient-neural, linear-gradient(135deg, #00d4ff 0%, #06b6d4 100%));
  border-radius: var(--space-2, 0.5rem);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, white);
  font-weight: 700;
  font-size: var(--font-size-sm, 0.875rem);
  box-shadow: var(--shadow-neural, 0 0 20px rgba(0, 212, 255, 0.3));
  position: relative;
  overflow: hidden;
}

.brand-icon::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left var(--duration-slow, 500ms) var(--easing-smooth, cubic-bezier(0.4, 0, 0.2, 1));
}

.brand-icon:hover::before {
  left: 100%;
}

.brand-text {
  color: var(--text-primary, #f8fafc);
  font-size: var(--font-size-lg, 1.125rem);
  font-weight: 600;
  letter-spacing: -0.025em;
}

/* 汉堡菜单按钮 */
.nav-toggle {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 32px;
  height: 28px;
  justify-content: space-between;
  padding: var(--space-1, 0.25rem);
  border-radius: var(--space-1, 0.25rem);
  transition: all var(--duration-normal, 300ms) var(--easing-smooth, cubic-bezier(0.4, 0, 0.2, 1));
}

.nav-toggle:hover {
  background: rgba(0, 212, 255, 0.1);
  transform: scale(1.05);
}

.nav-toggle span {
  display: block;
  height: 3px;
  width: 100%;
  background: var(--gradient-neural, linear-gradient(90deg, #00d4ff, #06b6d4));
  border-radius: 2px;
  transition: all var(--duration-normal, 300ms) var(--easing-smooth, cubic-bezier(0.4, 0, 0.2, 1));
  box-shadow: 0 0 8px rgba(0, 212, 255, 0.3);
}

/* 导航菜单 */
.nav-menu {
  position: fixed;
  top: 0;
  left: -320px;
  width: 300px;
  height: 100vh;
  height: 100dvh; /* 动态视口高度，避免地址栏影响 */
  background: var(--gradient-cosmic, linear-gradient(135deg, var(--color-void) 0%, var(--color-cosmos) 50%, var(--color-nebula) 100%));
  backdrop-filter: blur(20px);
  transition: left var(--duration-normal, 300ms) var(--easing-smooth, cubic-bezier(0.4, 0, 0.2, 1));
  z-index: 9998;
  border-right: 1px solid var(--border-neural, rgba(0, 212, 255, 0.2));
  box-shadow: var(--shadow-xl, 0 20px 25px -5px rgba(0, 0, 0, 0.1));
  
  /* 修复iOS Safari固定定位问题 */
  -webkit-transform: translate3d(0, 0, 0);
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  
  /* 支持安全区域 */
  padding-left: env(safe-area-inset-left);
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
}

.nav-menu.active {
  left: 0;
}

.menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-6, 1.5rem);
  border-bottom: 1px solid var(--border-color, rgba(203, 213, 225, 0.1));
  background: rgba(0, 212, 255, 0.05);
}

.menu-header h3 {
  color: var(--text-primary, #fff);
  margin: 0;
  font-size: var(--font-size-xl, 1.25rem);
  font-weight: 600;
  background: var(--gradient-neural, linear-gradient(135deg, #00d4ff 0%, #06b6d4 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.025em;
}

.close-btn {
  background: none;
  border: none;
  color: var(--text-primary, #fff);
  font-size: var(--font-size-2xl, 1.5rem);
  cursor: pointer;
  padding: var(--space-2, 0.5rem);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--space-2, 0.5rem);
  transition: all var(--duration-normal, 300ms) var(--easing-smooth, cubic-bezier(0.4, 0, 0.2, 1));
}

.close-btn:hover {
  background: rgba(0, 212, 255, 0.1);
  color: var(--color-neural, #00d4ff);
  transform: scale(1.1);
}

.nav-list {
  list-style: none;
  padding: var(--space-4, 1rem) 0;
  margin: 0;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: var(--space-4, 1rem) var(--space-6, 1.5rem);
  color: var(--text-primary, #fff);
  cursor: pointer;
  transition: all var(--duration-normal, 300ms) var(--easing-smooth, cubic-bezier(0.4, 0, 0.2, 1));
  border-bottom: 1px solid var(--border-color, rgba(203, 213, 225, 0.1));
  position: relative;
  overflow: hidden;
  margin: var(--space-1, 0.25rem) var(--space-3, 0.75rem);
  border-radius: var(--space-2, 0.5rem);
  border-bottom: none;
}

.nav-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--gradient-neural, linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.1), transparent));
  transition: left var(--duration-normal, 300ms) var(--easing-smooth, cubic-bezier(0.4, 0, 0.2, 1));
}

.nav-item:hover {
  background: rgba(0, 212, 255, 0.1);
  color: var(--color-neural, #00d4ff);
  transform: translateX(var(--space-2, 0.5rem));
  box-shadow: var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1));
}

.nav-item:hover::before {
  left: 100%;
}

.nav-item:active {
  transform: translateX(var(--space-1, 0.25rem)) scale(0.98);
}

.nav-item i {
  margin-right: var(--space-4, 1rem);
  font-size: var(--font-size-xl, 1.25rem);
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--space-1, 0.25rem);
  background: rgba(0, 212, 255, 0.1);
  transition: all var(--duration-normal, 300ms) var(--easing-smooth, cubic-bezier(0.4, 0, 0.2, 1));
}

.nav-item:hover i {
  background: var(--gradient-neural, linear-gradient(135deg, #00d4ff 0%, #06b6d4 100%));
  color: var(--text-primary, white);
  transform: scale(1.1);
  box-shadow: var(--shadow-neural, 0 0 20px rgba(0, 212, 255, 0.3));
}

.nav-item span {
  font-size: var(--font-size-base, 1rem);
  font-weight: 500;
  letter-spacing: -0.025em;
}

/* 现代化图标样式 */
.icon-home::before { 
  content: '🏠'; 
  filter: grayscale(0.3);
}
.icon-system::before { 
  content: '⚙️'; 
  filter: grayscale(0.3);
}
.icon-monitor::before { 
  content: '📊'; 
  filter: grayscale(0.3);
}
.icon-data::before { 
  content: '💾'; 
  filter: grayscale(0.3);
}
.icon-about::before { 
  content: '🏢'; 
  filter: grayscale(0.3);
}
.icon-contact::before { 
  content: '📞'; 
  filter: grayscale(0.3);
}

/* 遮罩层 */
.nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  height: 100dvh; /* 动态视口高度 */
  background: rgba(10, 14, 26, 0.8);
  backdrop-filter: blur(8px);
  opacity: 0;
  visibility: hidden;
  transition: all var(--duration-normal, 300ms) var(--easing-smooth, cubic-bezier(0.4, 0, 0.2, 1));
  z-index: 9997;
  
  /* 修复iOS Safari固定定位问题 */
  -webkit-transform: translate3d(0, 0, 0);
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
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

/* 平板适配 */
@media (max-width: 640px) {
  .nav-menu {
    width: 280px;
    left: -300px;
  }
  
  .brand-text {
    font-size: var(--font-size-base, 1rem);
  }
  
  .nav-item {
    padding: var(--space-3, 0.75rem) var(--space-5, 1.25rem);
  }
}

/* 超小屏幕适配 */
@media (max-width: 480px) {
  .nav-menu {
    width: 100%;
    left: -100%;
  }
  
  .mobile-nav {
    padding: var(--space-3, 0.75rem) var(--space-4, 1rem);
  }
  
  .brand-icon {
    width: 36px;
    height: 36px;
  }
  
  .brand-text {
    font-size: var(--font-size-sm, 0.875rem);
  }
  
  .nav-toggle {
    width: 28px;
    height: 24px;
  }
  
  .menu-header {
    padding: var(--space-4, 1rem);
  }
  
  .nav-item {
    padding: var(--space-3, 0.75rem) var(--space-4, 1rem);
    margin: var(--space-1, 0.25rem) var(--space-2, 0.5rem);
  }
  
  .nav-item i {
    width: 20px;
    height: 20px;
    font-size: var(--font-size-lg, 1.125rem);
  }
  
  .nav-item span {
    font-size: var(--font-size-sm, 0.875rem);
  }
}

/* 动画增强 */
@media (prefers-reduced-motion: no-preference) {
  .nav-item {
    animation: fadeInUp 0.3s ease-out;
  }
  
  .nav-item:nth-child(1) { animation-delay: 0.1s; }
  .nav-item:nth-child(2) { animation-delay: 0.2s; }
  .nav-item:nth-child(3) { animation-delay: 0.3s; }
  .nav-item:nth-child(4) { animation-delay: 0.4s; }
  .nav-item:nth-child(5) { animation-delay: 0.5s; }
  .nav-item:nth-child(6) { animation-delay: 0.6s; }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>