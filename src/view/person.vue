<template>
    <div>
        <div>
            <div class='person-wrap' @click='gotoPersonInfo'>
                <div class="img">
                    <!-- <open-data type="userAvatarUrl" class="image"></open-data> -->
                </div>
                <span>{{formData.uname}}</span>
                <a :herf="formData.mobile">{{formData.mobile}}</a>
            </div>
            <div class='person-list'>
                <div class='info' @click='incomeList'>
                    <img src='../assets/image/money.png' class='icon'>
                    <span style='margin-left:5px;'>返费</span>   
                    <img src='../assets/image/right.png' class='icon' style='float:right; margin-left:5px; margin-top:32px;'>
                    <span class='money'>￥{{totalFee}}</span>
                </div>
                <div class='info'>
                    <img src='../assets/image/info.png' class='icon'>
                    <span style='margin-left:5px;'>关于我们</span>   
                    <img src='../assets/image/right.png' class='icon' style='float:right; margin-left:10rpx; margin-top:32px;'>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'person',
    data () {
        return {
            formData:{},
            totalFee:88
        }
    },
    methods:{
        gotoPersonInfo () {
            this.$router.push({
                name:'personInfo'
            })
        },
        incomeList () {
            this.$router.push({
                name:'incomeDetail'
            })
        }
    }
}
</script>
<style scoped>
    .person-wrap{
        width: 100%;
        height: 187px;
        text-align: left;
        background: #3A82F1;
        display: flex;
        flex-direction: column;
    }
    .person-wrap .img{
    display: flex;
    width: 80px;
    height: 80px;
    
    margin: 35px auto 7.5px;
    }
    .person-wrap .img .image{
        width: 80px;
        height: 80px; 
        display:block; 
        overflow:hidden; 
        border-radius: 50%;
    }
    .person-wrap text,.person-wrap a{
    text-align: center;
    margin-bottom: 5px;
    color: #fff;
    }
    .icon{
        width: 15px;
        height: 15px;
        margin-top: 16px;
    }
    .person-list{
    
    }
    .money{
        float: right;
    }
    .info{
        text-align: left;
        padding: 0 15px;
        background-color: #fff;
        line-height: 45px;
        border-bottom: 0.5px solid #ccc;
    }
</style>
