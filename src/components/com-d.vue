<template>
    <div>
        <hr />
        com-d
        <br />
        <br />
        <button @click="handleClick">按钮</button>
    </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      // 调用 action
      this.$store.dispatch('increate')
    }
  }
}
</script>

<style>

</style>
