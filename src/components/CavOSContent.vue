<template>
  <div class="cavos-content" style="overflow-x: hidden; width: 100%; position: relative;">
    <!-- Hero Section -->
    <section class="hero quantum-particles">
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge fade-in">
            <span class="badge-text">agent as a service platform</span>
          </div>
          <h1 class="hero-title fade-in">
            <span class="title-main">CavOS</span>
            <span class="title-accent">具身智能AaaS平台</span>
          </h1>
          <p class="hero-description fade-in">
            智能机器人云边协同操作系统，连接现实与数字世界的桥梁。
            <br>让每个机器人都拥有智慧大脑，让智能无处不在。
          </p>
          <div class="hero-features fade-in">
            <div class="feature-pill">
              <span class="pill-icon">🧠</span>
              <span class="pill-text">云边协同</span>
            </div>
            <div class="feature-pill">
              <span class="pill-icon">🤖</span>
              <span class="pill-text">多智能体</span>
            </div>
            <div class="feature-pill">
              <span class="pill-icon">⚡</span>
              <span class="pill-text">具身智能</span>
            </div>
            <div class="feature-pill">
              <span class="pill-icon">🔗</span>
              <span class="pill-text">统一操作系统</span>
            </div>
          </div>
          <div class="hero-actions fade-in">
            <a href="#features" class="btn btn-primary">
              <span>立即探索</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1L15 8L8 15M15 8L1 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            <a href="#architecture" class="btn btn-secondary">
              <span>技术架构</span>
            </a>
          </div>
        </div>
        <div class="hero-visual fade-in">
          <img src="/src/img/3d.png" alt="3D Visualization" class="hero-image" />
        </div>
      </div>
    </section>

    <!-- Core Features -->
    <section id="features" class="section section-alt">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title fade-in">核心功能模块</h2>
          <p class="section-subtitle fade-in">构建智能机器人生态的核心能力</p>
        </div>
        <div class="features-grid">
          <div v-for="feature in coreFeatures" :key="feature.id" class="feature-card card-neural fade-in">
            <div class="feature-header">
              <div class="feature-icon-wrapper">
                <span class="feature-icon">{{ feature.icon }}</span>
              </div>
              <div class="feature-meta">
                <h3 class="feature-title">{{ feature.title }}</h3>
                <div class="feature-divider"></div>
              </div>
            </div>
            <p class="feature-description">{{ feature.description }}</p>
            <div class="feature-capabilities">
              <div v-for="item in feature.capabilities" :key="item" class="capability-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>{{ item }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Architecture Section -->
    <section id="architecture" class="section section-accent neural-grid">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title fade-in">技术架构</h2>
          <p class="section-subtitle fade-in">分层设计的智能协同架构</p>
        </div>
        
        <div class="architecture-diagram fade-in">
          <div class="diagram-container">
            <!-- Layer 5: Applications & Interfaces -->
            <div class="arch-layer-visual layer-5">
              <div class="layer-header">
                <div class="layer-number">L5</div>
                <div class="layer-info">
                  <h3 class="layer-name">应用层</h3>
                  <p class="layer-subtitle">Applications & Interfaces</p>
                </div>
              </div>
              <div class="layer-nodes">
                <div class="node-item" v-for="component in architectureLayers[0].components" :key="component">
                  {{ component }}
                </div>
              </div>
              <div class="layer-connections">
                <div class="connection-line"></div>
              </div>
            </div>

            <!-- Layer 4: Multi-Agent System -->
            <div class="arch-layer-visual layer-4">
              <div class="layer-header">
                <div class="layer-number">L4</div>
                <div class="layer-info">
                  <h3 class="layer-name">核心层</h3>
                  <p class="layer-subtitle">Multi-Agent System</p>
                </div>
              </div>
              <div class="layer-nodes">
                <div class="node-item featured" v-for="component in architectureLayers[1].components" :key="component">
                  {{ component }}
                </div>
              </div>
              <div class="layer-connections">
                <div class="connection-line"></div>
              </div>
            </div>

            <!-- Layer 3: Control & Communication -->
            <div class="arch-layer-visual layer-3">
              <div class="layer-header">
                <div class="layer-number">L3</div>
                <div class="layer-info">
                  <h3 class="layer-name">通信层</h3>
                  <p class="layer-subtitle">Control & Communication</p>
                </div>
              </div>
              <div class="layer-nodes protocol-nodes">
                <div class="node-item protocol" v-for="component in architectureLayers[2].components" :key="component">
                  {{ component }}
                </div>
              </div>
              <div class="layer-connections">
                <div class="connection-line"></div>
              </div>
            </div>

            <!-- Layer 2: Actuators -->
            <div class="arch-layer-visual layer-2">
              <div class="layer-header">
                <div class="layer-number">L2</div>
                <div class="layer-info">
                  <h3 class="layer-name">执行层</h3>
                  <p class="layer-subtitle">Actuators</p>
                </div>
              </div>
              <div class="layer-nodes">
                <div class="node-item" v-for="component in architectureLayers[3].components" :key="component">
                  {{ component }}
                </div>
              </div>
              <div class="layer-connections">
                <div class="connection-line"></div>
              </div>
            </div>

            <!-- Layer 1: Sensors -->
            <div class="arch-layer-visual layer-1">
              <div class="layer-header">
                <div class="layer-number">L1</div>
                <div class="layer-info">
                  <h3 class="layer-name">感知层</h3>
                  <p class="layer-subtitle">Sensors</p>
                </div>
              </div>
              <div class="layer-nodes">
                <div class="node-item sensor" v-for="component in architectureLayers[4].components" :key="component">
                  {{ component }}
                </div>
              </div>
            </div>

            <!-- Data Flow Indicators -->
            <div class="data-flow-indicators">
              <div class="flow-arrow upward" v-for="n in 4" :key="'up-' + n">
                <svg width="24" height="40" viewBox="0 0 24 40">
                  <defs>
                    <linearGradient id="flowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style="stop-color:#00d4ff;stop-opacity:1"/>
                      <stop offset="100%" style="stop-color:#0066cc;stop-opacity:0.6"/>
                    </linearGradient>
                  </defs>
                  <path d="M12 5 L12 35 M8 9 L12 5 L16 9" stroke="url(#flowGradient)" stroke-width="2" fill="none"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div class="protocols-section">
          <h3 class="protocols-title fade-in">双协议架构设计</h3>
          <div class="protocols-grid">
            <div class="protocol-card card-neural fade-in">
              <div class="protocol-header">
                <div class="protocol-icon">🧠</div>
                <div class="protocol-meta">
                  <h4>智能体协议</h4>
                  <span class="protocol-type">MCP/A2A/ACP</span>
                </div>
              </div>
              <p class="protocol-description">智能体间协作通信的标准协议集合</p>
              <div class="protocol-features">
                <div class="protocol-feature">
                  <span class="feature-dot"></span>
                  <span>自然语言理解</span>
                </div>
                <div class="protocol-feature">
                  <span class="feature-dot"></span>
                  <span>复杂任务规划</span>
                </div>
                <div class="protocol-feature">
                  <span class="feature-dot"></span>
                  <span>多智能体协商</span>
                </div>
                <div class="protocol-feature">
                  <span class="feature-dot"></span>
                  <span>知识共享推理</span>
                </div>
              </div>
            </div>
            <div class="protocol-card card-quantum fade-in">
              <div class="protocol-header">
                <div class="protocol-icon">🔧</div>
                <div class="protocol-meta">
                  <h4>Cav Management Protocol</h4>
                  <span class="protocol-type">设备管理协议</span>
                </div>
              </div>
              <p class="protocol-description">所有设备的基础管理协议，确保可管可控</p>
              <div class="protocol-features">
                <div class="protocol-feature">
                  <span class="feature-dot"></span>
                  <span>设备生命周期管理</span>
                </div>
                <div class="protocol-feature">
                  <span class="feature-dot"></span>
                  <span>Over-The-Air升级与配置</span>
                </div>
                <div class="protocol-feature">
                  <span class="feature-dot"></span>
                  <span>监控告警系统</span>
                </div>
                <div class="protocol-feature">
                  <span class="feature-dot"></span>
                  <span>安全与权限控制</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Intelligence Levels -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title fade-in">智能分层体系</h2>
          <p class="section-subtitle fade-in">从基础模型到智能体互联网的六层进化体系</p>
        </div>
        <div class="intelligence-table-wrapper fade-in">
          <table class="intelligence-table">
            <thead>
              <tr>
                <th class="level-column">智能等级</th>
                <th class="name-column">层级名称</th>
                <th class="tech-column">核心技术</th>
                <th class="scenario-column">应用场景</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="level in intelligenceLevels" :key="level.level" class="intelligence-row">
                <td class="level-cell">
                  <div class="level-badge">{{ level.level }}</div>
                </td>
                <td class="name-cell">
                  <div class="level-name">{{ level.name }}</div>
                </td>
                <td class="tech-cell">
                  <div class="level-tech">{{ level.tech }}</div>
                </td>
                <td class="scenario-cell">
                  <div class="level-scenario">{{ level.scenario }}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Solutions Section -->
    <section id="solutions" class="section section-alt">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title fade-in">行业解决方案</h2>
          <p class="section-subtitle fade-in">
            基于智昌集团在汽车、钢铁等行业的深厚积累，为不同行业提供定制化智能机器人解决方案
          </p>
        </div>
        
        <div class="solutions-grid">
          <div class="solution-card card-neural fade-in">
            <div class="solution-header">
              <div class="solution-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M8 12L16 8L24 12L32 8L40 12V36L32 40L24 36L16 40L8 36V12Z" stroke="currentColor" stroke-width="2" fill="none"/>
                  <path d="M16 8V40M24 12V36M32 8V40" stroke="currentColor" stroke-width="2"/>
                  <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.6"/>
                  <circle cx="28" cy="24" r="2" fill="currentColor" opacity="0.4"/>
                </svg>
              </div>
              <div class="solution-meta">
                <h3 class="solution-title">智能制造</h3>
                <p class="solution-subtitle">汽车汽配 • 电子制造 • 精密加工</p>
              </div>
            </div>
            <div class="solution-content">
              <ul class="solution-features">
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>柔性生产线协同作业</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>质量检测与溯源管理</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>设备预测性维护</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>生产计划智能调度</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>人机协作安全保障</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="solution-card card-quantum fade-in">
            <div class="solution-header">
              <div class="solution-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect x="6" y="8" width="36" height="28" rx="4" stroke="currentColor" stroke-width="2" fill="none"/>
                  <path d="M12 16H36M12 24H30M12 32H24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <circle cx="38" cy="20" r="6" stroke="currentColor" stroke-width="2" fill="none"/>
                  <path d="M35 20L37 22L41 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="solution-meta">
                <h3 class="solution-title">仓储物流</h3>
                <p class="solution-subtitle">智能仓储 • 分拣配送 • 港口物流</p>
              </div>
            </div>
            <div class="solution-content">
              <ul class="solution-features">
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>多机器人协同调度</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>智能路径规划优化</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>货物自动识别分拣</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>库存实时监控管理</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>异常情况自动处理</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="solution-card card-neural fade-in">
            <div class="solution-header">
              <div class="solution-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="16" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
                  <path d="M24 24V40M18 30H30M16 36H32" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <circle cx="24" cy="16" r="3" fill="currentColor" opacity="0.6"/>
                  <path d="M20 12C20 12 22 10 24 10S28 12 28 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </div>
              <div class="solution-meta">
                <h3 class="solution-title">服务机器人</h3>
                <p class="solution-subtitle">商业服务 • 医疗康复 • 教育培训</p>
              </div>
            </div>
            <div class="solution-content">
              <ul class="solution-features">
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>自然语言交互对话</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>环境感知与导航</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>个性化服务推荐</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>多模态情感识别</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>云端知识库共享</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Advantages Section -->
    <section id="advantages" class="section section-dark">
      <div class="container">
        <h2 class="section-title fade-in">核心优势</h2>
        <div class="grid grid-2">
          <div v-for="advantage in advantages" :key="advantage.id" class="advantage-card card card-dark">
            <div class="advantage-icon">{{ advantage.icon }}</div>
            <h3>{{ advantage.title }}</h3>
            <p>{{ advantage.description }}</p>
            <div class="advantage-metrics">
              <div v-for="metric in advantage.metrics" :key="metric.label" class="metric">
                <span class="metric-value">{{ metric.value }}</span>
                <span class="metric-label">{{ metric.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Specifications -->
    <section class="section">
      <div class="container">
        <h2 class="section-title fade-in">技术规格</h2>
        <div class="specs-grid">
          <div v-for="spec in techSpecs" :key="spec.category" class="spec-category">
            <h3>{{ spec.category }}</h3>
            <div class="spec-items">
              <div v-for="item in spec.items" :key="item.name" class="spec-item">
                <span class="spec-name">{{ item.name }}</span>
                <span class="spec-value">{{ item.value }}</span>
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
import '../styles/variables.css'

export default {
  name: 'CavOSContent',
  setup() {
    const coreFeatures = ref([
      {
        id: 1,
        icon: '🤖',
        title: '模型接入',
        description: '模型接入模块提供对各种AI模型的统一接入和管理能力，包括大语言模型、具身模型、计算机视觉模型等。这个模块确保不同类型的模型能够在统一的框架下协同工作。',
        capabilities: ['大语言模型接入', '具身模型支持', '计算机视觉模型', '统一框架协同']
      },
      {
        id: 2,
        icon: '⚡',
        title: '工作流引擎',
        description: '可视化流程设计平台，支持智能体工作流编排、软硬件混编和智能调度，提供拖拽式编程和实时调试能力',
        capabilities: ['可视化流程设计', '智能体工作流', '软硬件混编', '实时调试部署']
      },
      {
        id: 3,
        icon: '👤',
        title: '智能体构建',
        description: '提供智能体的设计、开发和配置工具，包括上下文管理、协议支持和工作流编排等功能，大大降低了智能体开发的技术门槛',
        capabilities: ['Prompt工程', '知识库集成', 'MCP/A2A/ACP协议', '低代码构建']
      },
      {
        id: 4,
        icon: '📈',
        title: '运营监控',
        description: '提供智能体运行状态的实时监控和管理功能，集成3D可视化大屏、性能监控、异常检测等AgentOps功能，确保系统稳定运行',
        capabilities: ['3D可视化监控', '性能实时监控', '异常智能检测', 'AgentOps运维']
      },
      {
        id: 5,
        icon: '🎓',
        title: '模型训练',
        description: '提供模型的持续训练和优化能力，包括训练任务管理、数据可视化、数据集管理等功能，使得智能体能够持续学习和改进',
        capabilities: ['训练任务管理', '数据可视化分析', '数据集智能管理', '持续学习优化']
      },
      {
        id: 6,
        icon: '🛒',
        title: 'MCP市场',
        description: '开放的MCP协议生态市场，支持智能体组件即插即用、收益分成和标准化接入，构建繁荣的智能体开发者生态',
        capabilities: ['MCP组件市场', '即插即用集成', '收益分成机制', '标准化API接入']
      }
    ])

    const architectureLayers = ref([
      {
        id: 1,
        name: '应用层 Applications & Interfaces',
        components: ['基础模型', '数据分析', '业务应用', '智能体系统', '多智能体协同']
      },
      {
        id: 2,
        name: '核心层 Multi-Agent System',
        components: ['云端智能 CavBrain', '边缘智能 CavVLA', '任务规划', '模型服务', '共享记忆']
      },
      {
        id: 3,
        name: '通信层 Control & Communication',
        components: ['智能体协议 MCP/A2A/ACP', 'Cav Management Protocol 设备管理']
      },
      {
        id: 4,
        name: '执行层 Actuators',
        components: ['API接口', '数据系统', '机器人', '机械臂', '无人机']
      },
      {
        id: 5,
        name: '感知层 Sensors',
        components: ['音频', '图像', '视频', '传感器']
      }
    ])

    const intelligenceLevels = ref([
      { level: 'L5', name: '智能体互联网IOA', tech: '系统化智能体基础设施', scenario: '智慧工厂、智慧城市' },
      { level: 'L4', name: '多智能体系统MAS', tech: 'CMP/CCP/A2A协议', scenario: '仓储协同、群体作业' },
      { level: 'L3', name: '智能体工作流', tech: '6大工作流模式', scenario: '复杂任务编排' },
      { level: 'L2', name: '记忆空间', tech: '检索增强RAG', scenario: '知识问答、经验复用' },
      { level: 'L1', name: '工具调用', tech: '结构化输出', scenario: '基础任务执行' },
      { level: 'L0', name: '端到端模型', tech: '提示词工程+LLM', scenario: '自然语言交互' }
    ])

    const advantages = ref([
      {
        id: 1,
        icon: '🏗️',
        title: '统一而灵活的架构',
        description: '双协议设计兼顾管理统一性和功能灵活性，支持从简单执行器到高级智能体的全覆盖',
        metrics: [
          { value: '2', label: '核心协议' },
          { value: '6', label: '智能等级' }
        ]
      },
      {
        id: 2,
        icon: '☁️',
        title: '真正的云边协同',
        description: '云端大脑提供全局智能，边缘智能保证实时响应，优雅的降级和容错机制',
        metrics: [
          { value: '<10ms', label: '边缘响应' },
          { value: '99.9%', label: '可用性' }
        ]
      },
      {
        id: 3,
        icon: '🌐',
        title: '完整的开发生态',
        description: '标准化SDK接口，丰富的技术文档，专业的开发者支持和行业解决方案',
        metrics: [
          { value: '完整', label: 'SDK支持' },
          { value: '10+', label: '行业方案' }
        ]
      },
      {
        id: 4,
        icon: '🤖',
        title: '领先的AI能力',
        description: '多模态大模型支持，VLA视觉语言动作统一，持续学习和优化',
        metrics: [
          { value: '多模态', label: 'AI模型' },
          { value: '实时', label: '学习更新' }
        ]
      }
    ])

    const techSpecs = ref([
      {
        category: '系统性能',
        items: [
          { name: '并发设备数', value: '1000+' },
          { name: '响应时延', value: '<10ms' },
          { name: '系统可用性', value: '99.9%' },
          { name: '数据吞吐量', value: '10GB/s' }
        ]
      },
      {
        category: 'AI能力',
        items: [
          { name: '模型类型', value: '多模态大模型' },
          { name: '推理速度', value: '实时推理' },
          { name: '精度表现', value: '>95%' },
          { name: '学习方式', value: '在线学习' }
        ]
      },
      {
        category: '部署支持',
        items: [
          { name: '云端部署', value: 'K8s集群' },
          { name: '边缘部署', value: 'Docker容器' },
          { name: '设备支持', value: 'SDK/协议对接' },
          { name: '平台兼容', value: '跨平台支持' }
        ]
      }
    ])

    onMounted(() => {
      // Add intersection observer for animations
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated')
          }
        })
      })

      document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el)
      })
    })

    return {
      coreFeatures,
      architectureLayers,
      intelligenceLevels,
      advantages,
      techSpecs
    }
  }
}
</script>

