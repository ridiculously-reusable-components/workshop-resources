<template>
  <div>
    <slot v-bind="{ x, y }"/>
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
  },
  mounted () {
    window.addEventListener('mousemove', this.handleMouseMove)
  },
  beforeDestroy () {
    window.removeEventListener('mousemove', this.handleMouseMove)
  }
}
</script>

<style lang="css" scoped>
</style>
