<template>
  <div>
    <IndexHeader></IndexHeader>
    <div class="main">
      <div class="QuestionPage">
        <div class="QuestionHeader">
          <!-- 文章简要信息 -->
          <div class="QuestionHeader-content">
            <div class="QuestionHeader-main">
              <h1 class="QuestionHeader-title">美国现在的疫情发展到什么程度了？</h1>
              <div>
                <div class="QuestionHeader-detail">
                  <div class="QuestionRichText QuestionRichText--expandable QuestionRichText--collapsed">
                    <div>
                      <span class="RichText ztext" itemprop="text">
                        有在美国的朋友说一下啊 相关问题
                        <a href="https://www.zhihu.com/question/379442271" class="internal" data-za-detail-view-id="1043">法国疫情现在发展到什么程度了？</a>…
                      </span>
                      <button type="button" class="Button QuestionRichText-more Button--plain">
                        显示全部 
                        <span style="display: inline-flex; align-items: center;">
                          ​<svg class="Zi Zi--ArrowDown" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                            <path d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z" fill-rule="evenodd"></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 右边的信息 -->
            <div class="QuestionHeader-side">
              <div class="NumberBoard QuestionFollowStatus-counts NumberBoard--divider">
                <div class="NumberBoard-item">
                  <div class="NumberBoard-itemInner">
                    <el-avatar shape="circle" size="large"></el-avatar>
                    <div class="NumberBoard-itemName">姓名</div>
                  </div>
                </div>
                <div class="NumberBoard-item">
                  <div class="NumberBoard-itemInner">
                    <strong class="NumberBoard-itemValue" title="123">123</strong>
                    <div class="NumberBoard-itemName">被回答</div>
                  </div>
                </div>
                <div class="NumberBoard-item">
                  <div class="NumberBoard-itemInner">
                    <strong class="NumberBoard-itemValue" title="31911735">31,911,735</strong>
                    <div class="NumberBoard-itemName">浏览量</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 操作 -->
          <div class="QuestionHeader-footer">
            <div class="QuestionHeader-footer-inner">
              <div class="QuestionHeader-main QuestionHeader-footer-main">
                <div class="QuestionButtonGroup">
                  <el-button class="Button Button--blue Button--primary FollowButton">关注问题</el-button>
                  <el-button plain class="Button Button--blue" icon="el-icon-edit">写回答</el-button>
                </div>
                <div class="QuestionHeaderActions">
                  <el-button class="Button Button--grey">
                    <svg-icon icon-class="invite"></svg-icon>邀请回答
                  </el-button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 回答列表 -->
        <div class="Question-main">
          <div class="Question-mainColumn">
            <div>
              <!-- 下面这一行不知道有什么用 -->
              <div class="QuestionAnswers-statusWrapper"></div>
              <div class="QuestionAnswers-answers">
                <el-card>
                  <!-- 回答头部 -->
                  <div slot="header" class="List-header">
                    <el-radio-group v-model="sortType">
                      <el-radio :label="1">按热度排序</el-radio>
                      <el-radio :label="2">按时间排序</el-radio>
                    </el-radio-group>
                  </div>

                  <!-- 回答内容列表 -->
                  <div class="List-item" v-for="i in (1, 5)" :key="i">
                    <div class="ContentItem AnswerItem">
                      <!-- 回答者信息及回答时间 -->
                      <div class="ContentItem-meta">
                        <div class="AuthorInfo AnswerItem-authorInfo AnswerItem-authorInfo--related">
                          <el-avatar shape="square" size="large"></el-avatar>
                          <div class="AuthorInfo-content">
                            <div class="AuthorInfo-head">
                              <span class="AuthorInfo-name">小小猪排酱中游</span>
                            </div>
                            <div class="AuthorInfo-job">
                              <span>Java开发</span>
                            </div>
                          </div>
                          <div class="publishTime">
                            <span>2020-4-2 13:50</span>
                          </div>
                        </div>
                      </div>
                      <div class="RichContent is-collapsed RichContent--unescapable">
                        <!-- 回答内容 -->
                        <div class="RichContent-inner" style="max-height: 400px;">
                          <span class="RichText ztext CopyrightRichText-richText">
                            <span class="RichText ztext CopyrightRichText-richText" itemprop="text"><p>看评论感觉自己是半个知乎er了……</p><p>人在美国，刚下飞机，新闻上见……</p><p class="ztext-empty-paragraph"><br></p><p>我因为戴口罩上了新闻……</p><p>啥程度是不知道，反正大家没当回事儿……</p><figure data-size="normal"><noscript><img src="https://pic3.zhimg.com/50/v2-3ef547f0fa61cc683c7a168b6dcd7c30_hd.jpg" data-rawwidth="1334" data-rawheight="750" data-size="normal" data-default-watermark-src="https://pic3.zhimg.com/50/v2-a8474d4d2217578377bb0d0a4ba11320_hd.jpg" class="origin_image zh-lightbox-thumb" width="1334" data-original="https://pic3.zhimg.com/v2-3ef547f0fa61cc683c7a168b6dcd7c30_r.jpg"/></noscript><img src="https://pic3.zhimg.com/80/v2-3ef547f0fa61cc683c7a168b6dcd7c30_720w.jpg" data-rawwidth="1334" data-rawheight="750" data-size="normal" data-default-watermark-src="https://pic3.zhimg.com/50/v2-a8474d4d2217578377bb0d0a4ba11320_hd.jpg" class="origin_image zh-lightbox-thumb lazy" width="1334" data-original="https://pic3.zhimg.com/v2-3ef547f0fa61cc683c7a168b6dcd7c30_r.jpg" data-actualsrc="https://pic3.zhimg.com/50/v2-3ef547f0fa61cc683c7a168b6dcd7c30_hd.jpg" data-lazy-status="ok"></figure><p>居然一下子有这么多人点赞……</p><p>其实每天学校都会发跟踪报道让我们不用担心……然而是真的害怕……</p><p>本来春假打算去特区和女朋友度假来着，看样子也凉凉了，不知道啥时候能见面……</p><p>可惜了机票酒店钱啊啊啊啊</p><p class="ztext-empty-paragraph"><br></p><p>3.10更新</p><p>哈佛麻省理工都停课了，本科生直接回家过暑假，研究生在家待命。不过大概率我们也快停课了……哭泣</p><p class="ztext-empty-paragraph"><br></p><p>半夜更新</p><p>我们也停课了，春假延长到了25号，春假结束后开始上网课。学校强烈建议不要出去旅游。</p><p>美帝虽然喊病毒不可怕喊得比谁都凶，但封城停课干得比谁都快……</p><p class="ztext-empty-paragraph"><br></p><a target="_blank" href="https://www.zhihu.com/question/377935555/answer/1071392085" data-draft-node="block" data-draft-type="link-card" data-image="https://pic3.zhimg.com/v2-cda12e99791d73e72da5947ebf03a46e_120x160.jpg" data-image-width="750" data-image-height="1334" class="LinkCard LinkCard--hasImage"><span class="LinkCard-backdrop" style="background-image:url(https://pic3.zhimg.com/v2-cda12e99791d73e72da5947ebf03a46e_120x160.jpg)"></span><span class="LinkCard-content"><span class="LinkCard-text"><span class="LinkCard-title" data-text="true">美国疫情有可能超越中国吗？</span><span class="LinkCard-meta"><span style="display:inline-flex;align-items:center">​<svg class="Zi Zi--InsertLink" fill="currentColor" viewBox="0 0 24 24" width="17" height="17"><path d="M6.77 17.23c-.905-.904-.94-2.333-.08-3.193l3.059-3.06-1.192-1.19-3.059 3.058c-1.489 1.489-1.427 3.954.138 5.519s4.03 1.627 5.519.138l3.059-3.059-1.192-1.192-3.059 3.06c-.86.86-2.289.824-3.193-.08zm3.016-8.673l1.192 1.192 3.059-3.06c.86-.86 2.289-.824 3.193.08.905.905.94 2.334.08 3.194l-3.059 3.06 1.192 1.19 3.059-3.058c1.489-1.489 1.427-3.954-.138-5.519s-4.03-1.627-5.519-.138L9.786 8.557zm-1.023 6.68c.33.33.863.343 1.177.029l5.34-5.34c.314-.314.3-.846-.03-1.176-.33-.33-.862-.344-1.176-.03l-5.34 5.34c-.314.314-.3.846.03 1.177z" fill-rule="evenodd"></path></svg></span>www.zhihu.com</span></span><span class="LinkCard-imageCell"><img class="LinkCard-image LinkCard-image--vertical" alt="图标" src="https://pic3.zhimg.com/v2-cda12e99791d73e72da5947ebf03a46e_120x160.jpg"></span></span></a><p>以及这是我的一点看法。</p><p>3.25更新</p><figure data-size="normal"><noscript><img src="https://pic3.zhimg.com/50/v2-e1c39e378441e2a7b27180a291d5b0c9_hd.jpg" data-rawwidth="750" data-rawheight="1334" data-size="normal" data-default-watermark-src="https://pic2.zhimg.com/50/v2-e744726c46b37d565727644fd050ef82_hd.jpg" class="origin_image zh-lightbox-thumb" width="750" data-original="https://pic3.zhimg.com/v2-e1c39e378441e2a7b27180a291d5b0c9_r.jpg"/></noscript><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='750' height='1334'></svg>" data-rawwidth="750" data-rawheight="1334" data-size="normal" data-default-watermark-src="https://pic2.zhimg.com/50/v2-e744726c46b37d565727644fd050ef82_hd.jpg" class="origin_image zh-lightbox-thumb lazy" width="750" data-original="https://pic3.zhimg.com/v2-e1c39e378441e2a7b27180a291d5b0c9_r.jpg" data-actualsrc="https://pic3.zhimg.com/50/v2-e1c39e378441e2a7b27180a291d5b0c9_hd.jpg"></figure><p>校园被改成野战医院了 </p></span>
                          </span>
                        </div>
                        <!-- 展开阅读全文 -->
                        <button type="button" class="Button ContentItem-rightButton ContentItem-expandButton Button--plain">
                          展开阅读全文
                          <span style="display: inline-flex; align-items: center;">​
                          <svg-icon icon-class="arrow-down"></svg-icon>
                          </span>
                        </button>
                        <!-- 其他操作 -->
                        <div class="ContentItem-actions">
                          <button type="button" class="Button ContentItem-action Button--plain Button--withIcon Button--withLabel">
                            <span style="display: inline-flex; align-items: center;">​
                              <svg-icon icon-class="comment"></svg-icon>
                            </span>
                            评论
                          </button>
                          <button type="button" class="Button ContentItem-action Button--plain Button--withIcon Button--withLabel">
                            <span style="display: inline-flex; align-items: center;">
                              ​<svg-icon icon-class="collect"></svg-icon>
                            </span>
                            收藏
                          </button>
                          <button type="button" class="Button ContentItem-action Button--plain Button--withIcon Button--withLabel">
                            <span style="display: inline-flex; align-items: center;">
                              ​<svg-icon icon-class="like"></svg-icon>
                            </span>
                            喜欢
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      sortType: 1
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
.main {
  display: flex;
  justify-content: center;
  margin-top: 52px;
}
.QuestionPage {
  width: 100%;
  position: relative;
}
.QuestionHeader {
    width: 100%;
    position: relative;
    min-width: 1032px;
    padding: 16px 0;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
}
.QuestionHeader-content {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 1032px;
    height: 80px;
    padding: 0 16px;
    margin: 0 auto;
}
.QuestionHeader-main {
    width: 694px;
    padding-left: 20px;
    box-sizing: border-box;
}
.QuestionHeader-title {
    margin-top: 12px;
    margin-bottom: 4px;
    font-size: 22px;
    font-weight: 600;
    font-synthesis: style;
    line-height: 32px;
    color: #1a1a1a;
}
.QuestionHeader-detail {
    min-height: 10px;
}
.QuestionRichText--expandable.QuestionRichText--collapsed {
    max-height: 51px;
    overflow: hidden;
    cursor: pointer;
    -webkit-transition: color .14s ease-out;
    transition: color .14s ease-out;
    .RichText {
      pointer-events: none;
    }
}
.QuestionRichText {
    font-size: 15px;
    line-height: 25px;
}
.ztext {
    word-break: break-word;
    line-height: 1.6;
}

