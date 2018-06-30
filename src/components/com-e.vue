<template>
    <div>
        <hr />
        com-e
        <br />
        <br />
        <button @click="handleClick">按钮</button>
        <br />
        <br />
        显示 comd 对应状态管理模块的值
        <br />
        name: {{ name }}
        <br />
        age: {{ age }}
        <br />
        <br />
        comc 中对应的name和age
        <br />
        namec: {{ namec }}
        <br />
        agec: {{ agec }}
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  methods: {
    handleClick() {
      // 所有模块中的成员, 都会添加到根模块中
      // 分模块必须使用命名空间
      // 调用comd模块中的 action
      this.$store.dispatch('comd/setAge', {
        age: 100
      })
    }
  },
  computed: {
    // 第一个参数 命名空间,作用是区分不同的状态模块
    ...mapState('comd', [
      'name',
      'age'
    ]),
    ...mapState('comc',{
      namec: 'name',
      agec: 'age'
    })
  }
}
</script>

<style>

</style>
