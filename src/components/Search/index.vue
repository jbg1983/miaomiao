<template>
    <div class="search_body">
        <div class="search_input">
            <div class="search_input_wrapper">
                <i class="iconfont icon-sousuo"></i>
                <input type="text" v-model="message">
            </div>
        </div>
        <div class="search_result">
            <h3>电影/电视剧/综艺</h3>
            <ul>
                <li v-for="item in moviesList" :key="item.id">
                    <div class="img"><img :src="item.img | setWH('128.180')" /></div>
                    <div class="info">
                        <p><span>{{item.nm}}</span><span>{{item.sc}}</span></p>
                        <p>{{item.enm}}</p>
                        <p>{{item.star}}</p>
                        <p>{{item.pubDesc}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            message:'',
            moviesList:[]
        }
    },
    watch:{
        message(newval){
            this.axios.get(`/api/SearchList?cityId=10&kw=${newval}`).then((res)=>{
                let msg=res.data.msg;
                let movies=res.data.data.movies;
                if(msg && movies){
                    this.moviesList=res.data.data.movies.list;
                    console.log(res.data.data.movies.list)
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
    .search_body{
        flex:1;
        overflow: hidden;
        .search_input{
            padding: 8px 10px;
            background-color: #f5f5f5;
            border-bottom: 1px solid #e6e6e6;
            .search_input_wrapper{
                padding: 0 10px;
                border: 1px solid #e6e6e6;
                border-radius: 5px;
                background-color: #fff;

                i{
                    font-size: 16px;
                    padding: 4px 0;
                }
                input{
                    border: none;
                    font-size: 13px;
                    color: #333;
                    padding: 4px 0;
                    outline: none;

                }
            }
        }
        .search_result{
            h3{
                font-size: 15px;
                color: #999;
                padding: 9px 15px;
                border-bottom: 1px solid #e6e6e6;
            }
            ul{
                li{
                    border-bottom: 1px dashed #c9c9c9;
                    padding: 10px 15px;
                    box-sizing: border-box;
                    display: flex;
                    .img{
                        width: 60px;
                        float: left;
                        img{
                            width: 60px;
                            height: 90px;
                        }
                    }
                    .info{
                        float:left;
                        margin-left: 15px;
                        flex: 1;
                        p{
                            height: 22px;
                            display: flex;
                            line-height: 22px;
                            font-size: 12px;
                            &:nth-of-type(1){
                                span:nth-of-type(1){
                                    font-size: 18px;
                                    flex: 1;
                                }
                                span:nth-of-type(2){
                                    font-size: 16px;
                                    color: #fc7103;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
