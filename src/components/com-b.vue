<template>
    <div>
        com-b
        <br />
        <!-- 计算属性的写法 -->
        {{ test }}
    </div>
</template>

<script>
export default {
  computed: {
    test() {
      return this.$store.state.msg
    }
  }
}
</script>

<style>

</style>
