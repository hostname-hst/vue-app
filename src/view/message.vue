<template>
    <div>
        <mt-navbar class="page-part" v-model="select" >
            <mt-tab-item id="-1">通知</mt-tab-item>
            <mt-tab-item id="21">系统消息</mt-tab-item>
        </mt-navbar>
        <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
            <div class='message' v-for="item in dataList" :key="item.index">
                <div>
                    <span class='resullt'>{{item.title}}</span>
                    <div><time style="color:#999;">{{item.createTime}}</time></div>    
                </div>
                
                <div class='reason'>
                    <span>{{item.content}}</span>
                </div>
                <div style="color:#999;padding:5px 0 10px;">
                    <span>{{item.orderIdShow}}</span>
                    <span>借款人：{{item.signature}}</span>
                </div>
            </div> 
         </mt-loadmore>
    </div>
</template>
<script>
export default {
    name:'message',
    data () {
        return {
            select:'-1',
            allLoaded:false,
            dataList:[
                // {
                //     title:'初审失败',
                //     createTime:'2019-06-06',
                //     content:'就看到卡斯你的卡上你的卡上今年打卡时间'
                // },
                // {
                //     title:'初审失败',
                //     createTime:'2019-06-06',
                //     content:'就看到卡斯你的卡上你的卡上今年打卡时间'
                // },
            ],
            formData:{
                limit:5,
                offset:0
            }
        }
    },
    methods:{
        getList () {
            this.$http.get(`/wx/message/notification`)
            .then(res=>{
                this.dataList = res.data.list;
                if(res.data.list == ''){
                    this.$toast('暂无更多数据')
                }
            })
            .catch(err=>{
                this.$toast(err.errMsg)
            })
        },
        loadBottom () {
            this.$refs.loadmore.onBottomLoaded();
            this.formData.offset = (this.formData.offset+1)*this.formData.limit
            this.getList();
        }
    },
    watch:{
        select (val) {
            console.log(val)
            this.formData.offset = 0;
            this.dataList = [];
            this.getList();
        }
    }
}
</script>
<style scoped>
    .mint-navbar.is-fixed{top:0px;}
    .message{
        margin: 15px;
        padding: 0 10px;
        background-color: #fff;
        border-radius: 5px;
    }
    .message .reason{
        min-height: 40px;
        color: #333;
    }
    .message>div{
        padding: 10px 10px 0;
        display: flex;
        justify-content: space-between;
        height: 20px;
        line-height: 20px;
        border-bottom: 1rpx solid #efefef;
    }
    .message>div:nth-last-child(1){
        border: none;
    }
    .resullt{
        color: #125FDB;
    }
</style>
