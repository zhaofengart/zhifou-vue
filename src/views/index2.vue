<template>
  <div class="container">
    <!-- 页面头部 -->
    <IndexHeader></IndexHeader>

    <!-- 主要内容 -->
    <div class="Index-main">
      <div>
        <div class="TopStory-container">
          <div class="Topstory-mainColumn">
            <a href="https://www.zhihu.com/special/19681091" target="_blank" class="css-w3ttmg"><img src="https://pic2.zhimg.com/v2-6e8fccc8a30e8cf15a90e7a894011579_r.jpg" class="css-vnkjjr"></a>
            <div class="Topstory-mainColumnCard">
              <el-card>
                <!-- 头部 -->
                <div slot="header" class="TopstoryTabsHeader">
                  <div class="TopstoryTabs">
                    <a class="TopstoryTabs-link" @click="handleListQuestion(1)" :class="{'is-clicked': !isClicked}">推荐</a>
                    <a class="TopstoryTabs-link" @click="handleListQuestion(2)" :class="{'is-clicked': isClicked}">新问题</a>               
                  </div>
                </div>
                <!-- 推荐和新问题列表 -->
                <div class="Topstory-recommend">
                  <div class="">
                    <div class="TopstoryItem TopstoryItem-isRecommend"  v-for="(item) in pageInfo.list" :key="item.id">
                      <div class="ContentItem AnswerItem">
                        <h2 class="ContentItem-title">
                          <router-link :to="{path: '/question', query: {questionId: item.id}}" target="_blank">{{item.title}}</router-link>
                        </h2>
                        <div class="RichContent">
                          <div class="ContentItem-actions">
                            <el-button plain style="width: 100px;" class="Button--blue ListQuestionItem-writeAnswerButton" icon="el-icon-edit"  @click="handleWriteAnswer(item.id)">写回答</el-button>
                            <el-button type="text" class="Button--plain ContentItem-action Button--grey " icon="el-icon-plus" style="margin-left: 24px;">关注问题</el-button>
                            <span style="margin-left: 170px;">{{parseTime(item.createTime)}}</span>
                            <span style="margin-left: 30px; width: 60px; text-align: right;">{{item.answeredNum}}</span>
                            <span style="margin-left: 5px;">回答</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 分页 -->
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
              </el-card>
              
            </div>
          </div>

          <!-- 侧边布局 -->
          <div class="GlobalSideBar">
            <div>
              <!-- 快捷入口 -->
              <QuickEntry></QuickEntry>

              <!-- 排行榜 -->
              <Leaderboard></Leaderboard>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import IndexHeader from '@/components/IndexHeader'
import QuickEntry from '@/components/QuickEntry'
import Leaderboard from '@/components/Leaderboard'
import { listQuestion } from '@/api/question'

export default {
  components: {
    IndexHeader,
    Leaderboard,
    QuickEntry
  },
  data () {
    return {
      isClicked: true,
      contentStatus: true,
      pageInfo: {
        total: 0,
        totalPage: 0,
        list: []
      },
      queryParam: {
        sort: 1,
        pageNum: 1,
        pageSize: 10
      }
    }
  },
  computed: {
    
  },
  created () {
    // 默认获取推荐的问题，也就是按热度排序的问题
    this.handleListQuestion(1)
  },
  methods: {
    handleListQuestion (sort) {
      if (sort !== undefined) {
        this.queryParam.sort = sort
        this.queryParam.pageNum = 1
        this.isClicked = !this.isClicked
      }
      this.getQuestionList()
    },
    getQuestionList () {
      console.log('问题列表查询参数', this.queryParam)
      listQuestion(this.queryParam).then(resp => {
        console.log('获取的问题列表', resp.data)
        this.pageInfo = resp.data
      })
    },
    handleWriteAnswer(questionId) {
      localStorage.setItem('write', true)
      let routerJump = this.$router.resolve({path: '/question', query: {questionId: questionId}})
      window.open(routerJump.href, '_blank')
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
// .container {
//   font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
//   font-size: 15px;
//   color: #1a1a1a;
//   background: #f6f6f6;
//   -webkit-tap-highlight-color: rgba(26,26,26,0);
// }

// 第一部分
.Index-main {
  display: block;
  margin-top: 62px;
  margin-bottom: 50px;
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
  margin: 0 auto;
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
.TopstoryTabs-link.is-clicked {
  color: #0084ff;
  font-weight: 500;
}
// 列表
.Topstory-mainColumnCard .el-card:not(.Topstory-tabCard) {
    margin-bottom: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-bottom: 1px solid #f0f2f7;
}
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

.Pagination {
  margin: 15px auto;
  text-align: center;
}

.el-button--text.is-clicked {
  color: #8590a6
}
</style>