<template>
  <div id="app">
    <!-- Mobile Navigation -->
    <MobileNav @navigate="setActiveProduct" />
    
    <!-- Desktop Navigation -->
    <nav class="navbar">
      <div class="container">
        <div class="nav-content">
          <div class="nav-brand">
            <div class="brand-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="6" fill="currentColor" opacity="0.2"/>
                <circle cx="16" cy="16" r="10" stroke="currentColor" stroke-width="1" fill="none"/>
                <circle cx="16" cy="16" r="14" stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.5"/>
                <circle cx="16" cy="16" r="2" fill="currentColor"/>
              </svg>
            </div>
            <div class="brand-text">
              <h2>智昌具身智能平台</h2>
              <span class="brand-subtitle">连接现实与数字世界</span>
            </div>
          </div>
          <div class="nav-menu" :class="{ 'nav-menu-open': mobileMenuOpen }">
            <a href="#" @click="setActiveProduct('home'); closeMobileMenu()" class="nav-link" :class="{ active: activeProduct === 'home' }">
              <span class="link-text">首页</span>
            </a>
            <a href="#" @click="setActiveProduct('cavos'); closeMobileMenu()" class="nav-link" :class="{ active: activeProduct === 'cavos' }">
              <span class="link-text">CavOS</span>
            </a>
            <a href="#" @click="setActiveProduct('cavscada'); closeMobileMenu()" class="nav-link" :class="{ active: activeProduct === 'cavscada' }">
              <span class="link-text">CavScada</span>
            </a>
            <a href="#" @click="setActiveProduct('cavdata'); closeMobileMenu()" class="nav-link" :class="{ active: activeProduct === 'cavdata' }">
              <span class="link-text">CavData</span>
            </a>
            <a href="#about" class="nav-link" @click="closeMobileMenu()">
              <span class="link-text">关于智昌</span>
            </a>
            <a href="#contact" class="nav-link" @click="closeMobileMenu()">
              <span class="link-text">联系我们</span>
            </a>
          </div>
          <div class="nav-actions">
            <a href="tel:400-1040-788" class="btn btn-outline btn-sm">联系咨询</a>
            <button class="mobile-menu-toggle" @click="toggleMobileMenu()" :class="{ active: mobileMenuOpen }">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Home Content -->
      <HomeContent 
        v-if="activeProduct === 'home'" 
        :active-product="activeProduct"
        @product-change="setActiveProduct"
      />
      
      <!-- CavOS Content -->
      <CavOSContent v-if="activeProduct === 'cavos'" />
      
      <!-- CavScada Content -->
      <CavScadaContent v-if="activeProduct === 'cavscada'" />
      
      <!-- CavData Content -->
      <CavDataContent v-if="activeProduct === 'cavdata'" />
    </main>

    <!-- Company Section -->
    <section id="about" class="section company-section quantum-particles">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title fade-in">关于智昌</h2>
          <p class="section-subtitle fade-in">以三元控制技术为核心，构建智能机器人生态</p>
        </div>
        <div class="company-content">
          <div class="company-vision-card card-neural fade-in">
            <div class="vision-header">
              <div class="vision-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M20 5L35 20L20 35L5 20L20 5Z" stroke="currentColor" stroke-width="2" fill="none"/>
                  <circle cx="20" cy="20" r="6" fill="currentColor" opacity="0.6"/>
                  <circle cx="20" cy="20" r="2" fill="currentColor"/>
                </svg>
              </div>
              <div class="vision-text">
                <h3>智昌科技集团</h3>
                <p class="vision-tagline">具身智能时代的先行者</p>
              </div>
            </div>
            <div class="vision-description">
              <p>为每一台机器、每一座工厂、每一条产业链安装"大脑"——"三元智能控制器"，构建集群式网络化的"泛机器人"生态，实现OT/IT深度融合。</p>
              <p class="mission-content">致力于打造<strong>"个性化定制、规模化协同、网络化生产、智能化服务"</strong>的可持续进化产业新生态，为中国新型工业化重构新的制造体系，推动企业迈向科技创新驱动的现代化产业体系。</p>
            </div>
          </div>
          
          <div class="company-stats-grid">
            <div v-for="stat in companyStats" :key="stat.label" class="stat-card card-quantum fade-in">
              <div class="stat-visual">
                <div class="stat-number" ref="statNumber">0</div>
                <div class="stat-unit"></div>
              </div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section contact-section neural-grid">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title fade-in">联系我们</h2>
          <p class="section-subtitle fade-in">携手智昌，共创智能未来</p>
        </div>
        
        <div class="contact-grid">
          <div class="contact-card card-neural fade-in">
            <div class="contact-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="contact-info">
              <h3>服务热线</h3>
              <div class="contact-value">400-1040-788</div>
              <p class="contact-note">7×24小时专业技术支持</p>
            </div>
          </div>
          
          <div class="contact-card card-quantum fade-in">
            <div class="contact-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="contact-info">
              <h3>公司地址</h3>
              <div class="contact-value">浙江省宁波市余姚市</div>
              <p class="contact-note">智能制造产业园区</p>
            </div>
          </div>
          
          <div class="contact-card card-neural fade-in">
            <div class="contact-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <div class="contact-info">
              <h3>官方网站</h3>
              <div class="contact-value">
                <a href="https://www.emergen.cn" target="_blank" class="website-link">www.emergen.cn</a>
              </div>
              <p class="contact-note">了解更多产品信息</p>
            </div>
          </div>
        </div>
        
        <div class="contact-cta-section fade-in">
          <div class="cta-card">
            <div class="cta-content">
              <h3>开启智能化转型之旅</h3>
              <p>立即联系我们，获取专业的智能机器人解决方案</p>
              <div class="cta-actions">
                <a href="tel:400-1040-788" class="btn btn-primary">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M15.854 10.854a.5.5 0 0 0-.233-.233L13 9.236a.5.5 0 0 0-.515.058L11.377 10.4a.5.5 0 0 1-.507.062C9.72 10.15 8.85 9.28 8.538 8.13a.5.5 0 0 1 .062-.507L9.706 6.515a.5.5 0 0 0 .058-.515L8.379 3.379a.5.5 0 0 0-.233-.233C7.869 3.027 7.5 3.025 7.146 3.146L5.5 3.5a.5.5 0 0 0-.354.354L4.793 5.207a.5.5 0 0 0 .043.576C5.6 6.8 6.8 8 7.793 8.957a.5.5 0 0 0 .576.043L9.712 8.646a.5.5 0 0 0 .354-.354L10.42 7.146c.121-.354.119-.723-.027-1z" fill="currentColor"/>
                  </svg>
                  <span>立即咨询</span>
                </a>
                <a href="https://www.emergen.cn" target="_blank" class="btn btn-secondary">
                  <span>产品演示</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1L15 8L8 15M15 8L1 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <h3>智昌具身智能平台</h3>
            <p>让智能无处不在</p>
          </div>
          <div class="footer-info">
            <div class="footer-copyright">
              <p>Copyright © 2025 智昌科技集团股份有限公司</p>
            </div>
            <div class="footer-filing">
              <p>
                <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">浙ICP备18018356号-1</a>
                <span class="divider">|</span>
                <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33028102000975" target="_blank" rel="noopener">
                  浙公网安备 33028102000975号
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import HomeContent from './components/HomeContent.vue'
import CavOSContent from './components/CavOSContent.vue'
import CavScadaContent from './components/CavScadaContent.vue'
import CavDataContent from './components/CavDataContent.vue'
import MobileNav from './components/MobileNav.vue'
import './styles/variables.css'

