<template>
  <div>
    <IndexHeader></IndexHeader>
    <!-- 个人资料 -->
    <div class="ProfileHeader">
      <el-card class="Profile-card">
        <div class="\">
          <div class="UserCoverEditor">
            <img style="width: 100%; height: 120px;" src="https://static.zhihu.com/heifetz/assets/guide-cover-1.4423ce0f.jpg">
          </div>
        </div>

        <!-- 个人资料 -->
        <div class="ProfileHeader-wrapper">
          <div class="ProfileHeader-main">
            <div class="ProfileHeader-content">
              <h2 class="ProfileHeader-contentItem">赵峰</h2>
              <div class="ProfileHeader-contentItem">
                <i class="el-icon-s-management job"></i>
                <label for="">Java开发</label>
              </div>
              <div class="ProfileHeader-contentItem">
                <i class="el-icon-s-management  department" ></i>
                <label for="">ATP</label>
              </div>
            </div>
          </div>
        </div>
      </el-card>
    </div>

    <div class="Profile-main">
      <el-card class="ProfileMain">
        <div class="ProfileMain-header">
          <el-tabs v-model="activeTab" @tab-click="handleClickTab">
            <el-tab-pane label="我的提问" name="question" class="tab-pane">
              <div class="List-item" v-for="item in pageInfo.list" :key="item.id">
                <h2 class="ContentItem-title">
                  <div class="QuestionItem-title">
                    <a href="">{{item.title}}</a>
                  </div>
                </h2>
                <div class="ContentItem-status">
                  <span class="ContentItem-statusItem">2020-03-31</span>
                  <span class="ContentItem-statusItem">{{item.answeredNum}} 个回答</span>
                  <span class="ContentItem-statusItem">{{item.followNum}} 个关注</span>
                </div>
              </div>
              <!-- 问题分页 -->
                <div class="Pagination">
                  <el-pagination
                    background
                    layout="prev, pager, next"
                    :current-page.sync="queryParam.pageNum"
                    :page-size.sync="queryParam.pageSize"
                    :total="pageInfo.total"
                    @current-change="getQuestionList">
                  </el-pagination>
                </div>
            </el-tab-pane>

            <el-tab-pane label="我的回答" name="answer" @click="handleListAnswer">
              <div class="List-item" v-for="item in answerList" :key="item.question.id">
                <h2 class="ContentItem-title">
                  <div class="QuestionItem-title">
                    <a href="">{{item.question.title}}</a>
                  </div>
                </h2>
                <div class="ContentItem-meta">
                  <div class="AuthorInfo AnswerItem-authorInfo">
                    <span class="UserLink AuthorInfo-avatarWrapper"><div class="Popover"><div id="Popover80-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover80-content"><a class="UserLink-link" data-za-detail-view-element_name="User" target="_blank" href="//www.zhihu.com/people/zhao-feng-85-9"><img class="Avatar AuthorInfo-avatar" width="38" height="38" src="https://pic4.zhimg.com/da8e974dc_xs.jpg" srcset="https://pic4.zhimg.com/da8e974dc_l.jpg 2x" alt="赵峰"></a></div></div></span>
                    <div class="AuthorInfo-content">
                      <!-- 用户信息头 -->
                      <div class="AuthorInfo-head">
                        <span class="UserLink AuthorInfo-name">
                          <div class="Popover">
                            <div id="Popover81-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover81-content">
                              <a class="UserLink-link" data-za-detail-view-element_name="User" target="_blank" href="//www.zhihu.com/people/zhao-feng-85-9">{{item.author.name}}</a>
                            </div>
                          </div>
                        </span>
                      </div>
                      <!-- 用户身份 -->
                      <div class="AuthorInfo-detail">
                        <div class="AuthorInfo-badge">
                          <div class="ztext AuthorInfo-badgeText">{{item.author.job}}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="RichContent RichContent--unescapable" :class="{ 'is-collapsed': true}">
                  <div class="RichContent-inner">
                    <span class="RichText ztext CopyrightRichText-richText" style="max-height: 51px;" v-html="item.content"></span>
                  </div>
                  <el-button plain class="Button  ContentItem-rightButton ContentItem-expandButton Button--plain" style="font-size: 14px;">阅读全文
                      <span style="display: inline-flex; align-items: center;">
                        ​<svg-icon icon-class="arrow-down"></svg-icon>
                      </span>
                    </el-button>
                  <div class="ContentItem-actions">
                    <button type="button" class="Button ContentItem-action Button--plain Button--withIcon Button--withLabel">
                      <span style="display: inline-flex; align-items: center;">​
                        <svg-icon icon-class="comment"></svg-icon>
                      </span>
                      添加评论
                    </button>
                    <button type="button" class="Button ContentItem-action Button--plain Button--withIcon Button--withLabel">
                      <span style="display: inline-flex; align-items: center;">
                        ​<svg-icon icon-class="collect"></svg-icon>
                      </span>
                      收藏
                    </button>
                    <div class="Popover ContentItem-action">
                      <button type="button" id="Popover73-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover73-content" class="Button Button--plain Button--withIcon Button--withLabel">
                        <span style="display: inline-flex; align-items: center;">
                          ​<svg-icon icon-class="settings"></svg-icon>
                        </span>
                        设置
                      </button>
                    </div>  
                  </div>
                </div>
              </div>
              <!-- 回答分页 -->
                <div class="Pagination">
                  <el-pagination
                    background
                    layout="prev, pager, next"
                    :current-page.sync="queryParam.pageNum"
                    :page-size.sync="queryParam.pageSize"
                    :total="answerTotal"
                    @current-change="getAnswerList">
                  </el-pagination>
                </div>
            </el-tab-pane>
            <!-- 文章列表与回答类似 -->
            <el-tab-pane label="我的文章" name="article"></el-tab-pane>
            <el-tab-pane label="我关注的人"></el-tab-pane>
            <!-- 与提问类似 -->
            <el-tab-pane label="我关注的问题"></el-tab-pane>
            <!-- 与提问类似 -->
            <el-tab-pane label="我的收藏"></el-tab-pane>
          </el-tabs>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
