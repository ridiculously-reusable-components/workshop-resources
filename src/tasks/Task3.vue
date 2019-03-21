<template>
  <div>
    <h1>Task 3: "Composition Over Inheritance"</h1>
    <ol class="steps">
      <li>
        Create the NewsEvent component that will handle the "event" type news from the newsFeed.
      </li>
      <li>
        Similar to NewsAd and NewsPost, make use of the BaseNews component
      </li>
    </ol>

    <div class="feeds">
      <!-- TASK BEGINS HERE -->
      <div class="feed">
        <div v-for="news of newsFeed" :key="news.id">
          <div class="card">
            <template v-if="news.type === 'ad'">
              <span class="sponsored">SPONSORED</span>
              <small>{{ news.author }}</small>
            </template>
            <template v-else>
              <small>{{ news.author }}</small>
            </template>

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
      </div>

      <!-- DESIRED USE PATTERN -->
      <div class="feed">
        <Component
          v-for="news of newsFeed"
          :key="news.id"
          :is="getNewsTypeComponent(news.type)"
          :news="news"
        />
      </div>

      <!-- TASK ENDS HERE -->
    </div>
  </div>
</template>

<script>
import newsFeed from '@/newsfeed.json'
import NewsPost from '@/components/NewsPost'
import NewsAd from '@/components/NewsAd'

export default {
  data () {
    return {
      newsFeed
    }
  },
  methods: {
    getNewsTypeComponent (type) {
      switch (type) {
        case 'post':
          return NewsPost
        case 'ad':
          return NewsAd
        default:
          return NewsPost
      }
    },
    join () {
      alert('joining the event!')
    },
    leave () {
      alert('leaving the event!')
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

.feeds
  display: flex
  justify-content: center

.feed
  margin: 0 2rem

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

.title
  margin: 0

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

.quote
  margin: 10px 0
  font-style: italic

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
