<template>
  <div id="app">
    <!-- Navigation -->
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
              <h2>CavOS</h2>
              <span class="brand-subtitle">具身智能AaaS平台</span>
            </div>
          </div>
          <div class="nav-menu">
            <a href="#features" class="nav-link">
              <span class="link-text">核心功能</span>
            </a>
            <a href="#architecture" class="nav-link">
              <span class="link-text">技术架构</span>
            </a>
            <a href="#solutions" class="nav-link">
              <span class="link-text">解决方案</span>
            </a>
            <a href="#advantages" class="nav-link">
              <span class="link-text">产品优势</span>
            </a>
            <a href="#contact" class="nav-link">
              <span class="link-text">联系我们</span>
            </a>
          </div>
          <div class="nav-actions">
            <a href="tel:400-1040-788" class="btn btn-outline btn-sm">联系咨询</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero quantum-particles">
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge fade-in">
            <span class="badge-text">Next-Gen AI Platform</span>
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
        
        <div class="architecture-stack">
          <div class="arch-layer fade-in" v-for="(layer, index) in architectureLayers" :key="layer.id">
            <div class="layer-index">L{{ architectureLayers.length - index }}</div>
            <div class="layer-content">
              <h3 class="layer-title">{{ layer.name }}</h3>
              <div class="layer-components">
                <div v-for="component in layer.components" :key="component" class="component-chip">
                  {{ component }}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="protocols-section">
          <h3 class="protocols-title fade-in">双协议架构设计</h3>
          <div class="protocols-grid">
            <div class="protocol-card card-quantum fade-in">
              <div class="protocol-header">
                <div class="protocol-icon">🔧</div>
                <div class="protocol-meta">
                  <h4>CMP协议</h4>
                  <span class="protocol-type">设备管理</span>
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
                  <span>OTA升级与配置</span>
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
            <div class="protocol-card card-neural fade-in">
              <div class="protocol-header">
                <div class="protocol-icon">🧠</div>
                <div class="protocol-meta">
                  <h4>CCP协议</h4>
                  <span class="protocol-type">智能协作</span>
                </div>
              </div>
              <p class="protocol-description">高级智能设备的协作通信协议</p>
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
          </div>
        </div>
      </div>
    </section>

    <!-- Intelligence Levels -->
    <section class="section">
      <div class="container">
        <h2 class="section-title fade-in">智能分层体系</h2>
        <div class="intelligence-levels">
          <div v-for="level in intelligenceLevels" :key="level.level" class="level-card card tech-border">
            <div class="level-badge">{{ level.level }}</div>
            <h3>{{ level.name }}</h3>
            <p class="level-tech">{{ level.tech }}</p>
            <p class="level-scenario">{{ level.scenario }}</p>
          </div>
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


    <!-- Company Section -->
    <section class="section company-section quantum-particles">
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
            </div>
          </div>
          
          <div class="company-stats-grid">
            <div v-for="stat in companyStats" :key="stat.label" class="stat-card card-quantum fade-in">
              <div class="stat-visual">
                <div class="stat-number" :ref="el => animateNumber(el, stat.value)">0</div>
                <div class="stat-unit">+</div>
              </div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
        
        <div class="company-mission-section">
          <h3 class="mission-title fade-in">使命愿景</h3>
          <div class="mission-grid">
            <div class="mission-card card-neural fade-in">
              <div class="mission-icon">🎯</div>
              <h4>核心使命</h4>
              <p>打造<strong>"个性化定制、规模化协同、网络化生产、智能化服务"</strong>的可持续进化产业新生态</p>
            </div>
            <div class="mission-card card-quantum fade-in">
              <div class="mission-icon">🚀</div>
              <h4>发展愿景</h4>
              <p>致力于为中国新型工业化重构新的制造体系，推动企业迈向科技创新驱动的现代化产业体系</p>
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
            <h3>CavOS</h3>
            <p>让智能无处不在</p>
          </div>
          <div class="footer-info">
            <div class="footer-copyright">
              <p>Copyright © 2024 智昌科技集团股份有限公司</p>
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

