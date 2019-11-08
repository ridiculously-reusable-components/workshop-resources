<template>
  <AppDropdown>
    <template>
      <slot name="selected"/>
      <AppIcon style="margin-left: 7px" icon="chevron-down"/>
    </template>
    <div slot="content" class="">
      <ul>
        <li
          v-for="(option, index) of options"
          :key="index"
          @click="update(option)"
        >
          <slot name="option" :option="option">
            {{ option.name }}
          </slot>
        </li>
      </ul>
    </div>
  </AppDropdown>
</template>

<script>
import AppDropdown from '../AppDropdown'

export default {
  components: {
    AppDropdown
  },
  props: {
    options: {
      type: Array
    },
    value: {
      type: [String, Object]
    }
  },
  methods: {
    update (option, cb) {
      this.$emit('input', option)
      if (cb) cb()
    }
  }
}
</script>

<style lang="sass" scoped>
ul
  list-style: none
  padding: 0
  margin: -10px

  li
    border-bottom: 1px solid #f0f0f0
    padding: 8px 14px
    cursor: pointer

    &:hover
      background: #f0f0f0
</style>
