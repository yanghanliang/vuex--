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
import { mapActions } from 'vuex'

export default {
  methods: {
    handleClick() {
      // 调用 action
      // this.$store.dispatch('increate', { num: 7 })
      
      // 第一种写法
      // this.increate({
      //   num: 6
      // })

      // 第二种写法
      this['increate']({
        num: 6
      })
    },
    // this.increate is not a function --> 注意映射放在 methods 里面
    // 映射 this.increate --> this.$store.dispatch('increate)
    ...mapActions([
      'increate'
    ])
  }
}
</script>

<style>

</style>
