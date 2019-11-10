import { ref, onMounted, onUnmounted } from '@vue/composition-api'

export default function () {
  const x = ref(0)
  const y = ref(0)

  onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
  })

  const handleMouseMove = (e) => {
    x.value = e.x
    y.value = e.y
  }

  return { x, y }
}
