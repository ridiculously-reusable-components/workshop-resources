<script>
export default {

}
</script>

<template>
  <main class="chatbot">
    <article class="phone">
      <section class="phone__screen">
        <div class="message-container">
          <p class="message">Hello. What's up?</p>
        </div>
        <div class="message-container message-container--received">
          <p class="message message--received">How are you?</p>
        </div>
        <div class="message-container">
          <p class="message">I'm okay.</p>
        </div>
      </section>
    </article>
    <article class="phone">
      <section class="phone__screen"></section>
    </article>
  </main>
</template>

<style lang="scss">
.chatbot {
  display: flex;
  justify-content: center;
}

.phone {
  width: 350px;
  height: 625px;
  background-image: url('../assets/phone.png');
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
}

.phone__screen {
  width: 258px;
  height: 565px;
  padding: 8px;
  box-sizing: border-box;
  background-color: #fff;
  position: absolute;
  top: 30px;
  left: 46px;
  border-radius: 25px;
}

.message {
  max-width: 60%;
  background: linear-gradient(#57c5fc, 10%, #0e80f7);
  color: white;
  text-align: right;
  padding: 5px 10px;
  font-size: 0.75rem;
  border-radius: 8px;
  margin: 5px 0;
}

.message-container {
  display: flex;
  justify-content: flex-end;
}

.message-container--received {
  display: flex;
  justify-content: flex-start;
}

.message--received {
  text-align: left;
  background: linear-gradient(#eee);
  color: #222;
}
</style>
