<template>
  <div class="architecture-container">
    <h2 class="architecture-title">CavVLA 系统架构</h2>
    <div class="architecture-svg-wrapper">
      <svg viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg" class="architecture-svg">
        <!-- 背景装饰 -->
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#667eea;stop-opacity:0.8" />
            <stop offset="100%" style="stop-color:#764ba2;stop-opacity:0.8" />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#f093fb;stop-opacity:0.8" />
            <stop offset="100%" style="stop-color:#f5576c;stop-opacity:0.8" />
          </linearGradient>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#4facfe;stop-opacity:0.8" />
            <stop offset="100%" style="stop-color:#00f2fe;stop-opacity:0.8" />
          </linearGradient>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="2" dy="2" stdDeviation="3" flood-opacity="0.2"/>
          </filter>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#666"/>
          </marker>
        </defs>
        
        <!-- 输入层 -->
        <g class="module">
          <rect x="50" y="50" width="180" height="80" rx="15" fill="url(#grad3)" filter="url(#shadow)"/>
          <text x="140" y="85" text-anchor="middle" fill="white" font-size="16" font-weight="bold">多视角相机</text>
          <text x="140" y="105" text-anchor="middle" fill="white" font-size="14">头部/腕部/全局</text>
        </g>
        
        <g class="module">
          <rect x="250" y="50" width="180" height="80" rx="15" fill="url(#grad3)" filter="url(#shadow)"/>
          <text x="340" y="85" text-anchor="middle" fill="white" font-size="16" font-weight="bold">机器人状态</text>
          <text x="340" y="105" text-anchor="middle" fill="white" font-size="14">关节/位置/力反馈</text>
        </g>
        
        <g class="module">
          <rect x="450" y="50" width="180" height="80" rx="15" fill="url(#grad3)" filter="url(#shadow)"/>
          <text x="540" y="85" text-anchor="middle" fill="white" font-size="16" font-weight="bold">环境感知</text>
          <text x="540" y="105" text-anchor="middle" fill="white" font-size="14">点云/深度/触觉</text>
        </g>
        
        <!-- 处理层 -->
        <g class="module">
          <rect x="50" y="200" width="160" height="100" rx="15" fill="url(#grad1)" filter="url(#shadow)"/>
          <text x="130" y="235" text-anchor="middle" fill="white" font-size="16" font-weight="bold">YOLO识别</text>
          <text x="130" y="255" text-anchor="middle" fill="white" font-size="14">物体分割</text>
          <text x="130" y="275" text-anchor="middle" fill="white" font-size="14">边界检测</text>
        </g>
        
        <g class="module pulse">
          <rect x="250" y="200" width="200" height="100" rx="15" fill="url(#grad2)" filter="url(#shadow)"/>
          <text x="350" y="235" text-anchor="middle" fill="white" font-size="18" font-weight="bold">CavVLA核心</text>
          <text x="350" y="255" text-anchor="middle" fill="white" font-size="14">视觉语言动作模型</text>
          <text x="350" y="275" text-anchor="middle" fill="white" font-size="14">任务理解与执行</text>
        </g>
        
        <g class="module">
          <rect x="490" y="200" width="160" height="100" rx="15" fill="url(#grad1)" filter="url(#shadow)"/>
          <text x="570" y="235" text-anchor="middle" fill="white" font-size="16" font-weight="bold">VLM规划</text>
          <text x="570" y="255" text-anchor="middle" fill="white" font-size="14">轨迹生成</text>
          <text x="570" y="275" text-anchor="middle" fill="white" font-size="14">路径优化</text>
        </g>
        
        <!-- 决策层 -->
        <g class="module">
          <path d="M 350 350 L 450 400 L 350 450 L 250 400 Z" fill="#ff6b6b" stroke="none" filter="url(#shadow)"/>
          <text x="350" y="395" text-anchor="middle" fill="white" font-size="16" font-weight="bold">智能路由</text>
          <text x="350" y="415" text-anchor="middle" fill="white" font-size="14">状态机/LLM</text>
        </g>
        
        <!-- 执行层 -->
        <g class="module">
          <rect x="100" y="500" width="150" height="80" rx="15" fill="#20c997" filter="url(#shadow)"/>
          <text x="175" y="530" text-anchor="middle" fill="white" font-size="16" font-weight="bold">脚本执行</text>
          <text x="175" y="550" text-anchor="middle" fill="white" font-size="14">精准控制</text>
        </g>
        
        <g class="module">
          <rect x="300" y="500" width="150" height="80" rx="15" fill="#20c997" filter="url(#shadow)"/>
          <text x="375" y="530" text-anchor="middle" fill="white" font-size="16" font-weight="bold">示教遥控</text>
          <text x="375" y="550" text-anchor="middle" fill="white" font-size="14">人机协作</text>
        </g>
        
        <g class="module">
          <rect x="500" y="500" width="150" height="80" rx="15" fill="#20c997" filter="url(#shadow)"/>
          <text x="575" y="530" text-anchor="middle" fill="white" font-size="16" font-weight="bold">动作执行</text>
          <text x="575" y="550" text-anchor="middle" fill="white" font-size="14">实时反馈</text>
        </g>
        
        <!-- 数据管理 -->
        <g class="module">
          <circle cx="820" cy="350" r="60" fill="#ff922b" filter="url(#shadow)"/>
          <text x="820" y="345" text-anchor="middle" fill="white" font-size="16" font-weight="bold">数据集</text>
          <text x="820" y="365" text-anchor="middle" fill="white" font-size="14">LeRobot</text>
        </g>
        
        <g class="module">
          <rect x="740" y="450" width="160" height="80" rx="15" fill="#845ec2" filter="url(#shadow)"/>
          <text x="820" y="480" text-anchor="middle" fill="white" font-size="16" font-weight="bold">数据管理</text>
          <text x="820" y="500" text-anchor="middle" fill="white" font-size="14">清洗/优化/回流</text>
        </g>
        
        <!-- 连接线 -->
        <path d="M 140 130 L 140 200" stroke="#666" stroke-width="2" fill="none" class="arrow" marker-end="url(#arrowhead)"/>
        <path d="M 340 130 L 340 200" stroke="#666" stroke-width="2" fill="none" class="arrow" marker-end="url(#arrowhead)"/>
        <path d="M 540 130 L 540 200" stroke="#666" stroke-width="2" fill="none" class="arrow" marker-end="url(#arrowhead)"/>
        
        <path d="M 210 250 L 250 250" stroke="#666" stroke-width="2" fill="none" class="arrow" marker-end="url(#arrowhead)"/>
        <path d="M 450 250 L 490 250" stroke="#666" stroke-width="2" fill="none" class="arrow" marker-end="url(#arrowhead)"/>
        
        <path d="M 130 300 L 280 370" stroke="#666" stroke-width="2" fill="none" class="arrow" marker-end="url(#arrowhead)"/>
        <path d="M 350 300 L 350 350" stroke="#666" stroke-width="3" fill="none" class="arrow" marker-end="url(#arrowhead)"/>
        <path d="M 570 300 L 420 370" stroke="#666" stroke-width="2" fill="none" class="arrow" marker-end="url(#arrowhead)"/>
        
        <path d="M 300 430 L 175 500" stroke="#666" stroke-width="2" fill="none" class="arrow" marker-end="url(#arrowhead)"/>
        <path d="M 350 450 L 375 500" stroke="#666" stroke-width="2" fill="none" class="arrow" marker-end="url(#arrowhead)"/>
        <path d="M 400 430 L 525 500" stroke="#666" stroke-width="2" fill="none" class="arrow" marker-end="url(#arrowhead)"/>
        
        <path d="M 650 540 L 760 400" stroke="#666" stroke-width="2" fill="none" class="arrow" marker-end="url(#arrowhead)"/>
        <path d="M 820 410 L 820 450" stroke="#666" stroke-width="2" fill="none" class="arrow" marker-end="url(#arrowhead)"/>
        <path d="M 740 490 L 450 300" stroke="#666" stroke-width="2" fill="none" stroke-dasharray="5,5" class="arrow" marker-end="url(#arrowhead)"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CavVLAArchitecture'
}
</script>

