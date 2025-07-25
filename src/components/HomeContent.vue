<template>
  <div class="home-content">
    <!-- Hero Section -->
    <section class="hero quantum-particles">
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge fade-in">
            <span class="badge-text">具身智能平台</span>
          </div>
          <h1 class="hero-title fade-in">
            <span class="title-main">智昌具身智能平台</span>
            <span class="title-accent">连接现实与数字世界的桥梁</span>
          </h1>
          <p class="hero-description fade-in">
            基于三元控制技术，构建智能机器人生态系统。
            <br>为每一台机器、每一座工厂、每一条产业链安装"大脑"。
          </p>
          <div class="hero-features fade-in">
            <div class="feature-pill" @click="$emit('product-change', 'cavos')">
              <span class="pill-icon">🧠</span>
              <span class="pill-text">CavOS</span>
            </div>
            <div class="feature-pill" @click="$emit('product-change', 'cavscada')">
              <span class="pill-icon">📊</span>
              <span class="pill-text">CavScada</span>
            </div>
            <div class="feature-pill" @click="$emit('product-change', 'cavdata')">
              <span class="pill-icon">💾</span>
              <span class="pill-text">CavData</span>
            </div>
          </div>
        </div>
        <div class="hero-visual fade-in">
          <div class="neural-network">
            <div class="network-core orbital-motion">
              <div class="core-inner">
                <span class="core-text">AI</span>
              </div>
            </div>
            <div class="network-nodes">
              <div class="node node-1 float-gentle"></div>
              <div class="node node-2 float-gentle"></div>
              <div class="node node-3 float-gentle"></div>
              <div class="node node-4 float-gentle"></div>
              <div class="node node-5 float-gentle"></div>
              <div class="node node-6 float-gentle"></div>
            </div>
            <div class="network-connections">
              <div class="connection connection-1 matrix-flow"></div>
              <div class="connection connection-2 matrix-flow"></div>
              <div class="connection connection-3 matrix-flow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Selection Section -->
    <section class="product-selection section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title fade-in">产品矩阵</h2>
          <p class="section-subtitle fade-in">构建完整的具身智能生态系统</p>
        </div>
        <div class="products-grid">
          <div 
            v-for="product in products" 
            :key="product.id" 
            class="product-card card-neural fade-in"
            :class="{ active: activeProduct === product.id }"
            @click="$emit('product-change', product.id)"
          >
            <div class="product-icon">{{ product.icon }}</div>
            <h3 class="product-title">{{ product.name }}</h3>
            <p class="product-description">{{ product.description }}</p>
            <div class="product-features">
              <div v-for="feature in product.features" :key="feature" class="feature-tag">
                {{ feature }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'HomeContent',
  props: {
    activeProduct: {
      type: String,
      default: 'cavos'
    }
  },
  emits: ['product-change'],
  setup() {
    const products = ref([
      {
        id: 'cavos',
        name: 'CavOS',
        icon: '🤖',
        description: '具身智能AaaS平台，智能机器人云边协同操作系统',
        features: ['云边协同', '多智能体', '统一操作系统']
      },
      {
        id: 'cavscada',
        name: 'CavScada',
        icon: '📊',
        description: '工业数据采集与监控系统，实现设备状态实时监控',
        features: ['数据采集', '实时监控', '智能分析']
      },
      {
        id: 'cavdata',
        name: 'CavData',
        icon: '💾',
        description: '智能数据管理平台，提供数据存储、处理和分析能力',
        features: ['数据存储', '智能处理', '可视化分析']
      }
    ])

    return {
      products
    }
  }
}
</script>

<style scoped>
.home-content {
  width: 100%;
}

/* Hero Section */
.hero {
  min-height: 80vh;
  display: flex;
  align-items: center;
  background: var(--gradient-cosmic);
  position: relative;
  padding: var(--space-20) 0 var(--space-16) 0;
}

.hero .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: center;
}

.hero-content {
  max-width: none;
}

.hero-badge {
  display: inline-block;
  margin-bottom: var(--space-6);
}

.badge-text {
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid var(--border-neural);
  color: var(--color-neural);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--space-6);
  font-size: var(--font-size-sm);
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.hero-title {
  margin-bottom: var(--space-6);
}

.title-main {
  display: block;
  font-size: var(--font-size-6xl);
  font-weight: 900;
  line-height: 0.9;
  margin-bottom: var(--space-2);
  background: var(--gradient-neural);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* Fallback for browsers that don't support background-clip: text */
  color: var(--text-primary);
}

.title-accent {
  display: block;
  font-size: var(--font-size-2xl);
  font-weight: 600;
  color: var(--text-secondary);
  letter-spacing: 0.02em;
}

.hero-description {
  font-size: var(--font-size-xl);
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: var(--space-8);
  max-width: 500px;
}

.hero-features {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-bottom: var(--space-10);
}

.feature-pill {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--space-6);
  backdrop-filter: blur(12px);
  transition: all var(--duration-normal) var(--easing-smooth);
  cursor: pointer;
}

.feature-pill:hover {
  transform: translateY(-2px);
  border-color: var(--border-neural);
  box-shadow: var(--shadow-neural);
}

.pill-icon {
  font-size: var(--font-size-base);
}

.pill-text {
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--text-primary);
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  perspective: 1000px;
}

.neural-network {
  position: relative;
  width: 100%;
  height: 500px;
  transform-style: preserve-3d;
}

