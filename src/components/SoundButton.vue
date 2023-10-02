<template>
  <div class="sound-btn" :class="{ 'new-btn': isNewBtn }">
    <button type="button">{{ sound.name }}</button>
  </div>
</template>

<script setup lang="ts">
import type { soundDataInterface } from "@/data/sound";

const props = defineProps<{
  sound: soundDataInterface,
  twoWeeksAgoDate: Date,
}>();

const isNewBtn = computed(() => (new Date(props.sound.date)) >= props.twoWeeksAgoDate);
</script>

<style lang="scss" scoped>
.sound-btn {
  position: relative;
  bottom: 0.375rem;
  padding-top: 0.375rem;
  button {
    background: rgb(var(--color-theme2));
    padding: 0.5rem .75rem;
    border-radius: 0.375rem;
    box-shadow: 0px .375rem 0px rgb(var(--color-theme2-dark));
  }
  &:active {
    // bottom: 0;
    padding-top: 0.75rem;
    button {
      background: rgb(var(--color-theme2-dark));
      box-shadow: none;
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