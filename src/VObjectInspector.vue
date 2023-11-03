<script setup lang="ts">
import { computed, provide, toRefs } from 'vue'
import type { PropType } from 'vue'
import { createIterator } from './utils/data'
import type { CompareFunction, ObjectIterator } from './utils/data'
import VTreeView from './components/VTreeView.vue'

const props = defineProps({
  /** The JavaScript object to inspect. */
  data: {
    // Any type.
    type: null,
    required: true,
  },
  /** The root node's prefix name. */
  name: {
    type: String as PropType<string>,
    default: null,
  },
  /** The depth level to which the tree should be initially expanded. */
  expandLevel: {
    type: Number as PropType<number>,
    default: 0,
  },
  /** The paths in the tree that should be initially expanded. */
  expandPaths: {
    type: Array as PropType<string[]>,
    default: null,
  },
  /** Whether to show non-enumerable properties (e.g., __proto__, length). */
  showNonEnumerable: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  /**
   * Whether to sort object keys.
   * If true, sort keys in alphabetical order except for arrays.
   * If false, no sorting is applied
   * (the keys are ordered by Object.getOwnPropertyNames).
   * If a compare function is passed,
   * the keys are sorted by the compare function.
   */
  sortObjectKeys: {
    type: [Boolean, Function] as PropType<boolean | CompareFunction>,
    default: false,
  },
  /**
   * The maximal number of object properties to show in preview.
   * (The ones not in preview are abbreviated with ...)
   */
  objectMaxProperties: {
    type: Number as PropType<number>,
    default: 5,
  },
  /**
   * The maximal number of array properties to show in preview.
   * (The ones not in preview are abbreviated with ...)
   */
  arrayMaxProperties: {
    type: Number as PropType<number>,
    default: 10,
  },
  /** Whether to use the dark theme or the light theme. */
  darkTheme: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
})

const {
  data,
  name,
  expandLevel,
  expandPaths,
  showNonEnumerable,
  sortObjectKeys,
  objectMaxProperties,
  arrayMaxProperties,
  darkTheme,
} = toRefs(props)

provide('objectMaxProperties', objectMaxProperties)
provide('arrayMaxProperties', arrayMaxProperties)
provide('darkTheme', darkTheme)

/** A factory of object property iterators. */
const dataIterator = computed((): ObjectIterator => (
  createIterator(showNonEnumerable.value, sortObjectKeys.value)
))
</script>

<template>
  <div
    class="vue-object-inspector"
    :class="[
      darkTheme ? 'vue-object-inspector-chromedark' : '',
    ]"
    style="overflow-wrap: anywhere; line-break: anywhere;"
  >
    <VTreeView
      v-bind="$attrs"
      :data="data"
      :name="name"
      :expand-level="expandLevel"
      :expand-paths="expandPaths"
      :data-iterator="dataIterator"
      :sort-object-keys="sortObjectKeys"
    />
  </div>
</template>
