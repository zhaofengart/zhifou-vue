<template>
  <div>
    <mavon-editor v-model="content" ref="md" @imgAdd="$imgAdd" @change="change" @fullScreen="handleSwitchFullScreen" :placeholder="placeholder" class="mavonEditor"/>
  </div>
</template>
<script>
// 导入组件 及 组件样式
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { upload } from '@/api/common'

export default {
  name: "",
  props: {
    /* 编辑器的内容 */
    value: {
      type: String
    },
    /* 图片大小 */
    maxSize: {
      type: Number,
      default: 4000 //kb
    },
    placeholder: {
      type: String
    }
  },
  components: {
    mavonEditor,
  },
  data() {
    return {
      content: this.value,
      html:'',
      configs: {}
    }
  },
  watch: {
    value: function() {
      this.content = this.value;
    }
  },
  methods: {
    // 将图片上传到服务器，返回地址替换到md中
    $imgAdd(pos, $file){
        let formdata = new FormData();
        formdata.append('image', $file)

        upload(formdata).then(res => {
            console.log(res.data);
            this.$refs.md.$img2Url(pos, res.data);
        }).catch(err => {
            console.log(err)
        })
    },
    // 所有操作都会被解析重新渲染
    change(value, render){
        // render 为 markdown 解析后的结果[html]
        this.html = render;
        this.$emit("contentChange", this.content);
    },
    // 处理切换全屏后的方法
    handleSwitchFullScreen (isFull) {
      this.$emit('fullScreenChange', isFull)
    }
  },
  mounted() {

  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
.mavonEditor {
  height: 100%;
  width: 100%;
}
</style>