import { listQuestion } from '@/api/question'
import { listAnswerInProfile } from '@/api/answer'
import { listArticle } from '@/api/class'

export default {
  data () {
    return {
      activeTab: 'question',
      pageInfo: {
        total: 0,
        totalPage: 0,
        list: []
      },
      answerTotal: 0,
      articleTotal: 0,
      questionList: [],
      answerList: [],
      articleList: [],
      queryParam: {
        userId: 1,
        sort: 1,
        pageNum: 1,
        pageSize: 10
      }
    }
  },
  created () {
    this.getQuestionList()
  },
  methods: {
    handleClickTab (tab, event) {
      console.log(tab, event);
      this.resetQueryParam()
      if (tab.name === 'question') {
        this.getQuestionList()
      } else if (tab.name === 'answer') {
        this.getAnswerList()
      } else if (tab.name === 'article') {
        this.getArticleList()
      }
    },
    resetQueryParam () {
      this.queryParam = {
        userId: 1,
        sort: 1,
        pageNum: 1,
        pageSize: 10
      }
    },
    getQuestionList () {
      console.log('问题列表查询参数', this.queryParam)
      listQuestion(this.queryParam).then(resp => {
        console.log('获取的问题列表', resp.data)
        this.pageInfo = resp.data
      })
    },
    getAnswerList () {
      console.log('回答列表查询参数', this.queryParam)
      listAnswerInProfile(this.queryParam).then(resp => {
        this.answerList = resp.data.list
        this.answerTotal = resp.data.total
      })
    },
    getArticleList () {
      listArticle(this.queryParam).then(resp => {
        this.articleList = resp.data.list
        this.articleTotal = resp.data.total
      })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
.ProfileHeader {
  position: relative;
  width: 1000px;
  padding: 0 16px;
  margin: 62px auto 10px auto;
}
.Profile-card {
  display: block;
  width: 100%;
  height: 248px;
}
.UserCoverEditor {
  width: 100%;
  height: 50%;
}
.UploadPicture-wrapper {
  width: 100%;
  cursor: pointer;
}
.UserCoverGuide {
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-top-right-radius: 1px;
  border-top-left-radius: 1px;
}
.UserCoverGuide-inner {
  position: relative;
  z-index: 2;
  float: right;
  padding: 24px;
}
.UserCoverGuide-buttonContainer {
  margin-bottom: 14px;
  text-align: right;
}

.ProfileHeader-wrapper {
  position: relative;
  width: 100%;
  background: #fff;
  box-sizing: border-box;
}
.ProfileHeader-main {
  position: relative;
  margin: 0 20px 24px;
}
.ProfileHeader-content {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  padding: 10px 0 0 230px;
}

.ProfileHeader-contentItem {
  width: 100%;
  margin: 5px 0;
}

.job {
  font-size: 23px;
}
.department {
  font-size: 23px;
}

.Profile-main {
  display: flex;
  width: 1000px;
  min-height: 100vh;
  padding: 0 16px;
  margin: 10px auto;
  justify-content: space-between;
  align-items: flex-start;
}
.ProfileMain {
  width: 100%;
  overflow: initial;
}
.ProfileMain .el-card {
  box-shadow: none;
}

.ProfileMain-header {
  margin: 5px 20px;
}

.List-item {
  position: relative;
  padding: 16px 20px;
  border-bottom: 1px solid #e6ebf5;
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
.QuestionItem-title {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.ContentItem-status {
  margin-top: 5px;
  color: #8590a6;
  font-size: 14px;
}


.ContentItem-meta {
    font-size: 15px;
    color: #646464;
}
.AnswerItem-authorInfo {
    margin-top: 10px;
}
.AuthorInfo {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.AuthorInfo-content {
    -webkit-box-flex: 1;
    -ms-flex: 1 1;
    flex: 1 1;
    margin-left: 14px;
    overflow: hidden;
}
.RichContent {
    line-height: 1.67;
}
.RichContent-inner {
    margin-top: 9px;
    margin-bottom: -4px;
    overflow: hidden;
}
.ContentItem-more {
    padding: 0;
    margin-left: 4px;
    color: #175199;
}
.Pagination {
  margin: 15px auto;
  text-align: center;
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
    max-height: 51px;
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

.QuestionRichText {
    font-size: 15px;
    line-height: 25px;
}
.ztext {
    word-break: break-word;
    line-height: 1.6;
}
</style>
