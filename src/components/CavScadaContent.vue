<template>
  <div>
    <!-- 英雄区域 -->
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-background-image"></div>
        <div class="hero-overlay"></div>
        <div class="tech-grid"></div>
        <div class="particles">
          <div class="particle" v-for="i in 20" :key="i"></div>
        </div>
      </div>
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            CavScada
            <span class="hero-subtitle">智能工业控制系统</span>
          </h1>
          <p class="hero-description">
            集成多协议解析、数据采集、智能问答、可视化组态于一体的新一代工业控制平台
            <br>助力企业实现数字化转型，提升生产效率和管理水平
          </p>
          <div class="hero-buttons">
            <button class="btn btn-primary">立即体验</button>
            <button class="btn btn-secondary">了解更多</button>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 核心功能 -->
    <section id="features" class="section section-alt">
      <div class="container">
        <h2 class="section-title animate-fade-in">核心功能</h2>
        <p class="section-subtitle animate-fade-in-delay">全面的工业控制解决方案，为您的业务提供强大支持</p>
        <div class="grid grid-3 grid-animate">
          <div class="card" v-for="feature in features" :key="feature.title">
            <div class="feature-image">
              <img :src="feature.icon" :alt="feature.title" />
            </div>
            <div class="feature-content">
              <h3 class="feature-title">{{ feature.title }}</h3>
              <p class="feature-description">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 硬件载体 -->
    <section id="hardware" class="section hardware-section">
      <div class="container">
        <div class="grid grid-2">
          <div class="hardware-content animate-slide-up">
            <h2 class="section-title">CavScada 硬件载体</h2>
            <p class="hardware-description">
              专为工业环境设计的高性能硬件平台，集成先进的处理器和丰富的接口，
              确保系统稳定运行和数据可靠传输。
            </p>
            <div class="hardware-specs">
              <div class="spec-item">
                <h4>工业级设计</h4>
                <p>宽温工作范围，防尘防水，适应恶劣环境</p>
              </div>
              <div class="spec-item">
                <h4>高性能处理</h4>
                <p>多核ARM处理器，确保实时响应和高效处理</p>
              </div>
              <div class="spec-item">
                <h4>丰富接口</h4>
                <p>支持多种工业协议，满足各类设备接入需求</p>
              </div>
              <div class="spec-item">
                <h4>易于部署</h4>
                <p>标准机架设计，支持分布式部署和集中管理</p>
              </div>
            </div>
          </div>
          <div class="hardware-image animate-slide-up">
            <img src="/src/img/device.png" alt="CavScada硬件载体" />
            <div class="image-overlay">
              <span class="image-label">CavScada 硬件载体</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MCP Server特色功能 -->
    <section id="mcp-feature" class="section mcp-section">
      <div class="container">
        <div class="mcp-content">
          <div class="mcp-text animate-slide-up">
            <h2 class="section-title">MCP Server 集成能力</h2>
            <p class="mcp-description">
              CavScada 内置完整的 <strong>Model Context Protocol (MCP) Server</strong> 功能，作为标准化的工业数据服务提供者，
              为大语言模型、AI应用和第三方系统提供实时的工业数据访问接口。
            </p>
            <div class="mcp-features">
              <div class="mcp-feature-item">
                <div class="mcp-icon">🔌</div>
                <div>
                  <h4>标准化接口</h4>
                  <p>遵循MCP协议标准，提供统一的数据查询和设备控制接口</p>
                </div>
              </div>
              <div class="mcp-feature-item">
                <div class="mcp-icon">🤖</div>
                <div>
                  <h4>AI原生支持</h4>
                  <p>专为大语言模型优化，支持自然语言查询和智能数据分析</p>
                </div>
              </div>
              <div class="mcp-feature-item">
                <div class="mcp-icon">🔐</div>
                <div>
                  <h4>安全可控</h4>
                  <p>细粒度权限控制，确保工业数据的安全访问和操作授权</p>
                </div>
              </div>
              <div class="mcp-feature-item">
                <div class="mcp-icon">⚡</div>
                <div>
                  <h4>实时响应</h4>
                  <p>毫秒级数据响应，支持实时监控和即时控制指令下发</p>
                </div>
              </div>
            </div>
          </div>
          <div class="mcp-visual animate-slide-up">
            <div class="mcp-diagram">
              <div class="mcp-center">CavScada<br/>MCP Server</div>
              <div class="mcp-connection mcp-conn-1">
                <div class="mcp-endpoint">AI Models</div>
                <div class="mcp-line"></div>
              </div>
              <div class="mcp-connection mcp-conn-2">
                <div class="mcp-endpoint">Third-party<br/>Applications</div>
                <div class="mcp-line"></div>
              </div>
              <div class="mcp-connection mcp-conn-3">
                <div class="mcp-endpoint">Data Analytics<br/>Platforms</div>
                <div class="mcp-line"></div>
              </div>
              <div class="mcp-connection mcp-conn-4">
                <div class="mcp-endpoint">Business<br/>Intelligence</div>
                <div class="mcp-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 技术指标 -->
    <section id="specs" class="section specs-section">
      <div class="container">
        <h2 class="section-title animate-fade-in">技术指标</h2>
        <p class="section-subtitle animate-fade-in-delay">卓越的性能表现，可靠的技术保障</p>
        <div class="grid grid-4 grid-animate">
          <div class="spec-card" v-for="spec in specs" :key="spec.title">
            <div class="spec-value" ref="specValue" :data-target="spec.rawValue || spec.value">{{ spec.value }}</div>
            <div class="spec-title">{{ spec.title }}</div>
            <div class="spec-description">{{ spec.description }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import serviceImg from '/src/img/service.png'
import zutaiImg from '/src/img/zutai.png'
import pointImg from '/src/img/point.png'
import device2Img from '/src/img/device2.png'
import userImg from '/src/img/user.png'
import gatewayImg from '/src/img/gateway.png'
import aiImg from '/src/img/ai.png'

export default {
  name: 'CavScadaContent',
  mounted() {
    this.observeSpecCards();
  },
  methods: {
    goToCavData() {
      window.location.href = '/cavdata.html';
    },
    observeSpecCards() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const specCard = entry.target;
            if (!specCard.dataset.animated) {
              this.animateNumber(specCard);
              specCard.dataset.animated = 'true';
            }
          }
        });
      }, {
        threshold: 0.3
      });

      this.$nextTick(() => {
        this.$refs.specValue?.forEach(el => {
          observer.observe(el.closest('.spec-card'));
        });
      });
    },
    
    animateNumber(specCard) {
      const valueEl = specCard.querySelector('.spec-value');
      const target = parseFloat(valueEl.dataset.target);
      const originalText = valueEl.textContent;
      
      if (isNaN(target)) return;
      
      let current = 0;
      const increment = target / 60;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
          valueEl.textContent = originalText;
        } else {
          if (originalText.includes('%')) {
            valueEl.textContent = current.toFixed(1) + '%';
          } else if (originalText.includes('+')) {
            valueEl.textContent = Math.floor(current) + '+';
          } else if (originalText.includes('M')) {
            valueEl.textContent = Math.floor(current) + 'M+';
          } else if (originalText.includes('ms')) {
            valueEl.textContent = '<' + Math.ceil(current) + 'ms';
          }
        }
      }, 16);
    }
  },
  data() {
    return {
      features: [
        {
          title: '多协议解析',
          description: '支持Modbus、OPC-UA、MQTT等主流工业协议，实现设备无缝接入',
          icon: serviceImg
        },
        {
          title: '数据服务',
          description: '支持多种数据存储方案与中间件转发，满足不同业务需求',
          icon: serviceImg
        },
        {
          title: '拖拽组态',
          description: '可视化页面构建工具，通过拖拽即可创建专业的工业监控界面',
          icon: zutaiImg
        },
        {
          title: '智能问答',
          description: '集成大语言模型，提供智能化的数据分析和操作建议',
          icon: aiImg
        },
        {
          title: '指令下发',
          description: '支持远程设备控制，实现安全可靠的指令传输和执行',
          icon: device2Img
        },
        {
          title: '消息透传',
          description: '高效的消息中间件，确保数据在系统间的可靠传输',
          icon: serviceImg
        },
        {
          title: '权限管理',
          description: '细粒度的用户权限控制，保障系统安全和数据完整性',
          icon: userImg
        },
        {
          title: '分布式部署',
          description: '支持集群部署和负载均衡，满足大规模工业应用需求',
          icon: gatewayImg
        }
      ],
      specs: [
        {
          title: '系统可用性',
          value: '99.9%',
          rawValue: 99.9,
          description: '全年稳定运行保障'
        },
        {
          title: '支持设备',
          value: '1000+',
          rawValue: 1000,
          description: '同时接入设备数量'
        },
        {
          title: '响应时间',
          value: '<1ms',
          rawValue: 1,
          description: '实时数据处理延迟'
        },
        {
          title: '数据处理',
          value: '10M+',
          rawValue: 10,
          description: '每秒处理数据点数'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* 英雄区域样式 */
.hero {
  min-height: 80vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: var(--space-20) 0 var(--space-16) 0;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
}

.hero-background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop') center/cover;
  opacity: 0.3;
  z-index: 1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(10, 10, 10, 0.7) 0%, rgba(26, 26, 26, 0.8) 100%);
  z-index: 2;
}

.particles {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 4;
}

.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: #8a7cf8;
  border-radius: 50%;
  animation: float 6s infinite linear;
  box-shadow: 0 0 6px rgba(138, 124, 248, 0.6);
}

.particle:nth-child(1) { top: 10%; left: 10%; animation-delay: 0s; }
.particle:nth-child(2) { top: 20%; left: 20%; animation-delay: 1s; }
.particle:nth-child(3) { top: 30%; left: 30%; animation-delay: 2s; }
.particle:nth-child(4) { top: 40%; left: 40%; animation-delay: 3s; }
.particle:nth-child(5) { top: 50%; left: 50%; animation-delay: 4s; }
.particle:nth-child(6) { top: 60%; left: 60%; animation-delay: 5s; }
.particle:nth-child(7) { top: 70%; left: 70%; animation-delay: 0.5s; }
.particle:nth-child(8) { top: 80%; left: 80%; animation-delay: 1.5s; }
.particle:nth-child(9) { top: 90%; left: 90%; animation-delay: 2.5s; }
.particle:nth-child(10) { top: 15%; left: 85%; animation-delay: 3.5s; }
.particle:nth-child(11) { top: 25%; left: 75%; animation-delay: 4.5s; }
.particle:nth-child(12) { top: 35%; left: 65%; animation-delay: 5.5s; }
.particle:nth-child(13) { top: 45%; left: 55%; animation-delay: 0.8s; }
.particle:nth-child(14) { top: 55%; left: 45%; animation-delay: 1.8s; }
.particle:nth-child(15) { top: 65%; left: 35%; animation-delay: 2.8s; }
.particle:nth-child(16) { top: 75%; left: 25%; animation-delay: 3.8s; }
.particle:nth-child(17) { top: 85%; left: 15%; animation-delay: 4.8s; }
.particle:nth-child(18) { top: 5%; left: 95%; animation-delay: 5.8s; }
.particle:nth-child(19) { top: 95%; left: 5%; animation-delay: 1.2s; }
.particle:nth-child(20) { top: 50%; left: 5%; animation-delay: 2.2s; }

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

.tech-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(rgba(102, 126, 234, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(118, 75, 162, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.3;
  animation: gridMove 20s linear infinite;
  z-index: 3;
}

@keyframes gridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

.hero-content {
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  z-index: 20;
  position: relative;
}

.hero-title {
  font-size: 5rem;
  font-weight: 700;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #ffffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 
    0 0 30px rgba(102, 126, 234, 0.5),
    0 0 60px rgba(118, 75, 162, 0.3);
  animation: titleGlow 3s ease-in-out infinite alternate;
}

@keyframes titleGlow {
  0% { 
    text-shadow: 
      0 0 30px rgba(102, 126, 234, 0.5),
      0 0 60px rgba(118, 75, 162, 0.3);
  }
  100% { 
    text-shadow: 
      0 0 50px rgba(102, 126, 234, 0.8),
      0 0 80px rgba(118, 75, 162, 0.5);
  }
}

.hero-subtitle {
  font-size: 1.8rem;
  font-weight: 400;
  margin-top: 15px;
  opacity: 0.95;
  display: block;
  background: linear-gradient(135deg, #8a7cf8 0%, #9575cd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 20px rgba(138, 124, 248, 0.3);
}

.hero-description {
  font-size: 1.5rem;
  color: #c4b5fd;
  margin-bottom: 50px;
  line-height: 1.8;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 
    0 0 20px rgba(196, 181, 253, 0.4),
    0 0 40px rgba(102, 126, 234, 0.2);
  font-weight: 300;
}

.hero-buttons {
  display: flex;
  gap: 30px;
  justify-content: center;
}

.hero-buttons .btn {
  padding: 15px 40px;
  font-size: 1.1rem;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;
}

.hero-buttons .btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  box-shadow: 
    0 4px 15px rgba(102, 126, 234, 0.3),
    0 0 20px rgba(118, 75, 162, 0.2);
}

.hero-buttons .btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 8px 25px rgba(102, 126, 234, 0.5),
    0 0 30px rgba(118, 75, 162, 0.4);
}

.hero-buttons .btn-secondary {
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
  box-shadow: 0 0 20px rgba(102, 126, 234, 0.2);
}

.hero-buttons .btn-secondary:hover {
  background: rgba(102, 126, 234, 0.1);
  color: #ffffff;
  box-shadow: 0 0 30px rgba(102, 126, 234, 0.4);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}

/* 核心功能区域样式 */
/* 功能区域样式 */
.card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--space-4);
  padding: var(--space-8);
  backdrop-filter: blur(16px);
  transition: all var(--duration-normal) var(--easing-smooth);
  position: relative;
  overflow: hidden;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--gradient-neural);
  transform: scaleX(0);
  transition: transform var(--duration-normal) var(--easing-smooth);
}

