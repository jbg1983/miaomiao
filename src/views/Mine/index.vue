<template>
    <div>
        <header-top>我的</header-top>
        <div id="content" style="margin-top:50px;">
            <login/> 
        </div>
        
        <tabBar/>
    </div>
</template>
<script>
import headerTop from '@/components/Header'
import tabBar from '@/components/TabBar'
import login from '@/components/Login'
export default {
    components:{
        headerTop,tabBar,login
    }
}
</script>
<style lang="less" scoped>

</style