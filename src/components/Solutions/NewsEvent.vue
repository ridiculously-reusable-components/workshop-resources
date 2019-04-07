<template>
  <BaseNews v-bind="$props">
    <div class="event">
      <small>Location:</small>
      <p>{{ news.location }}</p>

      <small>Attendees:</small>
      <p>{{ news.attendees }}</p>

      <AppButton :type="news.attending ? 'primary' : 'secondary'">
        <AppIcon
          :icon="news.attending ? 'check' : 'plus'"
          class="mr-1"
        />
        {{ news.attending ? 'You’re attending' : 'Join!' }}
      </AppButton>
    </div>
  </BaseNews>
</template>

<script>
import BaseNews from '../BaseNews'

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

.event
  p
    margin: 0

  small
    font-weight: 700

  button
    margin-top: 1rem
</style>
