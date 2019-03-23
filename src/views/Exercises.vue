<template>
  <div>
    <component v-if="currentExercise" :is="currentExercise" />
    <section v-else>
      <ul>
        <li v-for="exercise in exercises" :key="exercise">
          <router-link :to="`/exercises/${exercise}`">{{ exercise }}</router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      exercises: [
        'ButtonsLab',
        'ChatBot'
      ]
    }
  },
  computed: {
    currentExercise () {
      if (this.$route.params.exercise) {
        return () => import(`@/exercises/${this.$route.params.exercise}.vue`)
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.tasks-nav
  margin-top: 4rem
</style>

