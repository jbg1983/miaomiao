<template>
    <div class="city_body">
        <div class="city_list" id='city_list'>
            <div class="city_hot">
                <h2>热门城市</h2>
                <ul>
                    <li v-for="(item,i) in hotCity" :key="i" >{{item.nm}}</li>
                </ul>
            </div>
            <div class="city_sort" ref="city_sort">
                <div v-for="(items,i) in cityList" :key="i">
                    <h2>{{items.index}}</h2>
                    <ul>
                        <li v-for="(item,i) in items.list" :key="i" @click='getPosition(item)'>{{item.name}}</li>
                    </ul>
                </div>
               
            </div>
        </div>
        <div class="city_index">
            <ul>
                <li v-for="(item,index) in cityList" :key="index" @click="handleToIndex(index)" :class='{active:selectIndex==index}'>{{item.index}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            cityList:[],
            hotCity:[],
            selectIndex:0
        }
    },
    mounted(){
        
        this.axios.get('/api/cityList').then((res)=>{
            //console.log(res.data)
            var msg=res.data.msg;
            if(msg==='ok'){
                var cities=res.data.data.cities;
                //[{index:'A'},list:[{nm:'阿成',id:1222}]]
                let {cityList,hotCity}=this.formacityList(cities);
                this.cityList=cityList;
                this.hotCity=hotCity;
               
            }
        }).catch(function(reason) {
            console.log('catch:', reason);
        });
    },
    methods:{
        formacityList(cities){
            var cityList=[];
            var hotCity=[];

            for(var i=0;i<cities.length;i++){
                if(cities[i].isHot===1){
                    hotCity.push(cities[i])
                }
            }
             console.log(hotCity)
            for(var i=0;i<cities.length;i++){
                var firstLetter=cities[i].py.substring(0,1).toUpperCase();
                if(toCom(firstLetter)){//新添加index
                    cityList.push({index:firstLetter,list:[{name:cities[i].nm,id:cities[i].id}]})
                }else{//累加到已有index
                    for(var j=0;j<cityList.length;j++){
                        if(cityList[j].index===firstLetter){
                            cityList[j].list.push({name:cities[i].nm,id:cities[i].id})
                        }
                    }
                }
            }

            cityList.sort((n1,n2)=>{
                if(n1.index>n2.index){
                    return 1;
                }else if(n1.index<n2.index){
                    return -1;
                }else{
                   return 0; 
                }
            })

            function toCom(firstLetter){
                for(var i=0;i<cityList.length;i++){
                    if(cityList[i].index===firstLetter){
                        return false
                    }
                }
                return true;
            }

            console.log(cityList)
            return {
                cityList,hotCity
            }
        },
        handleToIndex(index){
            var h2=this.$refs.city_sort.getElementsByTagName('h2');
            this.$refs.city_sort.parentNode.scrollTop=h2[index].offsetTop;
            console.log( h2[index].offsetTop)
        //    let ele=document.getElementById('city_list');
        //     ele.scrollTop =h2[index].offset;
           this.selectIndex=index;
        },
        getPosition(item){
            // this.$emit('positionValue',item)
        }
    }
}
</script>
<style lang="less" scoped>
    .city_body{
        display: flex;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        .city_list{
            flex: 1;
            background: #fff5f0;
            // &::-webkit-scrollbar{
            //     background-color: transparent;
            //     width: 0;
            // }
            h2{
                padding-left: 15px;
                line-height: 30px;
                font-size: 14px;
                background-color: #f0f0f0;
                font-weight: normal;
            }
            .city_hot{
                overflow: hidden;
                margin-top: 20px;
                
                li{
                    float: left;
                    background-color: #fff;
                    width: 29%;
                    height: 33px;
                    margin-top: 15px;
                    margin-left: 3%;
                     line-height: 33px;
                     text-align: center;
                }
            }
            .city_sort{
                div{
                    margin-top: 20px;
                    ul{
                        padding-left:10px;
                        line-height: 30px;
                        li{
                            line-height: 30px;
                        }
                    }
                }
                
            }
        }
        .city_index{
            width: 20px;
            height: 100%;
           ul{
               width: 100%;
                text-align: center;
                position: fixed;
                top: 50%;
                right: 0;
                width: 20px;
                margin-top: -45%;
               li{
                   &.active{
                       background: red;
                       border-radius: 50%;
                       color: #fff;
                   }
               }
           } 
        }
    }
</style>
