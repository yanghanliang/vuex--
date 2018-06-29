<template>
  <div id="app">
    <com-a></com-a>
    <com-b></com-b>
    <com-c></com-c>
    <com-d></com-d>
    <com-e></com-e>
  </div>
</template>

<script>
import comA from '@/components/com-a'
import comB from '@/components/com-b'
import comC from '@/components/com-c'
import comD from '@/components/com-d'
import comE from '@/components/com-e'
export default {
  name: 'App',
  components: {
    comA,
    comB,
    comC,
    comD,
    comE
  }
}
</script>

<style>
</style>
