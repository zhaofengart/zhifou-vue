<template>
  <div>
    <IndexHeader></IndexHeader>
    <div class="main">
      <el-card class="QuestionPublishCard">
        <el-form ref="form" :model="form" :rules="rules">
          <el-form-item prop="title">
            <el-input v-model="form.title" :placeholder="titlePlaceholder" @input="handleRecommendQuestion"></el-input>
            <el-table
              v-if="showRecommendQuestion"
              :data="recommendQuestionList"
              stripe
              height="300"
              class="RecommendQuestionList">
              <el-table-column>
                <template slot="header">
                  <div class="RecommendQuestion-header">
                    <span>你的问题可能已有答案</span>
                    <el-button type="text" @click="showRecommendQuestion = false">关闭</el-button>
                  </div>
                </template>
                <template slot-scope="scope">
                  <router-link :to="{path: '/question', query: {questionId: scope.row.id}}">{{scope.row.title}}</router-link>
                </template>
              </el-table-column>
            </el-table>
          </el-form-item>
          <el-form-item>
            <div class="contentEditor">
              <!-- <Editor v-model="form.content" :placeholder="contentPlaceholder"></Editor> -->
              <MarkdownEditor v-model="form.content" :placeholder="contentPlaceholder" v-bind:content.sync="form.content" v-bind:isFull.sync="isFullScreen" :class="{'notFull': !isFullScreen}"></MarkdownEditor>
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
import { Notification, MessageBox, Message } from 'element-ui'
import { addQuestion, recommendQuestion } from '@/api/question'

import IndexHeader from '@/components/IndexHeader'
import Editor from '@/components/Editor'
import MarkdownEditor from '@/components/MarkdownEditor'

export default {
  components: {
    IndexHeader,
    Editor,
    MarkdownEditor
  },
  data () {
    return {
      // 是否全屏，如果是，则编辑框不需要设置高度，如果不是，则需要设置高度
      isFullScreen: false,
      showRecommendQuestion: false,
      recommendQuestionList: [],
      titlePlaceholder: '写下你的问题，请以“？”结尾',
      contentPlaceholder: '输入问题背景、条件等详细信息（选填）',
      // 表单参数
      form: {
        content: ''
      },
      // 表单校验
      rules: {
        title: [
          { min: 4, message: '至少输入4个字', trigger: 'blur'},
          { max: 49, message: '已超过49个字', trigger: 'blur'},
          {
            pattern: /[\?|？]$/,
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
        content: ''
      };
      this.resetForm("form");
    },
    handlePublishQuestion () {
      console.log(this.form)
      this.$refs.form.validate(valid => {
        if (valid) {
          console.log('校验成功')
          console.log(this.form)
          addQuestion(this.form).then(response => {
            Message.success("发布成功")
            this.$router.push({path: '/'})
          })
        }
      })
    },
    handleRecommendQuestion () {
      if (this.form.title.trim().length === 0) {
        this.showRecommendQuestion = false
        return
      }
      recommendQuestion(this.form.title).then(resp => {
        console.log(resp)
        if (resp.data.length !== 0) {
          this.recommendQuestionList = resp.data
          this.showRecommendQuestion = true
        }
      })
    },
    handleFullScreenChange (isFull) {
      this.isFullScreen = isFull
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
  width: 1000px;
  padding: 20px 25px 0 25px;
  margin: 10px auto;
}
.notFull {
  height: 500px;
}
.QuestionPublish-footer {
  height: 35px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  // margin-top: 80px;
  margin-bottom: 0;
}
.RecommendQuestion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.RecommendQuestionList {
  width: 475px;
  position: fixed;
  z-index: 2000;
}
</style>