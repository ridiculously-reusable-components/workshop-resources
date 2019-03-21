<template>
  <div>
    <h1>Task 3: "Composition Over Inheritance"</h1>
    <ol class="steps">
      <li>
        Create a ConfirmationModal.vue that uses AppModal to that accepts a question and contains two buttons: "Confirm" and "Cancel"
      </li>
    </ol>

    <!-- TASK BEGINS HERE -->
    <div v-for="news of newsFeed" :key="news.id">
      <div class="card">
        <small>{{ news.author }}</small>
        <h3 class="title">{{ news.title }}</h3>
        <small>{{ news.date }}</small>

        <template v-if="news.type === 'post'">
          <blockquote class="quote">
            {{ news.content }}
          </blockquote>
        </template>
        <template v-if="news.type === 'ad'">
          <img class="banner" :src="news.image"/>
        </template>
        <template v-if="news.type === 'event'">
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
        </template>
      </div>
    </div>

    <!-- DESIRED USAGE -->
    <ConfirmationModal
      message="Have you finished the task?"
      @confirm="confirm"
      @close="isModalOpen = false"
    />
    <!-- TASK ENDS HERE -->
  </div>
</template>

<script>
import newsFeed from '@/newsfeed.json'

export default {
  data () {
    return {
      newsFeed
    }
  },
  methods: {
    confirm () {
      alert('Why would you do that?')
      this.isModalOpen = false
    }
  }
}
</script>

<style lang="sass">
.confirmation-message
  text-align: left
  margin: 0

.buttons
  margin-top: 1rem
  text-align: left

  button
    margin-right: 1rem

.steps
  max-width: 30rem
  text-align: left
  margin: 0 auto 4rem
  line-height: 1.6

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

.quote
  margin: 10px 0
  font-style: italic

.title
  margin: 0

.event
  p
    margin: 0

  small
    font-weight: 700

  button
    margin-top: 1rem

.mr-1
  margin-right: 5px

.banner
  margin: 0.5rem -1rem -1.5rem
  max-width: calc(400px + 2rem)
</style>