<style scoped>
/* Hero Section */
.hero {
  min-height: 80vh;
  display: flex;
  align-items: center;
  background: var(--gradient-cosmic);
  position: relative;
  padding: var(--space-20) 0 var(--space-16) 0;
  /* 确保不会遮挡移动端导航 */
  z-index: 1;
}

.hero .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  box-sizing: border-box;
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

.hero-actions {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  perspective: 1000px;
  max-width: 100%;
  overflow: hidden;
}

.hero-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: var(--space-4);
  box-shadow: var(--shadow-neural);
  transition: all var(--duration-normal) var(--easing-smooth);
  width: auto;
}

.hero-image:hover {
  transform: scale(1.05);
  box-shadow: 0 20px 40px rgba(0, 212, 255, 0.3);
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
}

.network-nodes {
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 0.9;
  filter: drop-shadow(0 0 20px rgba(0, 212, 255, 0.3));
  cursor: pointer;
  transition: all 0.3s ease;
  /* 防止溢出 */
  overflow: hidden;
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

/* Features Section */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--space-8);
}

.feature-card {
  padding: var(--space-8);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.feature-header {
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
}

.feature-icon-wrapper {
  background: var(--gradient-neural);
  padding: var(--space-3);
  border-radius: var(--space-3);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 48px;
  height: 48px;
}

.feature-icon {
  font-size: var(--font-size-xl);
  filter: grayscale(1) brightness(0) invert(1);
}

.feature-meta {
  flex: 1;
}

.feature-title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  margin-bottom: var(--space-2);
  color: var(--text-primary);
}

