<template>
  <AppTooltip>
    <template
      slot="trigger"
      slot-scope="{ isOpen, setIsOpen }"
    >
      <AppButton @click="setIsOpen(!isOpen)">
        <slot/>
      </AppButton>
      <GlobalEvents
        v-if="isOpen"
        @click="handleOutsideClick($event, setIsOpen)"
      />
    </template>
    <div slot="content" slot-scope="{ isOpen, setIsOpen }">
      <slot name="content" v-bind="{ isOpen, setIsOpen }"/>
    </div>
  </AppTooltip>
</template>

<script>
import AppButton from './AppButton'
import AppTooltip from './AppTooltip'
import GlobalEvents from 'vue-global-events'

export default {
  components: {
    AppTooltip,
    AppButton,
    GlobalEvents
  },
  methods: {
    handleOutsideClick (e, cb) {
      if (!this.$el.contains(e.target)) cb()
    }
  }
}
</script>
