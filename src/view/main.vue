<template>
    <div>
        <router-view></router-view>
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
                <mt-tab-item id="main">
                    <img slot="icon" src="../assets/logo.png">
                    外卖
                </mt-tab-item>
                <mt-tab-item id="order">
                    <img slot="icon" src="../assets/logo.png">
                    订单
                </mt-tab-item>
                <mt-tab-item id="message">
                    <img slot="icon" src="../assets/logo.png">
                    发现
                </mt-tab-item>
                <mt-tab-item id="person">
                    <img slot="icon" src="../assets/logo.png">
                    我的
                </mt-tab-item>
            </mt-tabbar>
        <!-- </mt-tab-container> -->
    </div>
</template>
<script>
   import loginRouter from '../router/router';
    export default {
        name:'main',
        data () {
            return{
                active:'',
                selected:'main'
            }
        }
    }
</script>

