<template>
  <div>
    <IndexHeader></IndexHeader>
    <div class="main">
      <el-card class="QuestionPublishCard">
        <el-form ref="form" :model="form" :rules="rules">
          <el-form-item prop="title">
            <el-input v-model="form.title" :placeholder="titlePlaceholder"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="editor">
              <Editor v-model="form.content" :placeholder="contentPlaceholder"></Editor>
            </div>
          </el-form-item>
          <el-form-item>
            <div class="QuestionPublish-footer">
              <el-button type="primary" size="medium" @click="handlePublishQuestion" :disabled="btnDisabled">发布问题</el-button>
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
      // 表单参数
      form: {},
      // 表单校验
      rules: {
        title: [
          { min: 4, message: '至少输入4个字', trigger: 'blur'},
          { max: 49, message: '已超过49个字', trigger: 'blur'},
          {
            pattern: /\?$/,
            message: "你还没有给问题添加问号",
            trigger: ['blur']
          }
        ]
      }
    }
  },
  computed : {
    btnDisabled () {
      if (this.form.title === undefined || this.form.title.length === 0) {
        return true
      }
      return false
    }
  },
  methods: {
    // 表单重置
    reset() {
      this.form = {
        title: '',
        content: undefined
      };
      this.resetForm("form");
    },
    handlePublishQuestion () {
      console.log(this.form)
      this.$refs.form.validate(valid => {
        if (valid) {
          console.log('校验成功')
        }
      })
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
.QuestionPublish-footer {
  height: 35px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 0;
}

</style>