.card:hover {
  transform: translateY(-0.5rem);
  box-shadow: var(--shadow-xl);
  border-color: var(--border-neural);
}

.card:hover::before {
  transform: scaleX(1);
}

.feature-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(1px) brightness(0.3);
  transition: filter 0.3s ease;
}

.card:hover .feature-bg {
  filter: blur(0px) brightness(0.5);
}

.feature-image {
  margin-bottom: var(--space-6);
  height: 200px;
  border-radius: var(--space-3);
  transition: all var(--duration-normal) var(--easing-smooth);
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 212, 255, 0.05);
}

.feature-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 212, 255, 0.1);
  border-radius: var(--space-3);
  transition: all var(--duration-normal) var(--easing-smooth);
}

.feature-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 1;
  position: relative;
}

.card:hover .feature-image {
  transform: scale(1.02);
}

.card:hover .feature-image::before {
  background: rgba(0, 212, 255, 0.2);
}

.feature-content {
  position: relative;
  z-index: 1;
}

.feature-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: var(--space-4);
  background: var(--gradient-neural);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
}

.feature-description {
  color: var(--text-secondary);
  line-height: 1.6;
  text-align: center;
  font-size: var(--font-size-sm);
}
/* 动画效果 */
.animate-fade-in {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease forwards;
}

