<template>
  <div>
    <Header />
    <div class="menu">
      <router-link class="menu" tab="div" to="/movie/hot">热门</router-link>
      <router-link class="menu" tab="div" to="/movie/comic">动漫</router-link>
      <router-link class="menu" tab="div" to="/movie/science">科幻</router-link>
      <router-link class="menu" tab="div" to="/movie/funny">搞笑</router-link>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
    <TabBar />
  </div>
</template>

<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";

export default {
  name: "Movie",
  components: {
    Header,
    TabBar
  }
};
</script>

<style scoped>
.menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content:center;
  margin: 1 auto;
  line-height: 45px;
}
.router-link-active{
  color: #fe4638 ;
}
</style>