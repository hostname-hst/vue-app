<template>
    <div>
        <div class='person-wrap'>
            <img src='../assets/image/personBg.png'>
            <div class='add-money'>
            <div class='money'>￥{{totalFee}}</div>
            <span>累计获得（元）</span>
            </div>
        </div>
        <div class='title'>返费明细：</div>
        <div>
            <div class='money-list' v-for="item in dataList" :key="item.index">
            <div class='order' @click='orderDetail(item.orderId)'>
                <span style='display:inline-block;width:240px;text-align:left; margin-right:30px;'>{{item.type}}</span>
                <span>{{item.name}}</span>
                <span class='detail'>查看详情</span>
            </div>
            <span class='detail-money'>￥{{item.money}}元</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'incomeDetail',
    data () {
        return {
            totalFee:1111,
            dataList:[
                {
                    type:'jsdsadas',
                    name:'张三',
                    money:123456
                },
                {
                    type:'jsdsadas',
                    name:'张三',
                    money:123456
                }
            ]
            
        }
    },
    methods:{
        orderDetail (val) {
            this.$router.push({
                name:'orderDetail',
                query:{
                    orderId:val
                }
            })
        }
    }
}
</script>
<style scoped>
    .person-wrap{
        width: 100%;
        height: 197px;
        display: flex;
        flex-direction: column;
        position: relative;
    }
    .person-wrap image{
        width: 100%;
        height: 100%;
    }
    .add-money{
        position: absolute;
        width: 150px;
        height: 70px;
        text-align: center;
        left: 112px;
        top: 60px;
        color: #fff;
        font-size: 16px;
    }
    .money{
        font-size: 30px;
    }
    .detail{
        display: block;
        color: #878787;
        font-size: 13px;
        text-align: left;
    }
    .money-list{
        padding: 10px 15px;
        display: flex;
        justify-content: space-between;
        background-color: #fff;
        line-height: 1.7;
        align-items: center;
        border-bottom: 1px solid #ccc;/*no px*/
    }
    .money-list .detail-money{
        color: #6FA1F1;
        font-size: 18px;
    }
    .title{
        text-align: left;
        line-height: 55px;
        padding-left: 15px;
        font-size: 16px;
    }
</style>
