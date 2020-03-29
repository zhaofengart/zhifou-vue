<template>
  <div class="container" style="height: 500px; border: 1px solid #eee">
    <header class="AppHeader">
      <div class="AppHeader-inner">
        <ul class="AppHeader-Tabs">
          <li class="Tabs-item AppHeader-Tab" style="margin-left: -80px">
            <a  style="color: blue; font-weight:bold" class="Tabs-link AppHeader-TabsLink">知 否</a>
          </li>
          <li class="Tabs-item AppHeader-Tab">
            <a style="font-weight:bold" class="Tabs-link AppHeader-TabsLink">写文章</a>
          </li>
          <li class="Tabs-item AppHeader-Tab">
            <a style="font-weight:bold" class="Tabs-link AppHeader-TabsLink" @click="handlesave">保存草稿</a>
          </li>
          <li class="Tabs-item AppHeader-Tab">
            <el-button :loading="loading" style="margin-left: 500px;margin-top: 5px" type="primary" @click.native.prevent="handleClass">发布</el-button>
          </li>

          <!-- 草稿箱 -->
          <div class="AppHeader-userInfo" style="margin-left: -100px">
            <div class="AppHeader-profile">
              <el-dropdown trigger="click">
                <span>
                  <img class="Avatar AppHeader-profileAvatar" width="30" height="30" src="https://pic4.zhimg.com/da8e974dc_is.jpg" alt="">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item><el-link target="_blank" href="/index2">草稿</el-link></el-dropdown-item>
                  <el-dropdown-item><el-link target="_blank" href="/index2">我的文章</el-link></el-dropdown-item>
                  <el-dropdown-item><el-link target="_blank" href="/index2">退出</el-link></el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </ul>
      </div>
    </header>
    <div class="main">
    <el-card style="height: 610px;width: 50%;margin-left: 350px;margin-top: 30px">
    <el-form ref="publishForm" :model="publishForm" :rules="publishRules">
      <el-form-item prop="sort">
        <el-input
          style="margin-top: 10px;width: 100%;padding: 10px"
          v-model="publishForm.sort"
          placeholder="请输入文章分类（最多五十个字）"
          type="text"
          auto-complete="off"
          show-word-limit clearable
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="title">
        <el-input
          style="margin-top: -20px;width: 100%;padding: 10px"
          v-model="publishForm.title"
          placeholder="请输入文章标题（最多五十个字）"
          type="text"
          auto-complete="off"
          show-word-limit clearable
        >
        </el-input>
      </el-form-item>

      <quill-editor v-model="content" ref="myQuillEditor" style="height: 380px;padding: 10px;margin-top: -10px" :options="editorOption">
      </quill-editor>

    </el-form>
    </el-card>
  </div>
  </div>
</template>

