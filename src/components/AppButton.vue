<template>
  <button
    class="button"
    :type="buttonType"
    :class="type"
    v-on="$listeners"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    buttonType: {
      type: String,
      default: 'button'
    }
  }
}
</script>

<style lang="sass" scoped>
.button
  display: inline-flex
  padding: 8px 16px
  color: #fff
  font-weight: bold
  font-size: 1rem
  border: none
  border-radius: 4px
  align-items: center
  cursor: pointer

.primary
  background: #3a82d4

  &:hover
    background: darken(#3a82d4, 10%)

.danger
  background: #d43a3a

  &:hover
    background: darken(#d43a3a, 10%)

.secondary
  background: #9baec5

  &:hover
    background: darken(#9baec5, 10%)
</style>