export default {
  name: 'App',
  components: {
    HomeContent,
    CavOSContent,
    CavScadaContent,
    CavDataContent,
    MobileNav
  },
  setup() {
    const activeProduct = ref('home')
    const mobileMenuOpen = ref(false)
    
    const companyStats = ref([
      { value: 11, label: '3年销售额(亿元)' },
      { value: 100, label: '全国百强企业案例' },
      { value: 59, label: '注册商标' },
      { value: 190, label: '发明专利' }
    ])

    const initializeAnimations = () => {
      // Remove existing 'animated' class from all elements
      document.querySelectorAll('.fade-in.animated').forEach(el => {
        el.classList.remove('animated')
      })
      
      // Reinitialize intersection observer
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated')
          }
        })
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      })

      // Wait for DOM update, then observe new elements
      setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
          observer.observe(el)
        })
      }, 50)
    }

    const setActiveProduct = (product) => {
      activeProduct.value = product
      // 滚动到顶部
      window.scrollTo({ top: 0, behavior: 'smooth' })
      // Reinitialize animations for new content
      initializeAnimations()
    }

    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }

    const closeMobileMenu = () => {
      mobileMenuOpen.value = false
    }

    const animateNumber = (element, targetValue) => {
      if (!element || !element.textContent !== undefined) return
      
      const duration = 2000
      const start = Date.now()
      const startValue = 0
      
      const animate = () => {
        const now = Date.now()
        const elapsed = now - start
        const progress = Math.min(elapsed / duration, 1)
        
        const currentValue = Math.floor(startValue + (targetValue - startValue) * progress)
        if (element && element.textContent !== undefined) {
          element.textContent = currentValue + (typeof targetValue === 'string' && targetValue.includes('+') ? '+' : '')
        }
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      animate()
    }

    onMounted(() => {
      initializeAnimations()
      
      // 启动数字动画
      setTimeout(() => {
        const statNumbers = document.querySelectorAll('.stat-number')
        statNumbers.forEach((element, index) => {
          if (companyStats.value[index]) {
            animateNumber(element, companyStats.value[index].value)
          }
        })
      }, 1000)
    })

    return {
      activeProduct,
      mobileMenuOpen,
      companyStats,
      setActiveProduct,
      toggleMobileMenu,
      closeMobileMenu,
      animateNumber,
      initializeAnimations
    }
  }
}
</script>

