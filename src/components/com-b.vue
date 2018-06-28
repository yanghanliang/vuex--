<template>
    <div>
        com-b
        <br />
        <!-- 计算属性的写法 -->
        <!-- {{ msg }} -->
        {{ a }}
        <br />
        <br />
        getters:
        <br />
        <!-- 映射的两种方式 -->
        <!-- {{ msg }} -->
        {{ m }}
        <hr />
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

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
    }),

    // getters 的使用
    // msg() {
    //   return this.$store.getters.msg
    // }
    // 映射的方式 1:
    // this.msg --> this,$store.getters.msg
    // ...mapGetters([
    //   'msg'
    // ])
    // 映射的方式 2:
    // this.m --> this,$store.getters.msg
    ...mapGetters({
      'm': 'msg'
    })
  }
}
</script>

<style>

</style>
