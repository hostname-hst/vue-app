<template>
     <div> 
        <form class='form'>
            <div>
                头像 <img src='https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg' style='border-radius:50%;'>
            </div>
            <div>
                姓名<input type='text' v-model='userInfo.uname'>
            </div>
            <div>
                手机号码<input type='tel' disabled='disabled' :value='userInfo.mobile'>
            </div>
        </form> 
        <mt-button class="step" size="large" type="primary" @click="changeMobile">保存</mt-button>
    </div> 
</template>
<script>
export default {
    name:'personInfo',
    data () {
        return {
            userInfo:{
                
            },
            // rhWxAccount:{}
        }
    },
    methods:{
        changeMobile () {
            // this.$router.push({
            //     name:'editPerson'
            // })
            this.$http.post('/wx/auth/editUser',this.userInfo)
            .then(res=>{
                if(res.code == 0){
                    this.$toast(res.errMsg)
                }
            })
            .catch(err=>{
                this.$toast(err.errMsg)
            })
        },
        getInfo () {
            this.$http.get('/wx/auth/getUser')
            .then(res=>{
                this.userInfo = res.data;
                // this.rhWxAccount = res.data.rhWxAccount;
            })
            .catch(err=>{
                this.$toast(err.errMsg)
            })
        }
    },
    mounted () {
        this.getInfo();
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
