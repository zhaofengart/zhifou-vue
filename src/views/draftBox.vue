<template>
  <div>
    <IndexHeader></IndexHeader>
    <div class="Draft-main">
      <el-card class="DraftMain">
        <div class="DraftMain-header">
          <el-tabs v-model="activeTab" @tab-click="handleClickTab">
            <el-tab-pane label="回答草稿" name="answer" >
              <div class="List-item" v-for="item in answerDraftList" :key="item.id">
                <h2 class="ContentItem-title">
                  <div class="QuestionItem-title">
                    <!-- <a href="">{{item.question.title}}</a> -->
                    <router-link :to="{path: '/question', query: {questionId: item.question.id}}" target="_blank">
                      <span @click="handleWriteAnswer">{{item.question.title}}</span>
                    </router-link>
                  </div>
                </h2>
              </div>
              <!-- 回答草稿分页 -->
              <div class="Pagination">
                <el-pagination
                  background
                  layout="prev, pager, next"
                  :current-page.sync="queryParams.pageNum"
                  :page-size.sync="queryParams.pageSize"
                  :total="answerDraftTotal"
                  @current-change="getAnswerDraftList">
                </el-pagination>
              </div>
            </el-tab-pane>
            <el-tab-pane label="文章草稿" name="article" >
              <div class="List-item" v-for="item in articleDraftList" :key="item.id">
                <h2 class="ContentItem-title">
                  <div class="QuestionItem-title">
                    <a href="">{{item.title}}</a>
                  </div>
                </h2>
              </div>
              <!-- 文章草稿分页 -->
              <div class="Pagination">
                <el-pagination
                  background
                  layout="prev, pager, next"
                  :current-page.sync="queryParams.pageNum"
                  :page-size.sync="queryParams.pageSize"
                  :total="articleDraftTotal"
                  @current-change="getArticleDraftList">
                </el-pagination>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
import { listAnswerDraft } from '@/api/answer'
import { listArticleDraft } from '@/api/class'

export default {
  data () {
    return {
      activeTab: 'answer',
      queryParams: {
        sort: 1,
        pageNum: 1,
        pageSize: 10
      },
      answerDraftTotal: 0,
      answerDraftList: [],
      articleDraftTotal: 0,
      articleDraftList: []
    }
  },
  created () {
    this.getAnswerDraftList()
  },
  methods: {
    handleClickTab (tab, event) {
      console.log(tab, event);
      this.resetQueryParams()
      if (tab.name === 'answer') {
        this.getAnswerDraftList()
      } else if (tab.name === 'article') {
        this.getArticleDraftList()
      } 
    },
    resetQueryParams () {
      this.queryParams = {
        sort: 1,
        pageNum: 1,
        pageSize: 10
      }
    },
    getAnswerDraftList () {
      listAnswerDraft(this.queryParams).then(resp => {
        console.log(resp.data)
        this.answerDraftTotal = resp.data.total
        this.answerDraftList = resp.data.list
      })
    },
    getArticleDraftList () {
      listArticleDraft(this.queryParams).then(resp => {
        this.articleDraftTotal = resp.data.total
        this.articleDraftList = resp.data.list
      })
    },
    handleWriteAnswer () {
      localStorage.setItem('write', true)
    }
  }
}
</script>
<style scoped>
.Draft-main {
  display: flex;
  width: 1032px;
  min-height: 100vh;
  padding: 0 16px;
  /* margin: 10px auto; */
  margin: 62px auto 10px auto;
  justify-content: space-between;
  align-items: flex-start;
}
.DraftMain {
  width: 100%;
  overflow: initial;
}
.DraftMain .el-card {
  box-shadow: none;
}

.DraftMain-header {
  margin: 5px 20px;
}
.List-item {
  position: relative;
  padding: 16px 20px;
  border-bottom: 1px solid #e6ebf5;
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
.QuestionItem-title {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.Pagination {
  margin: 15px auto;
  text-align: center;
}
</style>
