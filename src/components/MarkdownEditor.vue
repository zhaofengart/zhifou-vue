<template>
  <div>
    <mavon-editor v-model="content" ref="md" codeStyle="atom-one-light" @imgAdd="$imgAdd" @imgDel="$imgDel" @change="change" @fullScreen="handleSwitchFullScreen" :placeholder="placeholder" class="mavonEditor"/>
  </div>
</template>
<script>
// 导入组件 及 组件样式
import { mavonEditor } from 'mavon-editor'
mavonEditor.getMarkdownIt().set({breaks: false})
import 'mavon-editor/dist/css/index.css'
import 'highlight.js/styles/atom-one-dark.css'
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
    },
    maxNum: {
      type: Number,
      default: 20
    }
  },
  components: {
    mavonEditor,
  },
  data() {
    return {
      pictureNum: 0,
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
        if (this.pictureNum >= this.maxNum) {
            this.$message({
              showClose: true,
              message: '上传图片数量已达上限',
              type: 'warning'
            });
            this.$refs.md.$refs.toolbar_left.$imgDelByFilename($file)
            this.pictureNum++
            return
        }

        let formdata = new FormData();
        formdata.append('file', $file)

        upload(formdata).then(res => {
            console.log(res.data);
            this.$refs.md.$img2Url(pos, res.data);
            this.pictureNum++
        }).catch(err => {
            console.log(err)
        })
    },
    $imgDel () {
      this.pictureNum--
    },
    // 所有操作都会被解析重新渲染
    change(value, render){
        // render 为 markdown 解析后的结果[html]
        this.html = render;
        this.content = value
        this.$emit('update:content', this.content)
    },
    // 处理切换全屏后的方法
    handleSwitchFullScreen (isFull) {
      this.$emit('update:isFull', isFull)
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

