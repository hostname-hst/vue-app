<template>
    <div class="container">
        <div class="formLogin">
            <input type="number" maxlength="11" placeholder="请输入手机号码">
            <div class="operate">
                <input type="number" placeholder="输入验证码">
                <span class='blue getCode' bindtap='getCode' v-if="isShow">获取验证码</span>
                <span class='blue getCode' v-if="!isShow">重新发送{{rentTime}}</span>
            </div>
            <mt-button size="large" type="primary">登录</mt-button>
        </div>
        <img src="../assets/login.png" alt="" class="login-bg">
    </div>
</template>
<script>
    export default {
        name:'login',
        data () {
            return {
                isShow:true
            }
        },
        methods : {
            getCode () {
                alert(33)
            }
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

