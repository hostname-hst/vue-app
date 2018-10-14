<template>
    <div class="wrap">
        <!-- <mt-tab-container v-model="active"> -->
            <!-- <mt-tab-container-item id="tab-container1">
                <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab-container2">
                <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab-container3">
                <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
            </mt-tab-container-item> -->
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
        <!-- </mt-tab-container> -->
        <router-view></router-view>
        
    </div>
</template>
<script>
   import {loginRouter,otherRouter} from '../router/router';
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
                    path: val
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