.animate-fade-in-delay {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease 0.2s forwards;
}

.grid-animate .card {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease forwards;
}

.grid-animate .card:nth-child(1) { animation-delay: 0.1s; }
.grid-animate .card:nth-child(2) { animation-delay: 0.2s; }
.grid-animate .card:nth-child(3) { animation-delay: 0.3s; }
.grid-animate .card:nth-child(4) { animation-delay: 0.4s; }
.grid-animate .card:nth-child(5) { animation-delay: 0.5s; }
.grid-animate .card:nth-child(6) { animation-delay: 0.6s; }
.grid-animate .card:nth-child(7) { animation-delay: 0.7s; }
.grid-animate .card:nth-child(8) { animation-delay: 0.8s; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 硬件载体样式 */
.hardware-section {
  background: var(--bg-secondary);
}

.hardware-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hardware-description {
  font-size: 1.1rem;
  color: #a0a0a0;
  line-height: 1.6;
  margin-bottom: 40px;
}

.hardware-specs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.spec-item {
  padding: 20px;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 10px;
  border: 1px solid rgba(102, 126, 234, 0.3);
}

.spec-item h4 {
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: #667eea;
}

.spec-item p {
  color: #a0a0a0;
  font-size: 0.9rem;
}

.hardware-image {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;
}

.hardware-image:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.hardware-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 20px;
}

