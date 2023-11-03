<a href="https://www.npmjs.com/package/v-object-inspector">
    <img alt="Commitizen friendly" src="https://img.shields.io/npm/v/v-object-inspector">
</a>
<a href="https://www.npmtrends.com/v-object-inspector">
    <img alt="Commitizen friendly" src="https://img.shields.io/npm/dt/v-object-inspector">
</a>
<a href="http://commitizen.github.io/cz-cli/">
    <img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen">
</a>

# v-object-inspector

A Vue 3 component for displaying JavaScript objects like [Browser DevTools](https://developer.chrome.com/docs/devtools/).

> This repository is a rewrite of [vue-object-inspector](https://github.com/vikyd/vue-object-inspector) with Vue 3 and TypeScript.

## Installation

```bash
npm install v-object-inspector
```

## Usage Example

Register as a global component:

```ts
import { createApp } from 'vue'
import VObjectInspector from 'v-object-inspector'
import App from './App.vue'

const app = createApp(App)
app.use(VObjectInspector)
app.mount('#app')
```

Or import locally:

```vue
<script setup lang="ts">
import { VObjectInspector } from 'v-object-inspector'
</script>

<template>
  <VObjectInspector :data="{ a: 1, b: 2 }" />
</template>
```

## VObjectInspector API

| Name                                        | Description                                                    | Type                  | Default | Required |
| ------------------------------------------- | -------------------------------------------------------------- | --------------------- | ------- | -------- |
| [data](#data)                               | the JavaScript object to inspect                               | `any`                 | —       | true     |
| [name](#name)                               | the root node's prefix name                                    | `string`              | —       | false    |
| [expandLevel](#expandlevel)                 | the depth level to which the tree should be initially expanded | `number`              | `0`     | false    |
| [expandedPaths](#expandpaths)               | the paths in the tree that should be initially expanded        | `string[]`            | `[]`    | false    |
| [showNonEnumerable](#shownonenumerable)     | whether to show non-enumerable properties                      | `boolean`             | `false` | false    |
| [sortObjectKeys](#sortobjectkeys)           | whether to sort object keys                                    | `boolean \| function` | `false` | false    |
| [objectMaxProperties](#objectmaxproperties) | the maximal number of object properties to show in preview     | `number`              | `5`     | false    |
| [arrayMaxProperties](#arraymaxproperties)   | the maximal number of array properties to show in preview      | `number`              | `10`    | false    |
| [darkTheme](#darktheme)                     | whether to use the dark theme or the light theme               | `boolean`             | `false` | false    |

### data

- Description: JavaScript object to inspect
- Type: `any`
- Default: —
- Required: true

### name

- Description: the root node's prefix name
- Type: `string`
- Default: —
- Required: false

### expandLevel

- Description: the depth level to which the tree should be initially expanded
- Type: `number`
- Default: `0`
- Required: false
- Note: the root node has level 0 and its children have level 1
- Scenarios:
    - If want to expand all level, change `expandLevel` to a very big number.
    - If want to collapse all level, change `expandLevel` to 0.
    - If already change expand by hand, change the `expandLevel` to a negative number, then change it back in `$nextTick`.

### expandPaths

- Description: the paths in the tree that should be initially expanded
- Type: `string[]`
- Default: `[]`
- Required: false
- Note: a path string in the `expandPaths` array follows the syntax like [JSONPath](https://goessner.net/articles/JsonPath/)
- Examples:
    - `['$']`: expand root node, `$` always refers to the root node
    - `['$.myKey']`: expand to `myKey` node (will also expand all parent nodes)
        - this is different from [react-inspector](https://github.com/storybookjs/react-inspector)
    - `['$.myKey.myArr']`: expand to `myArr` node (will also expand all parent nodes)
    - `['$.a', '$.b']`: expand first level nodes `a` and `b`
    - `['$.1']`: expand by array index
    - `['$.*']`: wildcard, expand all level 2 nodes, equivalent to `:expandLevel="2"`
    - `['$.*.*']`: wildcard, expand all level 3 nodes, equivalent to `:expandLevel="3"`

#### expandLevel vs expandPaths

Both `expandLevel` and `expandPaths` are reactive.
Try avoid using both `expandLevel` and `expandPaths` at the same time.
If `expandLevel` and `expandPaths` are used together, when one of them changes, only the changed one will take effect and the other one will be ignored.

### showNonEnumerable

- Description: whether to show non-enumerable properties (e.g., `__proto__`, `length`, and `constructor`)
- Type: `boolean`
- Default: `false`
- Required: false

### sortObjectKeys

- Description: whether to sort object keys
- Type: `boolean | function`
- Default: `false`
- Required: false
- Note: when a compare function is passed, the keys will be sorted as [Array.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) with a compared function
- Examples:
    - `true`: sort object keys in alphabetical order (except for arrays)
    - `reverseSortFunc`: sort in reverse alphabetical order (except for arrays)
        ```js
        const reverseSortFunc = (a, b) => (b > a ? 1 : -1)
        ```

### objectMaxProperties

- Description: the maximal number of object properties to show in preview
- Type: `number`
- Default: `5`
- Required: false

### arrayMaxProperties

- Description: the maximal number of array properties to show in preview
- Type: `number`
- Default: `10`
- Required: false

### darkTheme

- Description: whether to use the dark theme or the light theme
- Type: `boolean`
- Default: `false`
- Required: false

## Thanks

- [vue-object-inspector](https://github.com/vikyd/vue-object-inspector)
