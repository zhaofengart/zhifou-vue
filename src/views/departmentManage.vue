<template>
  <div class="container">
    <header class="AppHeader">
      <div class="AppHeader-inner">
        <a href="/" aria-label="知否" class="logo">
          <svg-icon icon-class="zhifou-logo"></svg-icon>
        </a>
      </div>
    </header>

    <div class="Notification-main">
      <div class="TopStory-container">
        <div class="Topstory-mainColumn">
          <div class="Topstory-mainColumnCard">
            <el-card>
              <div slot="header" class="TopstoryTabsHeader" style="height: 55px">
                <el-button type="primary" class="SearchBar-askButton" style="margin-top: 11px;width: 80px" @click="handleAddDepartment">新增部门</el-button>
                <div class="SearchBar">
                  <div class="SearchAndHistory">
                    <label class="SearchBar-input">
                      <el-input v-model="searchValue" clearable size="medium" type="text" maxlength="100" auto-complete="off" placeholder="请输入部门">
                        <el-button slot="append" icon="el-icon-search" class="SearchBar-searchButton" @click="handleSearch"></el-button>
                      </el-input>
                    </label>
                  </div>
                </div>
              </div>
              <div v-for="item in departmentInfo.departmentlist">
                <div class="TopstoryItem TopstoryItem-isRecommend">
                  <div class="RichContent-inner">
                    <router-link style="margin-top: 13px;margin-left: 10px" target="_blank" :to="{path: 'stationManage',query: {departmentName:item.name}}">{{item.name}}</router-link>
                    <el-row>
                      <el-button title="编辑" @click="edit(item.name)" style="margin-left: 300px;" type="primary" icon="el-icon-edit" circle></el-button>
                      <el-button title="删除" @click="handledelete(item.name)" type="danger" icon="el-icon-delete" circle></el-button>
                    </el-row>
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
  import {addDepartment, deleteDepartment, editdepartment, getDepartmentList} from "../api/manage";

  export default {
    components: {
      IndexHeader
    },
    data () {
      return {
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
        departmentInfo: {
          departmentlist: [{
            name: "AMI分布式系统基础平台",
          },{
            name: "ATP华锐核心交易平台",
          },{
            name: "ARC华锐实时风控平台",
          },{
            name: "AMD华锐高速行情平台",
          },{
            name: "ATH华锐高速交易总线",
          }]
        },



        activeName: 'second'
      }
    },
    computed: {

    },
    created() {
      this.getDepartmentList()
    },
    methods: {
      getDepartmentList() {
        getDepartmentList().then(resp => {
          this.departmentInfo = resp.data
        })
      },
      edit(name) {
        this.$prompt('修改部门名称', '编辑', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
            editdepartment(name,value).then(() => {
              this.getDepartmentList()
              this.$message({
                type: 'success',
                message: '编辑成功!'
              });
            })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      },
      handledelete(name) {
        this.$confirm('确认删除?', '确认', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            deleteDepartment(name).then(() => {
            this.getDepartmentList()
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
            })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      handleAddDepartment() {
        this.$prompt('新增部门', '输入名称', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          addDepartment(value).then(() => {
            this.getDepartmentList()
            this.$message({
              type: 'success',
              message: '新增成功!'
            });
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
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
    display: flex;
    flex-direction: row;
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
    margin-left: 300px;
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
