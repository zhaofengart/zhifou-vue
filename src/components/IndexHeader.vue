<template>
  <div>
    <header class="AppHeader">
      <div class="AppHeader-inner">
        <a href="/" aria-label="知否" class="logo">
          <svg-icon icon-class="zhifou-logo"></svg-icon>
        </a>
        <ul class="AppHeader-Tabs">
          <li class="Tabs-item AppHeader-Tab">
            <a ref="indexLink" class="Tabs-link AppHeader-TabsLink" href="/">首页</a>
          </li>
          <li class="Tabs-item AppHeader-Tab">
            <a ref="articleLink" class="Tabs-link AppHeader-TabsLink" href="/articlelist">文章</a>
          </li>
        </ul>

        <!-- 搜索部分 -->
        <div class="SearchBar">
          <div class="SearchAndHistory">
            <label class="SearchBar-input">
              <el-input v-model="searchValue" clearable size="medium" type="text" maxlength="100" auto-complete="off" placeholder="请输入搜索内容"
                @focus="handleInputFocus"
                @input="handleInputChange"
                @keyup.enter.native="handleSearchByValue(searchValue)">
              <el-button slot="append" icon="el-icon-search" class="SearchBar-searchButton" @click="handleSearch"></el-button>
              </el-input>
            </label>
            <!-- 推荐的搜索关键字 -->
            <el-card v-if="isShowRecommendKeyword" class="HistoryList">
              <div v-for="(item, index) in recommendKeywordList" :key="item">
                <div v-show="index < 6" class="HistoryItem" >
                  <span @click="handleSearchByValue(item)" style="width: 100%; height: 100%;">{{item}}</span>
                </div>
              </div>
            </el-card>

            <!-- 搜索历史 -->
            <el-card v-if="isShowSearchHistory" class="HistoryList">
              <template slot="header">
                <div class="HistoryList-header">
                  <span style="font-size: 14px; color: #8590a6;">搜索历史</span>
                  <el-button type="text" @click="handleClearSearchHistory" icon="el-icon-delete">清除</el-button>
                  <el-button type="text" @click="isShowSearchHistory = false">关闭</el-button>
                </div>
              </template>
              <div class="HistoryItem-container">
                <div v-for="(item, index) in historyList" :key="item">
                  <!-- 默认展示10条记录 -->
                  <div v-show="index < 10 || isShowMoreHistory" class="HistoryItem" >
                    <span @click="handleSearchByValue(item)" style="width: 100%; height: 100%;">{{item}}</span>
                    <li @click="handleRemoveHistory(item)" class="el-icon-close" ></li>
                  </div>
                </div>
              </div>
              <div v-show="!isShowMoreHistory && historyList.length > 10" class="MoreHistory">
                <el-button type="text" icon="el-icon-d-arrow-right" @click="isShowMoreHistory = true">更多</el-button>
              </div>
            </el-card>
          </div>
          <el-button type="primary" class="SearchBar-askButton" @click="handlePublishQuestion">提问</el-button>
        </div>

        <!-- 用户信息 -->
        <div class="AppHeader-userInfo">
          <div class="Popover AppHeader-notifications">
            <el-popover
              placement="bottom"
              width="300"
              trigger="click"
            >

              <el-card style="height: 370px;margin: -12px">
                <el-table
                  :data="tableData"
                  height="315"
                  border
                  style="width: 350px">
                  <el-table-column
                    prop="date"
                    label="最近的通知"
                    width="290px">
                  </el-table-column>
                </el-table>
                <div class="footer">
                  <el-link target="_blank" href="/notificationCenter">
                    查看全部通知>
                  </el-link>
                </div>
              </el-card>

              <el-button class="el-icon-message-solid Button Button--plain" slot="reference" style="font-size: 24px;">
                <span style="display: inline-flex; align-items: center;">
                </span>
              </el-button>
            </el-popover>
          </div>
          <div class="AppHeader-profile">
            <el-dropdown trigger="click">
              <span>
                <img class="Avatar AppHeader-profileAvatar" width="30" height="30" src="https://pic4.zhimg.com/da8e974dc_is.jpg" alt="">
              </span>
              <el-dropdown-menu slot="dropdown">
                <router-link to="/profile">
                  <el-dropdown-item>我的主页</el-dropdown-item>
                </router-link>

                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import { Notification, MessageBox, Message } from 'element-ui'
import { mapGetters } from 'vuex'
import { listRecommendKeyword } from '@/api/search'

