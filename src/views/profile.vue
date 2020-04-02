<template>
  <div>
    <IndexHeader></IndexHeader>
    <!-- 个人资料 -->
    <div class="ProfileHeader">
      <el-card class="card">
        <div class="\">
          <div class="UserCoverEditor">
            <img style="width: 100%; height: 120px;" src="https://static.zhihu.com/heifetz/assets/guide-cover-1.4423ce0f.jpg">
          </div>
        </div>

        <!-- 个人资料 -->
        <div class="ProfileHeader-wrapper">
          <div class="ProfileHeader-main">
            <div class="ProfileHeader-content">
              <h2 class="ProfileHeader-contentItem">赵峰</h2>
              <div class="ProfileHeader-contentItem">
                <i class="el-icon-s-management job"></i>
                <label for="">Java开发</label>
              </div>
              <div class="ProfileHeader-contentItem">
                <i class="el-icon-s-management  department" ></i>
                <label for="">ATP</label>
              </div>
            </div>
          </div>
        </div>
      </el-card>
    </div>

    <div class="Profile-main">
      <el-card class="ProfileMain">
        <div class="ProfileMain-header">
          <el-tabs>
            <el-tab-pane label="我的提问" class="tab-pane">
              <div class="List-item" v-for="i in (1,6)" :key="i">
                <h2 class="ContentItem-title">
                  <div class="QuestionItem-title">
                    <a href="">如何看待抖音直播</a>
                  </div>
                </h2>
                <div class="ContentItem-status">
                  <span class="ContentItem-statusItem">2020-03-31</span>
                  <span class="ContentItem-statusItem">0 个回答</span>
                  <span class="ContentItem-statusItem">1 个关注</span>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="我的回答">
              <div class="List-item" v-for="i in (1,6)" :key="i">
                <h2 class="ContentItem-title">
                  <div class="QuestionItem-title">
                    <a href="">如何看待抖音直播</a>
                  </div>
                </h2>
                <div class="ContentItem-meta">
                  <div class="AuthorInfo AnswerItem-authorInfo">
                    <span class="UserLink AuthorInfo-avatarWrapper"><div class="Popover"><div id="Popover80-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover80-content"><a class="UserLink-link" data-za-detail-view-element_name="User" target="_blank" href="//www.zhihu.com/people/zhao-feng-85-9"><img class="Avatar AuthorInfo-avatar" width="38" height="38" src="https://pic4.zhimg.com/da8e974dc_xs.jpg" srcset="https://pic4.zhimg.com/da8e974dc_l.jpg 2x" alt="赵峰"></a></div></div></span>
                    <div class="AuthorInfo-content">
                      <!-- 用户信息头 -->
                      <div class="AuthorInfo-head">
                        <span class="UserLink AuthorInfo-name">
                          <div class="Popover">
                            <div id="Popover81-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover81-content">
                              <a class="UserLink-link" data-za-detail-view-element_name="User" target="_blank" href="//www.zhihu.com/people/zhao-feng-85-9">赵峰</a>
                            </div>
                          </div>
                        </span>
                      </div>
                      <!-- 用户身份 -->
                      <div class="AuthorInfo-detail">
                        <div class="AuthorInfo-badge">
                          <div class="ztext AuthorInfo-badgeText">大学生</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="RichContent">
                  <div class="RichContent-inner">
                    <span class="RichText ztext CopyrightRichText-richText" itemprop="text">测试回答内容</span>
                    <el-button plain class="Button ContentItem-more Button--plain" style="font-size: 14px;">阅读全文
                      <span style="display: inline-flex; align-items: center;">
                        ​<svg class="Zi Zi--ArrowDown ContentItem-arrowIcon" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                          <path d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z" fill-rule="evenodd">
                          </path>
                        </svg>
                      </span>
                    </el-button>
                  </div>
                  <div class="ContentItem-actions">
                    <button type="button" class="Button ContentItem-action Button--plain Button--withIcon Button--withLabel"><span style="display: inline-flex; align-items: center;">​
                      <svg class="Zi Zi--Comment Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z" fill-rule="evenodd">
                        </path>
                        </svg>
                        </span>
                        添加评论
                    </button>
                    <button type="button" class="Button ContentItem-action Button--plain Button--withIcon Button--withLabel">
                      <span style="display: inline-flex; align-items: center;">
                        ​<svg class="Zi Zi--Star Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                          <path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z" fill-rule="evenodd"></path>
                        </svg>
                      </span>
                      收藏
                    </button>
                    <div class="Popover ContentItem-action"><button type="button" id="Popover73-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover73-content" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display: inline-flex; align-items: center;">​<svg class="Zi Zi--Settings Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M20.868 17.185a.896.896 0 0 1-.452.137c-.123 0-1.397-.26-1.617-.233-1.354.014-1.78 1.276-1.835 1.742-.055.453 0 .892.191 1.303a.8.8 0 0 1-.068.851C16.224 21.877 14.922 22 14.73 22a.548.548 0 0 1-.356-.151c-.11-.096-.685-1.138-1.069-1.468-1.304-.955-2.247-.329-2.63 0-.398.33-.672.7-.836 1.125a.632.632 0 0 1-.329.37c-1.354.426-2.918-.919-3.014-1.056a.564.564 0 0 1-.123-.356c-.014-.138.383-1.276.342-1.688-.342-1.9-1.836-1.687-2.096-1.673a3.192 3.192 0 0 0-.918.178.873.873 0 0 1-.59-.055c-.887-.462-1.136-2.332-1.109-2.51.055-.315.192-.521.438-.604.425-.164.809-.452 1.151-.85.931-1.262.343-2.25 0-2.634-.342-.356-.726-.645-1.15-.809-.138-.041-.234-.151-.33-.316-.38-1.434.613-2.552.867-2.77.255-.22.6-.055.723 0 .425.164.877.219 1.343.15C6.7 6.636 6.784 5.141 6.81 4.908c.014-.247-.11-1.29-.137-1.4a.488.488 0 0 1 .027-.315C7.317 2.178 9.071 2 9.222 2a.56.56 0 0 1 .439.178c.11.124.63 1.111 1 1.4.4.338 1.583.83 2.59.013.397-.274.959-1.29 1.082-1.413A.55.55 0 0 1 14.717 2c1.56 0 2.329 1.029 2.438 1.22a.458.458 0 0 1 .069.371c-.028.151-.329 1.152-.26 1.605.365 1.537 1.383 1.742 1.89 1.783.493.028 1.644-.356 1.809-.343a.63.63 0 0 1 .424.206c.535.31.85 1.715.905 2.14.027.233-.014.439-.11.562-.11.138-1.165.714-1.48 1.112-.855.982-.342 2.25-.068 2.606.26.37 1.22.905 1.288.96.15.137.26.302.315.494.146 1.413-.89 2.387-1.069 2.47zm-8.905-.535c.644 0 1.246-.123 1.822-.356a4.576 4.576 0 0 0 1.493-1.016 4.694 4.694 0 0 0 1-1.495c.247-.562.357-1.18.357-1.81 0-.659-.11-1.262-.356-1.825a4.79 4.79 0 0 0-1-1.481 4.542 4.542 0 0 0-1.494-1.002 4.796 4.796 0 0 0-3.631 0 4.627 4.627 0 0 0-1.48 1.002c-.424.425-.767.919-1 1.481a4.479 4.479 0 0 0-.37 1.825c0 .644.124 1.248.37 1.81a4.62 4.62 0 0 0 1 1.495c.425.426.918.768 1.48 1.016a4.677 4.677 0 0 0 1.809.356z" fill-rule="evenodd"></path></svg></span>设置</button></div>  
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <!-- 文章列表与回答类似 -->
            <el-tab-pane label="我的文章"></el-tab-pane>
            <el-tab-pane label="我关注的人"></el-tab-pane>
            <!-- 与提问类似 -->
            <el-tab-pane label="我关注的问题"></el-tab-pane>
            <!-- 与提问类似 -->
            <el-tab-pane label="我的收藏"></el-tab-pane>
          </el-tabs>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style rel="stylesheet/scss" lang="scss">
