<template>
  <div>
    <label :for="label">
      {{ label }}
    </label>
    <AppSelect
      :value="value"
      :options="config.options"
      @input="update"
    >
      <template #selected>
        {{ value || 'Select option' }}
      </template>
      <template #option="{ option }">
        {{ option }}
      </template>
    </AppSelect>
  </div>
</template>

<script>
import FormMixin from '../Forms/FormMixin'
import AppSelect from './AppSelect'

export default {
  mixins: [ FormMixin ],
  components: { AppSelect },
  props: {
    config: {
      type: Object,
      required: true
    }
  }
}
</script>
