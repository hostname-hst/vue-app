<template>
     <div> 
        <form class='form'>
            <div>
                头像 <img :src='userInfo.avatarUrl' style='border-radius:50%;'>
            </div>
            <div>
                姓名<span>{{rhWxAccount.uname}}</span>
            </div>
            <div>
                手机号码<input type='tel' disabled='disabled' :value='rhWxAccount.mobile'>
            </div>
        </form> 
        <mt-button class="step" size="large" type="primary" @click="changeMobile">换邦手机号</mt-button>
    </div> 
</template>
<script>
export default {
    name:'personInfo',
    data () {
        return {
            userInfo:{
                avatarUrl:'../assets/image/logo.png'
            },
            rhWxAccount:{}
        }
    },
    methods:{
        changeMobile () {
            this.$router.push({
                name:'editPerson'
            })
        }
    }
}
</script>
<style scoped>
    .form{
        margin: 10px 0;
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
    .step{
        position: fixed;
        bottom: 0;
        left: 0;
        border-radius: 0;
        width: 100%;
    }
</style>
