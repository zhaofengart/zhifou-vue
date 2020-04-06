<template>
  <div class="container">
    <!-- 页面头部 -->
    <IndexHeader></IndexHeader>

    <!-- 主要内容 -->
    <div class="main">
      <div>
        <div class="TopStory-container">
          <div class="Topstory-mainColumn">
            <div class="Topstory-mainColumnCard">
              <el-card>
                <!-- 文章列表 -->
                <div class="Topstory-recommend">
                  <div class="">
                    <div class="TopstoryItem TopstoryItem-isRecommend"  v-for="(item, index) in coachExplainList" :key="index" style="margin-top: -20px">
                      <h3>
                        <a target="_blank" href="/question/382058831/answer/1103404813">{{item.coachtitle}}</a>
                      </h3>
                      <!--li style="margin-top: 20px" v-for="(item, index) in coachExplainList" :key="index"!-->
                      <div class="coach-explain-wrap">
                        <!--  {{item | explainLen}} 通过数据的filter内部判断来控制展示的字数 -->
                        <!--   v-show="item.coachExplain.length >= 111" 判断开始评论字数（此时字数界限是111），决定显不显示 “全文、收起”按钮 -->
                        {{item | explainLen}}
                        <a class="btn-pick-up" v-show="item.coachExplain.length >= 50"
                           @click.stop="togglePickUp(item,$event)">{{item.isExpand?'收起':'...全文'}}</a>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 分页 -->
                <div class="Pagination">
                  <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="60">
                  </el-pagination>
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
                    <router-link to="/writeclass" title="文章" class="GlobalWrite-navItem">
                      <div class="el-icon-edit-outline GlobalWrite-navIcon"></div>
                      <div class="GlobalWrite-navTitle">写文章</div>
                    </router-link>
                    <router-link to="" title="草稿箱" class="GlobalWrite-navItem">
                      <div class="el-icon-document GlobalWrite-navIcon"></div>
                      <div class="GlobalWrite-navTitle">草稿箱</div>
                    </router-link>
                    <router-link to="" title="稍后答" class="GlobalWrite-navItem">
                      <div class="el-icon-time GlobalWrite-navIcon"></div>
                      <div class="GlobalWrite-navTitle">稍后答</div>
                    </router-link>
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
        contentStatus: true,
        storyList: [],
        coachExplainList: [{
          coachtitle: '如何看待3 月 24 日巴西黑帮发布通告称，会代替政府执行强制封城，以抗击新冠疫情？',
          coachExplain: '专家评论为贯彻落实党的十九大关于深化机构改革的决策部署，2018年3月中共中央印发《深化党和国家机构改革方案》，成立中央网络安全和信息化委员会，负责国家网信领域重大工作的顶层设计、总体布局，成立中央网络安全和信息化委员会，负责国家网信领域重大工作的顶层设计、总体布局，成立中央网络安全和信息化委员会，负责国家网信领域重大工作的顶层设计、总体布局专家评论为贯彻落实党的十九大关于深化机构改革的决策部署，2018年3月中共中央印发《深化党和国家机构改革方案》，成立中央网络安全和信息化委员会，负责国家网信领域重大工作的顶层设计、总体布局，成立中央网络安全和信息化委员会，负责国家网信领域重大工作的顶层设计、总体布局，成立中央网络安全和信息化委员会，负责国家网信领域重大工作的顶层设计、总体布局专家评论为贯彻落实党的十九大关于深化机构改革的决策部署，2018年3月中共中央印发《深化党和国家机构改革方案》，成立中央网络安全和信息化委员会，负责国家网信领域重大工作的顶层设计、总体布局，成立中央网络安全和信息化委员会，负责国家网信领域重大工作的顶层设计、总体布局，成立中央网络安全和信息化委员会，负责国家网信领域重大工作的顶层设计、总体布局专家评论为贯彻落实党的十九大关于深化机构改革的决策部署，2018年3月中共中央印发《深化党和国家机构改革方案》，成立中央网络安全和信息化委员会，负责国家网信领域重大工作的顶层设计、总体布局，成立中央网络安全和信息化委员会，负责国家网信领域重大工作的顶层设计、总体布局，成立中央网络安全和信息化委员会，负责国家网信领域重大工作的顶层设计、总体布局',
          isExpand: false //false显示收起  true 显示全文
        },
          {
            coachtitle: '如何看待3 月 24 日巴西黑帮发布通告称，会代替政府执行强制封城，以抗击新冠疫情？',
            coachExplain: '专家评论为贯彻落实党的十九大关于深化机构改革的决策部署，2018年3月中共中央印发《深化党和国家机构改革方案》，成立中央网络安全和信息化委员会，负责国家网信领域重大工作的顶层设计、总体布局，成立中央网络安全和信息化委员会，负责国家网信领域重大工作的顶层设计、总体布局，成立中央网络安全和信息化委员会，负责国家网信领域重大工作的顶层设计、总体布局',
            isExpand: false //false显示收起  true 显示全文
          },
          {
            coachtitle: '如何看待3 月 24 日巴西黑帮发布通告称，会代替政府执行强制封城，以抗击新冠疫情？',
            coachExplain: '专家评论为贯彻落实党的十九大关于深化机构改革的决策部署，2018年3月中共中央印发《深化党和国家机构改革方案》，成立中央网络安全和信息化委员会，负责国家网信领域重大工作的顶层设计、总体布局，成立中央网络安全和信息化委员会，负责国家网信领域重大工作的顶层设计、总体布局，成立中央网络安全和信息化委员会，负责国家网信领域重大工作的顶层设计、总体布局',
            isExpand: false //false显示收起  true 显示全文
          }
        ]
      }
    },
    computed: {

    },
    methods: {
      contentToggle () {

      },
      togglePickUp(item, e) {
        let target = e.target.parentNode;//点击后获取当前评论
        item.isExpand = !item.isExpand;//切换状态
        if (item.isExpand) {
          //true
          //当下全文状态
          target.style.height = "auto";
        } else {
          //false
          // 当下收起状态
          target.style.height = "2rem";//收起状态的容器高度
          //收起状态的高度

        }
      }
    },
    filters: {
      explainLen: function (item) {
        if (!item.coachExplain) return;
        if (item.isExpand) {
          //当下全文状态
          return item.coachExplain.substr(0, item.coachExplain.length - 1);//字符串截取
        } else {
          // 当下收起状态
          return item.coachExplain.substr(0, 50);//字符串截取100个字

        }
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  .main {
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
  .Pagination {
    margin: 15px auto;
    text-align: center;
  }
</style>
