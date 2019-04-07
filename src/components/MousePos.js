export default {
  data () {
    return {
      x: 0,
      y: 0
    }
  },
  render () {
    return this.$scopedSlots.default({ x: this.x, y: this.y })
  },
  mounted () {
    window.addEventListener('mousemove', this.handleMouseMove)
  },
  beforeDestroy () {
    window.removeEventListener('mousemove', this.handleMouseMove)
  },
  methods: {
    handleMouseMove (e) {
      this.x = e.x
      this.y = e.y
    }
  }
}
