<template>
  <div class="container">
    <!-- 头部 -->
    <header class="AppHeader">
      <div class="AppHeader-inner">
        <a href="//www.zhihu.com" aria-label="知否">知否</a>
        <ul class="AppHeader-Tabs">
          <li class="Tabs-item AppHeader-Tab">
            <a class="Tabs-link AppHeader-TabsLink" href="">首页</a>
          </li>
          <li class="Tabs-item AppHeader-Tab">
            <a class="Tabs-link AppHeader-TabsLink" href="">文章</a>
          </li>
          <li class="Tabs-item AppHeader-Tab">
            <a class="Tabs-link AppHeader-TabsLink" href="">等你来答</a>
          </li>

          <!-- 搜索部分 -->
          <div class="SearchBar">
            <el-input size="medium" type="text" maxlength="100" auto-complete="off" placeholder="请输入搜索内容" class="SearchBar-input">
              <el-button slot="append" icon="el-icon-search" class="SearchBar-searchButton"></el-button>
            </el-input>
            <el-button type="primary" class="SearchBar-askButton" >提问</el-button>
          </div>

          <!-- 用户信息 -->
          <div class="AppHeader-userInfo">
            <div class="Popover AppHeader-notifications">
              <el-button class="el-icon-message-solid Button Button--plain">
                <span style="display: inline-flex; align-items: center;">
                </span>
              </el-button>
            </div>
            <div class="AppHeader-profile">
              <el-dropdown trigger="click">
                <span>
                  <img class="Avatar AppHeader-profileAvatar" width="30" height="30" src="https://pic4.zhimg.com/da8e974dc_is.jpg" alt="">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>我的主页</el-dropdown-item>
                  <el-dropdown-item>设置</el-dropdown-item>
                  <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </ul>
      </div>
    </header>

    <!-- 主要内容 -->
    <main class="main">
      <div>
        <div class="TopStory-container">
          <div class="Topstory-mainColumn">
            <a href="https://www.zhihu.com/special/19681091" target="_blank" class="css-w3ttmg"><img src="https://pic2.zhimg.com/v2-6e8fccc8a30e8cf15a90e7a894011579_r.jpg" class="css-vnkjjr"></a>
            <div class="Topstory-mainColumnCard">
              <el-card>
                <!-- 头部 -->
                <div slot="header"  class="TopstoryTabsHeader">
                  <div class="TopstoryTabs">
                    <a class="TopstoryTabs-link" href="/" >推荐</a>
                    <a class="TopstoryTabs-link" href="/" >关注</a>
                    <a class="TopstoryTabs-link" href="/" >热榜</a>
                  </div>
                </div>
                <!-- 文章列表 -->
                <div class="Topstory-recommend">
                  <div class="">
                    <div class="TopstoryItem TopstoryItem-isRecommend"></div>
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
                
              </el-card>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  
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
  position: relative;
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
    border-radius: 0;
    overflow: visible;
    overflow: initial;
    position: relative;
    padding: 16px 20px;
}
.TopstoryItem-isRecommend {
    padding: 20px;
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