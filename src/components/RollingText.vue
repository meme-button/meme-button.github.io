<template>
  <component
    :is="tag"
    ref="roller"
    class="rolling-text"
    :class="{ 'rolling': isOverflow }"
    :style="{ '--rolling-time': rollingTime ? rollingTime + 's' : undefined }"
  >
    <span>{{ text }}</span>
  </component>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { useWindowSize } from "@vueuse/core";

interface Props {
  tag?: string,
  text: string,
  rollingTime?: number,
}
const props = withDefaults(defineProps<Props>(), {
  tag: "p",
});

const roller = ref<HTMLElement>();
const { width: screenWidth } = useWindowSize();
const isOverflow = ref(false);

onMounted(() => {
  isOverflow.value = roller.value!.scrollWidth > roller.value!.clientWidth;
});
watch(screenWidth, () => isOverflow.value = roller.value!.scrollWidth > roller.value!.clientWidth);
</script>

<style lang="scss" scoped>
.rolling-text {
  --rolling-time: 15s;
  position: relative;
  overflow: hidden;
  margin: 0;
  > span {
    position: absolute;
    bottom: 0;
    left: 0;
    white-space: nowrap;
  }
  &.rolling {
    line-height: normal;
    > span {
      display: inline-block;
      animation: rolling linear infinite var(--rolling-time);
    }
  }
}

@keyframes rolling {
  5% {
    transform: translateX(0);
    left: 0;
  }
  45% {
    transform: translateX(-100%);
    left: 100%;
  }
  55% {
    transform: translateX(-100%);
    left: 100%;
  }
  95% {
    transform: translateX(0);
    left: 0;
  }
}
</style>
