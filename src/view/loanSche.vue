<template>
    <div class="loanWrap">
        <h3 style="margin-bottom:25px;font-weight:500;line-height:90px;">
            订单编号：Nssdsdds;
            <time>日期：2018-06-15</time>   
        </h3>
        <div>
            <h3>贷款方案</h3>
            <ul>
                <li>贷款机构<span></span></li>
                <li>贷款金额<span></span></li>
                <li>贷款期限<span></span></li>
                <li>贷款利率<span></span></li>
                <li>还款方式<span></span></li>
                <li>月&emsp;&emsp;供<span></span></li>
                <li>备&emsp;&emsp;注<span></span></li>
            </ul>
        </div>
        <div>
            <h3>贷款所需材料</h3>
            <h4>借款人资料</h4>
            <div class="content"></div>
            <h4>房的资料</h4>
            <div class="content"></div>
            <h4>公司的资料</h4>
            <div class="content"></div>
            <h4>备注</h4>
            <div class="content"></div>
        </div>
         <div>
            <h3>办理步骤</h3>
            <div class="content"></div>
            <h4>服务费用</h4>
             <div class="content"></div>
            <h4>其他</h4>
            <div class="content"></div>
         </div>
    </div>
</template>
<script>
    export default {
        name:'loanSche',
        data () {
            return {

            }
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
            margin: 0;
        };
        h3{ 
            text-align: left;
            margin: 0;
            padding: 0 10px;
            background: #fff;
            overflow: hidden;
            font-weight: 600;
            font-size: 16px;
            color: #535353;
            line-height: 35px;
            time{
                float: right;
            }
        }
        h4{
            padding: 0 10px;
            font-weight: 600;
            font-size: 14px;
            text-align: left;
            background: #fff;
            line-height: 35px;
            margin: 0;
        };
        .content{
            background: #fff;
        }
    }
</style>
