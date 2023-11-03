<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import type { PropType } from 'vue'
import VObjectPreview from './VObjectPreview.vue'

const { data, name } = defineProps({
  /** The JavaScript variable to inspect. */
  data: {
    // Any type.
    type: null,
    required: true,
  },
  /** The variable name. */
  name: {
    type: String as PropType<string>,
    default: null,
  },
})

// `provide` from top component `VObjectInspector`
const darkTheme = inject('darkTheme', ref(false))
const style = computed(() => ({
  nameColor: darkTheme.value ? 'rgb(227, 110, 236)' : 'rgb(136, 19, 145)',
}))
</script>

<template>
  <span>
    <span v-if="typeof name === 'string'">
      <span class="object-name">{{ name }}</span>
      <span>: </span>
      <VObjectPreview :data="data" />
    </span>
    <VObjectPreview
      v-else
      :data="data"
    />
  </span>
</template>

<style scoped>
.object-name {
  color: v-bind('style.nameColor');
}
</style>
