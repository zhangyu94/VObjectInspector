<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import type { PropType } from 'vue'
import VObjectPreview from './VObjectPreview.vue'
import VObjectValue from './VObjectValue.vue'

const { data, name, isNonEnumerable } = defineProps({
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
  /** Whether the variable is non-enumerable. */
  isNonEnumerable: {
    type: Boolean as PropType<boolean>,
    required: true,
  },
})

// `provide` from top component `VObjectInspector`
const darkTheme = inject('darkTheme', ref(false))
const style = computed(() => ({
  nameColor: darkTheme.value ? 'rgb(227, 110, 236)' : 'rgb(136, 19, 145)',
}))
</script>

<template>
  <span :title="name">
    <span
      v-if="typeof name === 'string'"
      class="object-name"
      :class="{ 'object-name-dimmed': isNonEnumerable }"
    >{{ name }}</span>
    <VObjectPreview
      v-else
      :data="name"
    />
    <span>: </span>
    <VObjectValue :object="data" />
  </span>
</template>

<style scoped>
.object-name {
  color: v-bind('style.nameColor');
}

.object-name-dimmed {
  opacity: 0.6;
}
</style>
