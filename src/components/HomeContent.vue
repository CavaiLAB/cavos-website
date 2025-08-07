<template>
  <div class="home-content">
    <!-- Hero Section -->
    <section class="hero quantum-particles">
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-text">Collective Agent uniVerse</span>
          </div>
          <h1 class="hero-title">
            <span class="title-main">具身智能体互联网</span>
            <span class="title-accent">Internet of Embodied Agents</span>
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
          <div class="intelligence-svg-wrapper">
            <img src="/src/img/intelligence-table.svg" alt="智能等级表格" class="intelligence-svg" />
          </div>
        </div>
      </div>
    </section>

    <!-- Product Selection Section -->
    <section class="product-selection section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">产品矩阵</h2>
          <p class="section-subtitle">构建完整的具身智能体互联网生态系统</p>
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
import { ref, onMounted } from 'vue'

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
    // 组件挂载后初始化粒子效果
    onMounted(() => {
      if (window.reinitParticles) {
        window.reinitParticles()
      }
    })
    
    const products = ref([
      {
        id: 'cavos',
        name: 'CavOS',
        icon: '🤖',
        description: '具身智能体互联网 AaaS平台，智能机器人云边协同操作系统',
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

    const intelligenceLevels = ref([
      { level: 'L5', name: '具身智能体互联网', tech: '系统化智能体基础设施/元智能体MetaAgent', scenario: '智慧工厂、智慧城市' },
      { level: 'L4', name: '多智能体系统MAS', tech: 'MCP/A2A/ACP协议', scenario: '仓储协同、群体作业' },
      { level: 'L3', name: '智能体工作流', tech: '6大工作流模式', scenario: '复杂任务编排' },
      { level: 'L2', name: '记忆空间', tech: '检索增强RAG', scenario: '知识问答、经验复用' },
      { level: 'L1', name: '工具调用', tech: '结构化输出', scenario: '基础任务执行' },
      { level: 'L0', name: '端到端模型', tech: '提示词工程+LLM', scenario: '自然语言交互' }
    ])

    return {
      products,
      intelligenceLevels
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
  padding: var(--space-3) var(--space-5);
  border-radius: var(--space-6);
  font-size: var(--font-size-base);
  font-weight: 700;
  letter-spacing: 0.08em;
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
  height: auto;
  padding: var(--space-4) 0;
}

.intelligence-svg-wrapper {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--space-6);
  overflow: hidden;
  backdrop-filter: blur(16px);
  box-shadow: var(--shadow-neural);
  width: 100%;
  max-width: 100%;
  transition: all 0.4s ease;
  padding: var(--space-4);
}

.intelligence-svg-wrapper:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 212, 255, 0.3);
}

.intelligence-svg {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--space-2);
}

.intelligence-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-size: var(--font-size-sm);
}

.intelligence-table thead {
  background: linear-gradient(90deg, rgba(0, 212, 255, 0.15) 0%, rgba(0, 212, 255, 0.05) 100%);
  position: relative;
}

.intelligence-table thead::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--gradient-neural);
  opacity: 0.5;
}

.intelligence-table th {
  padding: var(--space-4) var(--space-3);
  color: var(--text-primary);
  font-weight: 700;
  font-size: var(--font-size-xs);
  text-align: left;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-bottom: 2px solid var(--border-neural);
}

.intelligence-table th:first-child {
  text-align: center;
  width: 80px;
  border-top-left-radius: var(--space-2);
}

.intelligence-table th:last-child {
  border-top-right-radius: var(--space-2);
}

.intelligence-row {
  transition: all var(--duration-normal) var(--easing-smooth);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
}

.intelligence-row:hover {
  background: rgba(0, 212, 255, 0.05);
  transform: translateX(3px);
  box-shadow: -3px 0 0 var(--color-neural);
}

.intelligence-row:last-child {
  border-bottom: none;
}

.intelligence-table td {
  padding: var(--space-4) var(--space-3);
  vertical-align: middle;
}

.level-cell {
  text-align: center;
  width: 80px;
}

.level-badge {
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.8) 0%, rgba(0, 212, 255, 0.4) 100%);
  color: var(--text-primary);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: var(--font-size-base);
  box-shadow: 0 4px 12px rgba(0, 212, 255, 0.3);
  position: relative;
  transition: all 0.3s ease;
}

.intelligence-row:hover .level-badge {
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(0, 212, 255, 0.4);
}

.level-badge::after {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  background: var(--gradient-neural);
  z-index: -1;
  opacity: 0.2;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 0.2; }
  50% { transform: scale(1.1); opacity: 0.3; }
  100% { transform: scale(1); opacity: 0.2; }
}

.level-name {
  font-size: var(--font-size-base);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--space-1);
  background: var(--gradient-neural);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease;
}

.intelligence-row:hover .level-name {
  transform: translateX(3px);
}

.level-tech {
  color: var(--text-secondary);
  font-weight: 500;
  font-size: var(--font-size-xs);
  line-height: 1.5;
  transition: all 0.3s ease;
}

.intelligence-row:hover .level-tech {
  color: rgba(0, 212, 255, 0.8);
}

.level-scenario {
  color: var(--text-muted);
  font-size: var(--font-size-xs);
  line-height: 1.6;
  font-weight: 400;
  transition: all 0.3s ease;
}

.intelligence-row:hover .level-scenario {
  color: var(--text-secondary);
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
  
  .hero-description {
    text-align: center;
    margin: 0 auto var(--space-8) auto;
  }
  
  .hero-features {
    justify-content: center;
  }
  
  .hero-content {
    order: 1;
  }
  
  .hero-visual {
    order: 2;
    padding: var(--space-2) 0;
  }
  
  .intelligence-svg-wrapper {
    margin: 0 auto;
    border-radius: var(--space-4);
    padding: var(--space-3);
  }
  
  .intelligence-svg {
    width: 100%;
    height: auto;
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
    padding: var(--space-1) 0;
    margin: 0 -var(--space-2);
  }
  
  .intelligence-svg-wrapper {
    margin: 0 var(--space-2);
    padding: var(--space-2);
  }
  
  .intelligence-svg {
    width: 100%;
    height: auto;
    min-width: auto;
  }
}
</style>
