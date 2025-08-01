<template>
  <div class="cavvla-content">
    <!-- Hero Section -->
    <section class="hero quantum-particles">
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-text">具身智能VLA模型</span>
          </div>
          <h1 class="hero-title">
            <span class="title-main">CavVLA</span>
            <span class="title-accent">新一代具身智能视觉语言动作模型</span>
          </h1>
          <p class="hero-description">
            让机器人真正理解任务，而不仅仅是模仿动作。CavVLA（Cav Vision-Language-Action）通过深度融合视觉感知、语言理解和动作执行，实现了各类机器人任务的智能化和自主化。我们的模型不仅能够精准执行任务，更能理解任务背后的目标意图，适用于从工业机械臂到人形机器人的全场景应用。
          </p>
        </div>
        <div class="hero-visual">
          <div class="vla-animation">
            <div class="vla-core">🤖</div>
            <div class="vla-flow">
              <div class="flow-node">👁️ 视觉感知</div>
              <div class="flow-node">🧠 语言理解</div>
              <div class="flow-node">🤖 动作执行</div>
              <div class="flow-node">⚡ 智能决策</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心技术特点 -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">核心技术特点</h2>
          <p class="section-subtitle">三大核心技术支撑，构建完整的VLA生态</p>
        </div>
        <div class="grid grid-3">
          <div class="card card-neural fade-in">
            <div class="feature-icon">🧠</div>
            <h3>强大的泛化能力</h3>
            <ul class="feature-list">
              <li>支持未见过物体和场景的智能适应</li>
              <li>跨任务知识迁移，一个模型解决多种任务</li>
              <li>自适应不同机器人形态和配置</li>
              <li>零样本学习能力，快速适应新环境</li>
            </ul>
          </div>
          
          <div class="card card-neural fade-in">
            <div class="feature-icon">🎯</div>
            <h3>多样化数据获取方案</h3>
            <ul class="feature-list">
              <li><strong>人机协作示教</strong>：通过示教设备和遥控操作，快速获取高质量训练数据</li>
              <li><strong>智能视觉感知</strong>：集成YOLO物体识别和点云处理，自动生成精准交互策略</li>
              <li><strong>VLM轨迹生成</strong>：利用视觉语言模型自动规划机器人运动轨迹</li>
              <li><strong>自主学习优化</strong>：成功案例自动回流，持续提升模型性能</li>
            </ul>
          </div>
          
          <div class="card card-neural fade-in">
            <div class="feature-icon">⚡</div>
            <h3>高效训练部署</h3>
            <ul class="feature-list">
              <li>显存需求仅3GB+，适配主流GPU设备</li>
              <li>训练时间优化至3小时内完成基础模型</li>
              <li>支持批量训练，性能上限可调</li>
              <li>模块化设计，便于问题追踪和快速修复</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心优势 -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">核心优势</h2>
          <p class="section-subtitle">三大核心优势，重新定义机器人智能</p>
        </div>
        <div class="grid grid-3">
          <div class="advantage-card fade-in">
            <div class="advantage-icon">🧠</div>
            <h3>更智能的任务理解</h3>
            <p>摆脱单纯的动作模仿，真正理解任务目标，显著减少执行抖动和"幻觉"现象，提供更稳定、更自然的动作执行。</p>
          </div>
          
          <div class="advantage-card fade-in">
            <div class="advantage-icon">🌐</div>
            <h3>全场景适配能力</h3>
            <p>支持多种机器人形态：机械臂、移动机器人、人形机器人等，灵活适配不同自由度的执行器，跨平台、跨硬件的统一控制框架。</p>
          </div>
          
          <div class="advantage-card fade-in">
            <div class="advantage-icon">🎯</div>
            <h3>智能执行策略选择</h3>
            <p>根据任务类型自动选择最优执行方案：简单任务直接使用静态脚本快速执行，复杂任务调用CavVLA模型进行智能决策，混合模式如YOLO定位+VLA精准操作的组合执行，支持状态机规则判断或LLM智能分析两种决策模式。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 技术架构 -->
    <section class="section">
      <div class="container">
        <CavVLAArchitecture />
      </div>
    </section>

    <!-- 应用场景 -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">应用场景</h2>
          <p class="section-subtitle">覆盖全行业，赋能各类机器人应用</p>
        </div>
        <div class="grid grid-4">
          <div class="card card-neural fade-in">
            <div class="app-icon">🏭</div>
            <h3>工业自动化</h3>
            <p>精密装配、质量检测、物料搬运、协作机器人、柔性生产线</p>
          </div>
          
          <div class="card card-neural fade-in">
            <div class="app-icon">🏠</div>
            <h3>服务机器人</h3>
            <p>家庭助理、医疗康复、餐饮服务、导览接待、物品递送</p>
          </div>
          
          <div class="card card-neural fade-in">
            <div class="app-icon">⚠️</div>
            <h3>特种应用</h3>
            <p>危险环境作业、远程操控、搜索救援、安防巡检</p>
          </div>
          
          <div class="card card-neural fade-in">
            <div class="app-icon">🎓</div>
            <h3>研究教育</h3>
            <p>具身智能研究、AI教学平台、机器人技能学习、人机交互研究</p>
          </div>
        </div>
      </div>
    </section>


    <!-- 选择理由 -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">选择CavVLA的理由</h2>
          <p class="section-subtitle">六大核心优势，引领具身智能未来</p>
        </div>
        <div class="reasons-grid">
          <div class="reason-card fade-in">
            <div class="reason-icon">🧠</div>
            <div class="reason-badge">01</div>
            <h4>真正的任务理解</h4>
            <p>不再是简单的动作复制，而是理解任务本质，实现智能化决策</p>
            <div class="reason-highlight">理解 > 模仿</div>
          </div>
          
          <div class="reason-card fade-in">
            <div class="reason-icon">🌐</div>
            <div class="reason-badge">02</div>
            <h4>全面的具身智能</h4>
            <p>从感知到决策到执行的完整解决方案，构建完整的智能闭环</p>
            <div class="reason-highlight">感知 → 决策 → 执行</div>
          </div>
          
          <div class="reason-card fade-in">
            <div class="reason-icon">🔧</div>
            <div class="reason-badge">03</div>
            <h4>灵活的架构设计</h4>
            <p>模块化、可追溯、易维护的系统架构，支持快速定制和扩展</p>
            <div class="reason-highlight">模块化设计</div>
          </div>
          
          <div class="reason-card fade-in">
            <div class="reason-icon">📊</div>
            <div class="reason-badge">04</div>
            <h4>多样化数据策略</h4>
            <p>多种数据获取方式，适应不同场景需求，保证训练数据质量</p>
            <div class="reason-highlight">多源数据融合</div>
          </div>
          
          <div class="reason-card fade-in">
            <div class="reason-icon">🚀</div>
            <div class="reason-badge">05</div>
            <h4>持续学习能力</h4>
            <p>成功案例自动优化，性能持续提升，越用越智能</p>
            <div class="reason-highlight">自我进化</div>
          </div>
          
          <div class="reason-card fade-in">
            <div class="reason-icon">⚡</div>
            <div class="reason-badge">06</div>
            <h4>低门槛高性能</h4>
            <p>硬件要求低，训练效率高，部署简单，快速上手</p>
            <div class="reason-highlight">3GB显存即可</div>
          </div>
        </div>
      </div>
    </section>


    <!-- 底部CTA -->
    <section class="section section-accent">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">CavVLA - 赋予机器真正的智能</h2>
          <p class="cta-description">立即体验新一代具身智能视觉语言动作模型</p>
          <div class="cta-actions">
            <button class="btn btn-primary">免费试用</button>
            <button class="btn btn-outline">联系我们</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CavVLAArchitecture from './CavVLAArchitecture.vue'

