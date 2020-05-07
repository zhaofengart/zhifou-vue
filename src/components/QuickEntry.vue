<template>
  <div>
    <el-card>
      <div class="QuickEntry-card">
        <div class="GlobalWrite">
          <router-link to="/questionpublish" title="提问" class="GlobalWrite-navItem">
            <svg-icon icon-class="question" class="GlobalWrite-navIcon"></svg-icon> 
            <div class="GlobalWrite-navTitle">提问</div>
          </router-link>
          <router-link to="/writeclass" title="文章" class="GlobalWrite-navItem">
            <svg-icon icon-class="write" class="GlobalWrite-navIcon"></svg-icon> 
            <div class="GlobalWrite-navTitle">写文章</div>
          </router-link>
          <router-link to="" title="草稿箱" class="GlobalWrite-navItem">
            <svg-icon icon-class="draft" class="GlobalWrite-navIcon"></svg-icon> 
            <div class="GlobalWrite-navTitle">草稿箱</div>
          </router-link>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.QuickEntry-card {
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
  margin-bottom: 10px;
}
.GlobalWrite-navTitle {
  color: #444;
  font-size: 16px;
}
</style>