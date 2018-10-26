<template>
  <div id="container">
    <header id="head_top">
      <i class="el-icon-arrow-left" @click="routerback"></i>
      <span class="login_span">订单详情</span>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    routerback: function() {
      this.$router.back(-1);
    }
  }
};
</script>

<style scoped>
#container {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(245, 245, 245);
}
#head_top {
  width: 100%;
  height: 0.6rem;
  position: fixed;
  top: 0;
  left: 0;
  background: blue;
  z-index: 100;
}
.el-icon-arrow-left {
  color: white;
  font-size: 0.35rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.login_span {
  color: white;
  font-size: 0.25rem;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>