<style scoped>
/* Modern Navigation */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(10, 14, 26, 0.9);
  backdrop-filter: blur(20px);
  z-index: 1000;
  padding: var(--space-4) 0;
  border-bottom: 1px solid var(--border-color);
  transition: all var(--duration-normal) var(--easing-smooth);
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-8);
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.brand-icon {
  color: var(--color-neural);
  animation: orbitalRotate 8s linear infinite;
}

.brand-text h2 {
  font-size: var(--font-size-xl);
  font-weight: 800;
  margin: 0;
  background: var(--gradient-neural);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.brand-subtitle {
  font-size: var(--font-size-xs);
  color: var(--text-muted);
  font-weight: 500;
  letter-spacing: 0.05em;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: var(--space-6);
}

.nav-link {
  position: relative;
  padding: var(--space-2) var(--space-4);
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  font-size: var(--font-size-sm);
  transition: all var(--duration-normal) var(--easing-smooth);
  border-radius: var(--space-2);
  cursor: pointer;
}

.nav-link::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--gradient-neural);
  transition: all var(--duration-normal) var(--easing-smooth);
  transform: translateX(-50%);
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-neural);
  background: rgba(0, 212, 255, 0.05);
}

.nav-link:hover::before,
.nav-link.active::before {
  width: 80%;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.btn-sm {
  padding: var(--space-2) var(--space-4);
  font-size: var(--font-size-sm);
}

/* Mobile Menu Toggle */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.mobile-menu-toggle span {
  width: 100%;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.mobile-menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.mobile-menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

/* Main Content */
.main-content {
  padding-top: var(--space-16);
  min-height: 50vh;
}

/* Mobile content padding adjustment */
@media (max-width: 768px) {
  .main-content {
    padding-top: var(--space-20);
  }
}

/* Company Section */
.company-section {
  background: var(--bg-secondary);
  position: relative;
}

.company-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-12);
  margin-bottom: var(--space-16);
  align-items: stretch;
}

