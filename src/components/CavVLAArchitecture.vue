<template>
  <div class="architecture-wrapper">
    <div class="particles" ref="particles"></div>
    
    <div class="container">
    <h1>CavVLA 系统架构</h1>
    
    <div class="architecture">
      <!-- 输入层 -->
      <div class="layer-section">
        <div class="layer-title">数据输入层</div>
        <div class="layer input-layer">
          <div class="module">
            <h3>多视角相机</h3>
            <p>头部/腕部视觉</p>
          </div>
          <div class="module">
            <h3>机器人状态</h3>
            <p>关节/位置信息</p>
          </div>
          <div class="module">
            <h3>环境感知</h3>
            <p>点云/深度数据</p>
          </div>
        </div>
      </div>
      
      <div class="connector"></div>
      
      <!-- 处理层 -->
      <div class="layer-section">
        <div class="layer-title">智能处理层</div>
        <div class="layer process-layer">
          <div class="module">
            <h3>YOLO识别</h3>
            <p>物体分割定位</p>
          </div>
          <div class="module core-module">
            <h3>CavVLA核心</h3>
            <p>视觉语言动作融合</p>
          </div>
          <div class="module">
            <h3>VLM规划</h3>
            <p>轨迹生成优化</p>
          </div>
        </div>
      </div>
      
      <div class="connector"></div>
      
      <!-- 决策层 -->
      <div class="layer-section">
        <div class="layer-title">执行策略选择</div>
        <div class="layer decision-layer">
          <div class="module">
            <h3>智能决策系统</h3>
            <p>状态机/LLM双模式 · 任务类型自动识别</p>
          </div>
        </div>
      </div>
      
      <div class="connector"></div>
      
      <!-- 执行层 -->
      <div class="layer-section">
        <div class="layer-title">动作执行层</div>
        <div class="layer execute-layer">
          <div class="module">
            <h3>脚本执行</h3>
            <p>快速精准控制</p>
          </div>
          <div class="module">
            <h3>示教遥控</h3>
            <p>人机协作模式</p>
          </div>
          <div class="module">
            <h3>自主执行</h3>
            <p>智能自适应</p>
          </div>
        </div>
      </div>
      
      <div class="connector"></div>
      
      <!-- 数据层 -->
      <div class="layer-section">
        <div class="layer-title">数据管理层</div>
        <div class="layer data-layer">
          <div class="module">
            <h3>机器人数据集</h3>
            <p>数据存储 · 优化回流 · 持续改进</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'CavVLAArchitecture',
  mounted() {
    this.$nextTick(() => {
      // 创建背景粒子
      const particlesContainer = this.$refs.particles;
      if (particlesContainer) {
        for (let i = 0; i < 50; i++) {
          const particle = document.createElement('div');
          particle.className = 'particle';
          particle.style.left = Math.random() * 100 + '%';
          particle.style.animationDelay = Math.random() * 20 + 's';
          particle.style.animationDuration = (15 + Math.random() * 10) + 's';
          particlesContainer.appendChild(particle);
        }
      }
      
      // 添加点击交互
      const modules = this.$el.querySelectorAll('.module');
      modules.forEach(module => {
        module.addEventListener('click', function() {
          this.style.transform = 'scale(0.95)';
          setTimeout(() => {
            this.style.transform = '';
          }, 200);
        });
      });
      
      // 添加滚动动画
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';
            setTimeout(() => {
              entry.target.style.transition = 'all 0.6s ease';
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }, 100);
          }
        });
      });
      
      const layerSections = this.$el.querySelectorAll('.layer-section');
      layerSections.forEach(section => {
        observer.observe(section);
      });
    });
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.architecture-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

/* 隐藏所有滚动条 */
.architecture-wrapper::-webkit-scrollbar,
.container::-webkit-scrollbar,
.architecture::-webkit-scrollbar {
  display: none;
}

.architecture-wrapper,
.container,
.architecture {
  -ms-overflow-style: none;  /* IE和Edge */
  scrollbar-width: none;     /* Firefox */
  overflow: hidden;
}

