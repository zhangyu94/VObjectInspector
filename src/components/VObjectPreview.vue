<script setup lang="ts">
import { computed, inject, ref, toRefs } from 'vue'
import VObjectValue from './VObjectValue.vue'

const props = defineProps({
  data: {
    // Any type.
    type: null,
    required: true,
  },
})
const { data } = toRefs(props)

const isSimpleType = (object: unknown): boolean => (
  typeof object !== 'object'
    || object === null
    || object instanceof Date
    || object instanceof RegExp
)

// `provide` from top component `VObjectInspector`
const objectMaxProperties = inject('objectMaxProperties', ref(5))
const arrayMaxProperties = inject('arrayMaxProperties', ref(10))

const object = computed((): unknown => data.value)
const isSimple = computed((): boolean => isSimpleType(object.value))

/** The name of object constructor. */
const className = computed((): string => {
  if (typeof object.value !== 'object' || object.value === null) return ''
  const { constructor } = object.value
  const constructorName = constructor ? constructor.name : 'Object'
  return constructorName === 'Object' ? '' : `${constructorName} `
})

/**
 * A slice of the object (which is an array) for preview.
 * If the object is not array, returns empty array.
 */
const previewArray = computed((): unknown[] => {
  if (!Array.isArray(object.value)) return []
  return object.value.slice(0, arrayMaxProperties.value)
})

/**
 * A slice of the object (which is an object) for preview.
 * If the object is not object, returns empty object.
 */
const previewObjectItems = computed((): Record<string, unknown>[] => {
  if (typeof object.value !== 'object' || object.value === null) return []
  let keys = Object.keys(object.value)
  if (keys.length > objectMaxProperties.value) {
    keys = keys.slice(0, objectMaxProperties.value)
  }
  return keys.map((k) => ({
    key: k,
    val: (object.value as Record<string, unknown>)[k],
  }))
})
</script>

<template>
  <span>
    <VObjectValue
      v-if="isSimple"
      :object="object"
    />
    <span v-else-if="Array.isArray(object)">
      <span
        class="object-preview-desc"
      >{{ object.length === 0 ? '' : `(${object.length})\xa0` }}</span>
      <span class="object-preview">
        <span>[</span>
        <span
          v-for="(item, index) of previewArray"
          :key="index"
        >
          <span v-if="index !== 0">, </span>
          <VObjectValue :object="item" />
          <span v-if="index === arrayMaxProperties - 1">, </span>
          <span v-if="index === arrayMaxProperties - 1">…</span>
        </span>
        <span>]</span>
      </span>
    </span>
    <span v-else>
      <span class="object-preview-desc">{{ className }}</span>
      <span class="object-preview">
        <span>{</span>
        <span
          v-for="(item, index) of previewObjectItems"
          :key="index"
        >
          <span v-if="index !== 0">, </span>
          <span class="object-name-preview">{{ item.key || '""' }}</span>:
          <VObjectValue :object="item.val" />
          <span v-if="index === objectMaxProperties - 1">…</span>
        </span>
        <span>}</span>
      </span>
    </span>
  </span>
</template>

<style scoped>
.object-preview {
  font-style: italic;
}

.object-name-preview {
  color: rgb(95, 99, 104);
}

.object-preview-desc {
  font-style: italic;
}
</style>
