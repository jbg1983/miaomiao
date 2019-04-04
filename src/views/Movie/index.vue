<template>
    <div id="main">
        <header-top>喵喵电影</header-top>
        <div id="content" style="margin-top:95px">
            <div class="movie_menu">
                <router-link tag="div" to="/movie/city" class="city_name">
                    <span>大连</span><i class="iconfont icon-triangle-arrow-d"></i>
                </router-link>
                <div class="hot_switch">
                    <router-link tag="div" to="/movie/nowPlaying" class="hot_item " >正在热映</router-link>
                    <router-link tag="div" to="/movie/comingSoon" class="hot_item " >即将上映</router-link>
                </div>
                <router-link tag="div" to="/movie/search" class="search_entry">
                    <i class="iconfont icon-search"></i>
                </router-link>
            </div>
            <keep-alive>
                <router-view />
            </keep-alive>
        </div>
        <tabBar></tabBar>  
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
    .movie_menu{
        width: 100%;
        height: 45px;
        border-bottom: 1px solid #e6e6e6;
        display: flex;
        justify-content: space-between;
        position: fixed;
        top: 50px;
        left: 0;
        background-color: #fff;
        z-index: 10;
      
        .router-link-active{
            color: #ef4238;
            border-bottom: 2px solid #ef4238;
        }
        .city_name{
            margin-left: 20px;
            line-height: 45px;
            
        }
        .hot_switch{
            display: flex;
            height: 100%;
            line-height: 45px;
            .hot_item{
                font-size: 15px;
                color: #666;
                width: 80px;
                text-align: center;
                margin: 0 12px;
                font-weight: 700;
                
            }
        }
        .search_entry{
            margin-right: 20px;
            line-height: 45px;
            
            i{
                font-size: 24px;
                color: red;
            }
        }
    }
</style>