<template>
  <BaseNews v-bind="$props">
    <template #author>
      <span class="sponsored">SPONSORED</span>
      {{ news.author }}
    </template>
    <img class="banner" :src="news.image"/>
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
.sponsored
  font-size: 0.7em
  font-weight: 900
  letter-spacing: 1.5px
  margin-right: 0.3rem
  background: red
  color: white
  padding: 2px 7px
  border-radius: 5px
  display: inline-block
  margin: 0 0.5rem 0.2rem 0
  vertical-align: middle

.banner
  margin: 0.5rem -1rem -1.5rem
  max-width: calc(400px + 2rem)
</style>
