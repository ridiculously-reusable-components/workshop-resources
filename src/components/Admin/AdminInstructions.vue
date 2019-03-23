<script>
export default {
  data () {
    return {
      isOpen: false
    }
  }
}
</script>

<template>
	<aside>
    <AppIcon icon="info-circle" size="4x" />
    <svg viewBox="0 0 800 600" 
      class="menu-icon"
      :class="isOpen ? 'cross' : ''" 
      @click="isOpen = !isOpen"
    >
      <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top"></path>
      <path d="M300,320 L540,320" id="middle"></path>
      <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
    </svg>
    <div class="instructions-panel" :class="isOpen ? 'is-open' : ''">
      <h2>Instructions</h2>
      <ol>
        <li>Create a button component that can display text specified in the parent component</li>
        <li>
          Allow the button to display an icon of choice on the right side of the text
          <pre>
            {{ `<AppIcon icon="arrow-right" class="ml-3"/>` }}
          </pre>
        </li>
        <li>Do then</li>
      </ol>
    </div>
  </aside>
</template>

<style>
.instructions-panel {
  width: 300px;
  height: 100vh;
  position: absolute;
  right: 0;
  outline: 1px solid red;
  background-color: #eee;
  transform: translateX(300px);
  transition: transform 0.2s ease-in;
}

.instructions-panel.is-open {
  transform: translateX(0);
}

.menu-icon {
  width: 200px;
  height: 150px;
  cursor: pointer;
  transform: translate3d(0, 0, 0);
  position: absolute;
  top: 30px;
  right: 30px;
  transition: transform 0.5s ease-in-out;
}

.menu-icon.cross {
  transform: translate3d(30px, -60px, 0);
}

.menu-icon path {
  fill: none;
  transition: stroke-dashoffset 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25), stroke-dasharray 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25);
  stroke-width: 40px;
  stroke-linecap: round;
  stroke: #a06ba5;
  stroke-dashoffset: 0px;
}

.menu-icon path#top,
.menu-icon path#bottom {
  stroke-dasharray: 240px 950px;
}

.menu-icon path#middle {
  stroke-dasharray: 240px 240px;
}
.cross path#top,
.cross path#bottom {
  stroke-dashoffset: -650px;
  stroke-dashoffset: -650px;
}
.cross path#middle {
  stroke-dashoffset: -115px;
  stroke-dasharray: 1px 220px;
}
</style>