<script>
  import { Message } from 'element-ui'
  import {
    quillEditor,
  } from 'vue-quill-editor'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'


  export default {
    name: 'FuncFormsEdit',
    components: {
      quillEditor
    },
    data() {
      return {
        publishForm: {
          sort: '',
          title: ''
        },
        publishRules: {
          sort: [
            { required: true, trigger: 'blur', message: '分类不能为空' }
          ],
          title: [
            { required: true, trigger: 'blur', message: '标题不能为空' }
          ]
        },
        loading: false,
        content: null,
        editorOption: {
          placeholder: "请输入正文",
          }
      };
    },
    methods:{
      handleClass (){
        this.$refs.publishForm.validate(valid => {
          if (valid) {
            Message.success({message: '你点击了发布按钮'})
          }
        })
      },
      handlesave (){
        Message.success({message: '保存成功！'})
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .container {
    font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
    font-size: 15px;
    color: #1a1a1a;
    background: #f6f6f6;
    -webkit-tap-highlight-color: rgba(26,26,26,0);
  }

  .AppHeader {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    min-width: 1032px;
    overflow: hidden;
    background-color: #ffffff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    background-clip: content-box;
  }
  .AppHeader-inner {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 1000px;
    height: 52px;
    padding: 0 16px;
    margin: 0 auto;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s,-webkit-transform .3s;
  }
  .AppHeader-Tabs {
    border-bottom: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 0 23px;
  }
  .Tabs-item {
    display: inline-block;
    padding: 0 20px;
  }
  li {
    list-style-type: none;
    text-align: -webkit-match-parent;
  }
  .AppHeader-TabsLink.is-active {
    color: #444;
  }
  .Tabs-link.is-active {
    font-weight: 600;
    font-synthesis: style;
  }
  .AppHeader-TabsLink {
    color: #8590a6;
    font-size: 15px;
  }
  .Tabs-link {
    position: relative;
    display: inline-block;
    padding: 14px 0;
    font-size: 16px;
    line-height: 22px;
    color: #1a1a1a;
    text-align: center;
  }
  a, a em {
    text-decoration: none;
  }
  .SearchBar {
    display: flex;
    align-items: center;
  }
  .SearchBar-input {
    width: 326px;
    height: 34px;
    padding-left: 12px;
    padding-right: 0;
    // -webkit-transition: width .2s ease,background .3s ease;
    // transition: width .2s ease,background .3s ease;
  }
  .SearchBar-searchButton {
    margin-left: 12px;
    padding: 0 12px;
    background: transparent;
    border-color: transparent;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
  .SearchBar-askButton {
    width: 60px;
    height: 34px;
    padding: 0 14px;
    margin-left: 16px;
    text-align: center;
  }

  // 用户信息
  .AppHeader-userInfo {
    width: 200px;
    height: 34px;
    -webkit-box-flex: 1;
    flex: 1 1;
    -webkit-box-pack: end;
    justify-content: flex-end;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    align-self: center;
  }
  .Popover {
    position: relative;
    display: inline-block;
  }
  .AppHeader-messages, .AppHeader-notifications {
    margin-right: 40px;
  }
  .AppHeader-profile {
    position: relative;
  }
  .Button {
    display: inline-block;
    padding: 0 16px;
    font-size: 22px;
    line-height: 32px;
    color: #8590a6;
    text-align: center;
    cursor: pointer;
    background: none;
    border: 1px solid;
    border-radius: 3px;
  }
  .Button--link, .Button--plain {
    height: auto;
    padding: 0;
    line-height: inherit;
    background-color: transparent;
    border: none;
    border-radius: 0;
  }
  .Button--blue {
    color: #0084ff;
    border-color: #0084ff;
  }

  .AppHeader-profile {
    position: relative;
  }

  .AppHeader-profileAvatar {
    vertical-align: top;
  }
  .Avatar {
    background: #fff;
    border-radius: 2px;
  }

  // 第一部分
  .main {
    display: block;
    margin-top: 62px;
  }
  .TopStory-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    width: 1032px;
    padding: 0 16px;
    margin: 10px auto;
  }
  .Topstory-mainColumn {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin-right: 10px;
    margin-bottom: 0;
    width: 694px;
  }

  .css-w3ttmg {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    color: #175199;
    display: block;
    cursor: pointer;
    font-size: 0;
  }
  .css-vnkjjr {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    max-width: 100%;
    height: auto;
    width: 100%;
    border-radius: 2px;
    margin-bottom: 10px;
    object-fit: cover;
  }
  .Topstory-mainColumnCard {
    -webkit-box-shadow: 0 1px 3px rgba(26,26,26,.1);
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
  }
  .box-card {
    width: 400px;
  }
  .TopstoryTabsHeader {
    // margin: -18px -20px;
  }
  .TopstoryTabs {
    display: flex;
    height: 58px;
  }
  .TopstoryTabs-link {
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    font-size: 16px;
    margin: 0 22px;
  }
  .TopstoryTabs-link.is-active {
    color: #0084ff;
    font-weight: 500;
  }

  // 列表
  .TopstoryItem {
    border-bottom: 1px solid #e6ebf5;
    border-radius: 0;
    overflow: visible;
    overflow: initial;
    position: relative;
    padding: 16px 20px;
  }
  .TopstoryItem-isRecommend {
    padding: 20px;
  }

  .ContentItem-title {
    font-size: 18px;
    font-weight: 600;
    font-synthesis: style;
    line-height: 1.6;
    color: #1a1a1a;
    margin-top: -4px;
    margin-bottom: -4px;
  }

  .RichContent {
    line-height: 1.67;
  }

  .RichContent-cover {
    position: relative;
    width: 190px;
    height: 105px;
    margin-top: -2px;
    margin-right: 18px;
    margin-bottom: 4px;
    float: left;
    overflow: hidden;
    background-position: 50%;
    background-size: cover;
    border-radius: 4px;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  .RichContent-cover-inner {
    position: absolute;
    top: 50%;
    left: 0;
    height: 100%;
    width: 100%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    overflow: hidden;
  }

  .RichContent-inner {
    margin-top: 9px;
    margin-bottom: -4px;
    overflow: hidden;
  }
  .ContentItem-actions {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 10px 20px;
    margin: 0 -20px -10px;
    color: #646464;
    background: #fff;
    clear: both;
  }

  .ContentItem-more {
    padding: 0;
    margin-left: 4px;
    color: #175199;
  }

  .RichContent.is-collapsed .CopyrightRichText-richText {
    pointer-events: none;
  }
  .ztext {
    word-break: break-word;
    line-height: 1.6;
  }

  .ContentItem-action {
    margin-left: 24px;
    font-size: 14px;
  }

  // 第二部分
  .GlobalSideBar {
    -webkit-box-flex: 1;
    -ms-flex: 1 1;
    flex: 1 1;
    font-size: 14px;
  }
  .card {
    // margin: -20px;
    width: 294px;
  }
  .GlobalWrite {
    display: flex;
    flex-wrap: wrap;
    overflow: visible;
  }
  .GlobalWrite-navItem {
    flex: 0 0 98px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 98px;
    height: 94px;
  }
  .GlobalWrite-navIcon {
    font-size: 20px;
    color: #8590a6;
    margin-bottom: 6px;
  }
  .GlobalWrite-navTitle {
    color: #444;
    font-size: 16px;
  }

  .Leaderboard-header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
</style>
