<template>
    <div class="wrap">
        <router-view></router-view>  
        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item id="index">
                <img slot="icon" src="../assets/image/home.png" v-show="!indexActive">
                <img slot="icon" src="../assets/image/homeSe.png" v-show="indexActive">
                首页
            </mt-tab-item>
            <mt-tab-item id="order">
                <img slot="icon" src="../assets/image/order.png" v-show="!orderActive">
                <img slot="icon" src="../assets/image/orderSe.png" v-show="orderActive">
                订单
            </mt-tab-item>
            <mt-tab-item id="message">
                <img slot="icon" src="../assets/image/message.png" v-show="!messageActive">
                <img slot="icon" src="../assets/image/messageSe.png" v-show="messageActive">
                消息
            </mt-tab-item>
            <mt-tab-item id="person">
                <img slot="icon" src="../assets/image/person.png" v-show="!personActive">
                <img slot="icon" src="../assets/image/personSe.png" v-show="personActive">
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
        mounted () {
            if(sessionStorage.getItem('isSelect')!='null'){
                 this.selected = sessionStorage.getItem('isSelect')
            }else{
                sessionStorage.setItem('isSelect', 'index')
            }
        },
        watch :{
            selected : function(val,oldVal){
                this.$router.push({
                    name: val
                })
                sessionStorage.setItem('isSelect', val) 
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

