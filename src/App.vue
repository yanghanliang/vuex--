<template>
  <div id="app">
    <com-a></com-a>
    <com-b></com-b>
    <com-c></com-c>
  </div>
</template>

<script>
import comA from '@/components/com-a'
import comB from '@/components/com-b'
import comC from '@/components/com-c'
export default {
  name: 'App',
  components: {
    comA,
    comB,
    comC
  }
}
</script>

<style>
</style>
