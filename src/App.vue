<template>
  <header>
    <h1 class="sr-only">めめボタン</h1>
    <div class="site-logo">
      <button type="button" aria-label="ランダム再生" @click="randomPlay()">
        <img class="logo-normal" src="/img/meme-button-logo.svg" alt="めめボタンのロゴ">
        <img class="logo-pressed" src="/img/meme-button-logo-hover.svg" alt="めめボタンのロゴ（押した）">
      </button>
    </div>
  </header>
  <main>
    <div class="content" :style="{ paddingBottom: panelHeight }">
      <Playground />
    </div>
  </main>
  <footer>
    <SourcePanel ref="sourcePanel" />
  </footer>
</template>

<script setup lang="ts">
import SourcePanel from "./components/SourcePanel.vue";

import soundData from "@/data/sound";
import type { soundDataInterface } from "@/data/sound";

const randomPlayBus = useEventBus<soundDataInterface["id"]>("randomPlay");

async function randomPlay() {
  const randomIndex = Math.floor(Math.random() * soundData.length);
  randomPlayBus.emit(soundData[randomIndex].id);
}

const sourcePanel = ref<InstanceType<typeof SourcePanel>>();
const panelHeight = computed(() => sourcePanel.value?.isExpanded ? sourcePanel.value?.panelHeight + "px" : undefined);
</script>

<style lang="scss">
#app {
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  max-width: 95%;
  margin: auto;
}
</style>

<style lang="scss" scoped>
header {
  padding-top: 1.5rem;
  padding-bottom: 0.75rem;
}
.site-logo {
  img {
    width: 20rem;
    &.logo-pressed {
      display: none;
    }
  }
  &:active {
    .logo-normal {
      display: none;
    }
    .logo-pressed {
      display: block;
    }
  }
}

main {
  flex: 1 1 0;
  padding-top: 0.75rem;
  padding-bottom: 2rem;
  overflow: hidden;
}

.content {
  height: 100%;
  background: rgba(255 255 255 / 65%);
  border-radius: 1rem;
  padding: 1.5rem;
  overflow: auto;
  transition: padding-bottom .3s ease;
}
</style>
