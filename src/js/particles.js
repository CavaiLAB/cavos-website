/**
 * 粒子效果系统
 * 为网站添加动态粒子背景效果
 */

// 粒子系统配置
const particlesConfig = {
  particles: {
    count: 30,
    size: {
      min: 1,
      max: 3
    },
    color: '#00d4ff',
    speed: {
      min: 0.2,
      max: 0.8
    },
    opacity: {
      min: 0.1,
      max: 0.5
    },
    connectLines: true,
    lineColor: 'rgba(0, 212, 255, 0.2)',
    lineDistance: 150
  }
};

// 粒子类
class Particle {
  constructor(canvas, ctx, options) {
    this.canvas = canvas;
    this.ctx = ctx;
    
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    
    this.size = Math.random() * (options.size.max - options.size.min) + options.size.min;
    this.speed = Math.random() * (options.speed.max - options.speed.min) + options.speed.min;
    this.opacity = Math.random() * (options.opacity.max - options.opacity.min) + options.opacity.min;
    
    this.directionX = Math.random() * 2 - 1;
    this.directionY = Math.random() * 2 - 1;
    
    this.color = options.color;
  }
  
  // 更新粒子位置
  update() {
    this.x += this.directionX * this.speed;
    this.y += this.directionY * this.speed;
    
    // 边界检查
    if (this.x < 0 || this.x > this.canvas.width) {
      this.directionX = -this.directionX;
    }
    
    if (this.y < 0 || this.y > this.canvas.height) {
      this.directionY = -this.directionY;
    }
  }
  
  // 绘制粒子
  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.fillStyle = this.color;
    this.ctx.globalAlpha = this.opacity;
    this.ctx.fill();
    this.ctx.globalAlpha = 1;
  }
}

// 粒子系统类
class ParticleSystem {
  constructor(selector, options) {
    this.selector = selector;
    this.options = options;
    this.particles = [];
    this.canvases = [];
    this.running = false;
    
    this.init();
  }
  
  // 初始化粒子系统
  init() {
    // 查找所有具有指定选择器的元素
    const elements = document.querySelectorAll(this.selector);
    
    if (elements.length === 0) return;
    
    // 为每个元素创建一个canvas
    elements.forEach(element => {
      // 检查元素是否已经有canvas
      const existingCanvas = element.querySelector('.particles-canvas');
      if (existingCanvas) {
        existingCanvas.remove();
      }
      
      // 创建新的canvas
      const canvas = document.createElement('canvas');
      canvas.className = 'particles-canvas';
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '0';
      
      // 确保父元素有相对定位
      if (getComputedStyle(element).position === 'static') {
        element.style.position = 'relative';
      }
      
      element.appendChild(canvas);
      
      // 设置canvas尺寸
      this.resizeCanvas(canvas, element);
      
      // 创建粒子
      const ctx = canvas.getContext('2d');
      const particlesArray = [];
      
      for (let i = 0; i < this.options.particles.count; i++) {
        particlesArray.push(new Particle(canvas, ctx, this.options.particles));
      }
      
      this.canvases.push({
        element,
        canvas,
        ctx,
        particles: particlesArray
      });
    });
    
    // 添加窗口大小变化监听
    window.addEventListener('resize', this.handleResize.bind(this));
    
    // 开始动画
    if (!this.running) {
      this.running = true;
      this.animate();
    }
  }
  
  // 处理窗口大小变化
  handleResize() {
    this.canvases.forEach(item => {
      this.resizeCanvas(item.canvas, item.element);
    });
  }
  
  // 调整canvas大小
  resizeCanvas(canvas, element) {
    const rect = element.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }
  
  // 连接粒子
  connectParticles(particles, ctx, maxDistance) {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          const opacity = 1 - (distance / maxDistance);
          ctx.beginPath();
          ctx.strokeStyle = this.options.particles.lineColor;
          ctx.globalAlpha = opacity * 0.5;
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
    }
  }
  
  // 动画循环
  animate() {
    if (!this.running) return;
    
    this.canvases.forEach(item => {
      item.ctx.clearRect(0, 0, item.canvas.width, item.canvas.height);
      
      // 更新并绘制所有粒子
      item.particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // 连接粒子
      if (this.options.particles.connectLines) {
        this.connectParticles(
          item.particles, 
          item.ctx, 
          this.options.particles.lineDistance
        );
      }
    });
    
    requestAnimationFrame(this.animate.bind(this));
  }
  
  // 停止动画
  stop() {
    this.running = false;
  }
  
  // 重新启动动画
  restart() {
    if (!this.running) {
      this.running = true;
      this.animate();
    }
  }
  
  // 销毁粒子系统
  destroy() {
    this.stop();
    window.removeEventListener('resize', this.handleResize);
    
    this.canvases.forEach(item => {
      item.canvas.remove();
    });
    
    this.canvases = [];
    this.particles = [];
  }
}

// 初始化粒子效果
export function initializeParticles() {
  // 销毁现有的粒子系统实例（如果存在）
  if (window.particleSystem) {
    window.particleSystem.destroy();
  }
  
  // 创建新的粒子系统
  window.particleSystem = new ParticleSystem('.quantum-particles', particlesConfig);
}