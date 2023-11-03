<script setup lang="ts">
import { VObjectInspector as LocalVObjectInspector } from '../src'
</script>

<template>
  <VObjectInspector
    :data="{ a: 1, b: 2 }"
  />
  <LocalVObjectInspector
    :data="{ a: 1, b: 2 }"
  />
</template>