.feature-divider {
  width: 40px;
  height: 2px;
  background: var(--gradient-neural);
  border-radius: 1px;
}

.feature-description {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: var(--space-6);
}

.feature-capabilities {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-top: auto;
}

.capability-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
}

.capability-item svg {
  color: var(--color-neural);
  flex-shrink: 0;
}

/* Architecture Diagram */
.architecture-diagram {
  margin-bottom: var(--space-16);
  padding: var(--space-8) 0;
}

.diagram-container {
  position: relative;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--space-6);
  padding: var(--space-8);
  backdrop-filter: blur(16px);
  box-shadow: var(--shadow-neural);
  box-sizing: border-box;
}

.arch-layer-visual {
  position: relative;
  margin-bottom: var(--space-8);
  padding: var(--space-6);
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(0, 212, 255, 0.02));
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: var(--space-4);
  transition: all var(--duration-normal) var(--easing-smooth);
}

.arch-layer-visual:hover {
  transform: translateY(-var(--space-1));
  border-color: var(--border-neural);
  box-shadow: 0 8px 32px rgba(0, 212, 255, 0.15);
}

.arch-layer-visual:last-child {
  margin-bottom: 0;
}

.layer-header {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-4);
}

.layer-number {
  background: var(--gradient-neural);
  color: var(--text-primary);
  font-size: var(--font-size-lg);
  font-weight: 800;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: var(--shadow-neural);
  position: relative;
}

