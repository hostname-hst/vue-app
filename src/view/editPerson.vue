<template>
    <div> 
        <form class='form'>
            <div>
                真实姓名<input type='text' v-model='nameInput'>
            </div>
            <div>
                手机号码<input type='number' v-model='mobileInput'>
            </div>
            <div class='operate'>
                <input type='number' placeholder='请输入验证码'  v-model="msgCodeInput">
                <div class='blue getCode' @click='getCode' v-if="isShow">获取验证码</div>
                <div class='blue getCode' v-if="!isShow">重新发送{{rentTime}}</div>
            </div>
        </form> 
        <mt-button class='step' @click='bindMobile' size="large" type="primary">绑定</mt-button>
    </div> 
</template>
<script>
    export default {
        name:'editPerson',
        data () {
            return {
                nameInput:'',
                mobileInput:'',
                msgCodeInput:'',
                isShow:true,
                rentTime:'',
                countdown:60
            }
        },
        methods :{
            bindMobile () {
                let formData = {
                    name:this.nameInput,
                    mobile:this.mobileInput,
                    msgCode:this.msgCodeInput,
                    openId:'wxhst123456'
                }
                this.$http.post('/wx/auth/bind_weixin',formData)
                .then(res=>{
                    console.log(res)
                    if(res.code == 0){
                        this.$router.push({
                            name:'index'
                        })
                    }
                })
                .catch(err=>{
                    this.$toast(err.errMsg)
                })
            },
            setTime () {
                var that = this;
                if (this.countdown == 0) {
                    this.isShow = true;
                    this.countdown = 60;
                    return;
                } else {
                    this.isShow = false;
                    this.rentTime = this.countdown;
                    this.countdown--;
                }
                var that = this;
                setTimeout(function () {
                    that.setTime()
                }, 1000)
            },
            getCode () {
                this.$http.post(`/wx/auth/send_verif_code`,{
                    mobile:this.mobileInput,
                    openId:'wxhst123456'
                },true)
                .then(res=>{
                    this.setTime();
                })
            }
        }

    }
</script>

<style>
    .form{
        /* margin: 60rpx 0; */
        display: block;
        padding: 0 15px;
        background-color: #fff;
    }
    .form div{
        width: 100%;
        border-bottom: 0.5px solid #ccc;
        display: flex;
        justify-content: space-between; 
        align-items: center;  
        line-height: 125rpx;
    }
    .form img{
        width: 48px;
        height: 48px;
    }
    .form image,.form span,.form input{
        line-height: 64px;
        height: 45px;
        font-size: 14px;
        color: #878787;
        text-align: right;
        background-color: #fff;
        border: none
    }
    .operate{
        position: relative;
    }
    .operate input{
        width: 60%;
        height: 45px;
        border: none;
        border-radius: 5px;
        padding-left: 0px;
        /* margin: 5px 0 15px; */
        font-size: 14px;
        text-align: left;
        background-color: #fff;
    }
    .operate .getCode{
        font-size: 13px;
        width: 102px;
        height: 45px;
        line-height: 45px;
        /* border: .5px solid #105EDA; */
        text-align: center;
        z-index: 3;
        color: #105EDA;
        border-radius: 4px;
        justify-content: center;
    }
    .step{
        width: 96%;
        margin: 50px auto;
    }
</style>
