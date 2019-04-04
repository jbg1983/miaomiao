<template>
    <header id="header">
        <h1><slot>喵喵影院</slot></h1>
    </header>
</template>
<script>
export default {
    name:'Header'
}
</script>
<style lang="less" scoped>
    #header{
        width: 100%;
        height: 50px;
        color: #fff;
        background: #e54847;
        border-bottom: 1px solid #e54847;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 10;
        h1{
            font-size: 18px;
            text-align: center;
            line-height: 50px;
            
        }
        i{
            position: absolute;
            left: 5px;
            top: 50%;
            margin-top: -13px;
            font-size: 26px;
        }
    }
</style>
