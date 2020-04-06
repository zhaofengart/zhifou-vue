<template>
  <div>
    <el-card>
      <div slot="header" class="Leaderboard-header">
        <span>本月排行榜</span>
      </div>
      <div class="LeaderboardItem" v-for="i in (1,5)" :key="i">
        <div class="Ranking-item HotItem-rank HotItem-hot">{{i}}</div>
        <div class="Ranking-item">用户名{{i}}</div>
        <div class="Ranking-item">{{10 * (10 - i)}}<i class="el-icon-coin" style="margin-left: 5px; font-size: 24px;"></i></div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  
}
</script>
<style rel="stylesheet/scss" lang="scss">
// 排行榜
.Leaderboard-header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 18px;
}

.LeaderboardItem {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
  border-bottom: 1px solid #e6ebf5;
}

.Ranking-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 50px;
}

.HotItem-hot {
    color: #ff9607;
}
.HotItem-rank {
    line-height: 1.6;
    font-size: 18px;
    // color: #999;
    font-weight: 600;
    font-synthesis: style;
}
</style>