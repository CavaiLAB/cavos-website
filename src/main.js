import { createApp } from 'vue'
import App from './App.vue'
import './styles/global.css'
import { initializeParticles } from './js/particles.js'

// 创建并挂载Vue应用
const app = createApp(App).mount('#app')

// 在Vue应用挂载后初始化粒子效果
document.addEventListener('DOMContentLoaded', () => {
  // 延迟一点时间确保DOM完全加载
  setTimeout(() => {
    initializeParticles()
  }, 100)
})

// 当内容更新时重新初始化粒子效果
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    setTimeout(initializeParticles, 100)
  }
})

// 添加一个全局方法，可以在组件挂载后调用
window.reinitParticles = () => {
  setTimeout(initializeParticles, 100)
}