<style scoped>
.architecture-container {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  padding: 40px;
  margin: 40px 0;
  position: relative;
  overflow: hidden;
}

.architecture-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.architecture-title {
  text-align: center;
  color: #ffffff;
  margin-bottom: 40px;
  font-size: 2.5em;
  font-weight: 600;
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
  position: relative;
  z-index: 1;
}

.architecture-svg-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

.architecture-svg {
  width: 100%;
  height: auto;
  max-width: 1000px;
}

.module {
  transition: all 0.3s ease;
  cursor: pointer;
}

.module:hover {
  transform: translateY(-2px);
  filter: brightness(1.1);
}

.arrow {
  stroke-dasharray: 5;
  animation: flow 2s linear infinite;
}

@keyframes flow {
  to {
    stroke-dashoffset: -10;
  }
}

.pulse {
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .architecture-container {
    padding: 20px;
    margin: 20px 0;
  }
  
  .architecture-title {
    font-size: 2em;
    margin-bottom: 30px;
  }
  
  .architecture-svg text {
    font-size: 12px;
  }
  
  .architecture-svg text[font-size="18"] {
    font-size: 14px;
  }
  
  .architecture-svg text[font-size="16"] {
    font-size: 12px;
  }
  
  .architecture-svg text[font-size="14"] {
    font-size: 10px;
  }
}

@media (max-width: 480px) {
  .architecture-title {
    font-size: 1.5em;
  }
  
  .architecture-svg text {
    font-size: 10px;
  }
  
  .architecture-svg text[font-size="18"] {
    font-size: 12px;
  }
  
  .architecture-svg text[font-size="16"] {
    font-size: 10px;
  }
  
  .architecture-svg text[font-size="14"] {
    font-size: 8px;
  }
}
</style>