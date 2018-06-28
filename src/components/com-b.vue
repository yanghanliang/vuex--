<template>
    <div>
        com-b
        <br />
        <!-- 计算属性的写法 -->
        <!-- {{ msg }} -->
        {{ a }}
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    // test() {
    //   return this.$store.state.msg
    // }
    // 映射的方式 1:
    // this.msg --> this.$store.state.msg
    // ...mapState([
    //   'msg'
    // ])
    // 映射的方式 2:
    // this.a --> this.$store.state.msg
    ...mapState({
      'a': 'msg'
    })
  }
}
</script>

<style>

</style>
