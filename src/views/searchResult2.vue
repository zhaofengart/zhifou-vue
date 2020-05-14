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
                    <a class="TopstoryTabs-link" :class="{'is-active': isArticleActive}" @click="handleChangeType">文章</a>
                  </div>
                </div>
                <!-- 问题列表 -->
                <div class="Topstory-recommend" v-if="isQuestionActive==true">
                  <div class="">
                    <div class="TopstoryItem TopstoryItem-isRecommend"  v-for="(item) in pageInfo.list" :key="item.id">
                      <div class="ContentItem AnswerItem">
                        <h2 class="ContentItem-title">
                          <!-- 问题标题 -->
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

                <div class="Topstory-recommend" v-if="isArticleActive == true">
                  <div class="">
                    <div ref="answerItem" class="TopstoryItem TopstoryItem-isRecommend"  v-for="(item,index) in pageClassInfo.list" :key="index">
                      <div class="ContentItem AnswerItem">
                        <h2 class="ContentItem-title">
                          <!-- 文章标题 -->
                          <router-link :to="{path: '/classDetail', query: {articleId: item.id}}" target="_blank">
                            <span v-html="item.title"></span>
                          </router-link>
                        </h2>
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
                          <div class="RichContent-inner">
                            <span class="RichText ztext CopyrightRichText-richText" itemprop="text" v-html="item.content"></span>
                          </div>
                        </div>
                        <button
                          v-if="currentIndex !== index"
                          type="button"
                          style="margin-left: 300px;color: #1890ff;margin-top: 10px"
                          class="Button ContentItem-rightButton ContentItem-expandButton Button--plain"
                          @click="handleExpandContent(index)">
                          展开阅读全文
                          <span style="display: inline-flex; align-items: center;">​
                            <svg-icon icon-class="arrow-down"></svg-icon>
                          </span>
                        </button>
                        <div class="RichContent">
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
                              <svg-icon icon-class="arrow-up" class="ContentItem-arrowIcon" :class="{'is-active': currentIndex === index}"></svg-icon>
                            </span>
                            </button>
                          </div>
                          <div v-for="item1 in pageClassInfo.commentlist">
                          <div style="display: none" :id="item.id" >
                            <div class="ContentItem-meta">
                              <div class="AuthorInfo AnswerItem-authorInfo AnswerItem-authorInfo--related">
                                <el-avatar shape="circle" size="large" :src="item1.author.avatar"></el-avatar>
                                <div class="AuthorInfo-content">
                                  <div class="AuthorInfo-head">
                                    <span class="AuthorInfo-name">{{item1.author.name}}</span>
                                  </div>
                                  <div class="AuthorInfo-job">
                                    <span>{{item1.author.job}}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="RichContent-inner">
                              {{item1 | explainLen}}
                              <a class="RichText ztext CopyrightRichText-richText"  v-show="item1.content.length >= 20"
                                 style="color: #1890ff;"
                                 @click.stop="togglePickUp(item1,$event)">{{item1.isExpand?'　收起':'...全文'}}
                              </a>
                            </div>
                          </div>
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
                    :total="pageClassInfo.total"
                    @current-change="handleSearch">
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
import { searchArticle } from "../api/class";

