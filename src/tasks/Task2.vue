<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Task 2: Reusable Component Composition</h1>
    <ol class="steps">
      <li>
        Create a ConfirmationModal.vue that uses AppModal to that accepts a question and contains two buttons: "Confirm" and "Cancel"
      </li>
      <li>
        Make the ConfirmationModal component emit a 'confirm' event when clicked on 'Confirm' button. And a 'close' event when clicking on 'Cancel'.
      </li>
      <li>
        Display the confirmation question before the button, similar to the example below.
      </li>
      <li>
        Make sure the ConfirmationModal looks like the example below, this includes the H3 styling and buttons positioning.
      </li>
    </ol>

    <!-- TASK BEGINS HERE -->
    <AppButton
      @click="isModalOpen = true"
      type="danger"
    >
      Don’t push that button!
    </AppButton>

    <AppModal
      v-if="isModalOpen"
      @close="isModalOpen = false"
    >
      <h3 class="confirmation-message">
        So you really did it?
      </h3>
      <div class="buttons">
        <AppButton @click="confirm">
          Confirm
        </AppButton>
        <AppButton type="secondary" @click="isModalOpen = false">
          Cancel
        </AppButton>
      </div>
    </AppModal>

    <!-- DESIRED USAGE. UNCOMMENT WHEN READY -->
    <!-- <ConfirmationModal
      v-if="isModalOpen"
      message="Have you finished the task?"
      @confirm="confirm"
      @close="isModalOpen = false"
    /> -->
    <!-- TASK ENDS HERE -->
  </div>
</template>

<script>
import AppModal from '@/components/AppModal'
// import ConfirmationModal from '@/components/ConfirmationModal'

export default {
  components: {
    AppModal,
    // ConfirmationModal
  },
  data () {
    return {
      isModalOpen: false
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
</style>