export default {
  name: 'CavVLAContent',
  components: {
    CavVLAArchitecture
  },
  mounted() {
    // 添加滚动动画效果
    this.observeElements();
  },
  methods: {
    observeElements() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, {
        threshold: 0.1
      });

      // 观察所有需要动画的元素
      const animateElements = this.$el.querySelectorAll('.feature-card, .advantage-item, .application-card, .performance-item, .reason-item, .case-item');
      animateElements.forEach(el => observer.observe(el));
    }
  }
}
</script>

<style scoped>
.cavvla-content {
  width: 100%;
}

/* Hero Section */
.hero {
  min-height: 65vh;
  display: flex;
  align-items: center;
  background: var(--gradient-cosmic);
  position: relative;
  padding: var(--space-16) 0 var(--space-12) 0;
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

.hero-actions {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
}

.vla-animation {
  text-align: center;
}

.vla-core {
  font-size: 6rem;
  margin-bottom: var(--space-8);
  animation: floatGentle 3s ease-in-out infinite;
}

.vla-flow {
  display: flex;
  gap: var(--space-4);
  justify-content: center;
  flex-wrap: wrap;
}

.flow-node {
  background: var(--bg-surface);
  border: 1px solid var(--border-neural);
  padding: var(--space-3) var(--space-5);
  border-radius: var(--space-6);
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-neural);
  backdrop-filter: blur(12px);
}


