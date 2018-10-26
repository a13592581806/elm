<template>
    <body>
        <div id="container">
            <div class="description" :style="'background-image:url(http://elm.cangdu.org/img/'+data.image_path+')'">
                <nav class="goback" @click="goback"><i class="el-icon-arrow-left" style="color:white;font-size:0.3rem"></i></nav>
                <section class="description_header">
                    <router-link to="/" class="description_top">
                        <section class="description_left">
                            <img :src="'http://elm.cangdu.org/img/'+data.image_path" alt="">
                        </section>
                        <section class="description_right">
                            <p class="description_name">{{data.name}}</p>
                            <p class="description_text">商家配送/分钟必达/配送费￥5</p>
                            <p class="description_promotion">公告:{{data.promotion_info}}</p>
                        </section>
                    </router-link>
                    <footer class="description_footer" v-if="activities">
                        <span class="tip_icon" :style="'background-color:#'+activities.icon_color">{{activities.icon_name}}</span>
                        <span style="color:white">{{activities.description}}(APP专属)</span>
                        <span style="color:white;float:right;">一个活动 ></span>
                    </footer>
                </section>
            </div>
            <div class="change_show_type">
                <div><span :class="{'activity_show':isclass}" @click="toggle($event)">商品</span></div>
                <div><span :class="{'activity_show':!isclass}" @click="toggle($event)">评价</span></div>
            </div>
            <div class="menu">
                 <div class="menu_left">
                     <ul v-for="(item,index) in menu" :key="index">
                         <li class="menu_left_li">
                             <span>{{item.name}}</span>
                         </li>
                     </ul>
                 </div>
                 <div class="menu_right" v-for="(item,index) in menu" :key="index">
                     <header class="menu_detail_header">
                         <strong style="font-size:0.24rem;font-weight:bloder">{{item.name}}</strong>
                         <span style="color:gray">{{item.description}}</span>
                     </header>
                     <ul >
                         <li class="menu_detail_list">释放十分</li>
                     </ul>
                 </div>
            </div>
        </div>
    </body>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      activities: [],
      menu:[],
      isclass:true,
    };
  },
  created() {
    let api =
      "https://elm.cangdu.org/shopping/restaurant/" + this.$route.params.id;
    this.$http.get(api).then(data => {
      this.data = data.data;
      this.activities = data.data.activities[0];
    });
    let api1 = "https://elm.cangdu.org/shopping/v2/menu?restaurant_id=" + this.$route.params.id;
    this.$http.get(api1).then(data => {
      this.menu = data.data;
      console.log(this.menu);
    });
  },
  methods: {
    goback() {
      this.$router.back(-1);
    },
    toggle(e){
        if(e.target.className=="activity_show"){
            this.isclass = this.isclass;
        }else{
            this.isclass = !this.isclass;
        }
    }
  }
};
</script>

<style scoped>
body{
    background-color: gray;
}
.description {
  background-size: 100%;
}
.goback {
  width: 100%;
  height: 0.5rem;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
}
.description_header {
  width: 98%;
  /* height: 0.9rem; */
  padding: 0.11rem 0 0.11rem 0.11rem;
  background-color: rgba(119, 103, 137, 0.53);
}
.description_top {
  display: flex;
}
.description_left {
  width: 0.9rem;
  height: 0.9rem;
  margin-right: 0.05rem;
}
.description_left > img {
  width: 0.85rem;
  height: 0.85rem;
  display: block;
  border-radius: 0.1rem;
}
.description_name {
  font-size: 0.23rem;
  margin-bottom: 0.15rem;
  color: white;
  font-weight: bolder;
}
.description_text {
  font-size: 0.15rem;
  margin-bottom: 0.15rem;
  color: white;
}
.description_promotion {
  font-size: 0.15rem;
  /* margin-bottom: 0.2rem; */
  color: white;
}
.description_footer {
  margin-top: 0.12rem;
}
.tip_icon {
  width: 0.2rem;
  height: 0.2rem;
  display: inline-block;
  border-radius: 0.05rem;
  color: white;
  line-height: 0.2rem;
  text-align: center;
  font-size: 0.1rem;
}
.change_show_type {
  width: 100%;
  height: 0.41rem;
  padding: 0.1rem 0 0.2rem 0;
  display: flex;
  background-color: white;
}
.change_show_type > div {
  width: 50%;
  height: 0.41rem;
  text-align: center;
  line-height: 0.41rem;
}
.change_show_type span {
  margin-top: 0.1rem;
  display: inline-block;
}
.activity_show{
    color: #3190e8;
    border-bottom: 0.05rem solid #3190e8;
}
.menu{
    width: 100%;
}
.menu_left{
    width: 25%;
    float: left;
}
.menu_right{
    width: 75%;
    float: right;
}
.menu_left_li{
    position: relative;
    width: 80%;
    height: 0.38rem;
    padding: 0.2rem 0.1rem;
    border-left: 0.05rem solid #3190e8;
    background-color: pink;
}
.menu_left_li>span{
    width: 70%;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.menu_detail_header{
    width: 96%;
    height: 0.4rem;
    padding: 0.1rem 2%; 
    line-height: 0.4rem;
}
</style>

