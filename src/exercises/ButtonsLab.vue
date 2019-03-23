<script>
export default {

}
</script>

<template>
  <article class="wrapper">
    <h1>Button Labs</h1>
    <p>Is this the real</p>
    <button class="button is-info is-medium" type="button">
      Life
    </button> 
    <p>Is this just</p>
    <button class="button is-info is-medium" type="button">
      Fantasy
    </button>
    <p>Caught in a</p>
    <button class="button is-info is-medium" type="button">
      Landslide
    </button>
    <p>No escape from</p>
    <button class="button is-info is-medium" type="button">
      Reality
    </button>
    <p>Open your</p>
    <button class="button is-info is-medium" type="button">
      Eyes
    </button>
    <p>Look up to the skies and</p>
    <button class="button is-info is-medium" type="button">
      See
    </button>
  </article>
</template>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Styles from Bulma.io */
/* Base Styles */

.button {
    display: block;
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