.container {
  background: rgba(26, 26, 46, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 0 25px 50px rgba(0,0,0,0.5), inset 0 0 100px rgba(255,255,255,0.02);
  padding: 50px;
  max-width: 1200px;
  width: 100%;
  height: calc(100vh - 80px);
  backdrop-filter: blur(20px);
  margin: 40px auto;
  position: relative;
  color: #ffffff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

h1 {
  text-align: center;
  color: #ffffff;
  margin-bottom: 50px;
  font-size: 2.8em;
  font-weight: 700;
  letter-spacing: -1px;
  text-shadow: 0 0 30px rgba(100, 200, 255, 0.5);
}

.architecture {
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
}

.layer {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.module {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 25px 35px;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3), inset 0 0 20px rgba(255,255,255,0.05);
  text-align: center;
  min-width: 200px;
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;
}

.module::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
  transform: translateX(-100%);
  transition: transform 0.6s;
}

.module:hover::before {
  transform: translateX(100%);
}

.module:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 15px 35px rgba(0,0,0,0.5), 0 0 30px rgba(100, 200, 255, 0.3);
  border-color: rgba(100, 200, 255, 0.5);
}

.module h3 {
  font-size: 1.3em;
  margin-bottom: 10px;
  font-weight: 600;
  position: relative;
  z-index: 1;
}

.module p {
  font-size: 0.95em;
  opacity: 0.8;
  line-height: 1.4;
  position: relative;
  z-index: 1;
}

/* 不同层级的颜色 */
.input-layer .module {
  background: linear-gradient(135deg, rgba(79, 172, 254, 0.2) 0%, rgba(0, 242, 254, 0.2) 100%);
  border-color: rgba(79, 172, 254, 0.5);
}

.input-layer .module:hover {
  box-shadow: 0 15px 35px rgba(0,0,0,0.5), 0 0 30px rgba(79, 172, 254, 0.5);
}

.process-layer .module {
  background: linear-gradient(135deg, rgba(250, 112, 154, 0.2) 0%, rgba(254, 225, 64, 0.2) 100%);
  border-color: rgba(250, 112, 154, 0.5);
}

.process-layer .module:hover {
  box-shadow: 0 15px 35px rgba(0,0,0,0.5), 0 0 30px rgba(250, 112, 154, 0.5);
}

.core-module {
  background: linear-gradient(135deg, rgba(244, 63, 94, 0.4) 0%, rgba(236, 72, 153, 0.4) 100%) !important;
  transform: scale(1.1);
  box-shadow: 0 15px 35px rgba(244, 63, 94, 0.3), 0 0 50px rgba(244, 63, 94, 0.4) !important;
  border-color: rgba(244, 63, 94, 0.8) !important;
}

.decision-layer .module {
  background: linear-gradient(135deg, rgba(255, 154, 0, 0.2) 0%, rgba(255, 106, 0, 0.2) 100%);
  border-color: rgba(255, 154, 0, 0.5);
  min-width: 300px;
}

.decision-layer .module:hover {
  box-shadow: 0 15px 35px rgba(0,0,0,0.5), 0 0 30px rgba(255, 154, 0, 0.5);
}

.execute-layer .module {
  background: linear-gradient(135deg, rgba(11, 163, 96, 0.2) 0%, rgba(60, 186, 146, 0.2) 100%);
  border-color: rgba(11, 163, 96, 0.5);
}

.execute-layer .module:hover {
  box-shadow: 0 15px 35px rgba(0,0,0,0.5), 0 0 30px rgba(11, 163, 96, 0.5);
}

.data-layer .module {
  background: linear-gradient(135deg, rgba(112, 40, 228, 0.2) 0%, rgba(229, 178, 202, 0.2) 100%);
  border-color: rgba(112, 40, 228, 0.5);
  min-width: 300px;
}

.data-layer .module:hover {
  box-shadow: 0 15px 35px rgba(0,0,0,0.5), 0 0 30px rgba(112, 40, 228, 0.5);
}

/* 连接线 */
.connector {
  width: 2px;
  height: 40px;
  background: linear-gradient(to bottom, transparent, rgba(100, 200, 255, 0.6), transparent);
  margin: -20px auto;
  position: relative;
  opacity: 0.8;
  box-shadow: 0 0 10px rgba(100, 200, 255, 0.5);
}

.connector::after {
  content: '▼';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(100, 200, 255, 0.8);
  font-size: 16px;
  text-shadow: 0 0 10px rgba(100, 200, 255, 0.8);
}

