<script setup lang="ts">
import { computed, inject, ref } from 'vue'

interface ObjectInfo {
  class: string
  title: string
}

const { object } = defineProps({
  /** The JavaScript variable (of any type) to inspect. */
  object: {
    type: null,
    required: true,
  },
})

const getInfo = (object: unknown): ObjectInfo => {
  const type = typeof object
  if (type === 'bigint') {
    return {
      class: 'object-value-number',
      title: `${object}n`,
    }
  }
  if (type === 'number') {
    return {
      class: 'object-value-number',
      title: `${object}`,
    }
  }
  if (type === 'string') {
    return {
      class: 'object-value-string',
      title: `"${object}"`,
    }
  }
  if (type === 'boolean') {
    return {
      class: 'object-value-boolean',
      title: `${object}`,
    }
  }
  if (type === 'undefined') {
    return {
      class: 'object-value-undefined',
      title: 'undefined',
    }
  }
  if (type === 'object') {
    if (object === null) {
      return {
        class: 'object-value-null',
        title: 'null',
      }
    }
    if (object instanceof Date) {
      return {
        class: '',
        title: object.toString(),
      }
    }
    if (object instanceof RegExp) {
      return {
        class: 'object-value-regexp',
        title: object.toString(),
      }
    }
    if (Array.isArray(object)) {
      return {
        class: '',
        title: `Array(${object.length})`,
      }
    }
    if (!(object as object).constructor) {
      return {
        class: '',
        title: 'Object',
      }
    }
    return {
      class: '',
      title: (object as object).constructor.name,
    }
  }
  if (type === 'function') {
    return {
      class: '',
      title: '',
    }
  }
  if (type === 'symbol') {
    return {
      class: 'object-value-symbol',
      title: (object as symbol).toString(),
    }
  }
  return {
    class: '',
    title: '',
  }
}

const type = computed(() => typeof object)
const info = computed(() => getInfo(object))

// `provide` from top component `VObjectInspector`
const darkTheme = inject('darkTheme', ref(false))
const style = computed(() => ({
  nullishColor: 'rgb(127, 127, 127)',
  stringColor: darkTheme.value ? 'rgb(233, 63, 59)' : 'rgb(196, 26, 22)',
  numeralColor: darkTheme.value ? 'hsl(252, 100%, 75%)' : 'rgb(28, 0, 207)',
  functionPrefixColor: darkTheme.value ? 'rgb(85, 106, 242)' : 'rgb(170, 13, 145)',
}))
</script>

<template>
  <span
    :class="info.class"
    :title="info.title"
  >
    <span>{{ info.title }}</span>
    <template v-if="type === 'function'">
      <span class="object-value-function-prefix">ƒ&nbsp;</span>
      <span class="object-value-function-name">{{ object.name }}()</span>
    </template>
  </span>
</template>

<style scoped>
.object-value-null {
  color: v-bind('style.nullishColor');
}
.object-value-undefined {
  color: v-bind('style.nullishColor');
}
.object-value-regexp {
  color: v-bind('style.stringColor');
}
.object-value-string {
  color: v-bind('style.stringColor');
}
.object-value-symbol {
  color: v-bind('style.stringColor');
}
.object-value-number {
  color: v-bind('style.numeralColor');
}
.object-value-boolean {
  color: v-bind('style.numeralColor');
}
.object-value-function-prefix {
  color: v-bind('style.functionPrefixColor');
  font-style: italic;
}
.object-value-function-name {
  font-style: italic;
}
</style>
