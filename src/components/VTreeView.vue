<script setup lang="ts">
import { onBeforeMount, ref, toRefs, watch } from 'vue'
import type { PropType } from 'vue'
import { DEFAULT_ROOT_PATH, getExpandedPaths } from '../utils/path'
import type { CompareFunction, ObjectIterator } from '../utils/data'
import VConnectedTreeNode from './VConnectedTreeNode.vue'

const props = defineProps({
  /** The JavaScript object to inspect. */
  data: {
    // Any type.
    type: null,
    required: true,
  },
  /** The root variables prefix name. */
  name: {
    type: String as PropType<string>,
    default: null,
  },
  /** The depth level to which the tree should be initially expanded. */
  expandLevel: {
    type: Number as PropType<number>,
    default: 0,
  },
  /** The list of paths that should be initially expanded. */
  expandPaths: {
    type: Array as PropType<string[]>,
    default: null,
  },
  /** A factory of object property iterators. */
  dataIterator: {
    type: Function as PropType<ObjectIterator>,
    required: true,
  },
  /**
   * Whether to sort the object keys.
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
})

const { data, name, expandLevel, expandPaths, dataIterator } = toRefs(props)

// The list of paths currently expanded.
const expandedPaths = ref({})

/** Update expanded paths by the expandPaths parameters. */
const updateByExpandPaths = (): string[] => {
  const paths: string[] = []
  if (expandPaths.value !== null) {
    expandPaths.value.forEach((path: string) => {
      const arr = path.split('.')
      arr.forEach((_, index) => {
        paths.push(arr.slice(0, index + 1).join('.'))
      })
    })
  }
  expandedPaths.value = getExpandedPaths(
    data.value,
    dataIterator.value,
    paths,
    0,
    {},
  )
  return paths
}

/** Update expanded paths by the expandLevel parameters. */
const updateByExpandLevel = (paths: string[]): void => {
  expandedPaths.value = getExpandedPaths(
    data.value,
    dataIterator.value,
    paths,
    expandLevel.value,
    {},
  )
}

/** Update expanded paths by the expandPaths and expandLevel parameters. */
const updateExpandedPaths = (): void => {
  const paths = updateByExpandPaths()
  updateByExpandLevel(paths)
}

/** When user interaction triggers update of expanded paths. */
const onUpdateExpandedPaths = (
  { path, val }: { path: string, val: boolean },
): void => {
  expandedPaths.value = {
    ...expandedPaths.value,
    [path]: val,
  }
}

watch(expandLevel, () => updateByExpandLevel([]))
watch(expandPaths, () => updateByExpandPaths())
onBeforeMount(() => updateExpandedPaths())
</script>

<template>
  <ol
    role="tree"
    class="tree-view-outline"
  >
    <VConnectedTreeNode
      :data="data"
      :name="name"
      :data-iterator="dataIterator"
      :path="DEFAULT_ROOT_PATH"
      :depth="0"
      :is-non-enumerable="false"
      :expanded-paths="expandedPaths"
      @update:expanded-paths="onUpdateExpandedPaths"
    />
  </ol>
</template>

<style scoped>
.tree-view-outline {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>
