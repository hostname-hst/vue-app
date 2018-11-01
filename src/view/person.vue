<template>
    <div>
        <div>
            <div class='person-wrap' @click='gotoPersonInfo'>
                <div class="img">
                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg" alt="">
                </div>
                <span>{{formData.uname}}</span>
                <a>{{formData.mobile}}</a>
            </div>
            <div class='person-list'>
                <div class='info' @click='incomeList'>
                    <img src='../assets/image/money.png' class='icon'>
                    <span style='margin-left:5px;'>返费</span>   
                    <img src='../assets/image/right.png' class='icon' style='float:right; margin-left:5px; margin-top:16px;'>
                    <span class='money'>￥{{totalFee}}</span>
                </div>
                <!-- <div class='info'>
                    <img src='../assets/image/info.png' class='icon'>
                    <span style='margin-left:5px;'>关于我们</span>   
                    <img src='../assets/image/right.png' class='icon' style='float:right; margin-left:10px; margin-top:16px;'>
                </div> -->
            </div>
        </div>
        <mt-button class='step-btn' @click='loginOut' size="large" type="primary">退出</mt-button>
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
        },
        getInfo () {
            this.$http.get('/wx/order/order_fee')
            .then(res=>{
                this.formData = res.data.rhWxAccount;
                this.totalFee = res.data.totalFee;
            })
            .catch(err=>{

            })
        },
        loginOut () {
            localStorage.clear();
            sessionStorage.clear();
            this.$router.push({
                name:'login'
            })
        }
    },
    mounted () {
        this.getInfo();
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
    .person-wrap .img img{
        width: 80px;
        height: 80px; 
        display:block; 
        overflow:hidden; 
        border-radius: 50%;
    }
    .person-wrap span,.person-wrap a{
        text-align: center;
        margin-bottom: 5px;
        color: #fff;
        font-size: 14px;
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
    .step-btn{
        position: fixed;
        left: 0;
        bottom: 40px;
        width: 100%;
        margin: 50px auto;
        color: red;
        background-color: #fff!important;
    }
</style>