export default {
  data () {
    return {
      isShowRecommendKeyword: false,
      isShowSearchHistory: false,
      isShowMoreHistory: false,
      indexActive: true,
      artileActive: false,
      searchValue: '',
      recommendKeywordList: [],
      tableData: [{
        date: '2016-05-02',
      },
        {
          date: '2016-05-02',
        },
        {
          date: '2016-05-02',
        },
        {
          date: '2016-05-02',
        },
        {
          date: '2016-05-02',
        },
        {
          date: '2016-05-02',
        },
        {
          date: '2016-05-02',
        },
        {
          date: '2016-05-02',
        },
        {
          date: '2016-05-02',
        },
        {
          date: '2016-05-02',
        },
        {
          date: '2016-05-02',
        },]
    }
  },
  computed: {
    // 属性映射，对应getters.js中的属性
    ...mapGetters([
      'historyList'
    ])
  },
  watch: {
    $route (to, from){
      console.log('router change', 'value', this.$route.query.value, 'searchValue',this.searchValue)
      if (this.$route.path === '/search' && this.$route.query.value === this.searchValue) {
        location.reload()
      }
    }
  },
  mounted () {
    if (this.$route.path === '/') {
      this.$refs.indexLink.className += ' is-active'
    }
    // else if (this.$route.path === '/questionpublish'){
    //   this.$refs.articleLink.className +=  ' is-active'
    // }
    console.log('mounted')
  },
  created () {
    console.log('created')
    if (this.$route.query.value) {
      this.searchValue = this.$route.query.value
      this.doSearch()
    }
  },
  methods: {
    handleSearch () {
      // 验证搜索内容是否合规
      if (!this.validateLengthOfSearchValue()) {
        return
      }

      if (this.searchValue !== '') {
        // 保存为历史记录
        this.$store.dispatch("addHistory", this.searchValue)
        // 打印历史记录
        console.log('历史记录', this.historyList)

        console.log('当前路由path', this.$route.path, '', 'value', this.$route.query.value, 'searchValue',this.searchValue)

        // 跳转搜索结果页面
        if (this.$route.path === '/search' && this.$route.query.value === this.searchValue) {
          location.reload()
        } else {
          console.log('跳转搜索页', this.searchValue)
          this.doSearch()
        }
      }
    },
    doSearch () {
      this.isShowSearchHistory = false
      this.$router.push({
        path: '/search',
        query: {
          value: this.searchValue
        }
      })
    },
    handleSearchByValue(val) {
      console.log('val', val)
      if (val.trim().length === 0 ) {
        this.$message({
          showClose: true,
          message: '请输入你要搜索的内容',
          type: 'warning'
        });
        this.searchValue = ''
        this.isShowRecommendKeyword = false
        return
      }

      this.searchValue = val
      this.handleSearch()
    },
    validateLengthOfSearchValue () {
      console.log('处理搜索内容变化', this.searchValue.length)
      var length = this.searchValue.length
      if (length > 0 && length <= 50) {
        return true
      }

      var messageContent = '请输入搜索内容'
      if (length >= 50) {
        messageContent = '输入内容不超过50个字'
      }
      this.$message({
        showClose: true,
        message: messageContent,
        type: 'warning'
      });

      return false
    },
    handlePublishQuestion () {
      this.$router.push({path: 'questionpublish'})
    },
    async logout () {
      this.$confirm('确定注销并退出系统吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('LogOut').then(() => {
          location.reload()
        })
      })
    },
    handleRemoveHistory (value) {
      this.$store.dispatch('removeHistory', value)
    },
    handleClearSearchHistory () {
      console.log('点击了清空历史按钮')
      this.$store.dispatch('clearHistory')
    },
    handleInputFocus () {
      if (this.historyList.length !== 0 && this.searchValue.length === 0) {
        this.isShowSearchHistory = true
      } else if (this.searchValue.length !== 0) {
        this.getRecommendKeywordList()
      }
    },
    handleInputChange () {
      if (this.searchValue.trim().length === 0) {
        this.isShowSearchHistory = true
        this.isShowRecommendKeyword = false
        return
      }

      this.isShowSearchHistory = false

      this.getRecommendKeywordList()
    },
    getRecommendKeywordList () {
      listRecommendKeyword(this.searchValue).then(resp => {
        this.recommendKeywordList = resp.data
        if(this.recommendKeywordList.length !== 0) {
          this.isShowRecommendKeyword = true
        }
      })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
.logo {
  font-size: 50px;
  color: #0084ff;
}
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
.footer {
  line-height: 60px;
  text-align: right;
}
.AppHeader-inner {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 1032px;
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
.Tabs-link {
    position: relative;
    display: inline-block;
    padding: 14px 0;
    font-size: 16px;
    line-height: 22px;
    color: #1a1a1a;
    text-align: center;
}
.Tabs-link.is-active {
    font-weight: 600;
    font-synthesis: style;
}
.Tabs-link.is-active:after {
    position: absolute;
    right: 0;
    bottom: -1px;
    left: 0;
    height: 3px;
    background: #0084ff;
    content: "";
}
.AppHeader-TabsLink {
    color: #8590a6;
    font-size: 15px;
}
.AppHeader-TabsLink.is-active {
    color: #444;
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
    width: 408px;
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
.SearchAndHistory {
  display: flex;
  flex-direction: column;
}
.HistoryList {
  width: 396px;
  margin-left: 12px;
  position: fixed;
  z-index: 2000;
  margin-top: 43px;
}

.HistoryList-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 15px;
  margin-top: 5px;
}
.HistoryItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 9px 15px;
}
// 鼠标悬停改变背景颜色
.HistoryItem:hover {
  background-color: #f6f6f6;
}
.MoreHistory {
  display: flex;
  justify-content: flex-end;
  margin-right: 15px;
}
</style>
