<template>
  <BaseNews
    v-bind="{ ...$attrs, ...$props }"
    v-on="$listeners"
  >
    <blockquote class="quote">
      {{ news.content }}
    </blockquote>
  </BaseNews>
</template>

<script>
import BaseNews from './BaseNews'

export default {
  components: { BaseNews },
  props: {
    news: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
.quote
  margin: 10px 0
  font-style: italic
</style>
