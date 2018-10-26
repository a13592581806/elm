<template>

  <body>
    <div id="box">
      <header id="head_top">
        <i class="el-icon-search"></i>
        <router-link to="/login">
          <span class="login_span">
            登陆|注册
          </span>
        </router-link>
      </header>
      <div class="block">
        <!-- <span class="demonstration">Click 指示器触发</span> -->
        <el-carousel trigger="click" height="220px">
          <el-carousel-item v-for="item in 2" :key="item">
            <a class="link_to_food" href="###" v-for="(item,index) in data" :key="index">
              <figure>
                <img :src="'https://fuss10.elemecdn.com'+item.image_url" alt="">
                <h5 style="color:gray">{{item.title}}</h5>
              </figure>
            </a>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="shop">
        <div class="shop_header">
          <span class="shop_header_span" style="color:gray">附近商家</span>
        </div>
        <ul class="shop_ul" v-for="(item,index) in shopData" :key="index">
          <router-link :to="'/shop/'+item.id" style="color:black" >
          <li class="shop_li">
            <div class="section_left">
              <img class="section_left_img" :src="'http://elm.cangdu.org/img/'+item.image_path" alt="">
            </div>
            <div class="section_right">
              <header class="shop_detail_header">
                <span class="food_title">{{item.name}}</span>
                <ul class="support">
                  <li class="supports" v-for="(sup,index) in item.supports" :key="index">{{sup.icon_name}}</li>
                </ul>
              </header>
              <h5 class="rating_order_num">
                <el-rate v-model="item.rating" disabled show-score text-color="#ff9900" score-template="{value}">
                </el-rate>
                <section class="order_section">月售{{item.recent_order_num}}单</section>
                <section class="rating_order_num_right">
                  <span v-if="item.delivery_mode" class="delivery_style delivery_left">蜂鸟专送</span>
                  <span v-if="item.delivery_mode" class="delivery_style delivery_right">准时达</span>
                </section>
              </h5>
              <h5 class="fee_distance">
                <span class="fee">${{item.float_minimum_order_amount}}起送/配送费约￥{{item.float_delivery_fee}}</span>
                <span class="distance_time">
                  <span>{{item.distance}}/</span><span style="color:rgb(0,199,243)">{{item.order_lead_time}}</span>
                </span>
              </h5>
            </div>
          </li>
          </router-link>
        </ul>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      shopData: []
    };
  },
  created() {
    let api1 = "https://elm.cangdu.org/v2/index_entry";
    let api2 =
      "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762";
    this.$http.get(api1).then(data => {
      this.data = data.data;
    });
    this.$http.get(api2).then(data => {
      console.log("成功了......");
      //展示所有商品名
      console.log(data.data);
      this.shopData = data.data;
    });
  }
};
</script>

<style scoped>
body {
  background-color: rgb(240, 240, 240);
}
#box {
  width: 100%;
  height: 100%;
  margin-top: 12%;
}
#head_top {
  width: 100%;
  height: 7%;
  position: fixed;
  top: 0;
  left: 0;
  background: blue;
  z-index: 100;
}
.el-icon-search {
  font-size: 0.3rem;
  position: absolute;
  top: 50%;
  left: 4%;
  transform: translateY(-50%);
  color: white;
}
.login_span {
  color: white;
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 4%;
  transform: translateY(-50%);
}
.block {
  background-color: white;
}
.el-carousel__item:nth-child(2n) {
}

.el-carousel__item:nth-child(2n + 1) {
}
.link_to_food {
  width: 25%;
  height: 50%;
  display: inline-block;
  text-align: center;
}
.link_to_food img {
  width: 47%;
  margin: 0.1rem 0;
}
.shop {
  width: 100%;
  margin-top: 0.2rem;
  background-color: white;
  margin-bottom: 0.57rem;
}
.shop_header_span {
  display: inline-block;
  padding: 0.1rem;
}
.shop_li {
  width: 94%;
  height: 0.9rem;
  padding: 3%;
  /* border: 1px solid red */
}
.section_left {
  width: 20%;
  height: 0.9rem;
  float: left;
  /* background: gray; */
}
.section_left_img {
  width: 90%;
}
.section_right {
  width: 80%;
  height: 0.9rem;
  float: right;
  overflow: hidden;
}
.shop_detail_header {
  width: 100%;
  height: 0.25rem;
  /* background-color: orange; */
}
.food_title {
  width: 70%;
  height: 0.25rem;
  font-size: 0.19rem;
  line-height: 0.25rem;
  font-weight: bolder;
  display: inline-block;
}
.food_title::before {
  content: "品牌";
  background-color: rgb(255, 227, 48);
  margin-right: 0.06rem;
  font-size: 0.15rem;
  border-radius: 0.03rem;
  font-weight: bolder;
}
.support {
  /* width: 20%; */
  height: 0.2rem;
  float: right;
  margin-top: 0.05rem;
}
.supports {
  margin-left: 0.03rem;
  font-size: 0.1rem;
  background-color: rgb(241, 241, 241);
  color: gray;
  float: left;
}
.rating_order_num {
  width: 100%;
  height: 0.2rem;
  margin-top: 0.1rem;
  position: relative;
}

.order_section {
  font-size: 0.1rem;
  position: absolute;
  top: 0.03rem;
  left: 0.8rem;
  color: gray;
}
.rating_order_num_right{
  /* width: 1.2rem; */
  height: 0.2rem;
  
  position: absolute;
  top: 0rem;
  right: 0rem;
}
.delivery_left{
float: left;
background: #57A9FF;
border: 0.01rem solid #57A9FF;
border-radius: 0.02rem;
color: white;
margin-right: 0.03rem;
}
.delivery_right{
border: 0.01rem solid #57A9FF;
border-radius: 0.02rem;
color: #57A9FF;
float: right;
}
.fee_distance {
  width: 100%;
  height: 0.25rem;
  margin-top: 0.1rem;
}
.fee {
}
.distance_time {
  display: inline-block;
  float: right;
}
</style>
<style>
.el-rate__item {
  width: 0.113rem;
}
.el-rate__icon {
  font-size: 0.13rem;
}
.el-rate__text {
  font-size: 0.13rem;
}
</style>
