<template>
    <div>
        <div class="header">
            <mt-search :value.sync="value" cancel-text="取消"  placeholder="搜索"> </mt-search>
            <mt-navbar class="page-part" v-model="selected" fixed @click="changeStatus">
                <mt-tab-item id="-1">全部</mt-tab-item>
                <mt-tab-item id="21">审核中</mt-tab-item>
                <mt-tab-item id="10">贷款中</mt-tab-item>
                <mt-tab-item id="9">已完结</mt-tab-item>
                <mt-tab-item id="23">已失效</mt-tab-item>
            </mt-navbar>
        </div>
        <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
            <div class="footer">
                <div class='order-list' v-for="item in dataList" :key="item.index" @click='orderDetail(item.id)'>
                    <div class='detail-box'>
                    <div><span>借&ensp;款&ensp;人：</span>{{item.name}}</div>
                    <div class='detail'>
                        <span>详情</span>
                        <!-- <i-icon type="enter" size="22" color="#80848f" /> -->
                    </div>
                    </div>
                    <div>
                    <span>受&ensp;理&ensp;人：</span>{{item.acceptrePerson}}</div>
                    <div>
                    <span>状&emsp;&emsp;态：</span><span style="text-align:left;">
                        {{statusMap[item.status]}}
                        </span></div>
                    <div>
                    <span>申报代码：</span>{{item.wxCode}}</div>
                </div>
            </div>
        </mt-loadmore>
    </div>
</template>
<script>
export default {
    name:'order',
    data () {
        return {
            value:'',
            selected:'-1',
            allLoaded:false,
            dataList:[],
            formData:{
                limit:10,
                query:'',
                status: '-1',
                offset:0
            },
            statusMap :{
                "0": "待完善",
                "1": "待签",
                "2": "已签",
                "3": "补材料",
                "4": "批贷",
                "5": "拒贷",
                "6": "抵押登记",
                "7": "放款",
                "8": "退单",
                "9": "完结",
                "10": "批贷中",
                "21": "待初评",
                "22": "初评通过",
                "23": "初评失败"
            },
        }
    },
    methods:{
        orderDetail (val) {
            console.log(val)
            this.$router.push({
                name:'orderDetail',
                query:{
                    orderId:val
                }
            })
        },
        changeStatus () {
            console.log(this.selected)
        },
        loadBottom () {
            this.$refs.loadmore.onBottomLoaded();
            this.formData.offset = (this.formData.offset+1)*this.formData.limit
            this.getList();
        },
        getList () {
            this.$http.get('/wx/order/order_list',this.formData)
            .then(res=>{
                if (res.code == 0) {
                     this.dataList = this.dataList.concat(res.data.list);
                     if(res.data.list == ''){
                         this.$toast('暂无更多数据')
                     }
                }
               
            })
            .catch(err=>{
                this.$toast(err.errMsg)
            })
        }
    },
    mounted () {
        this.getList()
    },
    watch:{
        selected (val){
            this.formData.status = val;
            this.formData.offset = 0;
            this.dataList = [];
            this.getList();
        }
    }
}

</script>
<style>
    .header{padding:100px 0 0px;}
    .footer{padding-bottom: 50px;}
    .mint-searchbar{background-color: #26a2ff!important;z-index: 888}
    .mint-search{height: 52px;position: fixed;left: 0;top: 0;width: 100%;z-index: 9}
    .mint-searchbar-inner .mintui-search{font-size: 18px!important;}
    .mint-searchbar-core{font-size: 14px;padding-left: 5px;}
    .mint-searchbar-cancel{color: #fff;}
    .mint-navbar.is-fixed{top:50px;background-color: #efefef;}
    .order-list{
        margin: 15px 15px;
        background-color: #fff;
        border-radius: 5px;
        padding: 10px 10px 20px;
        border: 1px solid #ccc;
    }
    .order-list>div{
        font-size: 14px;
        line-height: 38px;
        padding-left: 15px;
        border-bottom: 1px solid #efefef;
        display: flex;
    }
    .order-list>div span{
        width: 80px;
        display: inline-block;
    }
    .order-list .detail-box{
        display: flex;
        justify-content: space-between;
    }
    .order-list .detail span{
        display: inline;
        padding-right: 5px;
    }
    .detail{
        position: relative;
        margin-right: 10px;
        z-index: 0;
    }
    .detail::after,.detail::before{
        position: absolute;
        border: 8px solid transparent;
        border-left: 8px solid #fff;
        content: '';
        height: 0;
        top: 12px;
        right: -16px;
    }
    .detail::before{
        right: -17px;
        border-left-color: #ccc;
    }
</style>