.layer-number::after {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 50%;
  background: var(--gradient-neural);
  z-index: -1;
  opacity: 0.3;
}

.layer-info {
  flex: 1;
}

.layer-name {
  font-size: var(--font-size-xl);
  font-weight: 700;
  margin-bottom: var(--space-1);
  background: var(--gradient-neural);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.layer-subtitle {
  font-size: var(--font-size-sm);
  color: var(--text-muted);
  font-weight: 500;
  margin: 0;
}

.layer-nodes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: var(--space-3);
  margin-bottom: var(--space-4);
}

.node-item {
  background: rgba(0, 212, 255, 0.08);
  border: 1px solid rgba(0, 212, 255, 0.3);
  color: var(--text-secondary);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--space-3);
  font-size: var(--font-size-sm);
  font-weight: 500;
  text-align: center;
  transition: all var(--duration-normal) var(--easing-smooth);
  position: relative;
  overflow: hidden;
}

.node-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.node-item:hover {
  background: rgba(0, 212, 255, 0.15);
  border-color: var(--color-neural);
  color: var(--text-primary);
  transform: translateY(-2px);
}

.node-item:hover::before {
  left: 100%;
}

.node-item.featured {
  background: var(--gradient-neural);
  color: var(--text-primary);
  border-color: var(--color-neural);
  font-weight: 600;
}