/* 特色功能 */
.feature-icon {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--space-4);
  background: var(--gradient-neural);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: var(--color-neural);
}

.feature-list {
  list-style: none;
  padding: 0;
}

.feature-list li {
  margin-bottom: var(--space-3);
  padding-left: var(--space-5);
  position: relative;
  color: var(--text-secondary);
  line-height: 1.6;
}

.feature-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-neural);
  font-weight: bold;
}

/* 核心优势 */
.advantage-card {
  text-align: center;
  padding: var(--space-8);
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--space-4);
  backdrop-filter: blur(16px);
  transition: all var(--duration-normal) var(--easing-smooth);
}

.advantage-card:hover {
  border-color: var(--border-neural);
  box-shadow: var(--shadow-neural);
  transform: translateY(-0.5rem);
}

.advantage-icon {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--space-4);
  background: var(--gradient-neural);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: var(--color-neural);
}

.advantage-card h3 {
  font-size: var(--font-size-xl);
  margin-bottom: var(--space-3);
  color: var(--text-primary);
}

.advantage-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* 应用场景 */
.app-icon {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--space-4);
  background: var(--gradient-neural);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: var(--color-neural);
}

/* 性能指标 */
.performance-card {
  text-align: center;
  padding: var(--space-8);
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--space-4);
  backdrop-filter: blur(16px);
  transition: all var(--duration-normal) var(--easing-smooth);
}

.performance-card:hover {
  transform: translateY(-0.5rem);
  box-shadow: var(--shadow-neural);
}

.performance-number {
  font-size: var(--font-size-5xl);
  font-weight: 900;
  margin-bottom: var(--space-2);
  background: var(--gradient-neural);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: var(--text-primary);
}

.performance-label {
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
  font-weight: 600;
}

/* 选择理由 */
.reasons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--space-6);
}

.reason-card {
  position: relative;
  padding: var(--space-8);
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--space-4);
  backdrop-filter: blur(16px);
  transition: all var(--duration-normal) var(--easing-smooth);
  overflow: hidden;
}

.reason-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient-neural);
  transform: scaleX(0);
  transition: transform var(--duration-normal) var(--easing-smooth);
}

.reason-card:hover {
  border-color: var(--border-neural);
  box-shadow: var(--shadow-neural);
  transform: translateY(-0.5rem);
}

.reason-card:hover::before {
  transform: scaleX(1);
}

.reason-icon {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--space-4);
  background: var(--gradient-neural);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: var(--color-neural);
}

.reason-badge {
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  background: var(--gradient-neural);
  color: var(--text-primary);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-sm);
  font-weight: 700;
  opacity: 0.8;
}

.reason-card h4 {
  font-size: var(--font-size-xl);
  margin-bottom: var(--space-3);
  color: var(--text-primary);
  font-weight: 700;
}

.reason-card p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-4);
}

.reason-highlight {
  display: inline-block;
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid var(--border-neural);
  color: var(--color-neural);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--space-4);
  font-size: var(--font-size-sm);
  font-weight: 600;
  letter-spacing: 0.02em;
}

/* CTA部分 */
.cta-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-title {
  font-size: var(--font-size-4xl);
  font-weight: 800;
  margin-bottom: var(--space-4);
  color: var(--text-primary);
}

.cta-description {
  font-size: var(--font-size-xl);
  color: var(--text-secondary);
  margin-bottom: var(--space-8);
}

.cta-actions {
  display: flex;
  gap: var(--space-4);
  justify-content: center;
  flex-wrap: wrap;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .hero .container {
    gap: var(--space-12);
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
  
  .vla-core {
    font-size: 4rem;
  }
  
  .title-main {
    font-size: var(--font-size-5xl);
  }
  
  .title-accent {
    font-size: var(--font-size-xl);
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .vla-flow {
    flex-direction: column;
    align-items: center;
  }
  
  .reasons-grid {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
  
  .reason-card {
    padding: var(--space-6);
  }
  
  .reason-badge {
    width: 35px;
    height: 35px;
    font-size: var(--font-size-xs);
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .hero-visual {
    height: 250px;
  }
  
  .vla-core {
    font-size: 3rem;
  }
  
  .flow-node {
    padding: var(--space-2) var(--space-4);
    font-size: var(--font-size-xs);
  }
  
  .performance-number {
    font-size: var(--font-size-4xl);
  }
  
  .reason-number {
    width: 40px;
    height: 40px;
    font-size: var(--font-size-lg);
  }
}
</style>
