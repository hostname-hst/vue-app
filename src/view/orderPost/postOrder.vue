<template>
    <div class="wrap">
        <div class='steps'>
            <div class='active'>
                <img src='../../assets/image/needSe.png'>
                <span>借款需求</span>
            </div>
            <div class='line'>
                <img src='../../assets/image/line.png'>
            </div>
            <div>
                <img src='../../assets/image/baseInfo.png'>
                <span>基础信息</span>
            </div>
            <div class='line'>
                <img src='../../assets/image/line.png'>
            </div>
            <div>
                <img src='../../assets/image/house.png'>
                <span>房屋信息</span>
            </div>
        </div>
        <form class='form'>
            <div class='border'>
                <mt-field label="借款金额" placeholder="请输入借款金额（万元）" v-model="formData.money"></mt-field>
            </div>
            <div class='border'>
                <mt-field label="借款期限" placeholder="请输入借款期限" v-model="formData.loanPeriod"></mt-field>
                 <p class='timeType' @click='actionSheet'>
                    <span>{{dateType}}</span>
                </p>
            </div>
            <div class='border'>
                <mt-field label="借款用途" placeholder="请输入借款用途" v-model="formData.loanUse"></mt-field>
            </div>
            <div class='border'>
                <mt-field label="申报代码" placeholder="业务经理手机号后6位" v-model="formData.wxThisCode"></mt-field>
            </div>
        </form>
         <mt-actionsheet
            :actions= "actionData"
            v-model="sheetVisible">
        </mt-actionsheet>
        <mt-button type="primary" size="large" class="step" @click="nextStep">下一步</mt-button>
    </div>
</template>
<script>
    export default {
        name:'postOrder',
        data () {
            return {
                formData:{
                    money:'',
                    loanPeriod:'',
                    loanUse:'',
                    wxThisCode:'',
                },
                dateType:'年',
                actionData:[
                    {
                        name:'年',
                        value:0,
                        method:this.year
                    },
                    {
                        name:'月',
                        value:1,
                        method:this.month
                    },
                    {
                        name:'日',
                        value:2,
                        method:this.day

                    },
                ],
                sheetVisible:false
            }
        },
        methods:{
            actionSheet (val) {
                console.log(val)
                this.sheetVisible = true
            },
            year (val) {
                this.dateType = val.name;
            },
            month (val) {
                this.dateType = val.name;
            },
            day (val) {
                this.dateType = val.name;
            },
            nextStep () {
                this.$router.push({
                    name:'orderBase'
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
            top: -12px;
            padding-right: 30px;
            text-align: center;
            z-index: 5;
            span{
                display: block;
                font-size: 16px;
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
