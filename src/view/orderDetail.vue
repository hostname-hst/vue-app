<template>
    <div>
        <div class='orderPannel'>
            <img src='../assets/image/bg.png'>
            <div class='orderInfo'>
            <span class='result'>{{model.statusStr}}</span>
            <div class='concatType'>
                <span>受理人：{{model.name}}</span>
                <a href="model.mobile" bindtap='callPhone'>{{model.mobile}}</a>
            </div>
            </div>
        </div>
        <div class='title-h3' @click="loanSche">订单详情 </div>
        <div class="order-step">
            <div slot="title" class='title' @click='handleClick' data-step="0">
                基本信息
                <time class="time">2018-10-18 17:30</time>
            </div>
            <div slot="content" class="content" v-if="false">
                <ul>
                <li>  
                    <span>借 款 人:</span></li>
                <li>
                    <span>身份证号:</span></li>
                <li>
                    <span>工作单位：</span></li>
                <li>
                    <span>月 收 入:</span>万元</li>   
                </ul>
            </div>
        </div>
        <div class="order-step">
            <div slot="title" class='title' @click='handleClick' data-step="0">
                借款需求
                <time class="time">2018-10-18 17:30</time>
            </div>
            <div slot="content" class="content" v-if="false">
                <ul>
                <li>  
                    <span>借 款 人:</span></li>
                <li>
                    <span>身份证号:</span></li>
                <li>
                    <span>工作单位：</span></li>
                <li>
                    <span>月 收 入:</span>万元</li>   
                </ul>
            </div>
        </div>
          <div class="order-step">
            <div slot="title" class='title' @click='handleClick' data-step="0">
                初评信息
                <time class="time">2018-10-18 17:30</time>
            </div>
            <div slot="content" class="content" v-if="false">
                <ul>
                <li>  
                    <span>借 款 人:</span></li>
                <li>
                    <span>身份证号:</span></li>
                <li>
                    <span>工作单位：</span></li>
                <li>
                    <span>月 收 入:</span>万元</li>   
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
            orderList:[]
        }
    },
    methods:{
        handleClick () {

        },
        loanSche () {
            this.$router.push({
                name:'loanSche'
            })
        }
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
        margin-top: 57px;
        font-size: 16px;
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
        width: 60px;
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
