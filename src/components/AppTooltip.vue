<template>
  <span class="tooltip">
    <slot name="trigger" v-bind="{ setIsOpen, isOpen }">
      <span
        class="tooltip-trigger"
        @mouseenter="setIsOpen(true)"
        @mouseleave="setIsOpen(false)"
      >
        <slot/>
      </span>
    </slot>
    <div v-if="isOpen" class="tooltip-content">
      <slot name="content" v-bind="{ setIsOpen, isOpen }"/>
    </div>
  </span>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    setIsOpen (isOpen) {
      this.isOpen = isOpen
    }
  }
}
</script>

<style lang="sass">
.tooltip
  position: relative
  display: inline

.tooltip-trigger
  cursor: help
  border-bottom: 1px dashed rgba(#000, 0.5)

.tooltip-content
  position: absolute
  z-index: 10
  padding: 10px
  min-width: 150px
  text-align: left
  background: #fafafa
  box-shadow: 0 0 1px 1px rgba(#000, 0.15)
  left: 0
  bottom: -5px
  transform: translateY(100%)
</style>
