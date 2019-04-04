<template>
    <div class="cinema_body">
        <ul>
            <li v-for="item in cinemasList" :key="item.id">
                <div>
                    <span>{{item.nm}}</span>
                    <span class="q"><span class="price">{{item.sellPrice}}</span>元起</span>
                </div>
                <div class="adress">
                    <span>{{item.addr}}</span>
                    <span>{{item.distance}}</span>
                </div>
                <div class="card">
                   <div v-for="(num,key) in item.tag" :key="key"><span v-if="num===1" :class="key | classCard">{{key | formatCard}}</span></div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            cinemasList:[]
        }
    },
    mounted(){
        this.axios.get(`/api/cinemaList?cityId=10`).then((res)=>{
            // console.log(res.data)
            let msg=res.data.msg;
            if(msg==='ok'){
                this.cinemasList=res.data.data.cinemas;
            console.log(res.data.data.cinemas)

            }

        })
    },
    filters:{
        formatCard(key){
            var card=[
                {key:'allowRefund',value:'改签'},
                {key:'endorse',value:'退'},
                {key:'sell',value:'折扣卡'},
                {key:'snack',value:'小吃'}
            ]
            for(var i=0;i<card.length;i++){
                if(card[i].key===key){
                    return card[i].value;
                }
               
            }
            return '';
        },
        classCard(key){
            var card=[
                {key:'allowRefund',value:'or'},
                {key:'endorse',value:'or'},
                {key:'sell',value:'bl'},
                {key:'snack',value:'bl'}
            ]
            for(var i=0;i<card.length;i++){
                if(card[i].key===key){
                    return card[i].value
                }
            }
            return '';
        }
    }

}
</script>
<style lang="less" scoped>

    .cinema_body{
        flex: 1;
        overflow: auto;
        ul{
            padding: 10px 20px;
            li{
                border-bottom: 1px solid #e6e6e6;
                margin-bottom: 20px;
                div{
                    margin-bottom: 10px;
                }
                .q{
                    font-size: 12px;
                    color: #f03d37;
                }
                .price{
                    font-size: 18px;
                }
                .address{
                    font-size: 13px;
                    color: #666;
                    span{
                        &:nth-of-type(2){
                            float:right
                        }
                    }
                }
                .card{
                    display: flex;
                    div{
                       span{
                            padding: 0 3px;
                        height: 15px;
                        line-height: 15px;
                        border-radius: 2px;
                        color: #f90;
                        border: 1px solid #f90;
                        margin-right: 3px;
                        &.or{
                            color: #f90;border: 1px solid #589daf;
                       }
                        }
                        &.bl{
                            color: #589daf;
                            border:1px solid #589daf;
                        }
                    }
                }

            }
        }
    }
    
</style>