/* 动画 */
@keyframes pulse {
  0%, 100% { 
    transform: scale(1.1);
    box-shadow: 0 15px 35px rgba(244, 63, 94, 0.3), 0 0 50px rgba(244, 63, 94, 0.4);
  }
  50% { 
    transform: scale(1.15);
    box-shadow: 0 15px 35px rgba(244, 63, 94, 0.5), 0 0 70px rgba(244, 63, 94, 0.6);
  }
}

.core-module {
  animation: pulse 2s ease-in-out infinite;
}

.layer-title {
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.1em;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 600;
  text-shadow: 0 0 10px rgba(100, 200, 255, 0.3);
}

/* 背景动画粒子 */
.particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: -1;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(100, 200, 255, 0.5);
  border-radius: 50%;
  animation: float 20s infinite linear;
}

@keyframes float {
  from {
    transform: translateY(100vh) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  to {
    transform: translateY(-10vh) translateX(100px);
    opacity: 0;
  }
}

/* 响应式 */
@media (max-width: 768px) {
  .architecture-wrapper {
    height: 100vh;
  }
  
  .container {
    padding: 15px;
    margin: 10px auto;
    height: calc(100vh - 20px);
    overflow-y: hidden;
  }
  
  h1 {
    font-size: 1.6em;
    margin-bottom: 15px;
    flex-shrink: 0;
  }
  
  .architecture {
    gap: 15px;
    flex: 1;
    justify-content: space-evenly;
    overflow: hidden;
  }
  
  .layer {
    gap: 15px;
    justify-content: space-between;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 0 5px;
  }
  
  .module {
    min-width: 100px;
    max-width: 120px;
    padding: 12px 8px;
    flex-shrink: 0;
    border-radius: 10px;
  }
  
  .module h3 {
    font-size: 0.85em;
    margin-bottom: 6px;
    line-height: 1.2;
  }
  
  .module p {
    font-size: 0.7em;
    line-height: 1.3;
    opacity: 0.9;
  }
  
  .layer-title {
    font-size: 0.9em;
    margin-bottom: 15px;
    letter-spacing: 1px;
  }
  
  .connector {
    height: 15px;
    margin: -8px auto;
  }
  
  .connector::after {
    font-size: 10px;
    bottom: -6px;
  }
  
  /* 特殊模块调整 */
  .decision-layer .module,
  .data-layer .module {
    min-width: 140px;
    max-width: 160px;
    padding: 15px 10px;
  }
  
  .decision-layer .module h3,
  .data-layer .module h3 {
    font-size: 0.9em;
  }
  
  .decision-layer .module p,
  .data-layer .module p {
    font-size: 0.75em;
  }
  
  .core-module {
    transform: scale(1.05) !important;
  }
}

@media (max-width: 480px) {
  .architecture-wrapper {
    height: 100vh;
  }
  
  .container {
    padding: 10px;
    margin: 5px auto;
    height: calc(100vh - 10px);
    overflow: hidden;
  }
  
  h1 {
    font-size: 1.3em;
    margin-bottom: 10px;
    flex-shrink: 0;
  }
  
  .architecture {
    gap: 10px;
    flex: 1;
    justify-content: space-evenly;
    overflow: hidden;
  }
  
  .layer {
    gap: 8px;
    padding: 0 2px;
  }
  
  .module {
    min-width: 85px;
    max-width: 100px;
    padding: 10px 6px;
  }
  
  .module h3 {
    font-size: 0.75em;
    margin-bottom: 4px;
  }
  
  .module p {
    font-size: 0.6em;
    line-height: 1.2;
  }
  
  .layer-title {
    font-size: 0.8em;
    margin-bottom: 12px;
  }
  
  .connector {
    height: 8px;
    margin: -4px auto;
  }
  
  .connector::after {
    font-size: 8px;
    bottom: -4px;
  }
  
  /* 特殊模块进一步调整 */
  .decision-layer .module,
  .data-layer .module {
    min-width: 120px;
    max-width: 140px;
    padding: 12px 8px;
  }
  
  .decision-layer .module h3,
  .data-layer .module h3 {
    font-size: 0.8em;
  }
  
  .decision-layer .module p,
  .data-layer .module p {
    font-size: 0.65em;
  }
  
  .core-module {
    transform: scale(1.02) !important;
  }
  
  /* 隐藏滚动条但保持滚动功能 */
  .layer::-webkit-scrollbar {
    display: none;
  }
  
  .layer {
    -ms-overflow-style: none;  /* IE和Edge */
    scrollbar-width: none;     /* Firefox */
  }
}
</style>