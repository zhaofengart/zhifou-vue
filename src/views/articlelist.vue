<template>
  <div class="container">
    <!-- 页面头部 -->
    <IndexHeader></IndexHeader>

    <!-- 主要内容 -->
    <div class="my-main">
      <div class="TopStory-container">
        <div class="Topstory-mainColumn">
          <div class="Topstory-mainColumnCard">
            <el-card>
              <div slot="header" class="List-header">
                <el-radio-group v-model="queryParam.sort" @change="handleAnswerSortChange">
                  <el-radio :label="1">按热度排序</el-radio>
                  <el-radio :label="2">按时间排序</el-radio>
                </el-radio-group>
              </div>
              <div class="TopstoryItem TopstoryItem-isRecommend"  v-for="(item,index) in pageClassInfo.list" :key="index">
                <h2 class="ContentItem-title">
                  <!-- 文章标题 -->
                  <router-link :to="{path: '/article', query: {articleId: item.id}}" target="_blank">
                    <span v-html="item.title"></span>
                  </router-link>
                </h2>
                <div class="ContentItem-meta">
                  <div class="AuthorInfo AnswerItem-authorInfo AnswerItem-authorInfo--related">
                    <el-avatar shape="circle" size="large" :src="item.author.avatar"></el-avatar>
                    <div class="AuthorInfo-content">
                      <span class="AuthorInfo-name">{{item.author.name}}</span>
                      <div class="AuthorInfo-job">
                        <span>{{item.author.job}}</span>
                      </div>
                    </div>
                    <span>{{parseTime(item.createTime)}}</span>
                  </div>
                </div>
                <div class="RichContent-inner">
                  {{item | explainLen}}
                  <a class="ztext"  v-show="item.content.length >= 50"
                     style="color: #1890ff;"
                     @click="handleAllMessage(item.id)">...>>阅读全文
                  </a>
                </div>
                <div class="RichContent">
                  <div class="ContentItem-actions">
                    <button style="margin-left: 5px" type="button" class="Button ContentItem-action Button--plain" @click="handlevisible(item,$event)">
                      <span style="display: inline-flex; align-items: center;">​
                        <svg-icon icon-class="comment"></svg-icon>
                      </span>
                      200条评论
                    </button>
                    <button type="button" class="Button ContentItem-action Button--plain" style="display: flex">
                      <span style="display: inline-flex; align-items: center;margin-top: 2px">
                        <svg-icon icon-class="collect"></svg-icon>
                      </span>
                      100收藏
                    </button>
                    <button type="button" class="Button ContentItem-action Button--plain"style="display: flex">
                      <span style="display: inline-flex; align-items: center;margin-top: 2px">
                        <svg-icon icon-class="like"></svg-icon>
                      </span>
                      50喜欢
                    </button>
                  </div>
                  <div v-for="item1 in pageClassInfo.commentlist" :key="item1.id">
                    <div style="display: none" :id="item.id" >
                      <div class="ContentItem-meta">
                        <div class="AuthorInfo AnswerItem-authorInfo AnswerItem-authorInfo--related">
                          <el-avatar shape="circle" size="large" :src="item1.author.avatar"></el-avatar>
                          <div class="AuthorInfo-content">
                            <span class="AuthorInfo-name">{{item1.author.name}}</span>
                            <div class="AuthorInfo-job">
                              <span>{{item1.author.job}}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="RichContent-inner">
                        {{item1 | explainLen}}
                        <a class="ztext"  v-show="item1.content.length >= 20"
                           style="color: #1890ff;"
                           @click.stop="togglePickUp(item1,$event)">{{item1.isExpand?'　收起':'...全文'}}
                        </a>
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
                  :current-page="queryParam.pageNum"
                  :page-size="queryParam.pageSize"
                  :total="pageClassInfo.total"
                  @current-change="handleChangePageNum">
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
</template>


