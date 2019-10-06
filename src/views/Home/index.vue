<template>
  <div>
    <Header />
    <div class="mui-content-padded" style="margin: 5px;">
      <input type="Search" class="mui-input-clear" placeholder="请输入电影名称" />
    </div>
    <div>
      <button type="button" class="mui-btn mui-btn-primary mui-icon mui-icon-search search">搜索</button>
    </div>
    <br>
    <div>
      <el-carousel indicator-position="outside" :height="bannerHeight + 'px'">
        <el-carousel-item v-for="(img,index) in imgList" :key="index">
          <img v-bind:src="img.url">
        </el-carousel-item>
      </el-carousel>
    </div>
    <TabBar />
  </div>
</template>

<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";

export default {
  name: "Home",
  data() {
    return {
      imgList:[
        {url:require('@/assets/luoxiaohei.jpg')},
        {url:require('@/assets/china.jpg')},
        {url:require('@/assets/nezha.jpg')},
        {url:require('@/assets/plane.jpg')}
      ],
         // 图片父容器高度
            bannerHeight :1000,
            // 浏览器宽度
            screenWidth :0,
    };
  },
   methods:{
          setSize:function () {
            // 通过浏览器宽度(图片宽度)计算高度
            this.bannerHeight = 1800 / 1920 * this.screenWidth;
          },
        },
      mounted() {
          // 首次加载时,需要调用一次
          this.screenWidth =  window.innerWidth;
          this.setSize();
          // 窗口大小发生改变时,调用一次
          window.onresize = () =>{
          this.screenWidth =  window.innerWidth;
          this.setSize();
        }
      },
  components: {
    Header,
    TabBar
  }
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 400px;
  margin: 0 auto;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.mui-content-padded {
  width: 70%;
  float: left;
}
.mui-btn-primary {
  width: 25%;
  margin: 5px auto;
}
img{
  width: 100%;
  height: inherit;
}
</style>