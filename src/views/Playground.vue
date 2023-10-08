<template>
  <section class="playgound">
    <header>
      <div class="widget widget-filter">
        <span class="widget-label">フィルター</span>
        <Filter :filter-options="filterOptions" @filter-clicked="filterButtons" />
      </div>
    </header>
    <ul class="button-list">
      <TransitionGroup name="fade">
        <li v-for="sound in soundDataFiltered" :key="sound.id">
          <SoundButton
            :sound="sound"
            :two-weeks-ago-date="twoWeeksAgoDate"
          />
        </li>
      </TransitionGroup>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { filterOptionStru } from "@/components/Filter.vue";
import soundData, { jpGroupOption, jpGroup } from "@/data/sound";

const twoWeeksAgoDate = new Date();
twoWeeksAgoDate.setDate(twoWeeksAgoDate.getDate() - 14);

// #region : Filter options
const filterOptions = computed(():filterOptionStru<jpGroupOption|"All">[] => {
  const options:filterOptionStru<jpGroupOption|"All">[] = [];
  for (const [key, value] of jpGroup.entries()) {
    options.push({ name: value, value: key });
  }
  return [
    { name: "全て", value: "All" },
    ...options,
  ];
});
//  #endregion

// #region : Filtering buttons
const soundDataFiltered = computed(() => currentFilter.value === "All" ? soundData : soundData.filter(sound => sound.group === currentFilter.value));
const currentFilter = ref<jpGroupOption|"All">("All");
function filterButtons(option:filterOptionStru["value"]) {
  currentFilter.value = option as jpGroupOption|"All";
}
//  #endregion
</script>

<style lang="scss" scoped>
.playgound {
  header {
    border-bottom: 1px solid rgb(var(--color-theme2-dark));
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }
  .widget {
    .widget-label {
      font-weight: 500;
    }
  }

  .widget-filter {
    display: flex;
    flex-flow: row nowrap;
    gap: 1rem;
    .widget-label {
      flex: 0 0 auto;
      padding: .5rem 0;
    }
  }

  .button-list {
    list-style: none;
    display: flex;
    flex-flow: row wrap;
    gap: 0.75rem;
    padding: 0;
    margin: 0;
    li {
      &.fade-leave-active {
        position: absolute;
      }
    }
  }
}
</style>
