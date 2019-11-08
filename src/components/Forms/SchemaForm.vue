<template>
  <form class="schema-form" @submit.prevent>
    <component
      v-for="(field, property) in schema"
      :key="property"
      :is="field.component"
      v-bind="{ ...field }"
      :value="value[property]"
      @input="update(property, $event)"
    />
    <slot/>
  </form>
</template>

<script>
export default {
  props: {
    schema: {
      type: Object,
      required: true
    },
    value: {
      type: Object,
      required: true
    }
  },
  methods: {
    update (property, value) {
      this.$emit('input', {
        ...this.value,
        [property]: value
      })
    }
  }
}
</script>

<style lang="sass">
.schema-form
  max-width: 600px
  margin: 0 auto
  text-align: left

  label
    font-weight: bold
    font-size: 0.9rem
    display: block

  input
    padding: 8px 10px
    border-radius: 3px
    border: 1px solid #ccc
    margin-bottom: 1rem
    width: 100%
    font-size: 1rem

  input[type="checkbox"]
    width: auto
</style>
