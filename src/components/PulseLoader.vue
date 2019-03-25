<template>
  <div class="is-spinning">
    <AppIcon icon="spinner" size="lg" />
  </div>
</template>

<style>
@keyframes spinning {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

.is-spinning {
  animation: spinning 2s infinite linear;
}
</style>
