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
      this.$store.commit('setCount')
    }
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
