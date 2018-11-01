<template>
    <div>
        <div class='orderPannel'>
            <img src='../assets/image/bg.png'>
            <div class='orderInfo'>
            <span class='result'>{{model.statusStr}}</span>
            <div class='concatType'>
                <span>受理人：{{model.name}}</span>
                <a :href="'tel:'+model.mobile">{{model.mobile}}</a>
            </div>
            </div>
        </div>
        <div class='title-h3'>订单详情 </div>
        <div class="order-step" v-if="orderList[0].orderObj!=''">
            <div slot="title" class='title' @click='handleClick(0)' :data-step="0">
                 {{orderList[0].step}}
                <time class="time">{{orderList[1].date}}</time>
            </div>
            <div slot="content" class="content" v-if="orderList[0].open">
                <ul>
                    <li>  
                        <span>借 款 人:</span>{{orderList[0].orderObj.name}}</li>
                    <li>
                        <span>身份证号:</span>{{orderList[0].orderObj.idCard}}</li>
                    <li>
                        <span>工作单位：</span>{{orderList[0].orderObj.workUnit}}</li>
                    <li>
                        <span>月 收 入:</span>{{orderList[0].orderObj.monthMoney}}元</li>   
                </ul>
            </div>
        </div>
        <div class="order-step" v-if="orderList[1].orderObj!=''">
            <div slot="title" class='title' @click='handleClick(1)' :data-step="1">
                 {{orderList[1].step}}
                <time class="time">{{orderList[1].date}}</time>
            </div>
            <div slot="content" class="content" v-if="orderList[1].open">
                <ul>
                    <li>  
                        <span>借款金额:</span>{{orderList[1].orderObj.initMoney}}万元</li>
                    <li>
                        <span>借款期限:</span>{{orderList[1].orderObj.loanPeriod}}{{orderList[1].orderObj.loanPeriodTypeStr}}</li>
                    <li>
                        <span>借款用途：</span>{{orderList[1].orderObj.loanUse}}</li>
                </ul>
            </div>
        </div>
        <div class="order-step" v-if="orderList[2].orderObj!=''">
            <div slot="title" class='title' @click='handleClick(2)' data-step="2">
                {{orderList[2].step}}
                <time class="time">{{orderList[2].date}}</time>
            </div>
            <div slot="content" class="content" v-if="orderList[2].open">
                <ul>
                    <li>  
                        <span>初评结果:</span>{{orderList[2].orderObj.initResult}}</li>
                    <li>
                        <span>初评金额:</span>{{orderList[2].orderObj.money}}万元</li>
                </ul>
            </div>
        </div>
         <div class="order-step" v-if="orderList[3].orderObj!=''">
            <div slot="title" class='title' @click='handleClick(3)' data-step="3">
                {{orderList[3].step}}
                <time class="time">{{orderList[3].date}}</time>
            </div>
            <div slot="content" class="content" v-if="orderList[3].open">
                <ul>
                    <li>  
                        <span>初评结果:</span>{{orderList[3].orderObj.initResult}}</li>
                    <li>
                        <span>备注:</span>{{orderList[3].orderObj.initMoney}}</li>
                </ul>
            </div>
        </div>
         <div class="order-step" v-if="orderList[4].orderObj!=''">
            <div slot="title" class='title' @click='handleClick(4)' data-step="4">
                {{orderList[4].step}}
                <time class="time">{{orderList[4].date}}</time>
            </div>
            <div slot="content" class="content" v-if="orderList[4].open">
                <ul>
                    <li @click="loanSche(orderList[4].orderObj.id,orderList[4].orderObj.idStr)">  
                        <span>贷款方案:</span>点击查看</li>
                </ul>
            </div>
        </div>
         <div class="order-step" v-if="orderList[5].orderObj!=''">
            <div slot="title" class='title' @click='handleClick(5)' data-step="5">
                {{orderList[5].step}}
                <time class="time">{{orderList[5].date}}</time>
            </div>
            <div slot="content" class="content" v-if="orderList[5].open">
                <ul>
                    <li>  
                        <span>审批金额:</span>{{orderList[5].orderObj.money}}万元</li>
                    <li>  
                        <span>授信期限:</span>{{orderList[5].orderObj.creditPeriod}}{{
                        orderList[5].orderObj.creditPeriodTypeStr}}</li>
                    <li>  
                        <span>贷款期限:</span>{{orderList[5].orderObj.loanPeriod}}{{orderList[5].orderObj.loanPeriodTypeStr}}</li>
                    <li>  
                        <span>利率:</span>{{orderList[5].orderObj.rateOfInterest}}{{orderList[5].orderObj.rateOfInteTypeStr}}</li>
                    <li>  
                        <span>还款方式:</span>{{orderList[5].orderObj.modeOfRepayStr}}</li>
                </ul>
            </div>
        </div>
         <div class="order-step" v-if="orderList[6].orderObj!=''">
            <div slot="title" class='title' @click='handleClick(6)' data-step="6">
                {{orderList[6].step}}
                <time class="time">{{orderList[6].date}}</time>
            </div>
            <div slot="content" class="content" v-if="orderList[6].open">
                <ul>
                    <li>  
                        <span>放款时间:</span>{{orderList[6].orderObj.realTime}}</li>
                    <li>  
                        <span>放款金额:</span>{{orderList[6].orderObj.realMoney}}万元</li>
                </ul>
            </div>
        </div>
         <div class="order-step" v-if="orderList[7].orderObj!=''">
            <div slot="title" class='title' @click='handleClick(7)' data-step="7">
                {{orderList[7].step}}
                <time class="time">{{orderList[7].date}}</time>
            </div>
            <div slot="content" class="content" v-if="orderList[7].open">
                <ul>
                    <li>  
                        <span>备注:</span>{{JSON.parse(orderList[7].orderObj.remark)[0].label}}</li>
                </ul>
            </div>
        </div>
         <div class="order-step" v-if="orderList[8].orderObj!=''">
            <div slot="title" class='title' @click='handleClick(8)' data-step="8">
                {{orderList[8].step}}
                <time class="time">{{orderList[8].date}}</time>
            </div>
            <div slot="content" class="content" v-if="orderList[8].open">
                <ul>
                    <li>  
                        <span>备注:</span>{{JSON.parse(orderList[8].orderObj.remark)[0].label}}</li>
                </ul>
            </div>
        </div>
         <div class="order-step" v-if="orderList[9].orderObj!=''">
            <div slot="title" class='title' @click='handleClick(9)' data-step="9">
                {{orderList[9].step}}
                <time class="time">{{orderList[9].date}}</time>
            </div>
            <div slot="content" class="content" v-if="orderList[9].open">
                <ul>
                    <li>  
                        <span>备注:</span>{{JSON.parse(orderList[9].orderObj.remark)[0].label}}</li>
                </ul>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name:'orderDetail',
    data () {
        return {
            model:{},
            orderList:[],
            orderId:''
        }
    },
    methods:{
        handleClick (val) {
            let list = this.orderList;
            for (var i in list){
                if (i == val){
                    console.log(list[i].open)
                    list[i].open = !list[i].open;
                }else{
                    list.open = false;
                }
            }
        },
        loanSche (val,orderNum) {
            this.$router.push({
                name:'loanSche',
                query:{
                    orderId:val,
                    orderNum:orderNum
                }
            })
        },
        getList () {
            this.$http.get(`/wx/order/order_detail?id=${this.$route.query.orderId}`)
            .then(res=>{
                this.model = res.data.model;
                this.orderList = res.data.list;
            })
            .catch(err=>{
                this.$toast(err.errMsg)
            })
        }
    },
    mounted () {
        this.getList();
    }
}
</script>
<style scoped>
    .orderPannel{
        width: 100%;
        height: 187px;
        position: relative;
    }
    .orderInfo{
        position: absolute;
        left: 0;
        top: 0;
        z-index: 3;
        width: 100%;
        height:100%;
        color: #fff;
        display: flex;
        flex-direction: column;
    }
    .concatType{
        padding: 0 15px;
        display: flex;
        justify-content: space-between;
        margin-top: 45px;
        font-size: 16px;
    }
    .concatType a{
        color: #fff;text-decoration: none;
        margin-top: 2px;
    }
    .result{
        font-size: 30px;
        text-align: center;
        margin-top: 70px;
    }
    .title-h3{
        text-align: left;
        font-size: 15px;
        line-height: 55px;
        background-color: #f2f2f2;
        padding-left: 15px;
        /* margin-bottom: 15px; */
    }
    .orderPannel img{
        width: 100%;
        height: 100%;
    }
    .order-step{
        text-align: left;
        background-color: #fff;
        border-bottom: 0.5px solid #ccc;
    }
    .time{
        float:right;
        padding-right:15px;
        color:#b2b2b2;
        font-weight:500;
    }
    .content{
        overflow: hidden;
        margin-left: -4px;
        margin-right: 4px;
        /* margin-top: 8px; */
        border-top: 1px solid #efefef;
        border-bottom: 1px solid #efefef;
    }
    .content ul li{
        display: block;
        padding: 10px 0px;
        margin: 0 10px;
        border-bottom: 1px solid #efefef;
    }
    .content ul li:nth-last-child(1){
        border: none;
    }
    .content ul li span{
        display: inline-block;
        width: 80px;
    }
    .icon{
        float: right;
        margin-right: 7.5px; 
        margin-top: -1px; 
    }
    ul{
        margin: 0;
    }
    .title{
        /* margin-top: 1.5px; */
        font-size: 14px;
        margin-left: 8px;
        line-height: 35px;
        padding-top: 5px;
        position: relative;
        margin-right: 20px;
    }
    .title::after,.title::before{
        border: 8px solid transparent;
        border-left: 8px solid #fff;
        width: 0;
        height: 0;
        top: 13px;
        right: -16px;
        content: '';
        position: absolute;
    }
    .title::before{
        right: -17px;
        border-left-color: #ccc;
    }
    .show{
        display: block;
    }
    .hide{
        display: none!important;
        padding-bottom: 0!important;
    }
</style>
