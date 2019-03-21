<template>
  <div>
    <h1>Task 1: Composing Components</h1>
    <ol class="steps">
      <li>
        Compose AppSelect.vue that uses AppDropdown.vue. Let it accept an array of options and the selected value.
      </li>
      <li>
        Expose a default slot for showing the current value
      </li>
      <li>
        Expose an option slot for modifying how the option list would look like.
      </li>
    </ol>

    <!-- TASK BEGINS HERE -->
    <AppSelect v-model="value" :options="options">
      <template #selected>
        {{ value.name || 'Select option' }}
        <AppIcon icon="chevron-down" style="margin-left: 10px;"/>
      </template>
      <template #option="{ option }">
        <div class="option">
          {{ option.name }}
          <span style="margin-left: 20px">
            <AppIcon icon="star" style="margin-right: 5px"/>{{ option.stars }}
          </span>
        </div>
      </template>
    </AppSelect>

    <!-- TASK ENDS HERE -->
  </div>
</template>

<script>
import AppSelect from '@/components/AppSelect'

export default {
  components: {
    AppSelect
  },
  data () {
    return {
      value: {},
      options: [
        { name: 'Vue-Multiselect', stars: '3904' },
        { name: 'Vuelidate', stars: '3369' },
        { name: 'Vue-Global-Events', stars: '342' }
      ]
    }
  }
}
</script>

<style lang="sass">
.option
  display: flex
  justify-content: space-between
  white-space: nowrap

.steps
  max-width: 30rem
  text-align: left
  margin: 0 auto 4rem
  line-height: 1.6
</style>
