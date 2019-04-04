<template>
    <div class="movie_body">
        <ul>
            <li v-for="movie in movieList" :key="movie.id">
                <div class="pic_show"><img :src="movie.img | setWH('128.180')" alt=""></div>
                <div class="info_list">
                    <div class="title"><h2>{{movie.nm}}</h2><span v-if='movie.version'>3D</span></div>
                    <p>观众评<span class="grade">{{movie.sc}}</span></p>
                    <p>{{movie.star}}</p>
                    <p>{{movie.showInfo}}</p>
                </div>
                <div class="btn_mall">购票</div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
    data(){
        return{
            movieList:[]
        }
    },
    mounted(){
        this.axios.get('/api/movieOnInfoList?cityId=10').then((res)=>{
            let msg=res.data.msg;
            console.log(res.data.data.movieList)
            if(msg==='ok'){
                this.movieList=res.data.data.movieList;
            }
        })
    }
}
</script>
<style lang="less" scoped>
    .movie_body{
        flex: 1;
        overflow: auto;
        ul{
            margin: 0 12px;
            overflow: hidden;
            li{
                margin-top: 12px;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #e6e6e6;
                padding-bottom: 10px;
                .pic_show{
                    width: 64px;
                    height: 90px;
                    img{
                        width: 100%;
                        height: 100%
                    }
                }
                .info_list{
                    margin-left: 10px;
                    flex: 1;
                    position: relative;
                    .title{
                        display: flex;
                        h2{
                            font-size: 17px;
                            line-height: 24px;
                            width: 150px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }
                        span{
                            margin-top: 4px;
                            color:limegreen;
                            font-weight: bold;
                            height: 16px;
                            background: lightpink;
                            line-height: 16px;
                            padding:0 3px;
                            font-size: 12px;
                            border-radius: 3px;
                        }
                    }
                    
                    p{
                        font-size: 13px;
                        color: #666;
                        line-height: 22px;
                        width: 200px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                    .grade{
                        font-weight: 700;
                        color: #faaf00;
                        font-size: 15px;
                        margin-left: 3px;
                    }
                    img{
                        width: 50px;
                        position: absolute;
                        right: 10px;
                        top: 5px;
                    }
                }
                .btn_mall{
                    width: 47px;
                    height: 27px;
                    line-height: 28px;
                    text-align: center;
                    background-color: #ef4238;
                    color: #fff;
                    border-radius: 3px;
                }
                .btn_pre{
                    width: 47px;
                    height: 27px;
                    line-height: 28px;
                    text-align: center;
                    background-color: #3c9fe6;
                }
            }
        }
    }
</style>
