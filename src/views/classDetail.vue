<template>
  <div>
    <IndexHeader></IndexHeader>
    <div class="QuestionDetail-main">
      <div class="QuestionPage">
        <div class="Question-main">
          <div class="Question-mainColumn">
            <div class="QuestionAnswers-answers">
              <el-card>
                <div ref="answerItem" class="List-item">
                  <div class="ContentItem AnswerItem">
                    <h3 class="ContentItem-title">
                      <span v-html="article.title"></span>
                    </h3>
                    <div class="ContentItem-meta">
                      <div class="AuthorInfo AnswerItem-authorInfo AnswerItem-authorInfo--related">
                        <el-avatar shape="circle" size="large" :src="article.author.avatar"></el-avatar>
                        <div class="AuthorInfo-content">
                          <div class="AuthorInfo-head">
                            <span class="AuthorInfo-name">{{article.author.name}}</span>
                          </div>
                          <div class="AuthorInfo-job">
                            <span>{{article.author.job}}</span>
                          </div>
                        </div>
                        <div class="publishTime">
                          <span>{{parseTime(article.createTime)}}</span>
                        </div>
                      </div>
                    </div>
                    <div class="RichContent RichContent--unescapable">
                      <div class="RichContent-inner">
                        <span class="RichText ztext CopyrightRichText-richText" itemprop="text" v-html="article.content"></span>
                      </div>
                      <div
                        v-if="isContentActionsFixed"
                        class="ContentItem-actions"
                        :class="{ 'Sticky': currentIndex === -1, 'RichContent-actions': currentIndex === -1, 'is-fixed': currentIndex === -1 && isContentActionsFixed , 'is-bottom': currentIndex === -1, 'specialContentItem-actions': currentIndex === -1}"
                        style="height: 54px;">
                        <button type="button" class="Button ContentItem-action Button--plain Button--withIcon Button--withLabel">
                          <span style="display: inline-flex; align-items: center;">​
                            <svg-icon icon-class="comment"></svg-icon>
                          </span>
                          评论
                        </button>
                        <button type="button" class="Button ContentItem-action Button--plain Button--withIcon Button--withLabel">
                          <span style="display: inline-flex; align-items: center;">
                              <svg-icon icon-class="collect"></svg-icon>
                          </span>
                          收藏
                        </button>
                        <button type="button" class="Button ContentItem-action Button--plain Button--withIcon Button--withLabel">
                          <span style="display: inline-flex; align-items: center;">
                              <svg-icon icon-class="like"></svg-icon>
                          </span>
                          喜欢
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </el-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import Editor from '@/components/Editor'
  import MarkdownEditor from '@/components/MarkdownEditor'
  import {Message} from 'element-ui'
  import {getClassDetail} from "../api/class";

  export default {
    components: {
      Editor,
      MarkdownEditor
    },
    data () {
      return {
        currentIndex: -1,
        isContentActionsFixed: true,
        article: {
            "title": '智能指针详解',
            "id": 123,
            "content": '智能指针：auto-ptr，shared-ptr，weak-ptr,由于 C++ 语言没有自动内存回收机制，程序员每次 new 出来的内存都要手动 delete。程序员忘记 delete，流程太复杂，最终导致没有 delete，异常导致程序过早退出，没有执行 delete 的情况并不罕见。\n' +
              '\n' +
              '用智能指针便可以有效缓解这类问题，本文主要讲解参见的智能指针的用法。包括：std::auto_ptr、boost::scoped_ptr、boost::shared_ptr、boost::scoped_array、boost::shared_array、boost::weak_ptr、boost::intrusive_ptr。你可能会想，如此多的智能指针就为了解决new、delete匹配问题，真的有必要吗？看完这篇文章后，我想你心里自然会有答案。\n' +
              '\n' +
              '    下面就按照顺序讲解如上 7 种智能指针（smart_ptr）,智能指针：auto-ptr，shared-ptr，weak-ptr,由于 C++ 语言没有自动内存回收机制，程序员每次 new 出来的内存都要手动 delete。程序员忘记 delete，流程太复杂，最终导致没有 delete，异常导致程序过早退出，没有执行 delete 的情况并不罕见。\n' +
              '\n' +
              '用智能指针便可以有效缓解这类问题，本文主要讲解参见的智能指针的用法。包括：std::auto_ptr、boost::scoped_ptr、boost::shared_ptr、boost::scoped_array、boost::shared_array、boost::weak_ptr、boost::intrusive_ptr。你可能会想，如此多的智能指针就为了解决new、delete匹配问题，真的有必要吗？看完这篇文章后，我想你心里自然会有答案。\n' +
              '\n' +
              '    下面就按照顺序讲解如上 7 种智能指针（smart_ptr）,智能指针：auto-ptr，shared-ptr，weak-ptr,由于 C++ 语言没有自动内存回收机制，程序员每次 new 出来的内存都要手动 delete。程序员忘记 delete，流程太复杂，最终导致没有 delete，异常导致程序过早退出，没有执行 delete 的情况并不罕见。\n' +
              '\n' +
              '用智能指针便可以有效缓解这类问题，本文主要讲解参见的智能指针的用法。包括：std::auto_ptr、boost::scoped_ptr、boost::shared_ptr、boost::scoped_array、boost::shared_array、boost::weak_ptr、boost::intrusive_ptr。你可能会想，如此多的智能指针就为了解决new、delete匹配问题，真的有必要吗？看完这篇文章后，我想你心里自然会有答案。\n' +
              '\n' +
              '    下面就按照顺序讲解如上 7 种智能指针（smart_ptr）,智能指针：auto-ptr，shared-ptr，weak-ptr,由于 C++ 语言没有自动内存回收机制，程序员每次 new 出来的内存都要手动 delete。程序员忘记 delete，流程太复杂，最终导致没有 delete，异常导致程序过早退出，没有执行 delete 的情况并不罕见。\n' +
              '\n' +
              '用智能指针便可以有效缓解这类问题，本文主要讲解参见的智能指针的用法。包括：std::auto_ptr、boost::scoped_ptr、boost::shared_ptr、boost::scoped_array、boost::shared_array、boost::weak_ptr、boost::intrusive_ptr。你可能会想，如此多的智能指针就为了解决new、delete匹配问题，真的有必要吗？看完这篇文章后，我想你心里自然会有答案。\n' +
              '\n' +
              '    下面就按照顺序讲解如上 7 种智能指针（smart_ptr）,智能指针：auto-ptr，shared-ptr，weak-ptr,由于 C++ 语言没有自动内存回收机制，程序员每次 new 出来的内存都要手动 delete。程序员忘记 delete，流程太复杂，最终导致没有 delete，异常导致程序过早退出，没有执行 delete 的情况并不罕见。\n' +
              '\n' +
              '用智能指针便可以有效缓解这类问题，本文主要讲解参见的智能指针的用法。包括：std::auto_ptr、boost::scoped_ptr、boost::shared_ptr、boost::scoped_array、boost::shared_array、boost::weak_ptr、boost::intrusive_ptr。你可能会想，如此多的智能指针就为了解决new、delete匹配问题，真的有必要吗？看完这篇文章后，我想你心里自然会有答案。\n' +
              '\n' +
              '    下面就按照顺序讲解如上 7 种智能指针（smart_ptr）',
            "createTime": "2020-01-01 15:30",
            "author": {
              "id": 234,
              "name": "小小猪排酱中游",
              "job":  "Java开发",
              "avatar": "https://pic4.zhimg.com/da8e974dc_is.jpg"
            }
      },
      }
    },
    created () {
      this.getClassDetail()
    },
    mounted () {
      window.addEventListener('scroll',handleScroll)
      window.addEventListener('scroll', function(){
        var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
        var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
        var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;

        if(scrollTop+windowHeight===scrollHeight){
          //写后台加载数据的函数
          Message.success("已经到底部")
          //this.isContentActionsFixed = false
          //Message.success(this.isContentActionsFixed)
          //setTimeout(this.handleScroll, 100)
        }
      })

    },
    methods: {
      handleScroll () {
          var item = this.$refs.answerItem
          if (this.isBottomReachToBottomOfBrowser(item) || this.isTopReachToBottomOfBrowser(item)) {
            this.isContentActionsFixed = false
            //this.currentIndex = 1
            setTimeout(this.handleScroll, 100)
          } else {
            this.isContentActionsFixed = true
          }
      },
      isBottomReachToBottomOfBrowser (item) {
        let H = item.offsetHeight + item.offsetTop
        let scrollHeightToBottom = H - document.documentElement.clientHeight + 54
        let hiddenHeight = document.documentElement.scrollTop + document.body.scrollTop
        if (hiddenHeight >= scrollHeightToBottom) {
          return true
        } else {
          return false
        }
      },
      isTopReachToBottomOfBrowser (item) {
        let H = item.offsetHeight + item.offsetTop
        let scrollHeightToTop = item.offsetTop - document.documentElement.clientHeight + 150
        let hiddenHeight = document.documentElement.scrollTop + document.body.scrollTop
        if (hiddenHeight < scrollHeightToTop) {
          return true
        } else {
          return false
        }
      },
      getClassDetail(){
        getClassDetail(this.$route.query.articleId).then(resp => {
          console.log(resp.data)
          this.article = resp.data
        })
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .QuestionDetail-main {
    display: flex;
    justify-content: center;
    margin-top: 52px;
  }
  .QuestionPage {
    width: 100%;
    position: relative;
  }
  .QuestionHeader {
    width: 100%;
    position: relative;
    min-width: 1032px;
    padding: 16px 0;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
  }
  .QuestionHeader-content {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 1032px;
    height: 100%;
    padding: 0 16px;
    margin: 0 auto;
  }
  .QuestionHeader-main {
    width: 694px;
    padding-left: 20px;
    box-sizing: border-box;
  }
  .QuestionHeader-title {
    margin-top: 12px;
    margin-bottom: 4px;
    font-size: 22px;
    font-weight: 600;
    font-synthesis: style;
    line-height: 32px;
    color: #1a1a1a;
  }
  .QuestionHeader-detail {
    min-height: 10px;
  }
  .QuestionRichText--expandable.QuestionRichText--collapsed {
    max-height: 51px;
    overflow: hidden;
    cursor: pointer;
    -webkit-transition: color .14s ease-out;
    transition: color .14s ease-out;
  }
  .QuestionRichText--expandable.QuestionRichText--collapsed .RichText {
    pointer-events: none;
    -webkit-line-clamp: 2;
    white-space: nowrap;
    // text-overflow: ellipsis;
  }
  .QuestionRichText {
    font-size: 15px;
    line-height: 25px;
  }
  .ztext {
    word-break: break-word;
    line-height: 1.6;
  }
  .QuestionHeader-actions {
    display: flex;
    margin-left: 16px;
  }


  .QuestionHeader-side {
    width: 296px;
    padding-right: 20px;
    text-align: right;
  }


  .QuestionHeader-footer {
    padding-bottom: 12px;
    margin-top: 4px;
    margin-bottom: -12px;
    background: #fff;
  }
  .QuestionHeader-footer-inner, .QuestionHeader-footer-main {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .QuestionHeader-footer-inner {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 1032px;
    height: 100%;
    padding: 0 16px;
    margin: 0 auto;
  }
  .QuestionHeader-footer-main {
    margin-top: 4px;
    min-width: 694px;
    width: auto;
  }
  .QuestionHeader-main {
    width: 694px;
    padding-left: 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .QuestionButtonGroup {
    display: inline-block;
    margin: 0 -8px;
  }
  .FollowButton {
    min-width: 96px;
  }
  .QuestionButtonGroup .Button {
    margin: 0 8px;
  }

  .QuestionButtonGroup+.QuestionHeaderActions {
    margin-left: 16px;
  }
  .QuestionHeaderActions {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .NumberBoard {
    display: flex;
  }
  .QuestionFollowStatus-counts {
    width: 240px;
    margin-left: auto;
  }
  .NumberBoard-item {
    -webkit-box-flex: 1;
    flex: 1 1;
  }
  .NumberBoard--divider .NumberBoard-item+.NumberBoard-item .NumberBoard-itemInner {
    border-left: 1px solid #ebebeb;
  }
  .NumberBoard-itemInner {
    text-align: center;
    line-height: 1.6;
  }
  .QuestionFollowStatus-counts .NumberBoard-itemInner {
    padding: 0 8px;
  }
  .NumberBoard-itemName {
    font-size: 14px;
    color: #8590a6;
  }
  .NumberBoard-itemValue {
    display: inline-block;
    font-size: 18px;
    color: #1a1a1a;
    font-weight: 600;
  }

  // 回答列表
  .Question-main {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: start;
    align-items: flex-start;
    margin: 10px auto;
    padding: 0 16px;
    width: 1032px;
    min-height: 100vh;
  }
  .Question-mainColumn {
    // width: 694px;
    width: 1032px;
    padding-bottom: 20px;
  }
  .QuestionAnswers-answers {
    margin-bottom: 10px;
  }
  .AnswersNavWrapper {
    overflow: visible;
    overflow: initial;
  }
  .el-card:last-child {
    margin-bottom: 0;
  }
  .List-header {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: flex-end;
    -webkit-box-align: center;
    align-items: center;
    height: 50px;
    margin: 0 20px;
    // border-bottom: 1px solid #f6f6f6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .List-item {
    position: relative;
    padding: 16px 20px;
    border-bottom: 1px solid #f0f2f7;
  }

  .RichContent {
    line-height: 1.67;
  }
  .RichContent--unescapable.is-collapsed {
    position: relative;
    overflow: hidden;
  }
  .RichContent-inner {
    height: auto;
    margin-top: 9px;
    margin-bottom: -4px;
    overflow: hidden;
  }
  .RichContent.is-collapsed .RichContent-inner {
    max-height: 200px;
  }
  .ContentItem-rightButton {
    margin-left: auto;
  }
  .RichContent--unescapable.is-collapsed .ContentItem-rightButton {
    // position: absolute;
    z-index: 1;
    // bottom: 30px;
    left: 0;
    width: 100%;
    color: #175199;
    font-size: 15px;
  }
  .ContentItem-meta {
    font-size: 15px;
    color: #646464;
  }
  .AuthorInfo {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .AnswerItem-authorInfo {
    margin-top: 10px;
  }
  .AnswerItem-authorInfo--related {
    margin-top: 0;
  }
  .AuthorInfo-content {
    -webkit-box-flex: 1;
    flex: 1 1;
    margin-left: 14px;
    overflow: hidden;
  }
  .AuthorInfo-name {
    font-weight: 600;
    color: #444;
  }
  .AuthorInfo-job {
    display: flex;
    align-items: center;
    margin-top: 5px;
    font-size: 14px;
  }
  .RichContent-actions.is-fixed {
    -webkit-animation: slideInUp .2s;
    animation: slideInUp .2s;
    animation-duration: 0.2s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
    animation-name: slideInUp;
  }
  @keyframes slideInUp {
    0% {
      transform: translate3d(0,100%,0);
      visibility: visible;
    }
  }

  .ContentItem-actions.is-fixed {
    // margin: 0;
    -webkit-box-shadow: 0 -1px 3px rgba(26,26,26,.1);
    box-shadow: 0 -1px 3px rgba(26,26,26,.1);
  }
  .Sticky.is-absolute, .Sticky.is-fixed {
    box-sizing: border-box;
  }
  .Sticky.is-fixed {
    position: fixed;
    z-index: 2;
    -webkit-font-smoothing: subpixel-antialiased;
  }
  .ContentItem-arrowIcon.is-active {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  .specialContentItem-actions {
    width: 998px;
    bottom: 0px;
    // left: 259.6px;
    margin: 0 -20px;
  }

  // 写回答对话框
  .QuestionAnswers-answerAdd.el-card {
    margin-bottom: 10px;
  }
  .QuestionAnswers-answerAdd {
    min-height: 282px;
  }
  .AnswerAdd-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 16px 20px;
  }
  .AnswerForm {
    position: relative;
  }
  .editor {
    min-height: 100px;
    height: 300px;
  }
  .AnswerForm-footer {
    position: relative;
    background: #fff;
  }
  .AnswerForm-footerContent {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 52px;
    padding: 12px 24px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .Button--primary.Button--blue {
    color: #fff;
    background-color: #0084ff;
  }
  .AnswerForm-submit {
    margin-left: 22px;
  }
  .AnswerForm-footerContent {
    position: relative;
    display: flex;
    justify-content: flex-end;
    -webkit-box-align: center;
    align-items: center;
    height: 52px;
    padding: 12px 24px;
    box-sizing: border-box;
  }

  .is-write-answer-footer-fixed {
    position: fixed;
    z-index: 2000;
    bottom: 0px;
  }
  .ContentItem-title {
    font-size: 25px;
    font-weight: 600;
    font-synthesis: style;
    line-height: 3;
    color: #1a1a1a;
    margin-top: -8px;
    margin-bottom: -4px;
  }
</style>
