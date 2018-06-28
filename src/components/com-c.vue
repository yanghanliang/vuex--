<template>
    <div>
        com-c
        <br />
        <br />
        mutation:
        <br />
        <input @click="hanleClick" type="button" value="改变状态">
        <br />
        <br />
        {{ count }}
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  methods: {
    hanleClick() {
      // 改变状态的值, 调用 mutation
      // this.$store.commit('setCount')
      // this.setCount()
      this.set()
    },
    // 映射 mutation
    // this.setCount --> this.$store.commit('setCount')
    // 方式 1
    // ...mapMutations([
    //   'setCount'
    // ])
    // 方式 2
    // this.set --> this.$store.commit('setCount')
    ...mapMutations({
      'set': 'setCount'
    })
  },
  // 展示数据
  computed: {
    // 不能进行异步调用
    ...mapState([
      'count'
    ])
  }
}
</script>

<style>

</style>