.node-item.protocol {
  background: rgba(255, 139, 53, 0.1);
  border-color: rgba(255, 139, 53, 0.4);
  color: var(--orange-accent);
}

.node-item.sensor {
  background: rgba(106, 90, 205, 0.1);
  border-color: rgba(106, 90, 205, 0.4);
}

.layer-connections {
  position: relative;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--color-neural), transparent);
  opacity: 0.6;
  margin-top: var(--space-2);
}

.connection-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, var(--color-neural), transparent);
  animation: dataFlow 3s linear infinite;
}

.data-flow-indicators {
  position: absolute;
  right: var(--space-4);
  top: var(--space-8);
  bottom: var(--space-8);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  pointer-events: none;
}

.flow-arrow {
  animation: flowPulse 2s ease-in-out infinite;
}

.flow-arrow:nth-child(2) { animation-delay: 0.5s; }
.flow-arrow:nth-child(3) { animation-delay: 1s; }
.flow-arrow:nth-child(4) { animation-delay: 1.5s; }

/* Layer-specific styling */
.layer-5 {
  border-left: 4px solid var(--color-neural);
}

.layer-4 {
  border-left: 4px solid var(--orange-accent);
  background: linear-gradient(135deg, rgba(255, 139, 53, 0.08), rgba(255, 139, 53, 0.02));
}

