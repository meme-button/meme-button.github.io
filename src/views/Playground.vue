<template>
  <div class="playgound">
    <ul class="button-list">
      <li v-for="sound in soundData" :key="sound.id">
        <SoundButton
          :sound="sound"
          :two-weeks-ago-date="twoWeeksAgoDate"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import soundData from "@/data/sound";

const twoWeeksAgoDate = new Date();
twoWeeksAgoDate.setDate(twoWeeksAgoDate.getDate() - 14);
</script>

<style lang="scss" scoped>
.playgound {
  .button-list {
    list-style: none;
    display: flex;
    flex-flow: row wrap;
    gap: 0.75rem;
    padding: 0;
    margin: 0;
  }
}
</style>
