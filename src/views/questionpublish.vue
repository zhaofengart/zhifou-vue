<template>
  <div>
    <IndexHeader></IndexHeader>
    <div class="main">
      <el-card class="QuestionPublishCard">
        <el-form class="">
          <el-form-item>
            <el-input :placeholder="titlePlaceholder"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="editor">
              <Editor :value="contentPlaceholder"></Editor>
            </div>
          </el-form-item>
          <el-form-item>
            <div class="footer">
              <el-checkbox v-model="isAnonymous">匿名提问</el-checkbox>
              <el-button type="primary" size="medium">发布问题</el-button>
            </div>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>
<script>
import IndexHeader from '@/components/IndexHeader'
import Editor from '@/components/Editor'

export default {
  components: {
    IndexHeader,
    Editor
  },
  data () {
    return {
      titlePlaceholder: '写下你的问题，请以“？”结尾',
      contentPlaceholder: '输入问题背景、条件等详细信息（选填）',
      isAnonymous: false
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
.main {
  display: flex;
  justify-content: center;
  margin-top: 62px;
}
.QuestionPublishCard {
  width: 800px;
  padding: 20px 25px 0 25px;
  margin: 10px auto;
}
.editor {
  height: 400px;
}
.footer {
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 0;
}

</style>