.layer-3 {
  border-left: 4px solid #6a5acd;
  background: linear-gradient(135deg, rgba(106, 90, 205, 0.08), rgba(106, 90, 205, 0.02));
}

.layer-2 {
  border-left: 4px solid #32cd32;
  background: linear-gradient(135deg, rgba(50, 205, 50, 0.08), rgba(50, 205, 50, 0.02));
}

.layer-1 {
  border-left: 4px solid #ff6b6b;
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.08), rgba(255, 107, 107, 0.02));
}

/* Protocols Section */
.protocols-section {
  margin-top: var(--space-16);
}

.protocols-title {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  text-align: center;
  margin-bottom: var(--space-10);
  background: var(--gradient-quantum);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.protocols-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--space-8);
}

.protocol-card {
  padding: var(--space-8);
}

.protocol-header {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-4);
}

.protocol-icon {
  font-size: var(--font-size-2xl);
  background: var(--gradient-neural);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.protocol-meta h4 {
  font-size: var(--font-size-xl);
  font-weight: 700;
  margin-bottom: var(--space-1);
  color: var(--text-primary);
}

.protocol-type {
  font-size: var(--font-size-sm);
  color: var(--text-muted);
  font-weight: 500;
}

.protocol-description {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: var(--space-6);
}

.protocol-features {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.protocol-feature {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
}

.feature-dot {
  width: 6px;
  height: 6px;
  background: var(--color-neural);
  border-radius: 50%;
  flex-shrink: 0;
}

/* Intelligence Levels Table */
.intelligence-table-wrapper {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--space-4);
  overflow: hidden;
  backdrop-filter: blur(16px);
  box-shadow: var(--shadow-neural);
}

.intelligence-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-base);
}

