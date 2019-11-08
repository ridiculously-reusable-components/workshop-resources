import { reactive, toRefs, onMounted, onUnmounted } from '@vue/composition-api'

export default function () {
  const mousePos = reactive({
    x: 0,
    y: 0
  })

  onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
  })

  const handleMouseMove = (e) => {
    mousePos.x = e.x
    mousePos.y = e.y
  }

  return toRefs(mousePos)
}
