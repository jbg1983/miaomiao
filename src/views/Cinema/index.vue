<template>
    <div>
        <header-top>影院</header-top>
        <div id="content" style="margin-top:50px;">
            <div class="cinema_menu">
                <router-link tag="div" to='/cinema/cliList' class="city_switch">
                    全城<i class="iconfont icon-triangle-arrow-d"></i>
                </router-link>
                <div class="city_switch">
                    品牌<i class="iconfont icon-triangle-arrow-d"></i>
                </div>
                <div class="city_switch">
                    特色<i class="iconfont icon-triangle-arrow-d"></i>
                </div>
            </div>
            <router-view />  
        <tab-bar />
        </div>
        
    </div>
</template>
<script>
import headerTop from '@/components/Header'
import tabBar from '@/components/TabBar'
export default {
    components:{
        headerTop,tabBar
    }
}
</script>
<style lang="less" scoped>
    .cinema_menu{
        width: 100%;
        height: 45px;
        border-bottom: 1px solid #e6e6e6;
        display: flex;
        justify-content: space-around;
        line-height: 45px;
    }
</style>
