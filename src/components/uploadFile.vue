<template>
   <div>
          <input ref="file"
           type="file"
           class="file-input"
           accept="image/*"
           :multiple="multiple"
           @change="change"/>

   </div>
</template>
 <script>
    import { Indicator, MessageBox } from "mint-ui";
    import axios from 'axios'
    //  M设定可以上传图片的大小
        const M = 7;
        const UNIT = 1024;
        const MAX_SIZE = M * UNIT * UNIT;
    export default {
        name: "updatefile",
        props: {
            multiple: Boolean,
            max: Number,
            imgArr:Array
        },
        data() {
            return {};
        },
        mounted() {
            this.getDom();
        },
        methods: {
            // 获取dom元素外部点击触发
            getDom() {
                let file = this.$refs.file;
                this.$emit("refDom", file);
            },
            // 图片数量是否超过max张
            isOutNumber(files) {
            const MAX = this.max;
                if (files.length > MAX) {
                    MessageBox({
                        title: "提示",
                        message: `一次最多允许上传${MAX}张！`
                    });
                    return true;
                } else {
                    return false;
                }
            },
            change(e) {
                let files = e.target.files;
                // 如果超过设定的张数张，提示
                var formData = new FormData();
                formData.append('file',files[0],files[0].name)
                this.$emit("fileChange", formData);
            },
        }
    };
</script>