.image-label {
  color: #ffffff;
  font-weight: 600;
  font-size: 1.1rem;
}

/* MCP Server样式 */
.mcp-section {
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
}

.mcp-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.mcp-description {
  font-size: 1.2rem;
  color: #b0b0b0;
  line-height: 1.8;
  margin-bottom: 40px;
}

.mcp-features {
  display: grid;
  gap: 25px;
}

.mcp-feature-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 20px;
  background: rgba(102, 126, 234, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(102, 126, 234, 0.1);
  transition: all 0.3s ease;
}

.mcp-feature-item:hover {
  background: rgba(102, 126, 234, 0.1);
  border-color: rgba(102, 126, 234, 0.3);
  transform: translateY(-2px);
}

.mcp-icon {
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  flex-shrink: 0;
}

.mcp-feature-item h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 8px;
}

.mcp-feature-item p {
  color: #a0a0a0;
  font-size: 0.9rem;
  line-height: 1.5;
}

.mcp-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.mcp-diagram {
  position: relative;
  width: 300px;
  height: 300px;
}

.mcp-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 700;
  color: white;
  font-size: 0.9rem;
  box-shadow: 0 0 30px rgba(102, 126, 234, 0.5);
  z-index: 2;
}

.mcp-connection {
  position: absolute;
}

