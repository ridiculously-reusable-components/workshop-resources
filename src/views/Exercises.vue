<template>
  <div>
    <component :is="currentExercise" />
  </div>
</template>

<script>
export default {
  computed: {
    currentExercise () {
      return () => import(`@/exercises/${this.$route.params.exercise}.vue`)
    }
  }
}
</script>

<style lang="sass" scoped>
.tasks-nav
  margin-top: 4rem
</style>
