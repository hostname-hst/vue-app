<template>
    <div>
        <mt-swipe :auto="4000" class="banner">
            <mt-swipe-item v-for="item in imgUrls" :key="item.index"><img :src="item" alt=""></mt-swipe-item>
        </mt-swipe>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in arr" :key="item.index"><img :src="item.images" alt=""></div>
            </div>
        </div>
        <mt-button type="primary" size="large" style="width:90%;margin:40px auto;" @click="postOrder">报单</mt-button>
    </div>
</template>
<script>
    require('swiper/dist/css/swiper.css')
    import Swiper from 'swiper'
    import {orderRouter} from '../router/router'
    export default {
        name:'index',
        data () {
            return{
                imgUrls: [
                    'http://miniapp.ronghuiyijie.com/static/banner.png',
                    'http://miniapp.ronghuiyijie.com/static/banner2.png',
                    'http://miniapp.ronghuiyijie.com/static/banner3.png',
                ],
                arr: [
                    {
                        images: 'http://miniapp.ronghuiyijie.com/static/zy.png'
                    },
                    {
                        images: 'http://miniapp.ronghuiyijie.com/static/housed.png'
                    },
                    {
                        images: 'http://miniapp.ronghuiyijie.com/static/personed.png'
                    },
                    {
                        images: 'http://miniapp.ronghuiyijie.com/static/credit.png'
                    },
                    {
                        images: 'http://miniapp.ronghuiyijie.com/static/dz.png'
                    },
                ],
            }
        },
        methods:{
            postOrder () {
                this.$router.push({
                    name: 'postOrder'
                })
            }
        },
        mounted () {
            var mySwiper =new Swiper('.swiper-container',{
                effect : 'coverflow',
                slidesPerView: 2,
                centeredSlides: true,
                loop:true,
                coverflowEffect: {
                    rotate: 30,
                    stretch: 10,
                    depth: 100,
                    modifier: 2,
                    slideShadows : false
                },
            });
            let pageUrl = window.location.href
            .replace(/[/]/g, "%2f")
            .replace(/[:]/g, "%3a")
            .replace(/[#]/g, "%23")
            .replace(/[&]/g, "%26")
            .replace(/[=]/g, "%3d");
            // this.$http.get('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxa1674b02c914a0f0&secret=b54ae4204d40b8f2c6d283c9d100a4f9')
            this.$http.get('https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx51f5a8028daa68fe&redirect_uri='+pageUrl+'&response_type=code&scope=SCOPE&state=STATE#wechat_redirect')
            .then(res=>{
                console.log(res);
                this.token = res.data.access_token;
            })
            .catch(err=>{
                this.$toast(err.errMsg)
            })
        }
    }
</script>
<style lang="less" scoped>
    .banner{
        width: 100%;
        height: 153px;
        img{
            height: 100%;
            width: 100%;
        }
    }
    .swiper-container{
        margin-top: 25px;
        height: 230px;
        img{
            height: 100%;
            width: 100%;
        }
    }
</style>
