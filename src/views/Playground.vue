<template>
  <section class="playgound">
    <header>
      <div class="widget widget-filter">
        <span class="widget-label">フィルター</span>
        <Filter
          :filter-options="filterOptions"
          disable-empty-choice
          @filter-clicked="filterButtons"
        />
      </div>
    </header>
    <ul class="button-list">
      <li class="submit-new">
        <a
          href="https://forms.gle/JPrUUCSCKLCZibZZ9"
          target="_blank"
          rel="noreferrer noopener"
          title="新規ボタンの意見"
          aria-label="新規ボタンの意見"
        >
          <Icon icon="uiw:plus" />
        </a>
      </li>
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
import soundData, { jpGroupOption, jpGroup } from "@/data/sound";
import type { filterOptionStru } from "@/components/Filter.vue";

const twoWeeksAgoDate = new Date();
twoWeeksAgoDate.setDate(twoWeeksAgoDate.getDate() - 14);

// #region : Filter options
const filterOptions = computed(():filterOptionStru<jpGroupOption|"All">[] => {
  const options:filterOptionStru<jpGroupOption|"All">[] = [];
  for (const [key, value] of jpGroup.entries()) {
    const count = soundData.filter(sound => sound.group === key).length;
    options.push({ name: value, value: key, count });
  }
  return [
    { name: "全て", value: "All", count: soundData.length },
    ...options,
  ];
});
//  #endregion

// #region : Sort buttons
const btnSorted = computed(() => soundData.sort((a, b) => a.name.localeCompare(b.name, "ja")));
//  #endregion

// #region : Filtering buttons
const soundDataFiltered = computed(() => currentFilter.value === "All" ? btnSorted.value : btnSorted.value.filter(sound => sound.group === currentFilter.value));
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
    gap: .5rem 1rem;
    .widget-label {
      flex: 0 0 auto;
      padding: .5rem 0;
    }
  }

  .button-list {
    list-style: none;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: 0.75rem;
    min-height: 2.625rem;
    padding: 0;
    margin: 0;
    li {
      max-width: 100%;
      &.submit-new a {
        color: rgb(var(--txt-color));
        display: block;
        padding: 0.5rem;
        background: #dedede;
        border-radius: 10rem;
      }
      &.fade-leave-active {
        position: absolute;
      }
    }
  }
}

@media (max-width: 575px) {
  .playgound {
    .widget-filter {
      flex-direction: column;
    }
  }
}
</style>