.mcp-conn-1 { top: 0; left: 50%; transform: translateX(-50%); }
.mcp-conn-2 { right: 0; top: 50%; transform: translateY(-50%); }
.mcp-conn-3 { bottom: 0; left: 50%; transform: translateX(-50%); }
.mcp-conn-4 { left: 0; top: 50%; transform: translateY(-50%); }

.mcp-endpoint {
  background: rgba(26, 26, 26, 0.9);
  border: 1px solid #667eea;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 0.8rem;
  color: #667eea;
  text-align: center;
  white-space: nowrap;
  position: relative;
  z-index: 1;
}

.mcp-line {
  position: absolute;
  background: linear-gradient(45deg, #667eea, #764ba2);
  height: 2px;
  z-index: 0;
}

.mcp-conn-1 .mcp-line {
  top: 100%;
  left: 50%;
  width: 2px;
  height: 60px;
  transform: translateX(-50%);
}

.mcp-conn-2 .mcp-line {
  top: 50%;
  right: 100%;
  width: 60px;
  height: 2px;
  transform: translateY(-50%);
}

.mcp-conn-3 .mcp-line {
  bottom: 100%;
  left: 50%;
  width: 2px;
  height: 60px;
  transform: translateX(-50%);
}

.mcp-conn-4 .mcp-line {
  top: 50%;
  left: 100%;
  width: 60px;
  height: 2px;
  transform: translateY(-50%);
}

/* CavData样式 */
.cavdata-section {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.cavdata-content {
  position: relative;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

.cavdata-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.cavdata-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 20% 30%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);
  animation: particleFloat 8s ease-in-out infinite alternate;
}

.cavdata-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  animation: glowPulse 4s ease-in-out infinite alternate;
}

