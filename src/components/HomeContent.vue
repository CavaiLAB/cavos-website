<template>
  <div class="home-content">
    <!-- Hero Section -->
    <section class="hero quantum-particles">
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-text">具身智能平台</span>
          </div>
          <h1 class="hero-title">
            <span class="title-main">智昌具身智能平台</span>
            <span class="title-accent">连接现实与数字世界的桥梁</span>
          </h1>
          <p class="hero-description">
            基于三元控制技术，构建智能机器人生态系统。
            <br>为每一台机器、每一座工厂、每一条产业链安装"大脑"。
          </p>
          <div class="hero-features">
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
            <div class="feature-pill" @click="$emit('product-change', 'cavvla')">
              <span class="pill-icon">🤖</span>
              <span class="pill-text">CavVLA</span>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="neural-network">
            <img src="../img/3d.png" alt="3D Visualization" class="hero-image" />
          </div>
        </div>
      </div>
    </section>

    <!-- Product Selection Section -->
    <section class="product-selection section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">产品矩阵</h2>
          <p class="section-subtitle">构建完整的具身智能生态系统</p>
        </div>
        <div class="products-grid">
          <div 
            v-for="product in products" 
            :key="product.id" 
            class="product-card card-neural"
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
        icon: '🏭',
        description: '工业数据采集与监控系统，实现设备状态实时监控',
        features: ['数据采集', '实时监控', '智能分析']
      },
      {
        id: 'cavdata',
        name: 'CavData',
        icon: '💾',
        description: '智能数据管理平台，提供数据存储、处理和分析能力',
        features: ['数据存储', '智能处理', '可视化分析']
      },
      {
        id: 'cavvla',
        name: 'CavVLA',
        icon: '🤖',
        description: '新一代具身智能视觉语言动作模型，让机器人真正理解任务',
        features: ['视觉理解', '语言处理', '动作执行']
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
  min-height: 65vh;
  display: flex;
  align-items: center;
  background: var(--gradient-cosmic);
  position: relative;
  padding: var(--space-12) 0 var(--space-10) 0;
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
  cursor: pointer;
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
  height: 450px;
}

.neural-network {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  overflow: visible;
}

.hero-image {
  max-width: 100%;
  max-height: 100%;
  min-width: 320px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

/* Product Selection */
.product-selection {
  background: var(--bg-secondary);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
}

.product-card {
  padding: var(--space-8);
  text-align: center;
  cursor: pointer;
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
@media (max-width: 1200px) {
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-6);
  }
}

@media (max-width: 1024px) {
  .hero .container {
    gap: var(--space-12);
  }
  
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-6);
  }
}

@media (max-width: 768px) {
  .hero .container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: var(--space-8);
  }
  
  .hero-visual {
    order: -1;
    height: 250px;
  }
  
  .neural-network {
    width: 90%;
    height: 230px;
    overflow: visible;
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
  
  .products-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
}

@media (max-width: 480px) {
  .hero-visual {
    height: 250px;
  }
  
  .neural-network {
    width: 90%;
    height: 220px;
    overflow: visible;
  }
  
  .hero-image {
    min-width: 280px;
    width: auto;
    max-height: none;
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
