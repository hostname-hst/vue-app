<template>
    <div class="container">
        <div class="formLogin">
            <input type="number" maxlength="11" placeholder="请输入手机号码" v-model="mobile">
            <div class="operate">
                <input type="number" placeholder="输入验证码" v-model="msgCode">
                <span class='blue getCode' @click='getCode' v-if="isShow">获取验证码</span>
                <span class='blue getCode' v-if="!isShow">重新发送{{rentTime}}</span>
            </div>
            <mt-button size="large" type="primary" @click="loginFn">登录</mt-button>
        </div>
        <img src="../assets/login.png" alt="" class="login-bg">
    </div>
</template>
<script>
import axios from 'axios'
    export default {
        name:'login',
        data () {
            return {
                isShow:true,
                mobile:'',
                msgCode:''
            }
        },
        methods : {
            getCode () {
                console.log(this.mobile)
                this.$http.post(`/wx/auth/send_verif_code`,{
                    mobile:this.mobile,
                    openId:'wxhst123456'
                },true)
                .then(res=>{
                    console.log(res)
                })
            },
            loginFn () {
                this.$router.push({
                    name:'otherRouter'
                })
                this.$http.post(`/wx/auth/bind_weixin`,{
                    mobile:this.mobile,
                    msgCode:this.msgCode,
                    openId:'wxhst123456',
                    name:'hst'
                })
                .then(res=>{
                    if(res.code == 0){
                        localStorage.setItem('token',res.data.token)
                        this.$toast(res.errMsg);
                        this.$router.push({
                            name:'otherRouter'
                        })
                    }
                })
                .catch(err=>{
                    this.$toast(err.errMsg)
                })
            }
        },
        mounted () {
            // var countdown = 60;
            // var settime = function (that) {
            //     if (countdown == 0) {
            //         this.isShow = true;
            //         countdown = 60;
            //         return;
            //     } else {
            //         this.isShow = false;
            //         this.rentTime = countdown;
            //         countdown--;
            //     }
            //     setTimeout(function () {
            //         settime(that)
            //     }, 1000)
            // }
            // this.$http.get('https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa1674b02c914a0f0&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect')
            // .then(res=>{
            //     console.log(res)
            // })
        }
    }
</script>


<style scoped lang="less">
    .container{
        display: flex;
        position: relative;
        .formLogin{
            width: 335px;
            display: block;
            padding: 0 20px;
            position: absolute;
            left: 0;
            top: 210px;
            z-index: 5;
            input{
                width: 100%;
                height: 40px;
                border: 1px solid #fff;
                border-radius: 5px;
                padding-left: 18rpx;
                margin: 5px 0 15px;
                background: none;
                font-size: 16px;
                padding-left: 15px;/*px*/
                color: #000;
                // background: #fff;
                // opacity: .1;
            }
            .operate{
                position: relative;
                margin-bottom: 40px;
                .blue{
                    color: #125fdb;
                }
                .getCode{
                    display: inline-block;
                    font-size: 14px;
                    position: absolute;
                    width: 92px;
                    line-height: 41px;
                    border-left: 1px solid #fff;
                    right: 15px;
                    top: 7px;
                    text-align: center;
                    z-index: 3;
                    color: #fff;
                }
            }
        }
        .login-bg{
            width: 100%;
            height: 100%;
            position:fixed;
            left: 0;
            top: 0;
            bottom: 0;
            right:0;
        }
        
    }
</style>

