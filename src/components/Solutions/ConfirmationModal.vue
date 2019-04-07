<template functional>
  <AppModal>
    <h3 class="confirmation-message">
      {{ props.message }}
    </h3>
    <div class="buttons">
      <AppButton @click="listeners.confirm">
        Confirm
      </AppButton>
      <AppButton type="secondary" @click="listeners.close">
        Cancel
      </AppButton>
    </div>
  </AppModal>
</template>
