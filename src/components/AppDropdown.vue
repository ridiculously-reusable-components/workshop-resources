<template>
  <AppTooltip>
    <template slot="trigger" slot-scope="{ setIsOpen, isOpen }">
      <AppButton @click="setIsOpen(!isOpen)">
        <slot />
      </AppButton>
      <GlobalEvents
        v-if="isOpen"
        @click="handleOutsideClick($event, setIsOpen)"
      />
    </template>
    <div slot="content" slot-scope="{ setIsOpen, isOpen }">
      <slot name="content" v-bind="{ setIsOpen, isOpen }" />
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
