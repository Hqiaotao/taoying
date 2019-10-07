<template>
  <footer id="footer">
    <ul class="mui-bar mui-bar-tab">
      <router-link tag="li" class="mui-tab-item mui-active" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link tag="li" class="mui-tab-item mui-active" to="/movie/hot">
        <span class="mui-icon mui-icon-extra-classroom"></span>
        <span class="mui-tab-label">电影</span>
      </router-link>
      <router-link tag="li" class="mui-tab-item mui-active" to="/mine">
        <span class="mui-icon mui-icon-person"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style scoped>
#footer {
  width: 100px;
  height: 50px;
  background: white;
  border-top: 2px aqua solid;
  position: fixed;
  left: 0;
  bottom: 0;
}
#footer ul {
  display: flex;
  text-align: center;
  height: 50px;
  align-items: center;
}
#footer ul li {
  flex: 1;
  height: 40px;
  display: block;
}
#footer ul li.active {
  color: #f03d37;
}
#footer ul li.router-link-active {
  color: #f03d37;
}
</style>