<script>
  import QuickEntry from '@/components/QuickEntry'
  import Leaderboard from '@/components/Leaderboard'
  import { articlelist } from '@/api/class'
  import classDetail from "./classDetail";

  export default {
    components: {
      Leaderboard,
      QuickEntry
    },
    data () {
      return {
        queryParam: {
          searchTitle: '',
          sort: 1,
          pageNum: 1,
          pageSize: 10
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
              content: '智能指针：auto-ptr，shared-ptr，weak-ptr,由于 C++ 语言没有自动内存回收机制，程序员每次 new 出来的内存都要手动 delete。程序员忘记 delete，流程太复杂，最终导致没有 delete，异常导致程序过早退出，没有执行 delete 的情况并不罕见。\n' +
                '\n' +
                '用智能指针便可以有效缓解这类问题，本文主要讲解参见的智能指针的用法。包括：std::auto_ptr、boost::scoped_ptr、boost::shared_ptr、boost::scoped_array、boost::shared_array、boost::weak_ptr、boost::intrusive_ptr。你可能会想，如此多的智能指针就为了解决new、delete匹配问题，真的有必要吗？看完这篇文章后，我想你心里自然会有答案。\n' +
                '\n' +
                '    下面就按照顺序讲解如上 7 种智能指针（smart_ptr）,智能指针：auto-ptr，shared-ptr，weak-ptr,由于 C++ 语言没有自动内存回收机制，程序员每次 new 出来的内存都要手动 delete。程序员忘记 delete，流程太复杂，最终导致没有 delete，异常导致程序过早退出，没有执行 delete 的情况并不罕见。\n' +
                '\n' +
                '用智能指针便可以有效缓解这类问题，本文主要讲解参见的智能指针的用法。包括：std::auto_ptr、boost::scoped_ptr、boost::shared_ptr、boost::scoped_array、boost::shared_array、boost::weak_ptr、boost::intrusive_ptr。你可能会想，如此多的智能指针就为了解决new、delete匹配问题，真的有必要吗？看完这篇文章后，我想你心里自然会有答案。\n' +
                '\n' +
                '    下面就按照顺序讲解如上 7 种智能指针（smart_ptr）,智能指针：auto-ptr，shared-ptr，weak-ptr,由于 C++ 语言没有自动内存回收机制，程序员每次 new 出来的内存都要手动 delete。程序员忘记 delete，流程太复杂，最终导致没有 delete，异常导致程序过早退出，没有执行 delete 的情况并不罕见。\n' +
                '\n' +
                '用智能指针便可以有效缓解这类问题，本文主要讲解参见的智能指针的用法。包括：std::auto_ptr、boost::scoped_ptr、boost::shared_ptr、boost::scoped_array、boost::shared_array、boost::weak_ptr、boost::intrusive_ptr。你可能会想，如此多的智能指针就为了解决new、delete匹配问题，真的有必要吗？看完这篇文章后，我想你心里自然会有答案。\n' +
                '\n' +
                '    下面就按照顺序讲解如上 7 种智能指针（smart_ptr）,智能指针：auto-ptr，shared-ptr，weak-ptr,由于 C++ 语言没有自动内存回收机制，程序员每次 new 出来的内存都要手动 delete。程序员忘记 delete，流程太复杂，最终导致没有 delete，异常导致程序过早退出，没有执行 delete 的情况并不罕见。\n' +
                '\n' +
                '用智能指针便可以有效缓解这类问题，本文主要讲解参见的智能指针的用法。包括：std::auto_ptr、boost::scoped_ptr、boost::shared_ptr、boost::scoped_array、boost::shared_array、boost::weak_ptr、boost::intrusive_ptr。你可能会想，如此多的智能指针就为了解决new、delete匹配问题，真的有必要吗？看完这篇文章后，我想你心里自然会有答案。\n' +
                '\n' +
                '    下面就按照顺序讲解如上 7 种智能指针（smart_ptr）,智能指针：auto-ptr，shared-ptr，weak-ptr,由于 C++ 语言没有自动内存回收机制，程序员每次 new 出来的内存都要手动 delete。程序员忘记 delete，流程太复杂，最终导致没有 delete，异常导致程序过早退出，没有执行 delete 的情况并不罕见。\n' +
                '\n' +
                '用智能指针便可以有效缓解这类问题，本文主要讲解参见的智能指针的用法。包括：std::auto_ptr、boost::scoped_ptr、boost::shared_ptr、boost::scoped_array、boost::shared_array、boost::weak_ptr、boost::intrusive_ptr。你可能会想，如此多的智能指针就为了解决new、delete匹配问题，真的有必要吗？看完这篇文章后，我想你心里自然会有答案。\n' +
                '\n' +
                '    下面就按照顺序讲解如上 7 种智能指针（smart_ptr）',
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
              content: '智能指针：auto-ptr，shared-ptr，weak-ptr,由于 C++ 语言没有自动内存回收机制，程序员每次 new 出来的内存都要手动 delete。程序员忘记 delete，流程太复杂，最终导致没有 delete，异常导致程序过早退出，没有执行 delete 的情况并不罕见。\n' +
                '\n' +
                '用智能指针便可以有效缓解这类问题，本文主要讲解参见的智能指针的用法。包括：std::auto_ptr、boost::scoped_ptr、boost::shared_ptr、boost::scoped_array、boost::shared_array、boost::weak_ptr、boost::intrusive_ptr。你可能会想，如此多的智能指针就为了解决new、delete匹配问题，真的有必要吗？看完这篇文章后，我想你心里自然会有答案。\n' +
                '\n' +
                '    下面就按照顺序讲解如上 7 种智能指针（smart_ptr）,智能指针：auto-ptr，shared-ptr，weak-ptr,由于 C++ 语言没有自动内存回收机制，程序员每次 new 出来的内存都要手动 delete。程序员忘记 delete，流程太复杂，最终导致没有 delete，异常导致程序过早退出，没有执行 delete 的情况并不罕见。\n' +
                '\n' +
                '用智能指针便可以有效缓解这类问题，本文主要讲解参见的智能指针的用法。包括：std::auto_ptr、boost::scoped_ptr、boost::shared_ptr、boost::scoped_array、boost::shared_array、boost::weak_ptr、boost::intrusive_ptr。你可能会想，如此多的智能指针就为了解决new、delete匹配问题，真的有必要吗？看完这篇文章后，我想你心里自然会有答案。\n' +
                '\n' +
                '    下面就按照顺序讲解如上 7 种智能指针（smart_ptr）,智能指针：auto-ptr，shared-ptr，weak-ptr,由于 C++ 语言没有自动内存回收机制，程序员每次 new 出来的内存都要手动 delete。程序员忘记 delete，流程太复杂，最终导致没有 delete，异常导致程序过早退出，没有执行 delete 的情况并不罕见。\n' +
                '\n' +
                '用智能指针便可以有效缓解这类问题，本文主要讲解参见的智能指针的用法。包括：std::auto_ptr、boost::scoped_ptr、boost::shared_ptr、boost::scoped_array、boost::shared_array、boost::weak_ptr、boost::intrusive_ptr。你可能会想，如此多的智能指针就为了解决new、delete匹配问题，真的有必要吗？看完这篇文章后，我想你心里自然会有答案。\n' +
                '\n' +
                '    下面就按照顺序讲解如上 7 种智能指针（smart_ptr）,智能指针：auto-ptr，shared-ptr，weak-ptr,由于 C++ 语言没有自动内存回收机制，程序员每次 new 出来的内存都要手动 delete。程序员忘记 delete，流程太复杂，最终导致没有 delete，异常导致程序过早退出，没有执行 delete 的情况并不罕见。\n' +
                '\n' +
                '用智能指针便可以有效缓解这类问题，本文主要讲解参见的智能指针的用法。包括：std::auto_ptr、boost::scoped_ptr、boost::shared_ptr、boost::scoped_array、boost::shared_array、boost::weak_ptr、boost::intrusive_ptr。你可能会想，如此多的智能指针就为了解决new、delete匹配问题，真的有必要吗？看完这篇文章后，我想你心里自然会有答案。\n' +
                '\n' +
                '    下面就按照顺序讲解如上 7 种智能指针（smart_ptr）,智能指针：auto-ptr，shared-ptr，weak-ptr,由于 C++ 语言没有自动内存回收机制，程序员每次 new 出来的内存都要手动 delete。程序员忘记 delete，流程太复杂，最终导致没有 delete，异常导致程序过早退出，没有执行 delete 的情况并不罕见。\n' +
                '\n' +
                '用智能指针便可以有效缓解这类问题，本文主要讲解参见的智能指针的用法。包括：std::auto_ptr、boost::scoped_ptr、boost::shared_ptr、boost::scoped_array、boost::shared_array、boost::weak_ptr、boost::intrusive_ptr。你可能会想，如此多的智能指针就为了解决new、delete匹配问题，真的有必要吗？看完这篇文章后，我想你心里自然会有答案。\n' +
                '\n' +
                '    下面就按照顺序讲解如上 7 种智能指针（smart_ptr）',
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
    created () {
      this.handleGetArticleList()
    },
    methods: {
      handleGetArticleList () {
        articlelist(this.queryParam).then(resp => {
          this.pageClassInfo = resp.data
        })
      },
      handleChangePageNum (currentPage) {
        this.queryParam.pageNum = currentPage
        this.handleGetArticleList()
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
          target.style.height = "3rem";//收起状态的容器高度

        }
      },
      handleAllMessage (articleID) {
        let routerdata = this.$router.resolve({path:'classDetail',query:{articleId: articleID}})
        window.open(routerdata.href,'_blank')
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
      }
    },
    filters: {
      explainLen: function (item) {
        if (!item.content) return;
        if (item.isExpand) {
          return item.content.substr(0, item.content.length);//字符串截取
        } else {
          return item.content.substr(0, 50);//字符串截取100个字
        }
      }
    }
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
  .Topstory-mainColumnCard {
    -webkit-box-shadow: 0 1px 3px rgba(26,26,26,.1);
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
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
  .RichContent-inner {
    margin-top: 20px;
    margin-bottom: -4px;
    overflow: hidden;
  }
  .RichContent.is-collapsed .RichContent-inner {
    max-height: 100px;
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
  .List-header {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: flex-end;
    -webkit-box-align: center;
    align-items: center;
    height: 50px;
    margin: 0 20px;
    // border-bottom: 1px solid #f6f6f6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>
