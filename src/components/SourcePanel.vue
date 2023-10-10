<template>
  <section ref="sourcePanel" class="source-panel" :class="{ 'expanded': isExpanded }">
    <Transition :name="isExpanded ? 'fade' : ''" mode="out-in">
      <div class="source-icon" :key="url">
        <Icon :icon="sourceIcon" />
      </div>
    </Transition>
    <Transition :name="isExpanded ? 'fade' : ''" mode="out-in">
      <div class="source-details" :key="url">
        <h2 class="source-title">{{ title }}</h2>
        <p class="source-url"><a :href="url" target="_blank" rel="noopener noreferrer">{{ url }}</a></p>
      </div>
    </Transition>
    <button type="button" class="panel-btn" @click="isExpanded = !isExpanded">
      <Icon :icon="isExpanded ? 'iconamoon:arrow-down-2-fill' : 'iconamoon:arrow-up-2-fill'" />
    </button>
  </section>
</template>

<script setup lang="ts">
import { sourceType } from "@/data/sound";
import type { soundDataInterface } from "@/data/sound";

const type = ref<soundDataInterface["source"]["type"]>();
const title = ref<soundDataInterface["source"]["title"]>("これはめめの大好きなプリンです");
const url = ref<soundDataInterface["source"]["url"]>("https://memehitsuji.com/");

// #region : Determine what icon to be use
const sourceIcon = computed(() => {
  switch (type.value) {
    case sourceType.Twitter:
      return "logos:twitter";

    case sourceType.Youtube:
      return "logos:youtube-icon";

    default:
      return "noto:custard";
  }
});
//  #endregion

// #region : Update and display on play
const playSoundBus = useEventBus<soundDataInterface>("playSound");
playSoundBus.on(async sound => {
  console.log("🚀 ~ file: SourcePanel.vue:42 ~ sound:", sound);
  type.value = sound.source.type;
  title.value = sound.source.title;
  url.value = sound.source.url;
  await nextTick();
  isExpanded.value = true;
});
//  #endregion

// #region : Handle expand and pass the height
const sourcePanel = ref<HTMLElement>();
const { height: panelHeight } = useElementBounding(sourcePanel);

const isExpanded = ref(true);
//  #endregion

// #region : Expose some value
defineExpose({
  panelHeight,
  isExpanded,
});
//  #endregion

</script>

<style lang="scss" scoped>
.source-panel {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  position: fixed;
  left: 0;
  top: 100%;
  width: 100%;
  background: rgb(var(--pudding-yellow));
  // border-top: .5rem solid rgb(var(--pudding-brown));
  padding: 1.5rem 2.5%;
  transition: transform .3s ease;
  &::before {
    content: "";
    position: absolute;
    top: -0.5rem;
    left: 0;
    width: 100%;
    height: 0.5rem;
    background: rgb(var(--pudding-brown));
  }
  &.expanded {
    transform: translateY(-100%);
  }
}

.source-icon {
  --fade-time: .2s;
  margin-right: 1.5rem;
  .iconify {
    font-size: 3rem;
  }
}

.source-details {
  --fade-time: .2s;
  flex: 1 1 auto;
  .source-title {
    color: rgb(var(--pudding-brown));
    font-size: 1.25rem;
    font-weight: 500;
    text-wrap: balance;
    margin-bottom: 0.375rem;
  }
  .source-url a {
    color: #D07C1D;
    font-weight: 500;
  }
}

.panel-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 100%;
  height: 1.75rem;
  background: rgb(var(--pudding-brown));
  border-radius: .25rem .25rem 0 0;
  padding: 0 .5rem;
  transform: translateX(-50%);
  svg {
    color: #fff;
    font-size: 2rem;
  }
}
</style>
