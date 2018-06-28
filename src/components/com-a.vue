<template>
    <div>
        com-a
        <br />
        <br />
        <!-- 获取状态值的第一种用法 -->
        state:
        <br />
        {{ $store.state.msg }}
        <br />
        <br />
        getters:
        <br />
        {{ $store.getters.msg }}

        <hr />
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