export default {
  name: 'App',
  setup() {
    const coreFeatures = ref([
      {
        id: 1,
        icon: '🧠',
        title: '智能控制中心',
        description: '3D可视化控制平台，支持手动控制、自动编排和场景模板',
        capabilities: ['3D可视化控制', '拖拽式编程', '一键部署', '实时监控']
      },
      {
        id: 2,
        icon: '🔧',
        title: '设备管理平台',
        description: '统一设备接入与管理，支持自动发现、批量管理和远程运维',
        capabilities: ['设备自动发现', '批量管理', 'OTA升级', '远程运维']
      },
      {
        id: 3,
        icon: '🤖',
        title: '模型服务中心',
        description: '多模型支持与管理，提供推理服务、边缘部署和成本优化',
        capabilities: ['多模型支持', '边缘部署', '推理优化', '成本控制']
      },
      {
        id: 4,
        icon: '⚡',
        title: '工作流引擎',
        description: '可视化流程设计，支持软硬件混编和智能调度',
        capabilities: ['可视化编辑', '软硬混编', '智能调度', '实时调试']
      },
      {
        id: 5,
        icon: '🛒',
        title: '技能市场',
        description: '开放的技能生态，支持即插即用、收益分成和标准化接入',
        capabilities: ['即插即用', '收益分成', '标准接入', '技术支持']
      },
      {
        id: 6,
        icon: '📊',
        title: '数据分析平台',
        description: '实时监控与智能分析，提供3D大屏、AI洞察和预测分析',
        capabilities: ['3D可视化', 'AI洞察', '预测分析', '智能报表']
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
        components: ['CMP协议 设备管理', 'CCP协议 智能协作']
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


    const companyStats = ref([
      { value: 200, label: '博士团队' },
      { value: 110, label: '3年销售额(亿元)' },
      { value: 190, label: '发明专利' },
      { value: 100, label: '头部企业案例' }
    ])

    const animateNumber = (element, targetValue) => {
      if (!element) return
      
      const duration = 2000
      const start = Date.now()
      const startValue = 0
      
      const animate = () => {
        const now = Date.now()
        const elapsed = now - start
        const progress = Math.min(elapsed / duration, 1)
        
        const currentValue = Math.floor(startValue + (targetValue - startValue) * progress)
        element.textContent = currentValue + (typeof targetValue === 'string' && targetValue.includes('+') ? '+' : '')
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      animate()
    }

    onMounted(() => {
      // Add intersection observer for animations
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
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
      techSpecs,
      companyStats,
      animateNumber
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
  font-size: var(--font-size-2xl);
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
  gap: var(--space-8);
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

.nav-link:hover {
  color: var(--color-neural);
  background: rgba(0, 212, 255, 0.05);
}

.nav-link:hover::before {
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

/* Modern Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: var(--gradient-cosmic);
  position: relative;
  padding-top: var(--space-20);
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
  height: 500px;
}

.neural-network {
  position: relative;
  width: 400px;
  height: 400px;
}

.network-core {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: var(--gradient-neural);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-neural);
  z-index: 10;
}

.core-inner {
  width: 60px;
  height: 60px;
  background: var(--bg-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
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
}

.node {
  position: absolute;
  width: 12px;
  height: 12px;
  background: var(--color-neural);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--color-neural);
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
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-neural), transparent);
  opacity: 0.6;
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

/* Modern Section Styles */
.section-header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.section-title {
  font-size: var(--font-size-4xl);
  font-weight: 800;
  margin-bottom: var(--space-4);
  background: var(--gradient-neural);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-subtitle {
  font-size: var(--font-size-xl);
  color: var(--text-muted);
  font-weight: 500;
  max-width: 600px;
  margin: 0 auto;
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

/* Architecture Section */
.architecture-stack {
  margin-bottom: var(--space-16);
}

.arch-layer {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  padding: var(--space-6);
  margin-bottom: var(--space-4);
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--space-4);
  backdrop-filter: blur(16px);
  transition: all var(--duration-normal) var(--easing-smooth);
}

.arch-layer:hover {
  transform: translateX(var(--space-2));
  border-color: var(--border-neural);
  box-shadow: var(--shadow-neural);
}

.layer-index {
  background: var(--gradient-neural);
  color: var(--color-void);
  font-size: var(--font-size-lg);
  font-weight: 800;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.layer-content {
  flex: 1;
}

.layer-title {
  font-size: var(--font-size-lg);
  font-weight: 700;
  margin-bottom: var(--space-3);
  color: var(--text-primary);
}

.layer-components {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.component-chip {
  background: rgba(0, 212, 255, 0.1);
  color: var(--color-neural);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--space-4);
  font-size: var(--font-size-sm);
  font-weight: 500;
  border: 1px solid var(--border-neural);
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

.solution-cta {
  margin-top: auto;
  align-self: flex-start;
}

/* Feature Cards */
.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-list {
  list-style: none;
  margin-top: 1rem;
}

.feature-list li {
  padding: 0.3rem 0;
  position: relative;
  padding-left: 1.5rem;
}

.feature-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent-color);
  font-weight: bold;
}

/* Architecture */
.architecture-overview {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4rem;
}

.arch-layer {
  background: rgba(27, 54, 93, 0.1);
  border: 1px solid rgba(74, 144, 194, 0.3);
  border-radius: 12px;
  padding: 2rem;
}

.arch-layer h3 {
  color: var(--accent-color);
  margin-bottom: 1rem;
}

.layer-components {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.component-tag {
  background: rgba(74, 144, 194, 0.2);
  color: var(--text-light);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.85rem;
}

.protocols-section h3 {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--text-light);
}

.protocol-features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-top: 1rem;
}

.protocol-item {
  background: rgba(0, 212, 255, 0.1);
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 0.9rem;
}

/* Intelligence Levels */
.intelligence-levels {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.level-card {
  text-align: center;
  position: relative;
}

.level-badge {
  background: var(--accent-color);
  color: var(--bg-dark);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0 auto 1rem;
}

.level-tech {
  color: var(--secondary-color);
  font-weight: 500;
}

.level-scenario {
  color: var(--text-secondary);
  font-size: 0.9rem;
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
  color: var(--accent-color);
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
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--accent-color);
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
  background: rgba(74, 144, 194, 0.05);
  border-radius: 8px;
  border-left: 3px solid var(--accent-color);
}

.spec-name {
  font-weight: 500;
}

.spec-value {
  color: var(--secondary-color);
  font-weight: 600;
}


/* Modern Company Section */
.company-section {
  background: var(--bg-secondary);
  position: relative;
}

.company-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-12);
  margin-bottom: var(--space-16);
  align-items: start;
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

.company-stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-4);
  height: 100%;
  align-content: center;
}

.stat-card {
  padding: var(--space-6);
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

.company-mission-section {
  margin-top: var(--space-16);
}

.mission-title {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  text-align: center;
  margin-bottom: var(--space-10);
  background: var(--gradient-quantum);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.mission-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-8);
}

.mission-card {
  padding: var(--space-8);
  text-align: center;
}

.mission-icon {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--space-4);
  background: var(--gradient-neural);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.mission-card h4 {
  font-size: var(--font-size-xl);
  font-weight: 700;
  margin-bottom: var(--space-4);
  color: var(--text-primary);
}

.mission-card p {
  color: var(--text-secondary);
  line-height: 1.7;
}

.mission-card strong {
  color: var(--color-neural);
  font-weight: 600;
}

/* Modern Contact Section */
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
  color: var(--accent-color);
  margin-bottom: 0.5rem;
}

.footer-info {
  text-align: right;
}

.footer-copyright {
  margin-bottom: 0.5rem;
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

/* Modern Responsive Design */
@media (max-width: 1024px) {
  /* Hero adjustments */
  .hero .container {
    gap: var(--space-12);
  }
  
  .neural-network {
    width: 350px;
    height: 350px;
  }
  
  /* Architecture layers */
  .protocols-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
  
  /* Company content */
  .company-content {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }
  
  .company-stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .mission-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
}

@media (max-width: 768px) {
  /* Navigation */
  .nav-menu {
    display: none;
  }
  
  .nav-actions {
    display: none;
  }
  
  /* Hero section */
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
  
  /* Features */
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  /* Solutions */
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
  
  /* Architecture */
  .arch-layer {
    flex-direction: column;
    text-align: center;
    gap: var(--space-4);
  }
  
  .layer-index {
    width: 50px;
    height: 50px;
    font-size: var(--font-size-base);
  }
  
  /* Company section */
  .company-stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .vision-header {
    flex-direction: column;
    text-align: center;
    gap: var(--space-3);
  }
  
  /* Contact */
  .contact-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
  
  .cta-actions {
    flex-direction: column;
    gap: var(--space-4);
  }
  
  /* Footer */
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
  /* Hero */
  .hero-visual {
    height: 250px;
  }
  
  .neural-network {
    width: 220px;
    height: 220px;
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
  
  .feature-pill {
    padding: var(--space-2) var(--space-3);
  }
  
  .pill-text {
    font-size: var(--font-size-xs);
  }
  
  /* Solutions mobile */
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
  
  /* Company */
  .company-stats-grid {
    grid-template-columns: 1fr;
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
  
  /* Footer improvements */
  .footer-filing {
    font-size: var(--font-size-xs);
  }
  
  .footer-filing .divider {
    display: block;
    margin: var(--space-2) 0;
  }
}
</style>