.ProfileHeader {
  position: relative;
  width: 1000px;
  padding: 0 16px;
  margin: 62px auto 10px auto;
}
.card {
  display: block;
  width: 100%;
  height: 248px;
}
.UserCoverEditor {
  width: 100%;
  height: 50%;
}
.UploadPicture-wrapper {
  width: 100%;
  cursor: pointer;
}
.UserCoverGuide {
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-top-right-radius: 1px;
  border-top-left-radius: 1px;
}
.UserCoverGuide-inner {
  position: relative;
  z-index: 2;
  float: right;
  padding: 24px;
}
.UserCoverGuide-buttonContainer {
  margin-bottom: 14px;
  text-align: right;
}

.ProfileHeader-wrapper {
  position: relative;
  width: 100%;
  background: #fff;
  box-sizing: border-box;
}
.ProfileHeader-main {
  position: relative;
  margin: 0 20px 24px;
}
.ProfileHeader-content {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  padding: 10px 0 0 230px;
}

.ProfileHeader-contentItem {
  width: 100%;
  margin: 5px 0;
}

.job {
  font-size: 23px;
}
.department {
  font-size: 23px;
}

.Profile-main {
  display: flex;
  width: 1000px;
  min-height: 100vh;
  padding: 0 16px;
  margin: 10px auto;
  justify-content: space-between;
  align-items: flex-start;
}
.ProfileMain {
  width: 100%;
  overflow: initial;
}
.ProfileMain .el-card {
  box-shadow: none;
}

.ProfileMain-header {
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
.ContentItem-status {
  margin-top: 5px;
  color: #8590a6;
  font-size: 14px;
}


.ContentItem-meta {
    font-size: 15px;
    color: #646464;
}
.AnswerItem-authorInfo {
    margin-top: 10px;
}
.AuthorInfo {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.AuthorInfo-content {
    -webkit-box-flex: 1;
    -ms-flex: 1 1;
    flex: 1 1;
    margin-left: 14px;
    overflow: hidden;
}
.RichContent {
    line-height: 1.67;
}
.RichContent-inner {
    margin-top: 9px;
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
.ContentItem-action {
    margin-left: 24px;
    font-size: 14px;
}
.ContentItem-more {
    padding: 0;
    margin-left: 4px;
    color: #175199;
}
</style>
