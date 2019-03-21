<template>
  <div class="modal-bg" @click.self="close">
    <div class="modal">
      <AppIcon
        icon="times"
        class="modal-close"
        @click="close"
      />
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="sass" scoped>
.modal-bg
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  background: rgba(#000, 0.2)
  display: flex

.modal-close
  position: absolute
  top: 0.6rem
  right: 0.9rem
  font-size: 1.2rem
  cursor: pointer

.modal
  position: fixed
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  background: #fff
  padding: 1.5rem
  border-radius: 10px
  width: 300px
  max-width: 100%
  max-height: 100%
  overflow: auto
</style>
