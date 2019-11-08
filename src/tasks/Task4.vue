<template>
  <div>
    <div>
      <h1 class="text-2xl font-bold mb-4">Task 4: Renderless Provider Component</h1>
      <ol class="steps">
        <li>
          Create a renderless component called FetchData
        </li>
        <li>
          Make it accept a URL props where you can pass a url to be fetched.
        </li>
        <li>
          Depending on the status: pending, error or resolved (data fetched), make it render different slots to match the use case below.
        </li>
        <li>
          <strong>Advanced</strong>: Create a `useFetchData` composition function to replace the provider component.
        </li>
      </ol>
      <div class="mb-2">
        <WithMousePos>
          <template v-slot="{ x, y }">
            Mouse position from Renderless component: {{ x }}, {{ y }}
          </template>
        </WithMousePos>

      </div>
      <div class="mb-2">
        Mouse position from Composition-API is: {{ mouseX }}, {{ mouseY }}
      </div>
      <!-- TASK BEGINS HERE -->
      <input v-model="breed" class="input" type="text">
      <FetchData :url="url">
        <template #loading>
          <PulseLoader/>
        </template>

        <template #error="{ error, refresh }">
          <div>
            {{ error }}
            <AppButton @click="refresh">Refresh!</AppButton>
          </div>
        </template>

        <template #default="{ data, isPending, error, refresh }">
          <div>
            <img :src="data.message" class="result-image">
            <AppButton @click="refresh">Refresh!</AppButton>
          </div>
        </template>
      </FetchData>
      <!-- TASK ENDS HERE -->

      <!-- ADVANCED TASK USAGE -->
      <!-- <PulseLoader v-if="isPending"/>
      <template v-if="error">
        <div>
          {{ error }}
          <AppButton @click="refresh">Refresh!</AppButton>
        </div>
      </template>

      <template v-if="!error && !isPending">
        <div>
          <img :src="data.message" class="result-image">
          <AppButton @click="refresh">Refresh!</AppButton>
        </div>
      </template> -->
    </div>
  </div>
</template>

<script>
// import { ref, computed } from '@vue/composition-api'
import FetchData from '@/components/FetchData'
// import useFetchData from '@/composables/useFetchData'
import PulseLoader from 'vue-spinner/src/PulseLoader'
import WithMousePos from '@/components/MousePos'
import useMousePos from '@/composables/useMousePos'

export default {
  components: {
    FetchData,
    PulseLoader,
    WithMousePos
  },
  setup () {
    const { x, y } = useMousePos()
    return { mouseX: x, mouseY: y }
  },
  data () {
    return {
      breed: 'collie/border'
    }
  },
  computed: {
    url () {
      return `https://dog.ceo/api/breed/${this.breed}/images/random`
    }
  }
}
</script>

<style lang="sass">
.input
  font-size: 16px
  padding: 6px 10px
  margin-bottom: 1rem
  border-radius: 5px
  border: 1px solid #ccc

.steps
  max-width: 30rem
  text-align: left
  margin: 0 auto 4rem
  line-height: 1.6

.result-image
  display: block
  margin: 0 auto 1rem
</style>
