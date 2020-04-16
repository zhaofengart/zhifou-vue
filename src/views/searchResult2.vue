<template>
  <div class="container">
    <!-- 页面头部 -->
    <IndexHeader></IndexHeader>

    <!-- 主要内容 -->
    <div class="my-main">
      <div>
        <div class="TopStory-container">
          <div class="Topstory-mainColumn">
            <div class="Topstory-mainColumnCard">
              <el-card>
                <!-- 头部 -->
                <div slot="header" class="TopstoryTabsHeader">
                  <div class="TopstoryTabs">
                    <a class="TopstoryTabs-link" :class="{'is-active': isQuestionActive}" @click="handleListQuestion">问题</a>
                    <a class="TopstoryTabs-link" :class="{'is-active': isArticleActive}">文章</a>
                  </div>
                </div>
                <!-- 文章列表 -->
                <div class="Topstory-recommend">
                  <div class="">
                    <div class="TopstoryItem TopstoryItem-isRecommend"  v-for="(item) in pageInfo.list" :key="item.id">
                      <div class="ContentItem AnswerItem">
                        <h2 class="ContentItem-title">
                          <!-- 文章标题 -->
                          <router-link :to="{path: '/question', query: {questionId: item.id}}" target="_blank">
                            <span v-html="item.title"></span>
                          </router-link>
                        </h2>
                        <div class="RichContent">
                          <div class="ContentItem-actions">
                            <el-button plain style="width: 100px;" class="Button--blue ListQuestionItem-writeAnswerButton" icon="el-icon-edit" @click="handleWriteAnswer(item.id)">写回答</el-button>
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
                    :current-page="queryParam.pageNum"
                    :page-size="queryParam.pageSize"
                    :total="pageInfo.total"
                    @current-change="handleChangePageNum">
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
import QuickEntry from '@/components/QuickEntry'
import Leaderboard from '@/components/Leaderboard'
import { searchQuestion } from '@/api/question'

export default {
  components: {
    Leaderboard,
    QuickEntry
  },
  data () {
    return {
      isQuestionActive: true,
      isArticleActive: false,
      queryParam: {
        searchTitle: '',
        sort: 1,
        pageNum: 1,
        pageSize: 10
      },
      pageInfo: {
        total: 60,
        totalPage: 10,
        list: [
          // {
          //   id: 382058831,
          //   title: '如何看待3 月 24 日巴西黑帮发布通告称，会代替政府执行强制封城，以抗击新冠疫情？',
          //   content: '绑了磁的ge： 百看不厌的英文电影还是有不少的，接下来我就推荐一下<b>已经刷过三遍以上，高赞回答没有盘点</b>的一些英文电影。（肖申克、阿甘这种太过经典的就不谈了） （PS:感动得快哭了，收藏数和赞数几乎3:1了，…',
          //   createTime: new Date(),
          //   answeredNum: 100
          // }
        ]
      },
    }
  },
  computed: {
    
  },
  created () {
    this.queryParam.searchTitle = this.$route.query.value
    this.handleSearch()
  },
  methods: {
    handleListQuestion () {
      console.log('点击了问题标签')
    },
    handleSearch () {
      console.log('查询参数', this.queryParam)
      searchQuestion(this.queryParam).then(resp => {
        console.log('获取的问题列表', resp.data)
        this.pageInfo = resp.data
      })
    },
    handleWriteAnswer (questionId) {
      localStorage.setItem('write', true)
      let routerJump = this.$router.resolve({path: '/question', query: {questionId: questionId}})
      window.open(routerJump.href, '_blank')
    },
    handleChangePageNum (currentPage) {
      this.queryParam.pageNum = currentPage
      this.handleSearch()
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">

// 问题、文章列表
.my-main {
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
  .is-collapsed {
    max-height: 100px;
  }
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
.RichContent.is-collapsed .RichContent-inner {
    max-height: 100px;
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
</style>