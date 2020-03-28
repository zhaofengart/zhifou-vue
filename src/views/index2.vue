<template>
  <div class="container">
    <!-- 页面头部 -->
    <IndexHeader></IndexHeader>

    <!-- 主要内容 -->
    <div class="main">
      <div>
        <div class="TopStory-container">
          <div class="Topstory-mainColumn">
            <a href="https://www.zhihu.com/special/19681091" target="_blank" class="css-w3ttmg"><img src="https://pic2.zhimg.com/v2-6e8fccc8a30e8cf15a90e7a894011579_r.jpg" class="css-vnkjjr"></a>
            <div class="Topstory-mainColumnCard">
              <el-card>
                <!-- 头部 -->
                <div slot="header" class="TopstoryTabsHeader">
                  <div class="TopstoryTabs">
                    <a class="TopstoryTabs-link" href="/" >推荐</a>
                    <a class="TopstoryTabs-link" href="/" >关注</a>
                    <a class="TopstoryTabs-link" href="/" >热榜</a>
                  </div>
                </div>
                <!-- 文章列表 -->
                <div class="Topstory-recommend">
                  <div class="">
                    <div class="TopstoryItem TopstoryItem-isRecommend"  v-for="i in (1,6)" :key="i">
                      <div class="ContentItem AnswerItem">
                        <h2 class="ContentItem-title">
                          <a target="_blank" href="/question/382058831/answer/1103404813">如何看待3 月 24 日巴西黑帮发布通告称，会代替政府执行强制封城，以抗击新冠疫情？</a>
                        </h2>
                        <div class="RichContent">
                          <div class="RichContent-cover">
                            <div class="RichContent-cover-inner">
                              <img src="https://pic1.zhimg.com/v2-9e4d48633106c39e368c2ec9a4fcbd7c_400x224.jpg" alt="cover" style="width: 190px; height: 105px;">
                            </div>
                          </div>
                          <div class="RichContent-inner">
                              <span class="RichText ztext CopyrightRichText-richText" itemprop="text">绑了磁的ge： 百看不厌的英文电影还是有不少的，接下来我就推荐一下<b>已经刷过三遍以上，高赞回答没有盘点</b>的一些英文电影。（肖申克、阿甘这种太过经典的就不谈了） （PS:感动得快哭了，收藏数和赞数几乎3:1了，…</span>
                              <el-button class="ContentItem-more Button--plain" style="font-size: 14px;">阅读全文<i class="el-icon-arrow-down el-icon--right"></i></el-button>
                          </div>
                          <div class="ContentItem-actions">
                            <el-button plain style="width: 100px;" class="Button--blue ListQuestionItem-writeAnswerButton" icon="el-icon-edit">写回答</el-button>
                            <el-button class="Button--plain ContentItem-action Button--grey " icon="el-icon-plus" style="margin-left: 24px;">关注问题</el-button>
                            <el-button class="Button--plain ContentItem-action Button--grey" icon="el-icon-time" style="margin-left: 24px;">稍后答</el-button>
                            <span style="margin-left: 100px;">2020年3月20日 16:00</span>
                            <span style="margin-left: 50px;">666回答</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </el-card>
              
            </div>
          </div>

          <!-- 侧边布局 -->
          <div class="GlobalSideBar">
            <div>
              <!-- 快捷入口 -->
              <el-card>
                <div class="card">
                  <div class="GlobalWrite">
                    <a href="" title="文章" class="GlobalWrite-navItem">
                      <div class="el-icon-edit-outline GlobalWrite-navIcon"></div>
                      <div class="GlobalWrite-navTitle">写文章</div>
                    </a>
                    <a href="" title="草稿箱" class="GlobalWrite-navItem">
                      <div class="el-icon-document GlobalWrite-navIcon"></div>
                      <div class="GlobalWrite-navTitle">草稿箱</div>
                    </a>
                    <a href="" title="稍后答" class="GlobalWrite-navItem">
                      <div class="el-icon-time GlobalWrite-navIcon"></div>
                      <div class="GlobalWrite-navTitle">稍后答</div>
                    </a>
                  </div>
                </div>
              </el-card>

              <!-- 排行榜 -->
              <el-card>
                <div slot="header" class="Leaderboard-header">
                  <span>本月排行榜</span>
                </div>
                <div class="LeaderboardItem" v-for="i in (1,5)" :key="i">
                  <div class="Ranking-item HotItem-rank HotItem-hot">{{i}}</div>
                  <div class="Ranking-item">用户名{{i}}</div>
                  <div class="Ranking-item">{{10 * (10 - i)}}<i class="el-icon-coin" style="margin-left: 5px; font-size: 24px;"></i></div>
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
import IndexHeader from '@/components/IndexHeader'

export default {
  components: {
    IndexHeader
  },
  data () {
    return {
      storyList: []
    }
  },
  computed: {
    
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
// .container {
//   font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
//   font-size: 15px;
//   color: #1a1a1a;
//   background: #f6f6f6;
//   -webkit-tap-highlight-color: rgba(26,26,26,0);
// }

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

// 排行榜
.Leaderboard-header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 18px;
}

.LeaderboardItem {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
  border-bottom: 1px solid #e6ebf5;
}

.Ranking-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 50px;
}

.HotItem-hot {
    color: #ff9607;
}
.HotItem-rank {
    line-height: 1.6;
    font-size: 18px;
    // color: #999;
    font-weight: 600;
    font-synthesis: style;
}

</style>