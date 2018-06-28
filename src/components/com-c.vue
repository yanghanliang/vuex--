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
import { mapState } from 'vuex'

export default {
  methods: {
    hanleClick() {
      // 改变状态的值, 调用 mutation
      // this.$store.commit('setCount')
      // this.setCount()
      // this.set()

      // 第一种方式
      // this.$store.commit('setNum', { num: 3 })

      // 第二种方式(常用)
      this.$store.commit({
        type: 'setNum',
        num: 4
      })
    }
    // 映射 mutation
    // this.setCount --> this.$store.commit('setCount')
    // 方式 1
    // ...mapMutations([
    //   'setCount'
    // ])
    // 方式 2
    // this.set --> this.$store.commit('setCount')
    // ...mapMutations({
    //   'set': 'setCount'
    // })
  },
  // 展示数据
  computed: {
    ...mapState([
      'count'
    ])
  }
}
</script>

<style>

</style>
