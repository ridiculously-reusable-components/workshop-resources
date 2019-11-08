<template>
  <div class="text-center mx-auto w-full">
    <img class="inline-block" alt="Vue logo" src="../assets/logo.png" />
    <h1 class="text-2xl mb-4">
      Welcome to the Ridiculously Reusable Components v3 workshop!
    </h1>
    <router-link to="/tasks/1">
      <AppButton>
        Start!
      </AppButton>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
};
</script>
