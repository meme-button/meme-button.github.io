<template>
  <div class="sound-btn" :class="{ 'new-btn': isNewBtn, 'now-playing': isPlaying }">
    <button type="button" @click="playSound()">{{ sound.name }}</button>
  </div>
</template>

<script setup lang="ts">
import { useSound } from "@raffaelesgarro/vue-use-sound";
import type { soundDataInterface } from "@/data/sound";

const props = defineProps<{
  sound: soundDataInterface,
  twoWeeksAgoDate: Date,
}>();

const isNewBtn = computed(() => props.sound.date ? (new Date(props.sound.date)) >= props.twoWeeksAgoDate : false);

const { play, stop, isPlaying } = useSound(new URL(`/src/assets/sound/${props.sound.id}.mp3`, import.meta.url).href);
function playSound() {
  stopMusicBus.emit();
  play();
}

const stopMusicBus = useEventBus<void>("stopMusic");
stopMusicBus.on(() => {
  stop();
});

const randomPlayBus = useEventBus<soundDataInterface["id"]>("randomPlay");
randomPlayBus.on(id => {
  if (props.sound.id === id) {
    playSound();
  }
});
</script>

<style lang="scss" scoped>
.sound-btn {
  position: relative;
  bottom: 0.375rem;
  padding-top: 0.375rem;
  button {
    --btn-bg: rgb(var(--color-theme2));
    --btn-bg-pressed: rgb(var(--color-theme2-dark));
    --btn-shadow: rgb(var(--color-theme2-dark));
    background: var(--btn-bg);
    padding: 0.5rem .75rem;
    border-radius: 0.375rem;
    box-shadow: 0px .375rem 0px var(--btn-shadow);
  }
  &:active {
    padding-top: 0.75rem;
    button {
      background: var(--btn-bg-pressed);
      box-shadow: none;
    }
  }
  &.now-playing {
    button {
      --btn-bg: rgb(var(--color-theme1));
      --btn-bg-pressed: rgb(var(--color-theme1-dark));
      --btn-shadow: rgb(var(--color-theme1-dark));
    }
  }
  &.new-btn::after {
    content: "";
    display: block;
    position: absolute;
    top: .125rem;
    right: -.25rem;
    width: .625rem;
    height: .625rem;
    background: rgb(235, 107, 107);
    border-radius: 10rem;
  }
}
</style>
