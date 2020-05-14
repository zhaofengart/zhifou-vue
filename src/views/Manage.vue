<template>
  <div class="container">
    <header class="AppHeader">
      <div class="AppHeader-inner">
        <a href="/" aria-label="知否" class="logo">
          <svg-icon icon-class="zhifou-logo"></svg-icon>
        </a>
        <div class="SearchBar">
          <label class="SearchBar-input">
            <el-input v-model="searchValue" clearable size="medium" type="text" maxlength="100" auto-complete="off" placeholder="请输入成员姓名">
              <el-button slot="append" icon="el-icon-search" class="SearchBar-searchButton" @click="handleSearch"></el-button>
            </el-input>
          </label>
        </div>
      </div>
    </header>

    <div class="Notification-main">
      <div class="TopStory-container">
        <div class="Topstory-mainColumn">
          <div class="Topstory-mainColumnCard">
            <el-card>
              <div slot="header" class="TopstoryTabsHeader">
                <a href="/Manage" style="border-bottom: 1px solid #e6ebf5;border-radius: 0;height: 60px;vertical-align: middle;display: table-cell;padding: 20px">全部成员</a>
                <el-button @click="handleManageBtn" type="primary" class="SearchBar-askButton" style="margin-left: 300px;margin-top: 12px">管理</el-button>
                <el-select style="width: 80px;margin-left: 20px;margin-top: 10px" v-model="value" placeholder="部门" @change="handleChangeDepartment">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <el-select style="width: 80px;margin-left: 20px;margin-top: 10px" v-model="value1" placeholder="岗位">
                  <el-option
                    v-for="item1 in options1"
                    :key="item1.value"
                    :label="item1.label"
                    :value="item1.value">
                  </el-option>
                </el-select>
              </div>
              <div v-for="item in memberInfo.memberlist" :key="item.id" @change="handleChangeStation">
                <div class="TopstoryItem TopstoryItem-isRecommend">
                  <div class="RichContent-inner">
                    <div style="display: flex">
                      <el-avatar shape="circle" size="large" :src="item.avatar"></el-avatar>
                      <router-link style="margin-left: 10px;margin-top: 13px" :to="{path: '/profile', query: {memberId: item.id}}" target="_blank" >{{item.name}}</router-link>
                    </div>
                    <el-button @click="handleLogout(item.id)"  type="primary" plain>注销</el-button>
                  </div>
                </div>
              </div>
            </el-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import IndexHeader from '@/components/IndexHeader'
  import { Message } from 'element-ui'
  import {deletemember, memberlist, searchMember} from "../api/manage";

  export default {
    components: {
      IndexHeader
    },
    data () {
      return {
        queryParam: {
          sort: 1,
          pageNum: 1,
          pageSize: 10
        },
        searchValue: "",
        options: [{
          value: '选项1',
          label: 'ATP'
        }, {
          value: '选项2',
          label: 'AMI'
        }, {
          value: '选项3',
          label: 'ARC'
        }, {
          value: '选项4',
          label: 'ATH'
        }, {
          value: '选项5',
          label: 'AMD'
        }],
        value: '',
        options1: [{
          value: '选项1',
          label: 'C++'
        }, {
          value: '选项2',
          label: 'JAVA'
        }, {
          value: '选项3',
          label: '测试'
        }, {
          value: '选项4',
          label: '前端'
        }, {
          value: '选项5',
          label: 'C#'
        }],
        value1: '',
        memberInfo: {
          total: 60,
          totalPage: 10,
          memberlist: [{
            id: 123,
            name: "姓名一",
            avatar: "https://pic4.zhimg.com/da8e974dc_is.jpg",
            department: "AMI",
            station: "C++"
          },{
            id: 456,
            name: "姓名二",
            avatar: "https://pic4.zhimg.com/da8e974dc_is.jpg",
            department: "AMI",
            station: "C++"
          },{
            id: 789,
            name: "姓名三",
            avatar: "https://pic4.zhimg.com/da8e974dc_is.jpg",
            department: "AMI",
            station: "C++"
          }]
        },
        activeName: 'second'
      }
    },
    computed: {

    },
    created() {
      this.handleGetMemberList()
    },
    methods: {
      handleGetMemberList () {
        memberlist(this.queryParam).then(resp => {
          this.memberInfo = resp.data
        })
      },
      handleLogout(id) {
        deletemember(id).then(resp => {
          Message.success("注销成功")
          this.handleGetMemberList()
        })
      },
      handleManageBtn() {
        let routedata = this.$router.resolve('/departmentManage')
        window.open(routedata.href,'_blank')
      },
      handleSearch() {
        searchMember(this.searchValue).then(resp => {
          this.memberInfo.memberlist = resp.data
        })
      },
      handleChangeDepartment() {
        for(i = 0;i < this.memberInfo.memberlist.length;i ++)
        {
          if(this.memberInfo.memberlist[i].department === this.value)
          {

          }
          else{
            this.memberInfo.memberlist.remove(i)
          }
        }
      },
      handleChangeStation() {
        for(i = 0;i < this.memberInfo.memberlist.length;i ++)
        {
          if(this.memberInfo.memberlist[i].station === this.value1)
          {

          }
          else{
            this.memberInfo.memberlist.remove(i)
          }
        }
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

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
  .Topstory-mainColumnCard {
    -webkit-box-shadow: 0 1px 3px rgba(26,26,26,.1);
    box-shadow: 0 1px 3px rgba(26,26,26,.1);

  }
  .TopstoryTabsHeader {
    display: flex;
    flex-direction: row;
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
  .RichContent-inner {
    margin-top: -10px;
    margin-bottom: -4px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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

  .SearchBar {
    display: flex;
    align-items: center;
    margin-left: 212px;
  }

  .SearchBar-input {
    width: 408px;
    height: 34px;
    padding-left: 12px;
    padding-right: 0;
    // -webkit-transition: width .2s ease,background .3s ease;
    // transition: width .2s ease,background .3s ease;
  }

  .logo {
    font-size: 50px;
    color: #0084ff;
    margin-left: 160px;
  }

</style>
