<template>
    <div>
        <mt-search :value.sync="value" cancel-text="取消"  placeholder="搜索"> </mt-search>
        <mt-navbar class="page-part" v-model="selected" fixed>
            <mt-tab-item id="-1">全部</mt-tab-item>
            <mt-tab-item id="21">审核中</mt-tab-item>
            <mt-tab-item id="10">贷款中</mt-tab-item>
            <mt-tab-item id="9">已完结</mt-tab-item>
            <mt-tab-item id="23">已失效</mt-tab-item>
        </mt-navbar>
        <div style="padding-top:150px;">
            <div class='order-list' v-for="item in dataList" :key="item.index" @click='orderDetail(item.id)'>
                <div class='detail-box'>
                <div><span>借 款 人：</span>{{item.name}}</div>
                <div class='detail'>
                    <span>详情</span>
                    <!-- <i-icon type="enter" size="22" color="#80848f" /> -->
                </div>
                </div>
                <div>
                <span>受 理 人：</span>{{item.acceptrePerson}}</div>
                <div>
                <span>状  态：</span><span >
                    <!-- {{statusMap[item.status]}} -->
                    </span></div>
                <div>
                <span>申报代码：</span>{{item.wxCode}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'order',
    data () {
        return {
            value:'',
            selected:'-1',
            dataList:[
                {
                    id:0,
                    name:'神经病',
                    acceptrePerson:'ssas',
                    pass:true,
                    wxCode:'000000'
                },
                {
                    id:1,
                    name:'神经病',
                    acceptrePerson:'ssas',
                    pass:true,
                    wxCode:'000000'
                },
            ]
        }
    },
    methods:{
        orderDetail (val) {
            console.log(val)
            this.$router.push({
                name:'orderDetail'
            })
        }
    },
    watch:{
        selected (val){
            console.log(val)
        }
    }
}

</script>
<style>
    .mint-searchbar{background-color: #26a2ff!important;}
    .mint-search{height: auto;}
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