@keyframes particleFloat {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.1); }
}

@keyframes glowPulse {
  0% { opacity: 0.2; transform: translate(-50%, -50%) scale(1); }
  100% { opacity: 0.4; transform: translate(-50%, -50%) scale(1.2); }
}

.cavdata-text {
  position: relative;
  z-index: 2;
}

.cavdata-logo {
  margin-bottom: 30px;
}

.cavdata-name {
  font-size: 3.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
  text-shadow: 0 0 30px rgba(102, 126, 234, 0.3);
}

.cavdata-tagline {
  font-size: 1.1rem;
  color: #8a7cf8;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: block;
  margin-top: 10px;
}

.cavdata-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 30px;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
}

.cavdata-description {
  font-size: 1.3rem;
  color: #b0b0b0;
  line-height: 1.8;
  margin-bottom: 40px;
}

.cavdata-features {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 50px;
  flex-wrap: wrap;
}

.cavdata-feature {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  color: #a0a0a0;
}

.cavdata-feature-icon {
  font-size: 1.3rem;
}

.cavdata-notify {
  text-align: center;
}

.cavdata-btn {
  padding: 15px 40px;
  font-size: 1.1rem;
  margin-bottom: 15px;
}

.cavdata-note {
  color: #808080;
  font-size: 0.9rem;
  font-style: italic;
}

/* 技术指标样式 */
.specs-section {
  background: var(--bg-secondary);
}

.spec-card {
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  padding: 40px 30px;
  border-radius: 15px;
  border: 1px solid #333;
  text-align: center;
  transition: all 0.3s ease;
}

.spec-card:hover {
  transform: translateY(-3px);
  border-color: #667eea;
  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.2);
}

.spec-value {
  font-size: 3rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 10px;
}

.spec-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 10px;
}

.spec-description {
  color: #a0a0a0;
  font-size: 0.9rem;
}

/* 滑入动画 */
.animate-slide-up {
  opacity: 0;
  transform: translateY(50px);
  animation: slideUp 0.8s ease forwards;
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  /* 英雄区域响应式 */
  .hero-title {
    font-size: 3rem;
  }
  
  .hero-subtitle {
    font-size: 1.4rem;
  }
  
  .hero-description {
    font-size: 1.2rem;
    margin-bottom: 40px;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  
  .hero-buttons .btn {
    padding: 12px 30px;
    font-size: 1rem;
  }
  
  /* 功能区域响应式 */
  .section {
    padding: 60px 0;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
  }
  
  .grid-4 {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .grid-2 {
    grid-template-columns: 1fr;
  }
  
  .card {
    padding: 30px 20px;
    min-height: 350px;
  }
  
  .feature-image {
    height: 160px;
  }
  
  .feature-image img {
    padding: 15px;
  }
  
  .feature-title {
    font-size: 1.3rem;
  }
  
  .feature-description {
    font-size: 0.9rem;
  }
  
  /* MCP响应式 */
  .mcp-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .mcp-diagram {
    width: 250px;
    height: 250px;
  }
  
  /* CavData响应式 */
  .cavdata-name {
    font-size: 2.5rem;
  }
  
  .cavdata-title {
    font-size: 2rem;
  }
  
  .cavdata-description {
    font-size: 1.1rem;
  }
  
  .cavdata-features {
    flex-direction: column;
    gap: 20px;
  }
  
  /* 硬件载体响应式 */
  .hardware-specs {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .spec-item {
    padding: 15px;
  }
  
  .hardware-image img {
    height: 300px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .card {
    padding: 25px 15px;
    min-height: 320px;
  }
  
  .feature-image {
    height: 140px;
  }
  
  .feature-image img {
    padding: 12px;
  }
  
  .feature-title {
    font-size: 1.2rem;
  }
  
  .feature-description {
    font-size: 0.85rem;
  }
}
</style>