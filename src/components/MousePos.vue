<template>
  <div @mousemove="handleMouseMove">
    <slot v-bind="{ x, y }"></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      x: 0,
      y: 0
    }
  },
  methods: {
    handleMouseMove (e) {
      this.x = e.x
      this.y = e.y
    }
  }
}
</script>