.company-vision-card {
  padding: var(--space-10);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.vision-header {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
}

.vision-icon {
  color: var(--color-neural);
  background: rgba(0, 212, 255, 0.1);
  padding: var(--space-3);
  border-radius: var(--space-3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.vision-text h3 {
  font-size: var(--font-size-3xl);
  font-weight: 800;
  margin-bottom: var(--space-2);
  background: var(--gradient-neural);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.vision-tagline {
  color: var(--text-muted);
  font-size: var(--font-size-base);
  font-weight: 500;
}

.vision-description {
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: var(--font-size-lg);
}

.mission-content {
  margin-top: var(--space-4);
  padding: var(--space-4);
  background: rgba(0, 212, 255, 0.05);
  border-left: 4px solid var(--color-neural);
  border-radius: var(--space-2);
}

.mission-content strong {
  color: var(--color-neural);
  font-weight: 600;
}

.company-stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
  height: 100%;
  align-content: stretch;
  align-items: stretch;
}

.stat-card {
  padding: var(--space-8);
  text-align: center;
  transition: all var(--duration-normal) var(--easing-smooth);
}

.stat-card:hover {
  transform: scale(1.05);
}

.stat-visual {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: var(--space-1);
  margin-bottom: var(--space-3);
}

.stat-number {
  font-size: var(--font-size-4xl);
  font-weight: 900;
  background: var(--gradient-neural);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-unit {
  font-size: var(--font-size-2xl);
  color: var(--color-neural);
  font-weight: 700;
}

.stat-label {
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
  font-weight: 500;
}

/* Contact Section */
.contact-section {
  background: var(--bg-primary);
  position: relative;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
  margin-bottom: var(--space-16);
}

.contact-card {
  padding: var(--space-8);
  text-align: center;
  transition: all var(--duration-normal) var(--easing-smooth);
}

.contact-card:hover {
  transform: translateY(-var(--space-2));
}

.contact-icon-wrapper {
  background: var(--gradient-neural);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-6);
  color: var(--text-primary);
}

.contact-info h3 {
  font-size: var(--font-size-xl);
  font-weight: 700;
  margin-bottom: var(--space-3);
  color: var(--text-primary);
}

.contact-value {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--color-neural);
  margin-bottom: var(--space-2);
}

.contact-note {
  font-size: var(--font-size-sm);
  color: var(--text-muted);
  font-style: italic;
}

.website-link {
  color: var(--color-neural);
  text-decoration: none;
  position: relative;
  transition: all var(--duration-normal) var(--easing-smooth);
}

.website-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -2px;
  left: 0;
  background: var(--gradient-neural);
  transition: width var(--duration-normal) var(--easing-smooth);
}

.website-link:hover::after {
  width: 100%;
}

.contact-cta-section {
  margin-top: var(--space-16);
}

.cta-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--space-6);
  padding: var(--space-16);
  text-align: center;
  backdrop-filter: blur(16px);
}

.cta-content h3 {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  margin-bottom: var(--space-4);
  background: var(--gradient-neural);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cta-content p {
  color: var(--text-secondary);
  font-size: var(--font-size-xl);
  margin-bottom: var(--space-8);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-actions {
  display: flex;
  justify-content: center;
  gap: var(--space-6);
  flex-wrap: wrap;
}

/* Footer */
.footer {
  background: var(--footer-bg);
  color: var(--text-light);
  padding: 2rem 0;
  border-top: 1px solid rgba(74, 144, 194, 0.3);
  box-shadow: 0 -2px 20px rgba(10, 22, 40, 0.8);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-logo h3 {
  color: var(--color-neural);
  margin-bottom: 0.5rem;
}

.footer-info {
  text-align: center;
  flex: 1;
}

.footer-copyright {
  margin-bottom: 0.5rem;
  text-align: center;
}

.footer-filing {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.footer-filing a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-filing a:hover {
  color: var(--accent-color);
}

.footer-filing .divider {
  margin: 0 0.5rem;
  color: var(--text-secondary);
}

/* Animations */
@keyframes orbitalRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .company-content {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }
  
  .company-stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 768px) {
  /* Hide desktop navigation */
  .navbar {
    display: none;
  }
  
  /* Adjust main content padding for mobile nav */
  .main-content {
    padding-top: var(--space-20);
  }
  
  .brand-text h2 {
    font-size: var(--font-size-lg);
  }
  
  .company-stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .vision-header {
    flex-direction: column;
    text-align: center;
    gap: var(--space-3);
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
  
  .cta-actions {
    flex-direction: column;
    gap: var(--space-4);
  }
  
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: var(--space-4);
  }
  
  .footer-info {
    text-align: center;
  }
}

@media (max-width: 480px) {
  .company-stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-3);
  }
  
  .stat-visual {
    flex-direction: column;
    gap: 0;
  }
  
  .stat-number {
    font-size: var(--font-size-3xl);
  }
  
  .stat-unit {
    font-size: var(--font-size-lg);
  }
  
  .footer-filing {
    font-size: var(--font-size-xs);
  }
  
  .footer-filing .divider {
    display: block;
    margin: var(--space-2) 0;
  }
}
</style>