.network-core {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateZ(50px);
  width: 100px;
  height: 100px;
  background: var(--gradient-neural);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 
    var(--shadow-neural),
    0 0 40px rgba(0, 212, 255, 0.6),
    0 0 80px rgba(0, 212, 255, 0.3);
  z-index: 10;
  transition: all 0.3s ease;
  cursor: pointer;
}

.network-core:hover {
  transform: translate(-50%, -50%) translateZ(60px) scale(1.05);
  box-shadow: 
    var(--shadow-neural),
    0 0 60px rgba(0, 212, 255, 0.8),
    0 0 120px rgba(0, 212, 255, 0.4);
}

.core-inner {
  width: 75px;
  height: 75px;
  background: radial-gradient(circle, var(--bg-primary), rgba(0, 0, 0, 0.1));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(0, 212, 255, 0.3);
}

.core-text {
  font-size: var(--font-size-lg);
  font-weight: 800;
  background: var(--gradient-neural);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* Fallback for browsers that don't support background-clip: text */
  color: var(--color-neural);
}

.network-nodes {
  position: relative;
  width: 150%;
  height: 100%;
  background-image: url('../img/3d.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  opacity: 0.9;
  filter: drop-shadow(0 0 20px rgba(0, 212, 255, 0.3));
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.network-nodes:active {
  transform: scale(0.98);
  filter: drop-shadow(0 0 30px rgba(0, 212, 255, 0.6)) brightness(1.2);
}

.node {
  position: absolute;
  width: 16px;
  height: 16px;
  background: radial-gradient(circle, var(--color-neural), rgba(0, 212, 255, 0.6));
  border-radius: 50%;
  box-shadow: 
    0 0 15px var(--color-neural),
    0 0 30px rgba(0, 212, 255, 0.4),
    inset 0 0 8px rgba(255, 255, 255, 0.3);
  transform: translateZ(30px);
  transition: all 0.3s ease;
  cursor: pointer;
}

.node:hover {
  transform: translateZ(40px) scale(1.2);
  box-shadow: 
    0 0 25px var(--color-neural),
    0 0 50px rgba(0, 212, 255, 0.6),
    inset 0 0 12px rgba(255, 255, 255, 0.5);
}

.node-1 { top: 10%; left: 20%; animation-delay: 0s; }
.node-2 { top: 20%; right: 15%; animation-delay: 0.5s; }
.node-3 { bottom: 15%; right: 25%; animation-delay: 1s; }
.node-4 { bottom: 10%; left: 15%; animation-delay: 1.5s; }
.node-5 { top: 50%; left: 5%; animation-delay: 2s; }
.node-6 { top: 50%; right: 5%; animation-delay: 2.5s; }

.network-connections {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.connection {
  position: absolute;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--color-neural), transparent);
  opacity: 0.8;
  filter: drop-shadow(0 0 8px rgba(0, 212, 255, 0.5));
  transform: translateZ(25px);
}

.connection-1 {
  top: 30%;
  left: 20%;
  width: 60%;
  transform: rotate(15deg);
  animation-delay: 0s;
}

.connection-2 {
  top: 60%;
  left: 15%;
  width: 70%;
  transform: rotate(-20deg);
  animation-delay: 1s;
}

.connection-3 {
  top: 45%;
  left: 10%;
  width: 80%;
  transform: rotate(5deg);
  animation-delay: 2s;
}

/* Product Selection */
.product-selection {
  background: var(--bg-secondary);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.product-card {
  padding: var(--space-8);
  text-align: center;
  cursor: pointer;
  transition: all var(--duration-normal) var(--easing-smooth);
  position: relative;
  overflow: hidden;
}

.product-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.1), transparent);
  transition: left 0.5s ease;
}

.product-card:hover::before {
  left: 100%;
}

.product-card:hover {
  transform: translateY(-var(--space-2));
  border-color: var(--border-neural);
  box-shadow: var(--shadow-neural);
}

.product-card.active {
  border-color: var(--color-neural);
  background: rgba(0, 212, 255, 0.05);
  box-shadow: var(--shadow-neural);
}

.product-icon {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--space-4);
  background: var(--gradient-neural);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* Fallback for browsers that don't support background-clip: text */
  color: var(--color-neural);
}

.product-title {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  margin-bottom: var(--space-3);
  background: var(--gradient-neural);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* Fallback for browsers that don't support background-clip: text */
  color: var(--text-primary);
}

.product-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-6);
}

.product-features {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  justify-content: center;
}

.feature-tag {
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.3);
  color: var(--color-neural);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--space-4);
  font-size: var(--font-size-xs);
  font-weight: 500;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero .container {
    gap: var(--space-12);
  }
  
  .products-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
}

@media (max-width: 768px) {
  .hero .container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: var(--space-10);
  }
  
  .hero-visual {
    order: -1;
    height: 300px;
  }
  
  .neural-network {
    width: 280px;
    height: 280px;
  }
  
  .network-nodes {
    width: 120%;
    background-size: contain;
    background-position: center center;
  }
  
  .title-main {
    font-size: var(--font-size-5xl);
  }
  
  .title-accent {
    font-size: var(--font-size-xl);
  }
}

@media (max-width: 480px) {
  .hero-visual {
    height: 250px;
  }
  
  .neural-network {
    width: 220px;
    height: 220px;
  }
  
  .network-nodes {
    width: 130%;
    background-size: contain;
    background-position: center center;
  }
  
  .network-core {
    width: 60px;
    height: 60px;
  }
  
  .core-inner {
    width: 45px;
    height: 45px;
  }
  
  .core-text {
    font-size: var(--font-size-base);
  }
}
</style>