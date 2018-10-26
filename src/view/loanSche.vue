<template>
    <div class="loanWrap">
        <h3 style="margin-bottom:25px;font-weight:500;line-height:90px;">
            订单编号：Nssdsdds;
            <time>日期：{{scheInfo.updateTime}}</time>   
        </h3>
        <div class="box">
            <h3 class="h3" @click="scheStateFn">贷款方案</h3>
            <ul v-if="scheState">
                <li>贷款机构：<span>{{scheInfo.lendAgency}}</span></li>
                <li>贷款金额：<span>{{scheInfo.lendMoney}}</span></li>
                <li>贷款期限：<span>{{scheInfo.loanPeriod}}</span></li>
                <li>贷款利率：<span>{{scheInfo.rateOfInterest}}{{scheInfo.rateOfInteTypeStr}}</span></li>
                <li>还款方式：<span>{{scheInfo.modeOfRepay}}</span></li>
                <li>月&emsp;&emsp;供<span>：{{scheInfo.monthMoney}}</span></li>
                <li>备&emsp;&emsp;注<span>：{{scheInfo.handleRemark}}</span></li>
            </ul>
        </div>
        <div class="box">
            <h3 class="h3" @click="scheReFn">贷款所需材料</h3>
            <div v-if="scheRe">
                <h4>借款人资料</h4>
                <div class="content">{{scheInfo.borrMaterial}}</div>
                <h4>房的资料</h4>
                <div class="content">{{scheInfo.housMaterial}}</div>
                <h4>公司的资料</h4>
                <div class="content">{{scheInfo.companyMaterial}}</div>
                <h4>其他资料</h4>
                <div class="content">{{scheInfo.otherMaterial}}</div>
            </div>
        </div>
         <div class="box">
            <h3 class="h3" @click="scheStepFn">办理步骤</h3>
            <div v-if="scheStep">
                <div class="content" style="margin:10px 0;">{{scheInfo.handleStep}}</div>
                <h4>服务费用</h4>
                <div class="content">{{scheInfo.serviceFee}}</div>
                <h4>其他</h4>
                <div class="content">{{scheInfo.otherRemark}}</div>
            </div>
         </div>
    </div>
</template>
<script>
    export default {
        name:'loanSche',
        data () {
            return {
                orderId:this.$route.query.orderId,
                scheInfo:{},
                scheStep:false,
                scheRe:false,
                scheState:false
            }
        },
        methods: {
            getList(){
                this.$http.get(`/wx/order/order_loanSchemes/${this.orderId}`)
                .then(res=>{
                    this.scheInfo = res.data
                })
                .catch(err=>{
                    this.$toast(err.errMsg)
                })
            },
            scheStepFn () {
                this.scheStep = !this.scheStep;
            },
            scheReFn () {
                this.scheRe = !this.scheRe;
            },
            scheStateFn () {
                this.scheState = !this.scheState;
            }
        },
        mounted () {
            this.getList();
        }
    }
</script>
<style scoped lang="less">
    .loanWrap{
        ul,li{
            list-style: none;
            background: #fff;
            text-align: left;
            line-height: 35px;
            padding:0 10px;
            margin: 0;
        };
        h3{ 
            text-align: left;
            margin: 0;
            background: #fff;
            font-weight: 600;
            font-size: 16px;
            color: #666;
            border-bottom: 0.5px solid #ccc;
            line-height: 45px;
            padding:0 10px;
            position: relative;
            z-index: 0;
            time{
                float: right;
            }
        }
        .h3::after,.h3::before{
            position: absolute;
            border: 8px solid transparent;
            border-left: 8px solid #fff;
            content: '';
            height: 0;
            top: 12px;
            right: -7px;
        }
        .h3::before{
            margin-rigth:9px;
            right: -8px;
            border-left-color: #ccc;
        }
        h4{
            padding: 0 10px;
            font-weight: 600;
            font-size: 14px;
            color:#666;
            text-align: left;
            background: #fff;
            line-height: 35px;
            margin: 0;
        };
        .box{
            padding:0 10px 15px;
            background:#fff;
            // border-bottom:0.5px solid #333;
            padding-bottom:10px
        };
        .content{
            text-align:left;
            padding-left:20px;
            background: #fff;
        }
    }
</style>
