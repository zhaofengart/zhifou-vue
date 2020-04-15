<template>
  <div>
    <header class="AppHeader">
      <div class="AppHeader-inner">
        <a href="/" aria-label="知否" class="logo">
          <svg-icon icon-class="zhifou-logo"></svg-icon>
        </a>
        <ul class="AppHeader-Tabs">
          <li class="Tabs-item AppHeader-Tab">
            <a class="Tabs-link AppHeader-TabsLink" href="/index2">首页</a>
          </li>
          <li class="Tabs-item AppHeader-Tab">
            <a class="Tabs-link AppHeader-TabsLink" href="">文章</a>
          </li>
        </ul>

        <!-- 搜索部分 -->
        <div class="SearchBar">
          <label class="SearchBar-input">
            <el-input v-model="searchValue" size="medium" type="text" maxlength="100" auto-complete="off" placeholder="请输入搜索内容" @keyup.enter.native="handleSearch">
            <el-button slot="append" icon="el-icon-search" class="SearchBar-searchButton" @click="handleSearch"></el-button>
            </el-input>
          </label>
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
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      searchValue: '',
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
    }
  },
  methods: {
    handleSearch () {
      if (this.searchValue !== '') {
        // 保存为历史记录
        this.$store.dispatch("addHistory", this.searchValue)   
        // 打印历史记录  
        console.log(this.historyList)

      }
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
    width: 432px;
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
