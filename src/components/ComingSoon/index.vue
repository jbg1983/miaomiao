<template>
    <div class="movie_body">
        <ul>
            <li v-for="movie in comingList" :key='movie.id'>
                <div class="pic_show"><img :src="movie.img | setWH('128.190')" alt=""></div>
                <div class="info_list">
                    <div class="title"><h2>{{movie.nm}}</h2><span v-if='movie.version'>v3D iMax</span></div>
                    <p>观众评<span class="person">{{movie.wish}}</span>人想看</p>
                    <p>{{movie.star}}</p>
                    <p>{{movie.rt}}上映</p>
                </div>
                <div class="btn_pre">预售</div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            comingList:[]
        }
    },
    mounted(){
        this.axios.get('/api/movieComingList?cityId=10').then((res)=>{
            var msg=res.data.msg;
            if(msg==='ok'){
                this.comingList=res.data.data.comingList;
                console.log(res.data.data.comingList)
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
                    color: #fff;
                    border-radius: 3px;
                }
            }
        }
    }
</style>
