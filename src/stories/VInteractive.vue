<script setup lang="ts">
import { nextTick, ref } from 'vue'
import VObjectInspector from '../VObjectInspector.vue'

const expandLevel = ref(1)
const expandPaths = ref(['*.a'])
const data = ref({
  number: 123,
  string: 'abc',
  multiLine: '123\n456',
  boolean: true,
  arr: [1, 2, 3, 4, 5],
  undef: undefined,
  nul: null,
  funcArrow: () => {},
  func: function f1() {},
  a: {
    symbolVal: Symbol('aaa'),
    number: 123,
    string: 'abc',
    boolean: true,
    undef: undefined,
    nul: null,
    funcArrow: () => {},
    func: function f1() {},
    arr: [1, 2, 3, 4, 5],
    objEmpty: {},
  },
  b: 2,
  c: [1, 2, 3],
  x0: console,
  w: window,
})

const onClickExpand = (): void => {
  expandLevel.value = 3
}
const onClickFold = (): void => {
  expandLevel.value = -1
  nextTick(() => {
    expandLevel.value = 0
  })
}
const onClickPaths = (): void => {
  expandPaths.value = ['$.a.arr']
}
</script>

<template>
  <div>
    <div>
      <button @click="onClickExpand">
        Expand All
      </button>
      <button @click="onClickFold">
        Collapse All
      </button>
      <button @click="onClickPaths">
        Expand to path
      </button>
    </div>
    <VObjectInspector
      :data="data"
      :expand-level="expandLevel"
      :expand-paths="expandPaths"
      class="content"
    />
  </div>
</template>

<style scoped>
.content {
  padding: 15px;
  border: 1px solid #eee;
}
</style>
