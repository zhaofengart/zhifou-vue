<template>
  <div>
    <el-backtop style="z-index: 10000;" :bottom="100"></el-backtop>
    <IndexHeader></IndexHeader>
    <div class="main">
      <div class="QuestionPage">
        <div class="QuestionHeader">
          <!-- 文章简要信息 -->
          <div class="QuestionHeader-content">
            <div class="QuestionHeader-main">
              <h1 class="QuestionHeader-title">{{question.title}}</h1>
              <div>
                <div class="QuestionHeader-detail">
                  <div class="QuestionRichText QuestionRichText--expandable" :class="{'QuestionRichText--collapsed': questionRichTextCollapsed}">
                    <div>
                      <span class="RichText ztext" v-html="question.content"></span>
                      <!-- <button
                        v-if="questionRichTextCollapsed" type="button"
                        class="Button QuestionRichText-more Button--plain"
                        @click="questionRichTextCollapsed = !questionRichTextCollapsed">显示全部 
                        <span style="display: inline-flex; align-items: center;">
                          ​<svg class="Zi Zi--ArrowDown" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                            <path d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z" fill-rule="evenodd"></path>
                          </svg>
                        </span>
                      </button> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 右边的信息 -->
            <div class="QuestionHeader-side">
              <div class="NumberBoard QuestionFollowStatus-counts NumberBoard--divider">
                <div class="NumberBoard-item">
                  <div class="NumberBoard-itemInner">
                    <el-avatar shape="circle" size="large" :src="question.author.avatar"></el-avatar>
                    <div class="NumberBoard-itemName">{{question.author.name}}</div>
                  </div>
                </div>
                <div class="NumberBoard-item">
                  <div class="NumberBoard-itemInner">
                    <strong class="NumberBoard-itemValue" :title="question.viewedNum" style="margin-top: 7px;">{{question.answeredNum}}</strong>
                    <div class="NumberBoard-itemName" style="margin-top: 11px;">被回答</div>
                  </div>
                </div>
                <div class="NumberBoard-item">
                  <div class="NumberBoard-itemInner">
                    <strong class="NumberBoard-itemValue" :title="question.viewedNum" style="margin-top: 7px;">{{question.viewedNum}}</strong>
                    <div class="NumberBoard-itemName" style="margin-top: 11px;">浏览量</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 操作 -->
          <div class="QuestionHeader-footer">
            <div class="QuestionHeader-footer-inner">
              <div class="QuestionHeader-main QuestionHeader-footer-main">
                <div class="QuestionButtonGroup">
                  <el-button class="Button Button--blue Button--primary FollowButton">关注问题</el-button>
                  <el-button plain class="Button Button--blue" icon="el-icon-edit" @click="answerAdd = true">写回答</el-button>
                </div>
                <div class="QuestionHeaderActions">
                  <el-button class="Button Button--grey">
                    <svg-icon icon-class="invite" style="margin-right: 5px;"></svg-icon>邀请回答
                  </el-button>
                </div>
                <div class="QuestionHeader-actions">
                  <button type="button" class="Button Button-plain" @click="questionRichTextCollapsed = !questionRichTextCollapsed">
                    {{questionRichTextCollapsed? '显示全部': '收起'}}
                    <span style="display: inline-flex; align-items: center;">​
                      <svg-icon icon-class="arrow-up"></svg-icon>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 回答列表 -->
        <div class="Question-main">
          <div class="Question-mainColumn">
            <div>
              <!-- 为写回答保留位置 -->
              <div class="QuestionAnswers-statusWrapper">
                <div v-if="answerAdd">
                  <el-card class="QuestionAnswers-answerAdd">
                    <div class="AnswerAdd">
                      <!-- 写回答头部 -->
                      <div class="AnswerAdd-header">
                        <div class="AuthorInfo AnswerItem-authorInfo AnswerItem-authorInfo--related">
                          <el-avatar shape="circle" size="large" src="https://pic4.zhimg.com/da8e974dc_is.jpg"></el-avatar>
                          <div class="AuthorInfo-content">
                            <div class="AuthorInfo-head">
                              <span class="AuthorInfo-name">小小猪排酱中游</span>
                            </div>
                            <div class="AuthorInfo-job">
                              <span>Java开发</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- 回答表单 -->
                      <div class="AnswerForm">
                        <!-- <Editor placeholder="写回答..." class="editor"></Editor> -->
                        <MarkdownEditor v-model="answerForm.content" v-bind:content.sync="answerForm.content" v-bind:isFull.sync="isFullScreen"></MarkdownEditor>
                        <div class="AnswerForm-footer" :class="{ 'is-write-answer-footer-fixed': isFullScreen}">
                          <div class="AnswerForm-footerContent">
                            <el-button class="Button AnswerForm-submit Button--blue" plain>保存为草稿</el-button>
                            <button type="button" class="Button AnswerForm-submit Button--primary Button--blue" @click="handleSubmitAnswer">提交回答</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </el-card>
                </div>
              </div>
              <!-- 所有的回答 -->
              <div class="QuestionAnswers-answers">
                <el-card>
                  <!-- 回答头部 -->
                  <div slot="header" class="List-header">
                    <el-radio-group v-model="queryParam.sort" @change="getAnswersByParam">
                      <el-radio :label="1">按热度排序</el-radio>
                      <el-radio :label="2">按时间排序</el-radio>
                    </el-radio-group>
                  </div>

                  <!-- 回答内容列表 -->
                  <div ref="answerItem" class="List-item" v-for="(item, index) in answerList" :key="item.id" >
                    <div class="ContentItem AnswerItem">
                      <!-- 回答者信息及回答时间 -->
                      <div class="ContentItem-meta">
                        <div class="AuthorInfo AnswerItem-authorInfo AnswerItem-authorInfo--related">
                          <el-avatar shape="circle" size="large" :src="item.author.avatar"></el-avatar>
                          <div class="AuthorInfo-content">
                            <div class="AuthorInfo-head">
                              <span class="AuthorInfo-name">{{item.author.name}}</span>
                            </div>
                            <div class="AuthorInfo-job">
                              <span>{{item.author.job}}</span>
                            </div>
                          </div>
                          <div class="publishTime">
                            <span>{{parseTime(item.createTime)}}</span>
                          </div>
                        </div>
                      </div>
                      <div class="RichContent RichContent--unescapable" :class="{ 'is-collapsed': currentIndex !== index}">
                        <!-- 回答内容 -->
                        <div class="RichContent-inner">
                          <span class="RichText ztext CopyrightRichText-richText" itemprop="text" v-html="item.content"></span>
                        </div>
                        <!-- 展开阅读全文 -->
                        <button 
                          v-if="currentIndex !== index"
                          type="button"
                          class="Button ContentItem-rightButton ContentItem-expandButton Button--plain"
                          @click="handleExpandContent(index)">
                          展开阅读全文
                          <span style="display: inline-flex; align-items: center;">​
                            <svg-icon icon-class="arrow-down"></svg-icon>
                          </span>
                        </button>
                        <!-- 其他操作 -->
                        <div
                          class="ContentItem-actions"
                          :class="{ 'Sticky': currentIndex === index, 'RichContent-actions': currentIndex === index, 'is-fixed': currentIndex === index && isContentActionsFixed , 'is-bottom': currentIndex === index, 'specialContentItem-actions': currentIndex === index}"
                          style="height: 54px;">
                          <button type="button" class="Button ContentItem-action Button--plain Button--withIcon Button--withLabel">
                            <span style="display: inline-flex; align-items: center;">​
                              <svg-icon icon-class="comment"></svg-icon>
                            </span>
                            评论
                          </button>
                          <button type="button" class="Button ContentItem-action Button--plain Button--withIcon Button--withLabel">
                            <span style="display: inline-flex; align-items: center;">
                              ​<svg-icon icon-class="collect"></svg-icon>
                            </span>
                            收藏
                          </button>
                          <button type="button" class="Button ContentItem-action Button--plain Button--withIcon Button--withLabel">
                            <span style="display: inline-flex; align-items: center;">
                              ​<svg-icon icon-class="like"></svg-icon>
                            </span>
                            喜欢
                          </button>
                          <button 
                            v-if="currentIndex === index"
                            type="button"
                            class="Button ContentItem-action ContentItem-rightButton Button--plain"
                            @click="currentIndex = -1">
                            <span class="RichContent-collapsedText">收起</span>
                            <span style="display: inline-flex; align-items: center;">​
                              <svg-icon icon-class="arrow-down" class="ContentItem-arrowIcon" :class="{'is-active': currentIndex === index}"></svg-icon>
                            </span>
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
    
  </div>
