<script setup lang="ts">
import { inject } from 'vue'
import type { PropType } from 'vue'
import VObjectLabel from './VObjectLabel.vue'
import VObjectRootLabel from './VObjectRootLabel.vue'

const {
  data,
  name,
  depth,
  isNonEnumerable,
  expanded,
  showArrow,
  showPlaceholder,
} = defineProps({
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
  /**
   * The depth of the variable.
   * (Root variable has depth 0)
   */
  depth: {
    type: Number as PropType<number>,
    required: true,
  },
  /** Whether the variable is non-enumerable. */
  isNonEnumerable: {
    type: Boolean as PropType<boolean>,
    required: true,
  },
  /** Whether the variable should be expanded. */
  expanded: {
    type: Boolean as PropType<boolean>,
    required: true,
  },
  /** Whether to show an arrow for expand interaction. */
  showArrow: {
    type: Boolean as PropType<boolean>,
    required: true,
  },
  /**
   * Whether to pad a placeholder on the left.
   * The placeholder makes variable attributes look indented.
   */
  showPlaceholder: {
    type: Boolean as PropType<boolean>,
    required: true,
  },
})

defineEmits<{
  (e: 'update:expand'): void
}>()

// `provide` from top component `VObjectInspector`
const darkTheme: boolean = inject('darkTheme', false)
</script>

<template>
  <li
    role="treeitem"
    class="tree-node"
    :aria-expanded="expanded"
    :style="{
      color: darkTheme ? '#d5d5d5' : '#000',
      backgroundColor: darkTheme ? '#242424' : '#fff',
    }"
  >
    <div
      class="tree-node-preview-container"
      @click="$emit('update:expand')"
    >
      <span
        v-if="showArrow"
        class="tree-node-arrow"
        :class="[
          expanded ? 'tree-node-arrow-expanded' : 'tree-node-arrow-collapsed',
        ]"
        :style="{ color: darkTheme ? '#919191' : '#6e6e6e' }"
      >
        ▶
      </span>
      <!-- Pad a placeholder to make variable attributes indented. -->
      <span
        v-else-if="showPlaceholder && $slots.default"
        class="tree-node-placeholder"
      >&nbsp;</span>
      <VObjectRootLabel
        v-if="depth === 0"
        :name="name"
        :data="data"
      />
      <VObjectLabel
        v-else
        :name="name"
        :data="data"
        :is-non-enumerable="isNonEnumerable"
      />
    </div>

    <ol
      role="group"
      class="tree-node-child-nodes-container"
    >
      <!-- The slot to accommodate child nodes. -->
      <slot v-if="expanded" />
    </ol>
  </li>
</template>

<style scoped>
.tree-node {
  line-height: 1.2;
  cursor: default;
  box-sizing: border-box;
  list-style: none;
  font-family: Menlo, monospace;
  font-size: 11px;
}

.tree-node-preview-container {
  padding-left: 0.125rem;
  padding-right: 0.125rem;
}

.tree-node-placeholder {
  white-space: pre;
  font-size: 12px;
  margin-right: 6.5px;
}

.tree-node-arrow {
  display: inline-block;
  font-size: 12px;
  margin-right: 3px;
}

.tree-node-arrow-expanded {
  transform: rotate(90deg);
}

.tree-node-arrow-collapsed {
  transform: rotate(0deg);
}

.tree-node-child-nodes-container {
  margin: 0;
  padding-left: 12px;
}
</style>
