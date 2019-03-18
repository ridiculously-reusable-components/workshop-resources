<template>
  <div>
    <component :is="task" />

    <div class="tasks-nav">
      <router-link
        v-if="currentTask - 1"
        :to="{ name: 'tasks', params: { task: currentTask - 1 } }"
      >
        <AppButton>Go to task {{ currentTask - 1 }}</AppButton>
      </router-link>

      <router-link :to="{ name: 'tasks', params: { task: currentTask + 1 } }">
        <AppButton style="margin-left: 1rem;">Go to task {{ currentTask + 1 }}</AppButton>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentTask () {
      return parseInt(this.$route.params.task)
    },
    task() {
      const task = this.currentTask
      return () => import(`@/tasks/Task${task}.vue`)
    }
  }
}
</script>

<style lang="sass" scoped>
.tasks-nav
  margin-top: 4rem
</style>
