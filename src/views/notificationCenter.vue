<template>
  <div class="container">
    <!-- 页面头部 -->
    <IndexHeader></IndexHeader>

    <!-- 主要内容 -->
    <div class="Notification-main">
        <div class="TopStory-container">
          <div class="Topstory-mainColumn">
            <div class="Topstory-mainColumnCard">
              <el-card>
                <!-- 头部 -->
                <div slot="header" class="TopstoryTabsHeader">
                  <div style="border-bottom: 1px solid #e6ebf5;border-radius: 0;height: 60px;vertical-align: middle;display: table-cell;padding: 20px">通知中心</div>
                  <el-tabs v-model="activeName" @tab-click="handleClick" style="margin-left: 20px">
                    <el-tab-pane label="全部类型" name="first">
                        <div v-for="i in (1,6)" :key="i">20200324
                          <div class="TopstoryItem TopstoryItem-isRecommend"  v-for="i in (1,6)" :key="i">
                            <div class="RichContent-inner">
                              <a target="_blank" href="/#/index2">小明关注了你</a>
                            </div>
                            <div style="margin-top: 10px">文章题目</div>
                          </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="关注我的" name="second"></el-tab-pane>
                    <el-tab-pane label="喜欢我的" name="third"></el-tab-pane>
                    <el-tab-pane label="评论与回复" name="fourth"></el-tab-pane>
                    <el-tab-pane label="邀请" name="fifth"></el-tab-pane>
                  </el-tabs>
                </div>
                <!-- 文章列表 -->
              </el-card>
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
        storyList: [],
        activeName: 'second'
      }
    },
    computed: {

    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">

  // 第一部分
  .Notification-main {
    display: block;
    margin-top: 62px;
    margin-left: 300px;
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
    margin-top: -10px;
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

  .ContentItem-action {
    margin-left: 24px;
    font-size: 14px;
  }

</style>
