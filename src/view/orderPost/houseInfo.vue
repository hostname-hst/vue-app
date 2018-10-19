<template>
    <div class="wrap">
        <div class='steps'>
            <div class='active'>
                <img src='../../assets/image/needSe.png'>
                <span>借款需求</span>
            </div>
            <div class='line'>
                <img src='../../assets/image/lined.png'>
            </div>
            <div>
                <img src='../../assets/image/baseInfoSe.png'>
                <span>基础信息</span>
            </div>
            <div class='line'>
                <img src='../../assets/image/lined.png'>
            </div>
            <div>
                <img src='../../assets/image/houseSe.png'>
                <span>房屋信息</span>
            </div>
        </div>
        <form class='form'>
            <div class='border' @click="houseType">
                <mt-field label="房屋性质" placeholder="请选择房屋性质" v-model="natureStr"></mt-field>
            </div>
            <div class='border'>
                <mt-field label="房产证号" placeholder="请输入房产证号" v-model="formData.houseNum"></mt-field>
            </div>
            <div class='border'>
                <mt-field label="房产地址" placeholder="请输入房产地址" v-model="formData.address"></mt-field>
            </div>
            <div class='border'>
                <mt-field label="房屋面积" placeholder="请输入房屋面积（㎡）" v-model="formData.acreage"></mt-field>
            </div>
        </form>
       <mt-actionsheet
            :actions= "actionData"
            v-model="sheetVisible">
        </mt-actionsheet>
        <div class='image-box'>
            <span>房产证图</span>
            <div class='imageList'>
                <upload-file :multiple="multiple"
                   :max="max"
                   :imgArr="imgArr"
                   @refDom="getDom"
                   @fileChange="fileChange"></upload-file>
                <!-- <image bindtap='previewImage' wx:for="{{urls}}" wx:key="{{index}}" src='{{item}}' style='width:158rpx;height:158rpx;margin:0 10rpx 10rpx 0'></image> -->
                <div class='image-add'>+</div>
            </div>  
        </div>
        <mt-button type="primary" size="large" class="step" @click="submitBtn">提交</mt-button>
    </div>
</template>
<script>
import uploadFile from '@/components/uploadFile'
import axios from 'axios'
import qs from 'qs'
    export default {
        name:'postOrder',
        components:{
            uploadFile
        },
        data () {
            return {
                multiple:true,
                max:5,
                formData:{
                    nature:'',
                    houseNum:'',
                    address:'',
                    acreage:''
                },
                natureStr:'',
                actionData:[
                    {
                        name:'商业',
                        value:0,
                        method:this.bussness
                    },
                    {
                        name:'住宅',
                        value:1,
                        method:this.house
                    }
                ],

                sheetVisible:false,
            }
        },
        methods : {
            getDom() {
                let file = this.$refs.file;
                this.$emit("refDom", file);
            },
            fileChange (data) {
                console.log(data)
                // axios.post('http://192.168.3.33:8082/upload',qs.stringify( {
                //     file: data
                // }))
                // .then(function (response) {
                //     console.log(response);
                // })
                // .catch(function (error) {
                //     console.log(error);
                // });
                axios({
                    method: 'post',
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    url: 'http://192.168.3.33:8082/upload',data,
                })
                .then(res=>{
                    console.log(res)
                })
                ;
            },


            houseType () {
                this.sheetVisible = true;
            },
            bussness (val) {
                this.natureStr = val.name
            },
            house (val) {
                 this.natureStr = val.name
            },
            submitBtn () {
                console.log(this.formData)
                this.$router.push({
                    name:'houseInfo'
                })
            }
        }
    }
</script>
<style lang="less">
    .steps{
        display: flex;
        padding: 20px 20px;
        padding-left: 30px;
        background: #fff;
        div{
            display: block;
            width:90px;
            font-size: 14px;
            color: #999;
        }
        div.active{
            color: #000;
        }
        img{
            width: 57px;
            height: 57rpx;
            text-align: center;
            justify-content: center
        }
        .line{
            img{
                width: 47px;
                height: 1.5px;
                margin-top: 28px;
                margin-left: 5px;
            }
        }
    }
    .form{
        display: block;
        padding-top:30px;
        .border{
            margin-bottom: 10px;
            position: relative;
        }
        .timeType{
            position: absolute;
            width: 60px;
            height: 48px;
            border-left: 1px solid #ccc;/*no*/
            right: 0px;
            top: 0px;
            padding-right: 30px;
            text-align: center;
            z-index: 5;
            span{
                display: block;
                width: 100%;
                height: 100%;
                line-height: 48px;
            }
        }
    }
    .step{
        position: fixed;
        bottom: 0;
        left: 0;
        border-radius: 0;
        width: 100%;
    }
</style>
