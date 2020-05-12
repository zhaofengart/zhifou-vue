<template>
  <div>
    <IndexHeader></IndexHeader>
    <div class="ClassPublish-main">
      <el-card class="ClassPublishCard">
        <el-form ref="form" :model="form" :rules="rules">
          <el-form-item prop="title">
            <el-input v-model="form.title" :placeholder="titlePlaceholder"></el-input>
          </el-form-item>
          <el-form-item>
            <MarkdownEditor v-model="form.content" :placeholder="contentPlaceholder" v-bind:content.sync="form.content" v-bind:isFull.sync="isFullScreen" :class="{'notFull': !isFullScreen}"></MarkdownEditor>
          </el-form-item>
          <el-form-item>
            <div class="ClassPublish-footer">
              <el-button class="Saveclass" plain @click="handleSaveClass" :disabled="btnDisabled">保存为草稿</el-button>
              <el-button type="primary" size="medium" @click="handlePublishClass" :disabled="btnDisabled">发布问题</el-button>
            </div>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>
<script>
  import { Notification, MessageBox, Message } from 'element-ui'
  import { addClass } from '@/api/class'

  import IndexHeader from '@/components/IndexHeader'
  import Editor from '@/components/Editor'
  import MarkdownEditor from '@/components/MarkdownEditor'
  import { savearticle } from "../api/class";

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
        titlePlaceholder: '请输入文章标题',
        contentPlaceholder: '请输入文章内容',
        // 表单参数
        form: {
          title: '',
          content: ''
        },
        // 表单校验
        rules: {
          title: [
            { min: 4, message: '至少输入4个字', trigger: 'blur'},
            { max: 49, message: '已超过49个字', trigger: 'blur'},
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
      handlePublishClass () {
        console.log(this.form)
        this.$refs.form.validate(valid => {
          if (valid) {
            console.log('校验成功')
            console.log(this.form)
            addClass(this.form).then(response => {
              Message.success("发布成功")
              this.$router.push({path: '/'})
            })
          }
        })
      },
      handleFullScreenChange (isFull) {
        this.isFullScreen = isFull
      },
      handleSaveClass () {
        console.log(this.form)
        this.$refs.form.validate(valid => {
          if (valid) {
            console.log('校验成功')
            console.log(this.form)
            savearticle(this.form).then(response => {
              Message.success("保存成功")
              this.$router.push({path: '/'})
            })
          }
        })
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  .ClassPublish-main {
    display: flex;
    justify-content: center;
    margin-top: 62px;
  }
  .ClassPublishCard {
    width: 1000px;
    padding: 20px 25px 0 25px;
    margin: 10px auto;
  }
  .notFull {
    height: 500px;
  }
  .ClassPublish-footer {
    height: 35px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    // margin-top: 80px;
    margin-bottom: 0;
  }
  .Saveclass {
    display: inline-block;
    padding: 0 16px;
    font-size: 14px;
    line-height: 32px;
    text-align: center;
    cursor: pointer;
    background: none;
    border: 1px solid;
    border-radius: 3px;
    color: #0084ff;
    border-color: #0084ff;
    margin-right: 735px;
  }
</style>
