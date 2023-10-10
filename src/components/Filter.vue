<template>
  <ul class="filter-list">
    <li v-for="(option, index) in filterOptions" :key="option.value" :class="{ 'active': index === activeFilterIndex }">
      <button type="button" @click="changefilter(option.value, index)">{{ option.name }}<span v-if="option.count !== undefined">&nbsp;({{ option.count }})</span></button>
    </li>
  </ul>
</template>

<script lang="ts">
export interface filterOptionStru<T = string|number> {
  name: string,
  value: T,
  count?: number,
}
</script>

<script setup lang="ts">
const props = defineProps<{
  filterOptions: filterOptionStru[],
}>();
const emit = defineEmits<{
  (e: "filterClicked", para: filterOptionStru["value"]): void
}>();

const activeFilterIndex = ref<number>();
onBeforeMount(() => {
  activeFilterIndex.value = 0;
});

function changefilter(option:filterOptionStru["value"], index:number) {
  activeFilterIndex.value = index;
  emit("filterClicked", option);
}
</script>

<style lang="scss" scoped>
.filter-list {
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  gap: .75rem;
  padding: 0;
  margin: 0;
  li {
    button {
      position: relative;
      bottom: 0;
      background: #fff;
      border-radius: 10rem;
      padding: .5rem .75rem;
      transition: all .3s ease;
      &:hover, &:active {
        color: #fff;
        bottom: .25rem;
        background: rgb(var(--color-theme1));
        box-shadow: 0px .25rem .5rem rgb(var(--color-theme1-dark));
      }
    }
    &.active {
      button {
        color: #fff;
        font-weight: bold;
        bottom: 0;
        background: rgb(var(--sharp-pink));
        box-shadow: none;
      }
    }
  }
}
</style>
