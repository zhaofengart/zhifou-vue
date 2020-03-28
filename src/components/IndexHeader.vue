<template>
  <div>
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
        </ul>

        <!-- 搜索部分 -->
        <div class="SearchBar">
          <label class="SearchBar-input">
            <el-input size="medium" type="text" maxlength="100" auto-complete="off" placeholder="请输入搜索内容" >
            <el-button slot="append" icon="el-icon-search" class="SearchBar-searchButton"></el-button>
            </el-input>
          </label>
          <el-button type="primary" class="SearchBar-askButton" @click="handlePublishQuestion">提问</el-button>
        </div>

        <!-- 用户信息 -->
        <div class="AppHeader-userInfo">
          <div class="Popover AppHeader-notifications">
            <el-button class="el-icon-message-solid Button Button--plain" style="font-size: 23px;">
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
      </div>
    </header>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    handlePublishQuestion () {
      this.$router.push({path: 'questionpublish'})
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
.AppHeader {
  position: fixed;
  top: 0;
  width: 100%;
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
.SearchBar-toolWrapper {
    position: relative;
    z-index: 104;
    width: 326px;
}
.SearchBar-tool {
    position: relative;
    float: left;
    overflow: hidden;
}
.SearchBar-input {
    width: 326px;
    height: 34px;
    padding-left: 12px;
    padding-right: 0;
    // -webkit-transition: width .2s ease,background .3s ease;
    // transition: width .2s ease,background .3s ease;
}
.Input-wrapper {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 180px;
    height: 34px;
    padding: 4px 10px;
    font-size: 14px;
    background: #fff;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: background .2s,border .2s;
    transition: background .2s,border .2s;
    
}
.Input-wrapper--grey {
    background: #f6f6f6;
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

.AppHeader-profileAvatar {
    vertical-align: top;
}
.Avatar {
    background: #fff;
    border-radius: 2px;
}
</style>