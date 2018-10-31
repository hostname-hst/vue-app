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
                <img src='../../assets/image/line.png'>
            </div>
            <div>
                <img src='../../assets/image/house.png'>
                <span>房屋信息</span>
            </div>
        </div>
        <form class='form-box'>
            <div class='border'>
                <mt-field label="借款人姓名" placeholder="请输入借款人姓名" v-model="formData.name"></mt-field>
            </div>
            <div class='border'>
                <mt-field label="身份证号" placeholder="请输入借款身份证号" v-model="formData.idCard"></mt-field>
            </div>
            <div class='border'>
                <mt-field label="工作单位" placeholder="请输入借款工作单位" v-model="formData.workUnit"></mt-field>
            </div>
            <div class='border'>
                <mt-field label="月收入" placeholder="请输入借款人月收入（元）" v-model="formData.monthMoney"></mt-field>
            </div>
        </form>
       
        <mt-button type="primary" size="large" class="step" @click="nextStep">下一步</mt-button>
    </div>
</template>
<script>
    export default {
        name:'postOrder',
        data () {
            return {
                formData:{
                    name:'',
                    idCard:'',
                    workUnit:'',
                    monthMoney:'',
                    wxOId:localStorage.getItem('wxOId')
                }
            }
        },
        methods : {
            nextStep () {
                this.$http.post('/wx/uporder/up_order_two',this.formData)
                .then(res=>{
                    if(res.code == 0){
                        this.$toast(res.errMsg)
                        this.$router.push({
                            name:'houseInfo'
                        })
                    }
                })
                .catch(err=>{
                    this.$toast(err.errMsg)
                })
                
            }
        }
    }
</script>
<style lang="less" scoped>
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
    .form-box{
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
