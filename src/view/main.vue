<template>
    <div class="wrap">
        <router-view></router-view>  
        <mt-tabbar v-model="selected">
            <mt-tab-item id="index">
                <img slot="icon" src="../assets/logo.png">
                <img slot="icon" src="../assets/login.png" v-show="indexActive">
                首页
            </mt-tab-item>
            <mt-tab-item id="order">
                <img slot="icon" src="../assets/logo.png">
                <img slot="icon" src="../assets/login.png" v-show="orderActive">
                订单
            </mt-tab-item>
            <mt-tab-item id="message">
                <img slot="icon" src="../assets/logo.png">
                <img slot="icon" src="../assets/login.png" v-show="messageActive">
                消息
            </mt-tab-item>
            <mt-tab-item id="person">
                <img slot="icon" src="../assets/logo.png">
                <img slot="icon" src="../assets/login.png" v-show="personActive">
                我的
            </mt-tab-item>
        </mt-tabbar> 
    </div>
    
</template>
<script>
   import {loginRouter,otherRouter,orderRouter} from '../router/router';
    export default {
        name:'otherRouter',
        data () {
            return {
                active:'',
                selected:'index',
                indexActive:true,
                orderActive:false,
                messageActive:false,
                personActive:false,
            }
        },
        // methods () {

        // },
        mounted () {
            console.log(this)
        },
        watch :{
            selected : function(val,oldVal){
                this.$router.push({
                    name: val
                })
                switch (val) {
                    case 'index':
                        this.indexActive = true;
                        this.orderActive = false;
                        this.messageActive = false;
                        this.personActive = false;
                        break;
                    case 'order':
                        this.indexActive = false;
                        this.orderActive = true;
                        this.messageActive = false;
                        this.personActive = false;
                        break;
                    case 'message':
                        this.indexActive = false;
                        this.orderActive = false;
                        this.messageActive = true;
                        this.personActive = false;
                        break;
                    case 'person':
                        this.indexActive = false;
                        this.orderActive = false;
                        this.messageActive = false;
                        this.personActive = true;
                        break;
                    default:
                        break;
                }
            },
            
        }
    }
</script>
<style lang="less" scoped>
    .wrap{
        height: 100%;
    }
</style>