.QuestionHeader-side {
    width: 296px;
    padding-right: 20px;
    text-align: right;
}


.QuestionHeader-footer {
    padding-bottom: 12px;
    margin-top: 4px;
    margin-bottom: -12px;
    background: #fff;
}
.QuestionHeader-footer-inner, .QuestionHeader-footer-main {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.QuestionHeader-footer-inner {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 1032px;
    height: 100%;
    padding: 0 16px;
    margin: 0 auto;
}
.QuestionHeader-footer-main {
    margin-top: 4px;
    min-width: 694px;
    width: auto;
}
.QuestionHeader-main {
    width: 694px;
    padding-left: 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.QuestionButtonGroup {
    display: inline-block;
    margin: 0 -8px;
}
.FollowButton {
    min-width: 96px;
}
.QuestionButtonGroup .Button {
    margin: 0 8px;
}

.QuestionButtonGroup+.QuestionHeaderActions {
    margin-left: 16px;
}
.QuestionHeaderActions {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.NumberBoard {
  display: flex;
}
.QuestionFollowStatus-counts {
    width: 240px;
    margin-left: auto;
}
.NumberBoard-item {
    -webkit-box-flex: 1;
    -ms-flex: 1 1;
    flex: 1 1;
}
.NumberBoard--divider .NumberBoard-item+.NumberBoard-item .NumberBoard-itemInner {
    border-left: 1px solid #ebebeb;
}
.NumberBoard-itemInner {
    text-align: center;
    line-height: 1.6;
}
.QuestionFollowStatus-counts .NumberBoard-itemInner {
    padding: 0 8px;
}
.NumberBoard-itemName {
    font-size: 14px;
    color: #8590a6;
}
.NumberBoard-itemValue {
    display: inline-block;
    font-size: 18px;
    color: #1a1a1a;
    font-weight: 600;
}

// 回答列表
.Question-main {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: start;
    align-items: flex-start;
    margin: 10px auto;
    padding: 0 16px;
    width: 1032px;
    min-height: 100vh;
}
.Question-mainColumn {
    // width: 694px;
    width: 1032px;
    padding-bottom: 20px;
}
.QuestionAnswers-answers {
    margin-bottom: 10px;
}
.AnswersNavWrapper {
    overflow: visible;
    overflow: initial;
}
.el-card:last-child {
  margin-bottom: 0;
}
.List-header {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: flex-end;
    -webkit-box-align: center;
    align-items: center;
    height: 50px;
    margin: 0 20px;
    border-bottom: 1px solid #f6f6f6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.List-item {
    position: relative;
    padding: 16px 20px;
    border-bottom: 1px solid #f0f2f7;
}

.RichContent {
    line-height: 1.67;
}
.RichContent--unescapable.is-collapsed {
    position: relative;
    overflow: hidden;
}
.RichContent-inner {
    margin-top: 9px;
    margin-bottom: -4px;
    overflow: hidden;
}
.RichContent.is-collapsed .RichContent-inner {
    max-height: 100px;
}
.ContentItem-rightButton {
    margin-left: auto;
}
// .RichContent--unescapable.is-collapsed .ContentItem-rightButton {
//     position: absolute;
//     z-index: 1;
//     bottom: 75px;
//     left: 0;
//     width: 100%;
//     color: #175199;
//     font-size: 15px;
// }
.ContentItem-meta {
    font-size: 15px;
    color: #646464;
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
.ztext {
    word-break: break-word;
    line-height: 1.6;
}
</style>