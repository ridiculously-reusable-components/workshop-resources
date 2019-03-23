<script>
export default {

}
</script>

<template>
  <article class="wrapper">
    <button class="button is-large" type="button">
      Button
    </button>
    <PulseLoader color="#fff" size="12px"/>
  </article>

</template>

<style>
.wrapper {
  padding-top: 60px;
}

/* Styles from Bulma.io */
/* Base Styles */

.button {
    background-color: #fff;
    border-color: #dbdbdb;
    border-width: 1px;
    color: #363636;
    cursor: pointer;
    justify-content: center;
    padding-bottom: calc(.375em - 1px);
    padding-left: .75em;
    padding-right: .75em;
    padding-top: calc(.375em - 1px);
    text-align: center;
    white-space: nowrap
}


/* Colors */

.button.is-primary {
    background-color: #00d1b2;
    border-color: transparent;
    color: #fff
}

.button.is-link {
    background-color: #3273dc;
    border-color: transparent;
    color: #fff
}

.button.is-info {
    background-color: #209cee;
    border-color: transparent;
    color: #fff
}

.button.is-success {
    background-color: #23d160;
    border-color: transparent;
    color: #fff
}

.button.is-warning {
    background-color: #ffdd57;
    border-color: transparent;
    color: rgba(0,0,0,.7)
}

.button.is-danger {
    background-color: #ff3860;
    border-color: transparent;
    color: #fff
}


/* Size */

.button.is-small {
    border-radius: 2px;
    font-size: .75rem
}

.button.is-normal {
    font-size: 1rem
}

.button.is-medium {
    font-size: 1.25rem
}

.button.is-large {
    font-size: 1.5rem
}
</style>
