<template>
  <div>
     <router-view></router-view>
     

     <div class="section">
     <router-link class="section-a" to="/home/msite">
     <img class="sectionImg1" :src="img.elm" alt="">
     <img class="sectionImg2" :src="img.elm1" alt="">
     <span>外卖</span>
     </router-link>
     <router-link class="section-a" to="/home/search">
     <img class="sectionImg1" :src="img.search" alt="">
     <img class="sectionImg2" :src="img.search1" alt="">
     <span>搜索</span>
     </router-link>
     <router-link class="section-a" to="/home/order">
     <img class="sectionImg1" :src="img.order" alt="">
     <img class="sectionImg2" :src="img.order1" alt="">
     <span>订单</span>
     </router-link>
     <router-link class="section-a" to="/home/mine">
     <img class="sectionImg1" :src="img.mine" alt="">
     <img class="sectionImg2" :src="img.mine1" alt="">
     <span>我的</span>
     </router-link>
     </div>
  </div>
</template>

<script>
let elm = require('./imgs/饿了么.png');
let search = require('./imgs/指南针.png');
let order = require('./imgs/订单.png');
let mine = require('./imgs/我的.png');
let elm1 = require('./imgs/饿了么1.png');
let search1 = require('./imgs/指南针1.png');
let order1 = require('./imgs/订单1.png');
let mine1 = require('./imgs/我的1.png');
    export default{
       name:"Home",
       data(){
           return{
               img:{
                   elm:elm,search:search,order:order,mine:mine,elm1:elm1,
                   search1:search1,order1:order1,mine1:mine1
               }
           }
       }
    }
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
}
.section{
    width: 100%;
    height: 0.57rem;
    background: white;
    position: fixed;
    bottom: 0;
    left: 0;
}
.sectionImg2,.sectionImg1{
    width: 0.25rem;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.sectionImg2{
    display: none;
}
.section-a{
     width: 24%;
    height: 0.57rem;
    text-align: center;
    display: inline-block;
    position:relative;
}
.section-a>span{
    display: block;
    color: gray;
    font-size: 0.1rem;
    margin-top: 0.35rem;
}
</style>

