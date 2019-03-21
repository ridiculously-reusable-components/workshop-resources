<template>
  <div class="card">
    <slot name="author">
      <small>{{ news.author }}</small>
    </slot>
    <h3 class="title">
      <slot name="title">
        {{ news.title }}
      </slot>
    </h3>
    <small>{{ news.date }}</small>

    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
.card
  background: #fafafa
  border: 1px solid #eee
  box-shadow: 0 10px 10px rgba(#000, 0.15)
  border-radius: 5px
  padding: 1rem
  text-align: left
  width: 400px
  max-width: 100%
  margin: 0 auto 2rem

.title
  margin: 0
</style>