</template>
<script>
import Editor from '@/components/Editor'
import MarkdownEditor from '@/components/MarkdownEditor'
import { getQuestion } from '@/api/question'
import { listAnswer, addAnswer} from '@/api/answer'

export default {
  components: {
    Editor,
    MarkdownEditor
  },
  data () {
    return {
      // 活动的列表项索引
      currentIndex: -1,
      answerAdd: false,
      // 问题内容是否折叠
      questionRichTextCollapsed: false,
      isContentActionsFixed: true,
      // 编辑框是否全屏
      isFullScreen: false,
      answerList: [
        {
          "id": 123,
          "content": "<p>16年去UCB做暑研，面签时候前面一个人被秒拒，拿着I-20瑟瑟发抖。</p><p>然后签证官问我去哪，我说UCB。然后签证官说congratulations。就过了……</p><p class=\"ztext-empty-paragraph\"><br></p><p>18年办研究生签的时候，居然还是同一个签证官，自信心满满的过去，签证官又问我啥学校，我说Tufts。然后又问我啥专业，我说EE。就被check了。。。。</p>",
          "createTime": "2020-01-01 15:30",
          "author": {
              "id": 234,
              "name": "小小猪排酱中游",
              "job":  "Java开发",
              "avatar": "https://pic4.zhimg.com/da8e974dc_is.jpg"
          }
        }    
      ],
      // 问题
      question: {
        "id": 381161861,
        title: '为什么美国疫情这么严重?',
        // content: '<p>最近美国疫情确诊人数为什么直线上升，话说之前特朗普也是最早对中国进行断航的国家，但为什么后期感觉防控不力而且一直在推诿。</p><p>还有个疑问就是有人质疑说中国很多感染者没有计入官方统计的数字中，还有人说美国把无症状的也统计进去了。</p>',
        content: '### 第一点',
        "answeredNum": 123,
        "viewedNum": 1230,
        "author": {
            "id": 1,
            "name": "姓名",
            "avatar": "https://pic4.zhimg.com/da8e974dc_is.jpg"
        }
      },
      // 回答表单
      answerForm: {
        questionId: undefined,
        content: ''
      },
      queryParam: {
        questionId: undefined,
        // 回答列表排序方式
        sort: 1,
        startIndex: 0,
        num: 5
      }
    }
  },
  created () {
    this.getQuestionById()
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    // 获取问题详情
    getQuestionById () {
      getQuestion(this.$route.query.questionId).then(response => {
        // console.log(response.data)
        this.question = response.data
        this.question.content = this.escapeStringHTML(this.question.content)
        this.queryParam.questionId = this.question.id
        this.answerForm.questionId = this.question.id
        // 确保先取到问题再获取对应的回答
        this.getAnswersByParam()
      })
    },
    getAnswersByParam () {
      listAnswer(this.queryParam).then(response => {
        // console.log(response.data)
        this.answerList = response.data
        this.answerList.forEach(item => {
          item.content = this.escapeStringHTML(item.content)
        })
      })
    },
    // 提交回答
    handleSubmitAnswer () {
      console.log(this.answerForm)
      if (this.answerForm.content !== '') {
        // addAnswer(this.answerForm).then(response => {
        //   this.answerAdd = false
        //   this.getQuestionById()
        // })
      }
    },
    // 监听滚动
    handleScroll () {
      // 获取需要判断顶部和底部到浏览器底部距离的元素
      var item = this.$refs.answerItem[this.currentIndex]
      // 元素本身的高度和它到父元素顶部的高度
      var H = item.offsetHeight + item.offsetTop
      // 滚动距离界限1,超过这个距离，所选元素的底部就会位于浏览器底部以上
      var scrollHeightToBottom = H - document.documentElement.clientHeight + 54
      // 滚动距离界限2,小于这个距离，所选元素的顶部就会位于浏览器底部以下
      var scrollHeightToTop = item.offsetTop - document.documentElement.clientHeight + 100
      // 由于滚动而被隐藏的高度
      var hiddenHeight = document.documentElement.scrollTop + document.body.scrollTop

      // 元素的底部或顶部已经到达浏览器底部
      if ((hiddenHeight >= scrollHeightToBottom) || (hiddenHeight < scrollHeightToTop)) {
        this.isContentActionsFixed = false
      } else {
        // 介于两者之间，需要固定操作栏
        this.isContentActionsFixed = true
      }
    },
    handleExpandContent (index) {
      this.currentIndex = index
      // 延迟执行边界判断，防止handleScroll方法读取到渲染之前的元素高度
      setTimeout(this.handleScroll, 100)
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
.main {
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
    margin: 0;
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
  left: 259.6px;
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
</style>