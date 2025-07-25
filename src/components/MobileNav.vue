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
  background: rgba(10, 14, 26, 0.95);
  backdrop-filter: blur(20px);
  padding: 15px 20px;
  display: none;
  border-bottom: 1px solid rgba(0, 212, 255, 0.2);
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
}

.brand-text {
  color: #f8fafc;
  font-size: 16px;
  font-weight: 600;
}

/* 汉堡菜单按钮 */
.nav-toggle {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 30px;
  height: 25px;
  justify-content: space-between;
}

.nav-toggle span {
  display: block;
  height: 3px;
  width: 100%;
  background: linear-gradient(90deg, #00d4ff, #667eea);
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* 导航菜单 */
.nav-menu {
  position: fixed;
  top: 0;
  left: -300px;
  width: 280px;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transition: left 0.3s ease;
  z-index: 9998;
}

.nav-menu.active {
  left: 0;
}

.menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.menu-header h3 {
  color: #fff;
  margin: 0;
  font-size: 18px;
}

.close-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  color: #fff;
  cursor: pointer;
  transition: background 0.3s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.nav-item i {
  margin-right: 15px;
  font-size: 18px;
  width: 20px;
}

.nav-item span {
  font-size: 16px;
}

/* 图标样式 */
.icon-home::before { content: '🏠'; }
.icon-system::before { content: '⚙️'; }
.icon-monitor::before { content: '📊'; }
.icon-data::before { content: '💾'; }

/* 遮罩层 */
.nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 9997;
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
}
</style>