.intelligence-table thead {
  background: var(--gradient-neural);
  position: relative;
}

.intelligence-table thead::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--gradient-neural);
  opacity: 0.3;
}

.intelligence-table th {
  padding: var(--space-6) var(--space-4);
  color: var(--text-primary);
  font-weight: 700;
  font-size: var(--font-size-sm);
  text-align: left;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: rgba(0, 212, 255, 0.1);
  border-bottom: 2px solid var(--border-neural);
}

.intelligence-table th:first-child {
  text-align: center;
  width: 120px;
}

.intelligence-table th:nth-child(2) {
  width: 25%;
}

.intelligence-table th:nth-child(3) {
  width: 35%;
}

.intelligence-table th:nth-child(4) {
  width: 30%;
}

.intelligence-row {
  transition: all var(--duration-normal) var(--easing-smooth);
  border-bottom: 1px solid var(--border-color);
}

.intelligence-row:hover {
  background: rgba(0, 212, 255, 0.03);
  transform: scale(1.01);
  box-shadow: 0 4px 20px rgba(0, 212, 255, 0.1);
}

.intelligence-row:last-child {
  border-bottom: none;
}

.intelligence-table td {
  padding: var(--space-6) var(--space-4);
  vertical-align: middle;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.level-cell {
  text-align: center;
  width: 120px;
}

.level-badge {
  background: var(--gradient-neural);
  color: var(--text-primary);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: var(--font-size-lg);
  box-shadow: var(--shadow-neural);
  position: relative;
}

.level-badge::after {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 50%;
  background: var(--gradient-neural);
  z-index: -1;
  opacity: 0.2;
}

.level-name {
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--space-1);
  background: var(--gradient-neural);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.level-tech {
  color: var(--text-secondary);
  font-weight: 500;
  font-size: var(--font-size-base);
  line-height: 1.5;
}

.level-scenario {
  color: var(--text-muted);
  font-size: var(--font-size-sm);
  line-height: 1.6;
  font-weight: 400;
}

/* Solutions Section */
.solutions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--space-8);
}

.solution-card {
  padding: var(--space-8);
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all var(--duration-normal) var(--easing-smooth);
}

.solution-card:hover {
  transform: translateY(-var(--space-1));
}

.solution-header {
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
}