export default {
  components: {
    Leaderboard,
    QuickEntry
  },
  data () {
    return {
      currentIndex: -1,
      isContentActionsFixed: true,
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
           {
             id: 382058831,
             title: '如何看待3 月 24 日巴西黑帮发布通告称，会代替政府执行强制封城，以抗击新冠疫情？',
             content: '绑了磁的ge： 百看不厌的英文电影还是有不少的，接下来我就推荐一下<b>已经刷过三遍以上，高赞回答没有盘点</b>的一些英文电影。（肖申克、阿甘这种太过经典的就不谈了） （PS:感动得快哭了，收藏数和赞数几乎3:1了，…',
             createTime: new Date(),
             answeredNum: 100
           }
        ]
      },

      pageClassInfo: {
        total: 60,
        totalPage: 10,
        list: [
          {
            id: 382058830,
            "author": {
              "id": 234,
              "name": "小小猪排酱中游",
              "job":  "Java开发",
              "avatar": "https://pic4.zhimg.com/da8e974dc_is.jpg"
            },
            title: 'C++智能指针详解',
            content: '智能指针：auto-ptr，shared-ptr，weak-ptr,由于 C++ 语言没有自动内存回收机制，程序员每次 new 出来的内存都要手动 ',
            createTime: new Date(),
            isExpand: false,
          },
          {
            id: 382058831,
            "author": {
              "id": 567,
              "name": "王有为",
              "job":  "cpp开发",
              "avatar": "https://pic4.zhimg.com/da8e974dc_is.jpg"
            },
            title: 'C++智能指针详解',
            content: '智能指针：auto-ptr，shared-ptr，weak-ptr,由于 C++ 语言没有自动内存回收机制，程序员每次 new 出来的内存都要手动 delete。',
            createTime: new Date(),
            isExpand: false,
          }
        ],
        commentlist: [
          {
            "author": {
              "id": 111,
              "name": "王有为",
              "job":  "cpp开发",
              "avatar": "https://pic4.zhimg.com/da8e974dc_is.jpg"
            },
            content: "这个文章也太好了吧哈哈哈哈"
          },
          {
            "author": {
              "id": 222,
              "name": "小小猪排酱中游",
              "job":  "Java开发",
              "avatar": "https://pic4.zhimg.com/da8e974dc_is.jpg"
            },
            content: "撒很大声的哈萨克碘化钠会计师的哈SDK"
          }
        ]
      },
    }
  },
  computed: {

  },
  mounted() {window.addEventListener('scroll', this.handleScroll)},
  created () {
    this.queryParam.searchTitle = this.$route.query.value
    this.handleSearch()
  },
  methods: {
    handleListQuestion () {
      console.log('点击了问题标签')
      this.isQuestionActive = true
      this.isArticleActive = false
    },
    handleChangeType () {
      this.isQuestionActive = false
      this.isArticleActive = true
    },
    handleSearch () {
      console.log('查询参数', this.queryParam)
      searchQuestion(this.queryParam).then(resp => {
        console.log('获取的问题列表', resp.data)
        this.pageInfo = resp.data
      })
      searchArticle(this.queryParam).then(resp => {
        console.log('获取的文章列表', resp.data)
        this.pageClassInfo = resp.data
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
    },
    handlevisible (item,e) {
      if(document.getElementById(item.id).style.display == "block")
      {
        document.getElementById(item.id).style.display = "none";
      }
      else
      {
        document.getElementById(item.id).style.display = "block"
      }
    },
    handleScroll () {
      // 获取需要判断顶部和底部到浏览器底部距离的元素
      if (this.currentIndex !== -1) {
        var item = this.$refs.answerItem[this.currentIndex]

        // 元素的底部或顶部已经到达浏览器底部
        if (this.isBottomReachToBottomOfBrowser(item) || this.isTopReachToBottomOfBrowser(item)) {
          this.isContentActionsFixed = false
        } else {
          // 介于两者之间，需要固定操作栏
          this.isContentActionsFixed = true
        }
      }

    },
    isBottomReachToBottomOfBrowser (item) {
      // 元素本身的高度和它到父元素顶部的高度
      var H = item.offsetHeight + item.offsetTop
      // 滚动距离界限1,超过这个距离，所选元素的底部就会位于浏览器底部以上
      var scrollHeightToBottom = H - document.documentElement.clientHeight + 54
      // 由于滚动而被隐藏的高度
      var hiddenHeight = document.documentElement.scrollTop + document.body.scrollTop

      if (hiddenHeight >= scrollHeightToBottom) {
        return true
      } else {
        return false
      }
    },
    isTopReachToBottomOfBrowser (item) {
      // 元素本身的高度和它到父元素顶部的高度
      var H = item.offsetHeight + item.offsetTop
      // 滚动距离界限2,小于这个距离，所选元素的顶部就会位于浏览器底部以下
      var scrollHeightToTop = item.offsetTop - document.documentElement.clientHeight + 150
      // 由于滚动而被隐藏的高度
      var hiddenHeight = document.documentElement.scrollTop + document.body.scrollTop

      if (hiddenHeight < scrollHeightToTop) {
        return true
      } else {
        return false
      }
    },
    handleExpandContent (index) {
      this.currentIndex = index
      // 延迟执行边界判断，防止handleScroll方法读取到渲染之前的元素高度
      setTimeout(this.handleScroll, 100)
    },
  },
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
  margin-top: 10px;
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
    margin-top: 20px;
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

.ContentItem-action:checked~.comment {
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

.ContentItem-meta {
  font-size: 15px;
  color: #646464;
  margin-top: 20px;
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
.comment {
  display: none;
}

.ContentItem-rightButton {
  margin-left: auto;
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

.specialContentItem-actions {
  width: 691px;
  bottom: 0px;
  // left: 259.6px;
  margin: 0 -20px;
}
</style>
