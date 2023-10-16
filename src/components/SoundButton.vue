<template>
  <div class="sound-btn" :class="{ 'new-btn': isNewBtn, 'just-played': justPlayed, 'asmr': sound.isASMR }">
    <button
      type="button"
      :class="{ 'active': isActive }"
      :aria-label="sound.name"
      @click="playSound()"
      @keydown.space="isActive = true"
      @keyup.space="isActive = false"
      @blur="isActive = false"
    >
      <span class="sound-name">{{ sound.name }}</span>
      <span v-if="sound.isASMR" class="label-asmr">ASMR</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { soundDataInterface } from "@/data/sound";

const props = defineProps<{
  sound: soundDataInterface,
  twoWeeksAgoDate: Date,
}>();

const isNewBtn = computed(() => props.sound.date ? (new Date(props.sound.date)) >= props.twoWeeksAgoDate : false);
const isActive = ref(false);
const justPlayed = ref(false);

const { play, stop } = useSound(new URL(`/src/assets/sound/${props.sound.id}.mp3`, import.meta.url).href, { volume: props.sound.volume });

const playSoundBus = useEventBus<soundDataInterface>("playSound");
const stopSoundBus = useEventBus<void>("stopSound");
const randomPlayBus = useEventBus<soundDataInterface["id"]>("randomPlay");

function playSound() {
  stopSoundBus.emit();
  playSoundBus.emit(props.sound);
  justPlayed.value = true;
  play();
}

stopSoundBus.on(() => {
  stop();
  justPlayed.value = false;
});

randomPlayBus.on(id => {
  if (props.sound.id === id) {
    playSound();
  }
});
</script>

<style lang="scss" scoped>
.sound-btn {
  position: relative;
  button {
    display: inline-flex;
    flex-flow: row nowrap;
    width: 100%;
    white-space: nowrap;
    padding: 0 0 0.375rem;
    span {
      --btn-bg: rgb(var(--color-theme2));
      --btn-bg-pressed: rgb(var(--color-theme2-dark));
      --btn-shadow: rgb(var(--color-theme2-dark));
      display: inline-block;
      background: var(--btn-bg);
      padding: 0.5rem .75rem;
      border-radius: 0.375rem;
      box-shadow: 0px .375rem 0px var(--btn-shadow);
    }
    .sound-name {
      flex: 0 1 auto;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .label-asmr {
      --btn-bg: rgb(var(--sharp-pink));
      --btn-bg-pressed: rgb(var(--sharp-pink-dark));
      --btn-shadow: rgb(var(--sharp-pink-dark));
      color: #fff;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      padding-left: 0.5rem;
    }
    &:is(:active, .active) {
      padding: 0;
      padding-top: 0.375rem;
      span {
        background: var(--btn-bg-pressed);
        box-shadow: none;
      }
    }
  }
  &.asmr {
    .sound-name {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      padding-right: 0.5rem;
    }
  }
  // &:active {
  //   button {
  //   }
  // }
  &.just-played {
    button {
      .sound-name {
        --btn-bg: rgb(var(--color-theme1));
        --btn-bg-pressed: rgb(var(--color-theme1-dark));
        --btn-shadow: rgb(var(--color-theme1-dark));
      }
      .label-asmr {
        --btn-bg: rgb(var(--sharp-pink-dark));
        --btn-bg-pressed: rgb(var(--sharp-pink-darker));
        --btn-shadow: rgb(var(--sharp-pink-darker));
      }
    }
  }
  &.new-btn::after {
    content: "";
    display: block;
    position: absolute;
    top: -.25rem;
    right: -.25rem;
    width: .625rem;
    height: .625rem;
    background: rgb(235, 107, 107);
    border-radius: 10rem;
  }
}
</style>