.solution-icon {
  color: var(--color-neural);
  background: rgba(0, 212, 255, 0.1);
  padding: var(--space-3);
  border-radius: var(--space-3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.solution-meta {
  flex: 1;
}

.solution-title {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  margin-bottom: var(--space-2);
  background: var(--gradient-neural);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.solution-subtitle {
  color: var(--text-muted);
  font-size: var(--font-size-sm);
  font-weight: 500;
  line-height: 1.5;
}

.solution-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.solution-features {
  list-style: none;
  margin: 0 0 var(--space-8) 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  flex: 1;
}

.solution-features li {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
  line-height: 1.6;
}

.solution-features li svg {
  color: var(--color-neural);
  flex-shrink: 0;
}

/* Advantages */
.advantage-card {
  text-align: center;
}

.advantage-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.advantage-metrics {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1.5rem;
}

.metric {
  text-align: center;
}

.metric-value {
  display: block;
  font-size: 2rem;
  font-weight: bold;
  color: var(--color-neural);
}

.metric-label {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

/* Technical Specifications */
.specs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}

.spec-category h3 {
  color: var(--color-neural);
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--color-neural);
}

.spec-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.spec-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: rgba(0, 212, 255, 0.05);
  border-radius: 8px;
  border-left: 3px solid var(--color-neural);
}

.spec-name {
  font-weight: 500;
}

.spec-value {
  color: var(--color-neural);
  font-weight: 600;
}

/* Animations */
@keyframes dataFlow {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes flowPulse {
  0%, 100% { opacity: 0.4; transform: translateY(0); }
  50% { opacity: 1; transform: translateY(-4px); }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero .container {
    gap: var(--space-12);
  }
  
  .neural-network {
    width: 350px;
    height: 350px;
  }
  
  .protocols-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
}

@media (max-width: 768px) {
  .container {
    padding-left: var(--space-4);
    padding-right: var(--space-4);
    width: 100%;
  }
  
  .hero .container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: var(--space-10);
    width: 100%;
  }
  
  .hero-visual {
    order: -1;
    height: 300px;
  }
  
  .neural-network {
    width: 280px;
    height: 280px;
    /* 修复移动端交互问题 */
    pointer-events: none;
  }
  
  .network-nodes {
    /* 移动端禁用交互以避免导航冲突 */
    pointer-events: none;
  }
  
  .network-core {
    /* 移动端禁用交互以避免导航冲突 */
    pointer-events: none;
  }
  
  .node {
    /* 移动端禁用交互以避免导航冲突 */
    pointer-events: none;
  }
  
  .title-main {
    font-size: var(--font-size-5xl);
  }
  
  .title-accent {
    font-size: var(--font-size-xl);
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
    gap: var(--space-3);
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .intelligence-table-wrapper {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  
  .intelligence-table {
    min-width: 100%;
    font-size: var(--font-size-sm);
  }
  
  .intelligence-table th,
  .intelligence-table td {
    padding: var(--space-4) var(--space-3);
  }
  
  .level-badge {
    width: 40px;
    height: 40px;
    font-size: var(--font-size-base);
  }
  
  .level-name {
    font-size: var(--font-size-base);
  }
  
  .level-tech {
    font-size: var(--font-size-sm);
  }
  
  .level-scenario {
    font-size: var(--font-size-xs);
  }
  
  .solutions-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
  
  .solution-header {
    flex-direction: column;
    text-align: center;
    gap: var(--space-3);
  }
  
  .solution-icon {
    align-self: center;
  }
  
  .diagram-container {
    padding: var(--space-4);
  }
  
  .arch-layer-visual {
    padding: var(--space-4);
    margin-bottom: var(--space-6);
  }
  
  .layer-header {
    flex-direction: column;
    text-align: center;
    gap: var(--space-3);
  }
  
  .layer-number {
    width: 45px;
    height: 45px;
    font-size: var(--font-size-base);
  }
  
  .layer-name {
    font-size: var(--font-size-lg);
  }
  
  .layer-nodes {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: var(--space-2);
  }
  
  .node-item {
    padding: var(--space-2) var(--space-3);
    font-size: var(--font-size-xs);
  }
  
  .data-flow-indicators {
    display: none;
  }
}

@media (max-width: 480px) {
  .hero-visual {
    height: auto;
    width: 100%;
    overflow: visible;
    padding: 20px 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
  
  .hero-image {
    max-width: 100%;
    max-height: none;
    width: auto;
    transform: scale(0.9);
  }
  
  .neural-network {
    width: 220px;
    height: 220px;
    /* 继承移动端交互禁用 */
    pointer-events: none;
  }
  
  .network-core {
    width: 60px;
    height: 60px;
    /* 继承移动端交互禁用 */
    pointer-events: none;
  }
  
  .core-inner {
    width: 45px;
    height: 45px;
  }
  
  .core-text {
    font-size: var(--font-size-base);
  }
  
  .feature-pill {
    padding: var(--space-2) var(--space-3);
  }
  
  .pill-text {
    font-size: var(--font-size-xs);
  }
  
  .intelligence-table {
    min-width: 100%;
    font-size: var(--font-size-xs);
  }
  
  .intelligence-table th,
  .intelligence-table td {
    padding: var(--space-3) var(--space-2);
  }
  
  .intelligence-table th {
    font-size: var(--font-size-xs);
  }
  
  .level-badge {
    width: 35px;
    height: 35px;
    font-size: var(--font-size-sm);
  }
  
  .level-name {
    font-size: var(--font-size-sm);
  }
  
  .level-tech {
    font-size: var(--font-size-xs);
  }
  
  .level-scenario {
    font-size: var(--font-size-xs);
  }
  
  .diagram-container {
    padding: var(--space-3);
    margin: 0 auto;
    width: calc(100% - var(--space-4));
  }
  
  .arch-layer-visual {
    padding: var(--space-3);
    margin-bottom: var(--space-4);
  }
  
  .layer-number {
    width: 40px;
    height: 40px;
    font-size: var(--font-size-sm);
  }
  
  .layer-name {
    font-size: var(--font-size-base);
  }
  
  .layer-subtitle {
    font-size: var(--font-size-xs);
  }
  
  .layer-nodes {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: var(--space-1);
  }
  
  .node-item {
    padding: var(--space-2);
    font-size: var(--font-size-xs);
  }
  
  .solutions-grid {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
  
  .solution-card {
    padding: var(--space-5);
  }
  
  .solution-title {
    font-size: var(--font-size-xl);
  }
  
  .solution-features {
    margin-bottom: var(--space-6);
  }
}
</style>